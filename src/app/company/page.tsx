import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ClientGrid } from "@/components/ClientLogos";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { CtaBand, PageHero } from "@/components/sections";
import { Accent, Eyebrow, SectionHeading } from "@/components/ui";
import { company, deliveryGroups, differentiators, solutions } from "@/content/site";

export const metadata: Metadata = {
  title: "Company",
  description: `About ${company.name} — ${company.positioning}. Our vision, mission and how we deliver for organizations in Somalia and East Africa.`,
  alternates: { canonical: "/company" },
};

// CONFIRM: add founding year, registration details and leadership profiles once approved for publication.
const facts = [
  ["Company", company.name],
  ["Positioning", company.positioning],
  ["Headquarters", company.location],
  ["Service area", company.serviceArea],
  ["Practices", `${solutions.length} strategic technology practices`],
  ["Contact", company.email],
];

export default function CompanyPage() {
  return (
    <>
      <PageHero
        eyebrow="About Techpoint"
        title={
          <>
            A trusted technology partner for <Accent>organizations that intend to grow.</Accent>
          </>
        }
        intro="Techpoint Solutions is an enterprise software and digital solutions company. We help organizations modernize operations, strengthen digital capabilities, manage risk and grow sustainably through technology."
        image="/images/office.jpg"
        imageAlt=""
      />

      {/* Vision & mission */}
      <section className="bg-surface py-20 sm:py-28">
        <div className="container-x">
          <div className="grid gap-4 lg:grid-cols-2">
            <Reveal className="relative isolate h-full overflow-hidden rounded-4xl bg-ink p-8 text-on-dark sm:p-12">
              <div className="grid-lines absolute inset-0 -z-10 opacity-60" aria-hidden="true" />
              <div className="absolute -top-24 -right-24 -z-10 size-72 rounded-full bg-[radial-gradient(circle,rgba(91,140,255,0.25),transparent_65%)]" aria-hidden="true" />
              <Eyebrow tone="light">Our vision</Eyebrow>
              <p className="mt-10 font-display text-[24px] leading-[1.35] font-medium tracking-[-0.02em] sm:text-[28px]">{company.vision}</p>
            </Reveal>
            <Reveal delay={80} className="h-full rounded-4xl bg-surface-raised p-8 ring-1 ring-line sm:p-12">
              <Eyebrow>Our mission</Eyebrow>
              <p className="mt-10 font-display text-[24px] leading-[1.35] font-medium tracking-[-0.02em] text-ink sm:text-[28px]">{company.mission}</p>
            </Reveal>
          </div>
          <Reveal delay={120} className="mt-4 flex flex-col items-start justify-between gap-6 rounded-4xl border border-line px-8 py-8 sm:flex-row sm:items-center sm:px-12">
            <p className="text-[13px] font-semibold text-ink-muted">Our promise</p>
            <p className="font-display text-[26px] leading-tight font-semibold tracking-[-0.025em] text-ink sm:text-[32px]">{company.tagline}</p>
          </Reveal>
        </div>
      </section>

      {/* Position */}
      <section className="bg-surface pb-20 sm:pb-28">
        <div className="container-x grid gap-4 lg:grid-cols-12">
          <Reveal className="relative min-h-80 overflow-hidden rounded-4xl lg:col-span-7">
            <Image src="/images/team-laptops.jpg" alt="Engineering team collaborating on laptops" fill sizes="(min-width: 1024px) 60vw, 100vw" className="object-cover" />
          </Reveal>
          <Reveal delay={80} className="relative overflow-hidden rounded-4xl bg-surface-raised p-8 ring-1 ring-line sm:p-12 lg:col-span-5">
            <Eyebrow>Our position</Eyebrow>
            <p className="mt-8 text-[18px] leading-relaxed text-ink-soft">
              We are not a general web agency. Our work centres on the systems organizations depend on every day — their infrastructure,
              security, data, business applications and the integrations between them.
            </p>
            <p className="mt-5 text-[18px] leading-relaxed text-ink-soft">
              Our home market is Somalia and East Africa. We hold our work to the standards international clients expect in security,
              documentation and delivery discipline.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Organization */}
      <section className="bg-surface-raised py-20 sm:py-28">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="How we're organized"
              title={
                <>
                  Six practices. <Accent>Three accountable teams.</Accent>
                </>
              }
              intro="Clients see six strategic practices. Behind them, three delivery teams share methods, tooling and standards — so a project that spans infrastructure, software and data is still run by one team."
            />
          </Reveal>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {deliveryGroups.map((g, i) => (
              <Reveal key={g.title} delay={i * 70} className="h-full">
                <div className="flex h-full flex-col rounded-3xl bg-white p-8 ring-1 ring-line">
                  <span className="grid size-12 place-items-center rounded-2xl bg-ink text-brand-light">
                    <Icon name={g.icon} className="size-5.5" />
                  </span>
                  <h3 className="mt-8 text-2xl font-semibold tracking-tight">{g.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">{g.body}</p>
                  <p className="mt-8 border-t border-line pt-6 text-[13px] font-semibold text-ink-muted">Leads</p>
                  <ul className="mt-3 space-y-2">
                    {solutions
                      .filter((s) => g.practices.includes(s.slug))
                      .map((s) => (
                        <li key={s.slug}>
                          <Link href={`/solutions/${s.slug}`} className="group flex items-start gap-2.5 text-[15px] font-medium text-ink hover:text-brand">
                            <Icon name={s.icon} className="mt-0.5 size-4 shrink-0 text-brand" />
                            {s.name}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How we deliver */}
      <section className="bg-surface py-20 sm:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <SectionHeading
                eyebrow="How we deliver"
                title={
                  <>
                    Our difference is how we deliver, <Accent>not simply what we sell.</Accent>
                  </>
                }
              />
            </div>
          </Reveal>
          <ul className="lg:col-span-7">
            {differentiators.map((d, i) => (
              <Reveal as="li" key={d.title} delay={i * 40} className="flex gap-6 border-t border-line py-8 first:border-t-0 first:pt-0">
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-brand-tint text-brand">
                  <Icon name={d.icon} className="size-5" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold tracking-tight">{d.title}</h3>
                  <p className="mt-1.5 text-[16px] leading-relaxed text-ink-muted">{d.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-surface-raised py-20 sm:py-28">
        <div className="container-x">
          <Reveal>
            <SectionHeading eyebrow="Clients" title="Organizations we work with." intro="Construction, engineering, property, agriculture, logistics and retail organizations across Somalia." />
          </Reveal>
          <Reveal delay={80} className="mt-12">
            <ClientGrid />
          </Reveal>
        </div>
      </section>

      <section className="bg-surface py-20 sm:py-28">
        <div className="container-x">
          <Reveal>
            <SectionHeading eyebrow="Company information" title="At a glance." />
          </Reveal>
          <Reveal delay={80}>
            <dl className="mt-12 divide-y divide-line overflow-hidden rounded-3xl bg-white ring-1 ring-line">
              {facts.map(([k, v]) => (
                <div key={k} className="grid gap-1 px-7 py-5 sm:grid-cols-3 sm:gap-6">
                  <dt className="text-[13px] font-semibold text-ink-muted sm:pt-0.5">{k}</dt>
                  <dd className="text-[16px] text-ink sm:col-span-2">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
