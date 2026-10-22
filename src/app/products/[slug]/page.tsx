import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@/components/Icon";
import { ProductMockup } from "@/components/illustrations/Mockups";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/sections";
import { Button, Eyebrow, SectionHeading, StatusPill } from "@/components/ui";
import { products } from "@/content/site";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/products/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = products.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    title: `${p.name} — ${p.category}`,
    description: p.summary,
    alternates: { canonical: `/products/${p.slug}` },
  };
}

export default async function ProductPage({ params }: PageProps<"/products/[slug]">) {
  const { slug } = await params;
  const p = products.find((x) => x.slug === slug);
  if (!p) notFound();
  const demoHref = `/contact?topic=product&product=${p.slug}`;
  const others = products.filter((x) => x.slug !== p.slug);

  return (
    <>
      <section className="relative isolate overflow-hidden bg-night pt-36 text-on-dark sm:pt-44">
        <div className="grid-lines absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" aria-hidden="true" />
        <div
          className="absolute top-1/3 left-1/2 -z-10 size-[56rem] -translate-x-1/2 rounded-full opacity-25 blur-3xl"
          style={{ background: `radial-gradient(circle, ${p.accent}, transparent 60%)` }}
          aria-hidden="true"
        />
        <div className="container-x">
          <Link href="/products" className="inline-flex items-center gap-2 text-[13px] text-on-dark-muted transition-colors hover:text-on-dark">
            <Icon name="arrow" className="size-3.5 rotate-180" />
            All products
          </Link>
          <div className="mx-auto mt-10 max-w-3xl text-center">
            <Reveal className="flex flex-wrap items-center justify-center gap-3">
              <StatusPill status={p.status} tone="light" />
              <span className="text-[13px] font-semibold text-on-dark-muted">{p.category}</span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 text-[40px] leading-[1.08] tracking-[-0.025em] sm:text-[48px] lg:text-[56px]">{p.name}</h1>
              <p className="mt-2 text-[18px] text-on-dark-muted sm:text-[20px]">{p.tagline}</p>
            </Reveal>
            <Reveal delay={160}>
              <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-on-dark-muted">{p.summary}</p>
              <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
                {p.externalUrl ? (
                  <Button href={p.externalUrl} external className="h-14 px-8 text-base">
                    Visit {p.name}
                  </Button>
                ) : null}
                <Button href={demoHref} variant={p.externalUrl ? "ghost-light" : "primary"} className="h-14 px-8 text-base">
                  {p.status === "In development" ? "Request early access" : "Request a demo"}
                </Button>
              </div>
            </Reveal>
          </div>
          <Reveal delay={240} className="mx-auto mt-16 max-w-5xl">
            <ProductMockup type={p.mockup} className="translate-y-px rounded-b-none" />
          </Reveal>
        </div>
      </section>

      <section className="bg-surface py-20 sm:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SectionHeading eyebrow="The problem" title="Why we built it." />
          </Reveal>
          <Reveal delay={80} className="lg:col-span-7">
            <p className="font-display text-[22px] leading-[1.4] font-medium tracking-[-0.015em] text-ink sm:text-[26px]">{p.problem}</p>
            <div className="mt-10">
              <p className="text-[13px] font-semibold text-ink-muted">Designed for</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.audiences.map((a) => (
                  <li key={a} className="rounded-full bg-brand-tint px-4 py-2 text-[14px] text-ink">
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface-raised py-20 sm:py-28">
        <div className="container-x">
          <Reveal>
            <SectionHeading eyebrow="Core capabilities" title={`What ${p.name} does.`} />
          </Reveal>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {p.capabilities.map((c, i) => (
              <Reveal key={c.title} delay={(i % 3) * 70}>
                <div className="h-full rounded-3xl bg-white p-7 ring-1 ring-line">
                  <span className="grid size-9 place-items-center rounded-xl bg-brand-tint text-brand">
                    <Icon name="check" className="size-4" />
                  </span>
                  <h3 className="mt-6 text-[20px] font-semibold tracking-tight">{c.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 sm:py-28">
        <div className="container-x grid gap-4 lg:grid-cols-2">
          <Reveal className="rounded-3xl bg-ink p-8 text-on-dark sm:p-12">
            <Eyebrow tone="light">Availability</Eyebrow>
            <div className="mt-6">
              <StatusPill status={p.status} tone="light" />
            </div>
            <p className="mt-6 text-lg leading-relaxed text-on-dark/80">{p.availability}</p>
          </Reveal>
          <Reveal delay={80} className="rounded-3xl bg-white p-8 ring-1 ring-line sm:p-12">
            <Eyebrow>Ownership & support</Eyebrow>
            <p className="mt-6 text-lg leading-relaxed text-ink-muted">{p.ownership}</p>
            <p className="mt-4 text-lg leading-relaxed text-ink-muted">
              Configuration, integration with your existing systems, training and ongoing support are available from the Techpoint team.
            </p>
            <Link href={demoHref} className="mt-8 inline-flex items-center gap-2 text-[15px] font-medium text-brand">
              Talk to us about {p.name}
              <Icon name="arrow" className="size-4" />
            </Link>
          </Reveal>
        </div>
        <div className="container-x mt-16">
          <p className="text-[13px] font-semibold text-ink-muted">More from the portfolio</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {others.map((o) => (
              <Link key={o.slug} href={`/products/${o.slug}`} className="group flex items-center justify-between gap-6 rounded-3xl bg-surface-raised p-7 ring-1 ring-line transition-colors hover:bg-white">
                <div>
                  <StatusPill status={o.status} />
                  <p className="mt-4 text-2xl font-semibold tracking-tight">{o.name}</p>
                  <p className="mt-1 text-[15px] text-ink-muted">{o.category}</p>
                </div>
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-ink text-on-dark transition-transform group-hover:translate-x-1">
                  <Icon name="arrow" className="size-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={p.status === "In development" ? `Interested in early access to ${p.name}?` : `See ${p.name} in action.`}
        body="We'll walk through the product with your team, discuss your requirements and explain what implementation would involve."
        cta={p.status === "In development" ? "Request early access" : "Request a demo"}
        href={demoHref}
      />
    </>
  );
}
