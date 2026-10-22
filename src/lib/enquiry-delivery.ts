import "server-only";
import type { Enquiry } from "@/app/contact/schema";
import { enquiryTypes, products } from "@/content/site";

/**
 * Delivers a validated enquiry to the Techpoint team.
 *
 * Configure in the environment:
 *   RESEND_API_KEY       API key for https://resend.com (or swap this function for your CRM)
 *   ENQUIRY_TO_EMAIL     Comma-separated inbox(es) that receive enquiries
 *   ENQUIRY_FROM_EMAIL   Verified sender, e.g. "Techpoint Website <website@techpoint.so>"
 *
 * Without configuration, enquiries are logged in development and rejected in
 * production, so leads are never silently dropped.
 */
export async function deliverEnquiry(
  enquiry: Enquiry,
  reference: string,
  meta: { ip: string; userAgent: string },
): Promise<boolean> {
  const topic = enquiryTypes.find((t) => t.value === enquiry.topic)?.label ?? enquiry.topic;
  const product = enquiry.product ? products.find((p) => p.slug === enquiry.product)?.name : undefined;

  const text = [
    `New project enquiry ${reference}`,
    "",
    `Type:          ${topic}${product ? ` — ${product}` : ""}`,
    `Name:          ${enquiry.name}`,
    `Email:         ${enquiry.email}`,
    `Organization:  ${enquiry.organization}`,
    `Role:          ${enquiry.role || "—"}`,
    `Timeline:      ${enquiry.timeline ?? "—"}`,
    `Budget:        ${enquiry.budget ?? "—"}`,
    "",
    "Description:",
    enquiry.description,
    "",
    "---",
    `Submitted: ${new Date().toISOString()}`,
    `IP: ${meta.ip}`,
    `User agent: ${meta.userAgent}`,
  ].join("\n");

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.ENQUIRY_TO_EMAIL;

  if (!apiKey || !to) {
    if (process.env.NODE_ENV !== "production") {
      console.info(`[enquiry] Delivery not configured; logging instead.\n${text}`);
      return true;
    }
    console.error("[enquiry] RESEND_API_KEY / ENQUIRY_TO_EMAIL are not set; enquiry rejected.");
    return false;
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.ENQUIRY_FROM_EMAIL ?? "Techpoint Website <website@techpoint.so>",
        to: to.split(",").map((s) => s.trim()),
        reply_to: enquiry.email,
        subject: `[${reference}] ${topic} — ${enquiry.organization}`,
        text,
      }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) {
      console.error(`[enquiry] Delivery failed: ${res.status} ${await res.text()}`);
      return false;
    }
    return true;
  } catch (err) {
    console.error("[enquiry] Delivery error", err);
    return false;
  }
}
