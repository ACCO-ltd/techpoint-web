import type { Metadata } from "next";
import Link from "next/link";
import { ClientGrid } from "@/components/ClientLogos";
import { Icon } from "@/components/Icon";
import { ProductMockup } from "@/components/illustrations/Mockups";
import { Reveal } from "@/components/Reveal";
import { CtaBand, PageHero } from "@/components/sections";
import { Accent, SectionHeading, StatusPill } from "@/components/ui";
import { products, type IconName } from "@/content/site";

export const metadata: Metadata = {
  title: "Our work",
  description:
    "Software Techpoint Solutions has built and operates in production, the organizations we work with, and the delivery evidence we share during discovery.",
  alternates: { canonical: "/our-work" },
};

// CONFIRM: each item below is something the team can actually provide on request.
const evidence: { title: string; body: string; icon: IconName }[] = [
  { title: "Live product walkthroughs", body: "See Sukaan running in production, and our pilot systems, with sample data in place of client records.", icon: "box" },
  { title: "Delivery documentation", body: "Examples of requirements, architecture and test documentation from comparable projects, shared under NDA where required.", icon: "doc" },
  { title: "Client references", body: "Conversations with organizations we have worked with, arranged with their permission.", icon: "users" },
];

const caseStudyOutline = [
  ["Challenge", "The operational problem, in the client's words"],
  ["Approach", "Discovery findings and the decisions we made"],
  ["Solution", "What was delivered, integrated and handed over"],
  ["Outcome", "Results the client has verified and approved"],
];

export default function OurWorkPage() {
  const [featured, ...others] = products;
  return (
    <>
      <PageHero
        eyebrow="Our work"
        title={
          <>
            Work in production, <Accent>not just on slides.</Accent>
          </>
        }
        intro="We publish case studies only with client permission and verified results. Here is what we can show today — and what we share with you during discovery."
        image="/images/construction.jpg"
        imageAlt=""
      />

      {/* Built and operated */}
      <section className="bg-surface py-20 sm:py-28">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Built and operated by Techpoint"
              title={
                <>
                  Software we run, <Accent>every day.</Accent>
                </>
              }
              intro="Our own products are the clearest evidence of how we engineer, secure and support software over time."
            />
          </Reveal>

          <Reveal className="mt-14">
            <Link
              href={`/products/${featured.slug}`}
              className="group grid items-center gap-10 overflow-hidden rounded-4xl bg-night p-8 text-on-dark sm:p-12 lg:grid-cols-12"
            >
              <div className="lg:col-span-5">
                <div className="flex items-center gap-3">
                  <StatusPill status={featured.status} tone="light" />
                  <span className="text-[13px] font-semibold text-on-dark-muted">{featured.category}</span>
                </div>
                <h3 className="mt-8 text-[30px] leading-[1.15] tracking-[-0.025em] sm:text-[36px]">{featured.name}</h3>
                <p className="mt-4 text-[15px] leading-relaxed text-on-dark-muted">{featured.problem}</p>
                {featured.paymentMethods && (
                  <ul className="mt-8 flex flex-wrap gap-2">
                    {featured.paymentMethods.map((m) => (
                      <li key={m} className="rounded-full border border-white/15 px-3 py-1.5 text-[12px] text-on-dark/85">
                        {m}
                      </li>
                    ))}
                  </ul>
                )}
                <span className="mt-10 inline-flex items-center gap-2 text-[15px] font-medium">
                  See how {featured.name} works
                  <Icon name="arrow" className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
              <div className="lg:col-span-7">
                <ProductMockup product={featured} className="transition-transform duration-700 group-hover:-translate-y-1.5" />
              </div>
            </Link>
          </Reveal>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {others.map((p, i) => (
              <Reveal key={p.slug} delay={i * 70}>
                <Link href={`/products/${p.slug}`} className="group flex h-full flex-col rounded-4xl bg-surface-raised p-8 ring-1 ring-line sm:p-10">
                  <div className="flex items-center gap-3">
                    <StatusPill status={p.status} />
                    <span className="text-[13px] font-semibold text-ink-muted">{p.category}</span>
                  </div>
                  <h3 className="mt-6 text-[24px] font-semibold tracking-tight">{p.name}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">{p.availability}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-8 text-[14px] font-semibold text-brand">
                    View product
                    <Icon name="arrow" className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-[13px] font-semibold text-ink-muted">
            Sukaan is shown from the live product, with client details blurred. Other previews are illustrative and use sample data.
          </p>
        </div>
      </section>

      {/* Clients */}
      <section className="bg-surface-raised py-20 sm:py-28">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Clients"
              title="Organizations we work with."
              intro="Construction, engineering, property, agriculture, logistics and retail organizations across Somalia."
            />
          </Reveal>
          <Reveal delay={80} className="mt-12">
            <ClientGrid />
          </Reveal>
        </div>
      </section>

      {/* Evidence on request */}
      <section className="bg-surface py-20 sm:py-28">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Evidence on request"
              title={
                <>
                  See the work behind <Accent>the claims.</Accent>
                </>
              }
              intro="During discovery, we share the evidence that matters for your decision."
            />
          </Reveal>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {evidence.map((e, i) => (
              <Reveal key={e.title} delay={i * 70} className="h-full">
                <div className="h-full rounded-3xl bg-white p-8 ring-1 ring-line">
                  <span className="grid size-11 place-items-center rounded-2xl bg-brand-tint text-brand">
                    <Icon name={e.icon} className="size-5" />
                  </span>
                  <h3 className="mt-8 text-[20px] font-semibold tracking-tight">{e.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">{e.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="relative isolate overflow-hidden bg-night py-20 text-on-dark sm:py-28">
        <div className="grid-lines absolute inset-0 -z-10 opacity-70" aria-hidden="true" />
        <div className="container-x grid gap-14 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              tone="light"
              eyebrow="Case studies"
              title="Published as clients approve them."
              intro="We would rather show fewer stories than unverified ones. Each case study we publish will follow the same structure."
            />
          </Reveal>
          <ol className="grid gap-px overflow-hidden rounded-3xl bg-night-line ring-1 ring-night-line sm:grid-cols-2 lg:col-span-7">
            {caseStudyOutline.map(([t, d], i) => (
              <Reveal as="li" key={t} delay={i * 60} className="bg-night p-7">
                <span className="text-[13px] font-semibold tabular-nums text-brand-light">0{i + 1}</span>
                <h3 className="mt-8 text-[20px] font-semibold tracking-tight">{t}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-on-dark-muted">{d}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand
        title="Ask to see work relevant to your project."
        body="Tell us what you're planning. We'll arrange a walkthrough of comparable systems and the evidence you need to make a decision."
      />
    </>
  );
}
