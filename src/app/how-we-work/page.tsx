import type { Metadata } from "next";
import Image from "next/image";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { CheckList, CtaBand, PageHero } from "@/components/sections";
import { Accent, SectionHeading } from "@/components/ui";
import { deliveryProcess, principles } from "@/content/site";

export const metadata: Metadata = {
  title: "How we work",
  description:
    "Techpoint's delivery lifecycle: discovery, requirements, architecture, implementation, validation, deployment, training and long-term support.",
  alternates: { canonical: "/how-we-work" },
};

const outputs: Record<string, string[]> = {
  Discovery: ["Stakeholder interviews", "Current-state assessment", "Initial scope & fit"],
  Requirements: ["Workflow maps", "User roles & permissions", "Acceptance criteria"],
  Architecture: ["Solution design", "Integration plan", "Milestones & estimate"],
  Implementation: ["Iterative builds", "Milestone demos", "Progress reporting"],
  Validation: ["Automated tests", "User acceptance testing", "Data reconciliation"],
  Deployment: ["Production environment", "Backups & monitoring", "Rollback plan"],
  Training: ["Role-based sessions", "User guides", "Admin documentation"],
  Support: ["Support channel", "Maintenance cadence", "Improvement backlog"],
};

export default function HowWeWorkPage() {
  return (
    <>
      <PageHero
        eyebrow="How we work"
        title={
          <>
            Predictable delivery. <Accent>No surprises.</Accent>
          </>
        }
        intro="A clear lifecycle from the first conversation to long-term support — so you always know where your project stands, what's next, and what you'll receive."
        image="/images/collab-desk.jpg"
        imageAlt=""
      />

      <section className="bg-surface py-20 sm:py-28">
        <div className="container-x">
          <ol className="relative">
            <span className="absolute top-0 bottom-0 left-[23px] w-px bg-gradient-to-b from-brand-light via-line to-transparent sm:left-[27px]" aria-hidden="true" />
            {deliveryProcess.map((step, i) => (
              <Reveal as="li" key={step.n} className="relative grid gap-6 pb-16 pl-16 last:pb-0 sm:pl-20 lg:grid-cols-12">
                <span className="absolute top-0 left-0 grid size-12 place-items-center rounded-2xl bg-ink text-brand-light ring-8 ring-surface sm:size-14">
                  <Icon name={step.icon} className="size-5" />
                </span>
                <div className="lg:col-span-5">
                  <p className="text-[13px] font-semibold tabular-nums text-brand">Stage {step.n}</p>
                  <h2 className="mt-2 text-[30px] leading-[1.15] tracking-[-0.025em] sm:text-[36px]">{step.title}</h2>
                </div>
                <div className="lg:col-span-7">
                  <p className="text-lg leading-relaxed text-ink-muted">{step.body}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {outputs[step.title].map((o) => (
                      <li key={o} className="rounded-full bg-white px-4 py-2 text-[13px] text-ink-muted ring-1 ring-line">
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>
                {i < deliveryProcess.length - 1 && <span className="sr-only">Next stage</span>}
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-surface-raised py-20 sm:py-28">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="relative aspect-[4/3] overflow-hidden rounded-4xl">
            <Image src="/images/workspace.jpg" alt="Developer workstation with code on screen" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </Reveal>
          <Reveal delay={80}>
            <SectionHeading
              eyebrow="Engagement principles"
              title="What you can expect from us."
              intro="These commitments apply to every engagement, regardless of size."
            />
            <CheckList
              className="mt-10"
              items={[
                "A named point of contact throughout the project",
                "Scope, milestones and responsibilities agreed in writing",
                "Working software demonstrated at each milestone",
                "Change requests assessed openly for impact on time and cost",
                "Documentation and credentials handed over at the end",
                "Your data remains your property, with clear export paths",
              ]}
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-surface py-20 sm:py-28">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Engineering commitments"
              title={
                <>
                  Evidence over slogans. <Accent>Built into every release.</Accent>
                </>
              }
              intro="Trust comes from how we work, not how loudly we claim it. These commitments apply to every system we deliver and every product we operate."
            />
          </Reveal>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 70} className="h-full">
                <div className="h-full rounded-3xl bg-white p-7 ring-1 ring-line transition-shadow duration-500 hover:shadow-[0_24px_48px_-24px_rgba(11,18,32,0.25)]">
                  <span className="grid size-11 place-items-center rounded-2xl bg-ink text-brand-light">
                    <Icon name={p.icon} className="size-5" />
                  </span>
                  <h3 className="mt-6 text-[20px] font-semibold tracking-tight">{p.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Ready to start with discovery?" body="Every engagement begins with understanding. Tell us about your objectives and constraints, and we'll propose a sensible first step." />
    </>
  );
}
