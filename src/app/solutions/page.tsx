import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { CtaBand, PageHero } from "@/components/sections";
import { Accent, SectionHeading } from "@/components/ui";
import { industries, solutions } from "@/content/site";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Enterprise systems and ERP, custom software, integration and automation, applied AI, and implementation and support — delivered by Techpoint Solutions.",
  alternates: { canonical: "/solutions" },
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title={
          <>
            Capabilities organized around <Accent>business needs.</Accent>
          </>
        }
        intro="We don't lead with programming languages. We start with the operational problem — then design, build and support the system that solves it."
        image="/images/circuit.jpg"
        imageAlt=""
      />

      <section className="bg-surface py-20 sm:py-28">
        <div className="container-x space-y-5">
          {solutions.map((s, i) => (
            <Reveal key={s.slug}>
              <Link
                href={`/solutions/${s.slug}`}
                className="group grid overflow-hidden rounded-4xl bg-white ring-1 ring-line transition-shadow duration-500 hover:shadow-[0_40px_80px_-40px_rgba(11,18,32,0.35)] lg:grid-cols-12"
              >
                <div className={`relative min-h-64 overflow-hidden lg:col-span-5 ${i % 2 ? "lg:order-2" : ""}`}>
                  <Image src={s.image} alt={s.imageAlt} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover transition-transform duration-[1.2s] group-hover:scale-105" />
                  <span className="absolute top-6 left-6 text-[13px] font-semibold tabular-nums text-on-dark/90 mix-blend-difference">0{i + 1} / 0{solutions.length}</span>
                </div>
                <div className="flex flex-col p-8 sm:p-12 lg:col-span-7">
                  <span className="grid size-12 place-items-center rounded-2xl bg-brand-tint text-brand">
                    <Icon name={s.icon} className="size-5.5" />
                  </span>
                  <h2 className="mt-6 text-[30px] leading-[1.15] tracking-[-0.025em] sm:text-[36px]">{s.name}</h2>
                  <p className="mt-4 max-w-xl text-[18px] leading-relaxed text-ink-muted">{s.short}</p>
                  <ul className="mt-8 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
                    {s.capabilities.map((c) => (
                      <li key={c.title} className="flex items-center gap-2.5 text-[15px] text-ink-muted">
                        <span className="size-1.5 rounded-full bg-brand-light" />
                        {c.title}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-auto inline-flex items-center gap-2 pt-10 text-[15px] font-medium text-brand">
                    Explore this solution
                    <Icon name="arrow" className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-surface-raised py-20 sm:py-28">
        <div className="container-x">
          <Reveal>
            <SectionHeading eyebrow="Industries" title="Where our work makes the biggest difference." />
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl bg-line ring-1 ring-line sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((ind, i) => (
              <Reveal key={ind.name} delay={i * 60} className="bg-surface-raised p-8">
                <Icon name={ind.icon} className="size-6 text-brand" />
                <h3 className="mt-8 text-xl font-semibold tracking-tight">{ind.name}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">{ind.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Not sure which capability you need?" body="Describe the problem in your own words. We'll help you work out the right scope — whether that's a new system, an integration, or improving what you already have." />
    </>
  );
}
