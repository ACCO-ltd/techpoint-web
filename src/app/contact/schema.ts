import { z } from "zod";
import { budgets, enquiryTypes, products, timelines } from "@/content/site";

const topicValues = enquiryTypes.map((t) => t.value) as [string, ...string[]];
const productValues = products.map((p) => p.slug) as [string, ...string[]];

const optionalChoice = <T extends readonly [string, ...string[]]>(values: T) =>
  z.union([z.enum(values), z.literal("")]).optional().transform((v) => v || undefined);

export const enquirySchema = z
  .object({
    topic: z.enum(topicValues, { error: "Select the type of project." }),
    product: optionalChoice(productValues),
    description: z
      .string()
      .trim()
      .min(20, "Please describe the project in at least 20 characters.")
      .max(4000, "Please keep the description under 4,000 characters."),
    timeline: optionalChoice(timelines),
    budget: optionalChoice(budgets),
    name: z.string().trim().min(2, "Enter your name.").max(120),
    email: z.email("Enter a valid work email.").max(200),
    organization: z.string().trim().min(2, "Enter your organization.").max(160),
    role: z.string().trim().max(120).optional(),
    consent: z.literal("on", { error: "Please accept the privacy notice to continue." }),
  })
  .refine((d) => d.topic !== "product" || !!d.product, {
    path: ["product"],
    error: "Select the product you're interested in.",
  });

export type Enquiry = z.infer<typeof enquirySchema>;
export type EnquiryField = keyof z.input<typeof enquirySchema>;

export type EnquiryState =
  | { status: "idle" }
  | { status: "error"; message: string; errors?: Partial<Record<EnquiryField, string>> }
  | { status: "success"; reference: string; name: string };

export const stepFields: EnquiryField[][] = [
  ["topic", "product"],
  ["description", "timeline", "budget"],
  ["name", "email", "organization", "role"],
  ["consent"],
];
