import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@/components/Icon";
import { SolutionDiagram } from "@/components/illustrations/Diagrams";
import { Reveal } from "@/components/Reveal";
import { CheckList, CtaBand, PageHero } from "@/components/sections";
import { Button, Eyebrow, SectionHeading } from "@/components/ui";
import { deliveryProcess, solutions } from "@/content/site";

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/solutions/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const s = solutions.find((x) => x.slug === slug);
  if (!s) return {};
  return {
    title: s.name,
    description: `${s.short} ${s.intro}`.slice(0, 300),
    alternates: { canonical: `/solutions/${s.slug}` },
  };
}

export default async function SolutionPage({ params }: PageProps<"/solutions/[slug]">) {
  const { slug } = await params;
  const s = solutions.find((x) => x.slug === slug);
  if (!s) notFound();
  const others = solutions.filter((x) => x.slug !== s.slug);

  return (
    <>
      <PageHero eyebrow={s.name} title={s.headline} intro={s.intro} image={s.image} imageAlt={s.imageAlt} breadcrumb={{ label: "All solutions", href: "/solutions" }}>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button href={`/contact?topic=${s.slug}`} className="h-14 px-8 text-base">
            Request a consultation
          </Button>
          <Button href="/how-we-work" variant="ghost-light" className="h-14 px-8 text-base">
            How we deliver
          </Button>
        </div>
      </PageHero>

      {/* Signals */}
      <section className="bg-surface py-20 sm:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SectionHeading eyebrow="When to consider it" title="Signs this is the right next step." />
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {s.signals.map((sig, i) => (
              <Reveal key={sig} delay={i * 60}>
                <div className="h-full rounded-3xl bg-white p-7 ring-1 ring-line">
                  <span className="text-[13px] font-semibold tabular-nums text-brand">0{i + 1}</span>
                  <p className="mt-6 text-[18px] leading-snug font-medium tracking-tight text-ink">{sig}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Diagram */}
      <section className="bg-surface-raised py-20 sm:py-28">
        <div className="container-x">
          <Reveal>
            <Eyebrow>How it fits together</Eyebrow>
          </Reveal>
          <Reveal delay={80} className="mt-10 rounded-4xl bg-surface p-6 ring-1 ring-line sm:p-12">
            <SolutionDiagram type={s.diagram} className="mx-auto w-full max-w-4xl" />
          </Reveal>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-surface py-20 sm:py-28">
        <div className="container-x">
          <Reveal>
            <SectionHeading eyebrow="What's included" title="Capabilities we deliver." />
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-line ring-1 ring-line sm:grid-cols-2 lg:grid-cols-3">
            {s.capabilities.map((c, i) => (
              <Reveal key={c.title} delay={(i % 3) * 70} className="group bg-surface p-8 transition-colors hover:bg-white">
                <span className="grid size-11 place-items-center rounded-2xl bg-brand-tint text-brand transition-colors group-hover:bg-ink group-hover:text-on-dark">
                  <Icon name={c.icon} className="size-5" />
                </span>
                <h3 className="mt-8 text-[20px] font-semibold tracking-tight">{c.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">{c.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="relative isolate overflow-hidden bg-night py-20 text-on-dark sm:py-28">
        <div className="grid-lines absolute inset-0 -z-10 opacity-70" aria-hidden="true" />
        <div className="container-x grid gap-14 lg:grid-cols-2">
          <Reveal>
            <SectionHeading tone="light" eyebrow="What you receive" title="Clear deliverables, agreed up front." />
            <CheckList tone="light" className="mt-10" items={s.deliverables} />
          </Reveal>
          <Reveal delay={100} className="space-y-4">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
              <p className="text-[13px] font-semibold text-on-dark-muted">Well suited to</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {s.idealFor.map((x) => (
                  <li key={x} className="rounded-full border border-white/15 px-4 py-2 text-[14px] text-on-dark/85">
                    {x}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
              <p className="text-[13px] font-semibold text-on-dark-muted">Delivery lifecycle</p>
              <ol className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-3 text-[14px] text-on-dark/85">
                {deliveryProcess.map((p, i) => (
                  <li key={p.n} className="flex items-center gap-2">
                    {p.title}
                    {i < deliveryProcess.length - 1 && <Icon name="arrow" className="size-3.5 text-brand-light" />}
                  </li>
                ))}
              </ol>
            </div>
            <div className="relative aspect-[16/7] overflow-hidden rounded-3xl">
              <Image src="/images/collab-desk.jpg" alt="Team workshop reviewing requirements on a screen" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover opacity-80" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Other solutions */}
      <section className="bg-surface py-20 sm:py-24">
        <div className="container-x">
          <Reveal>
            <Eyebrow>Related capabilities</Eyebrow>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((o, i) => (
              <Reveal key={o.slug} delay={i * 60}>
                <Link href={`/solutions/${o.slug}`} className="group flex h-full flex-col rounded-3xl bg-white p-7 ring-1 ring-line transition-all hover:ring-brand/30">
                  <Icon name={o.icon} className="size-6 text-brand" />
                  <h3 className="mt-8 text-[18px] leading-snug font-semibold tracking-tight">{o.name}</h3>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-[14px] font-medium text-brand">
                    Learn more <Icon name="arrow" className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Let's scope the right solution together." href={`/contact?topic=${s.slug}`} cta="Request a consultation" />
    </>
  );
}
