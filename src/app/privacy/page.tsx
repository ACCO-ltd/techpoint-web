import type { Metadata } from "next";
import { PageHero } from "@/components/sections";
import { company } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description: "How Techpoint Solutions handles the information you share through this website.",
  alternates: { canonical: "/privacy" },
};

// CONFIRM: have this notice reviewed against applicable law before launch.
const sections = [
  {
    h: "What we collect",
    p: "When you submit a project enquiry, we collect the details you provide: your name, work email, organization, role, a description of your project and, optionally, your timeline and budget range. We also record basic technical information such as your IP address and browser type to protect the form against abuse.",
  },
  {
    h: "How we use it",
    p: "We use enquiry information only to respond to you, assess whether we can help, and arrange follow-up conversations. We do not sell your information or use it for unrelated marketing.",
  },
  {
    h: "Who can access it",
    p: "Enquiries are delivered to the Techpoint team responsible for responding. We use trusted service providers (for example, email delivery and hosting) that process data on our behalf under appropriate safeguards.",
  },
  {
    h: "How long we keep it",
    p: "We keep enquiry information for as long as needed to respond and to maintain a record of business correspondence, after which it is deleted or anonymized.",
  },
  {
    h: "Your choices",
    p: `You can ask us to access, correct or delete the information you've shared by writing to ${company.email}.`,
  },
  {
    h: "Analytics",
    p: "If we use website analytics, we prefer privacy-conscious tools that measure aggregate usage without building personal advertising profiles.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Privacy" title="Privacy notice" intro="How we handle the information you share through this website." />
      <section className="bg-surface py-20 sm:py-28">
        <div className="container-x max-w-3xl space-y-12">
          {sections.map((s) => (
            <div key={s.h}>
              <h2 className="text-2xl font-semibold tracking-tight">{s.h}</h2>
              <p className="mt-3 text-[18px] leading-relaxed text-ink-muted">{s.p}</p>
            </div>
          ))}
          <p className="border-t border-line pt-8 text-[15px] text-ink-muted">
            Questions about this notice? Contact{" "}
            <a href={`mailto:${company.email}`} className="font-medium text-brand">
              {company.email}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
