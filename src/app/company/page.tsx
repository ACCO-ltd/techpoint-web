import type { Metadata } from "next";
import Image from "next/image";
import { ClientGrid } from "@/components/ClientLogos";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { CtaBand, PageHero } from "@/components/sections";
import { Accent, Eyebrow, SectionHeading } from "@/components/ui";
import { company, principles } from "@/content/site";

export const metadata: Metadata = {
  title: "Company",
  description:
    "About Techpoint Solutions — an enterprise technology partner helping organizations in Somalia and East Africa modernize operations through reliable software.",
  alternates: { canonical: "/company" },
};

const practices = [
  { icon: "layers" as const, title: "Business systems", body: "ERP, finance, HR, procurement and inventory implementation grounded in how operations really work." },
  { icon: "code" as const, title: "Product engineering", body: "Design and development of web platforms, portals and our own software products." },
  { icon: "server" as const, title: "Infrastructure & support", body: "Hosting, deployment, monitoring, maintenance and user support after go-live." },
];

// CONFIRM: add founding year, registration details and leadership profiles once approved for publication.
const facts = [
  ["Company", company.name],
  ["Headquarters", company.location],
  ["Service area", company.serviceArea],
  ["Focus", "Enterprise software, business systems and applied AI"],
  ["Contact", company.email],
];

export default function CompanyPage() {
  return (
    <>
      <PageHero
        eyebrow="About Techpoint"
        title={
          <>
            We build the systems behind <Accent>better business.</Accent>
          </>
        }
        intro="Techpoint Solutions is an enterprise technology company. We help organizations modernize operations through dependable software, connected business systems and practical AI — and we develop our own products along the way."
        image="/images/office.jpg"
        imageAlt=""
      />

      <section className="bg-surface py-20 sm:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <Eyebrow>Our mission</Eyebrow>
          </Reveal>
          <Reveal delay={80} className="lg:col-span-7">
            <p className="font-display text-[26px] leading-[1.3] font-medium tracking-[-0.02em] text-ink sm:text-[32px]">
              To give organizations the systems they need to operate with clarity, control and confidence — engineered carefully, explained
              honestly and supported for the long term.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface pb-20 sm:pb-28">
        <div className="container-x grid gap-4 lg:grid-cols-12">
          <Reveal className="relative min-h-80 overflow-hidden rounded-4xl lg:col-span-7">
            <Image src="/images/students.jpg" alt="People collaborating around laptops in a library" fill sizes="(min-width: 1024px) 60vw, 100vw" className="object-cover" />
          </Reveal>
          <Reveal delay={80} className="relative overflow-hidden rounded-4xl bg-ink p-8 text-on-dark sm:p-12 lg:col-span-5">
            <Eyebrow tone="light">Our position</Eyebrow>
            <p className="mt-8 text-[18px] leading-relaxed text-on-dark/80">
              We are not a general web agency. Our work centres on the systems organizations depend on every day: finance, operations,
              people, inventory, academics and the integrations between them.
            </p>
            <p className="mt-5 text-[18px] leading-relaxed text-on-dark/80">
              Our home market is Somalia and East Africa. We hold our work to standards that international clients expect — in security,
              documentation and delivery discipline.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface-raised py-20 sm:py-28">
        <div className="container-x">
          <Reveal>
            <SectionHeading eyebrow="How we're organized" title="Three practices. One accountable team." />
          </Reveal>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {practices.map((p, i) => (
              <Reveal key={p.title} delay={i * 70}>
                <div className="h-full rounded-3xl bg-white p-8 ring-1 ring-line">
                  <span className="grid size-12 place-items-center rounded-2xl bg-brand-tint text-brand">
                    <Icon name={p.icon} className="size-5.5" />
                  </span>
                  <h3 className="mt-8 text-2xl font-semibold tracking-tight">{p.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 sm:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SectionHeading eyebrow="Operating principles" title="How we hold ourselves accountable." />
          </Reveal>
          <ul className="lg:col-span-7">
            {principles.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 40} className="flex gap-6 border-t border-line py-7 first:border-t-0 first:pt-0">
                <Icon name={p.icon} className="mt-1 size-5 shrink-0 text-brand" />
                <div>
                  <h3 className="text-xl font-semibold tracking-tight">{p.title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-ink-muted">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-surface py-20 sm:py-28">
        <div className="container-x">
          <Reveal>
            <SectionHeading eyebrow="Clients" title="Organizations we work with." intro="Construction, engineering, property, agriculture, logistics and retail organizations across Somalia." />
          </Reveal>
          <Reveal delay={80} className="mt-12">
            <ClientGrid />
          </Reveal>
        </div>
      </section>

      <section className="bg-surface-raised py-20 sm:py-28">
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
