import type { Metadata } from "next";
import { Suspense } from "react";
import { Icon } from "@/components/Icon";
import { Accent, Eyebrow } from "@/components/ui";
import { company } from "@/content/site";
import { EnquiryForm } from "./EnquiryForm";

export const metadata: Metadata = {
  title: "Discuss a project",
  description: "Tell Techpoint Solutions about your project or business challenge. We'll start with your requirements, constraints and the outcome you need.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="relative overflow-x-clip bg-surface">
      <div className="absolute inset-x-0 top-0 h-[26rem] bg-night lg:hidden" aria-hidden="true" />
      <div className="container-x relative grid gap-12 pt-32 pb-20 lg:grid-cols-12 lg:gap-16 lg:pt-0 lg:pb-0">
        {/* Context panel */}
        <aside className="relative isolate text-on-dark lg:col-span-5 lg:-ml-[50vw] lg:bg-night lg:pt-40 lg:pr-14 lg:pb-24 lg:pl-[50vw]">
          <div className="grid-lines absolute inset-0 -z-10 hidden opacity-70 lg:block" aria-hidden="true" />
          <div className="lg:sticky lg:top-32">
            <Eyebrow tone="light">Discuss a project</Eyebrow>
            <h1 className="mt-5 text-balance text-[40px] leading-[1.08] tracking-[-0.025em] sm:text-[48px] lg:text-[56px]">
              Let&apos;s solve the <Accent>right</Accent> problem.
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-on-dark-muted">
              Tell us what your organization is trying to improve. We&apos;ll start with the requirements, the constraints and the outcome
              you need.
            </p>

            <div className="mt-12 hidden space-y-6 border-t border-white/10 pt-10 lg:block">
              <p className="text-[13px] font-semibold text-on-dark-muted">What happens next</p>
              {[
                ["Review", `We read every enquiry and respond within ${company.responseTime}.`],
                ["Discovery", "A focused conversation about your objectives, users and constraints."],
                ["Proposal", "A clear recommendation for the right first step — or an honest referral."],
              ].map(([t, d], i) => (
                <div key={t} className="flex gap-4">
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-white/8 text-[13px] font-semibold tabular-nums text-brand-light ring-1 ring-white/15">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold tracking-tight">{t}</p>
                    <p className="mt-0.5 text-[15px] leading-relaxed text-on-dark-muted">{d}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 hidden space-y-3 lg:block">
              <a href={`mailto:${company.email}`} className="flex items-center gap-3 text-[15px] text-on-dark/80 hover:text-on-dark">
                <Icon name="mail" className="size-4 text-brand-light" />
                {company.email}
              </a>
              <p className="flex items-center gap-3 text-[15px] text-on-dark/80">
                <Icon name="pin" className="size-4 text-brand-light" />
                {company.location} · Serving East Africa
              </p>
            </div>
          </div>
        </aside>

        {/* Form */}
        <div className="rounded-4xl bg-surface p-6 shadow-[0_40px_80px_-40px_rgba(11,18,32,0.4)] ring-1 ring-line sm:p-10 lg:col-span-7 lg:my-40 lg:rounded-none lg:bg-transparent lg:p-0 lg:shadow-none lg:ring-0">
          <Suspense fallback={<div className="h-[560px] animate-pulse rounded-2xl bg-surface-raised" />}>
            <EnquiryForm />
          </Suspense>
          <p className="mt-10 text-[13px] text-ink-muted lg:hidden">
            Prefer email? Write to{" "}
            <a href={`mailto:${company.email}`} className="font-medium text-brand">
              {company.email}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
