"use server";

import { headers } from "next/headers";
import { deliverEnquiry } from "@/lib/enquiry-delivery";
import { enquirySchema, type EnquiryField, type EnquiryState } from "./schema";

const MIN_FILL_MS = 3_000;
const WINDOW_MS = 10 * 60_000;
const MAX_PER_WINDOW = 5;

// Best-effort, per-instance limiter. Put a shared store (or the host's WAF)
// in front of this if the site runs on multiple instances.
const recent = new Map<string, number[]>();

function rateLimited(key: string, now: number) {
  const hits = (recent.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  hits.push(now);
  recent.set(key, hits);
  return hits.length > MAX_PER_WINDOW;
}

export async function submitEnquiry(_prev: EnquiryState, formData: FormData): Promise<EnquiryState> {
  const now = Date.now();

  // Spam traps: a hidden field humans never fill, and a minimum fill time.
  const honeypot = formData.get("website");
  const startedAt = Number(formData.get("startedAt"));
  if ((typeof honeypot === "string" && honeypot.length > 0) || !startedAt || now - startedAt < MIN_FILL_MS) {
    // Respond as if successful so bots get no signal.
    return { status: "success", reference: "TP-RECEIVED", name: "" };
  }

  const h = await headers();
  const ip = h.get("x-forwarded-for")?.split(",")[0]?.trim() || h.get("x-real-ip") || "unknown";
  if (rateLimited(ip, now)) {
    return { status: "error", message: "Too many enquiries from this connection. Please try again later or email us directly." };
  }

  const raw = Object.fromEntries(
    ["topic", "product", "description", "timeline", "budget", "name", "email", "organization", "role", "consent"].map((k) => [
      k,
      formData.get(k) ?? undefined,
    ]),
  );
  const parsed = enquirySchema.safeParse(raw);
  if (!parsed.success) {
    const errors: Partial<Record<EnquiryField, string>> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as EnquiryField;
      errors[key] ??= issue.message;
    }
    return { status: "error", message: "Please review the highlighted fields.", errors };
  }

  const reference = `TP-${crypto.randomUUID().slice(0, 8).toUpperCase()}`;
  const delivered = await deliverEnquiry(parsed.data, reference, { ip, userAgent: h.get("user-agent") ?? "" });
  if (!delivered) {
    return {
      status: "error",
      message: "We couldn't send your enquiry just now. Please try again in a moment, or email info@techpoint.so.",
    };
  }

  return { status: "success", reference, name: parsed.data.name.split(" ")[0] };
}
