import Image from "next/image";
import Link from "next/link";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { company } from "@/content/site";
import { Button, Eyebrow } from "./ui";

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt = "",
  children,
  breadcrumb,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  image?: string;
  imageAlt?: string;
  children?: React.ReactNode;
  breadcrumb?: { label: string; href: string };
}) {
  return (
    <section className="relative isolate overflow-hidden bg-night pt-36 pb-20 text-on-dark sm:pt-44 sm:pb-28">
      {image && (
        <>
          <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="-z-20 object-cover opacity-30" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-night via-night/90 to-night/40" aria-hidden="true" />
        </>
      )}
      <div className="grid-lines absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,black,transparent)]" aria-hidden="true" />
      <div className="container-x">
        {breadcrumb && (
          <Link href={breadcrumb.href} className="mb-8 inline-flex items-center gap-2 text-[13px] text-on-dark-muted transition-colors hover:text-on-dark">
            <Icon name="arrow" className="size-3.5 rotate-180" />
            {breadcrumb.label}
          </Link>
        )}
        <Reveal>
          <Eyebrow tone="light">{eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-5 max-w-3xl text-balance text-[40px] leading-[1.08] tracking-[-0.025em] sm:text-[48px] lg:text-[56px]">
            {title}
          </h1>
        </Reveal>
        {intro && (
          <Reveal delay={160}>
            <p className="mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-on-dark-muted sm:text-xl">{intro}</p>
          </Reveal>
        )}
        {children && <Reveal delay={240}>{children}</Reveal>}
      </div>
    </section>
  );
}

export function CtaBand({
  title = "Let's discuss what your organization needs.",
  body = "Tell us what you're trying to improve. The first conversation is about understanding your requirements and constraints — and deciding together whether we're the right fit.",
  cta = "Discuss a project",
  href = "/contact",
}: {
  title?: string;
  body?: string;
  cta?: string;
  href?: string;
}) {
  return (
    <section className="bg-surface px-3 pb-3 sm:px-5 sm:pb-5">
      <div className="relative isolate overflow-hidden rounded-4xl bg-ink text-on-dark">
        <Image src="/images/planning.jpg" alt="" fill sizes="100vw" className="-z-20 object-cover opacity-20 mix-blend-luminosity" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-ink via-ink/95 to-night/70" aria-hidden="true" />
        <div className="grid-lines absolute inset-0 -z-10 opacity-60" aria-hidden="true" />
        <div className="container-x grid gap-10 py-20 sm:py-28 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-8">
            <Eyebrow tone="light">Start a conversation</Eyebrow>
            <h2 className="mt-5 text-balance text-[40px] leading-[1.08] tracking-[-0.025em] sm:text-[48px] lg:text-[56px]">{title}</h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-on-dark-muted">{body}</p>
          </Reveal>
          <Reveal className="flex flex-col gap-4 lg:col-span-4 lg:items-end" delay={120}>
            <Button href={href} className="h-14 px-8 text-base">
              {cta}
            </Button>
            <p className="text-[13px] font-semibold text-on-dark-muted">Response within {company.responseTime}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function CheckList({ items, tone = "dark", className = "" }: { items: string[]; tone?: "dark" | "light"; className?: string }) {
  return (
    <ul className={`space-y-3.5 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-3.5">
          <span
            className={`mt-0.5 grid size-5 shrink-0 place-items-center rounded-full ${tone === "light" ? "bg-brand-light/20 text-brand-light" : "bg-brand-tint text-brand"}`}
          >
            <Icon name="check" className="size-3" />
          </span>
          <span className={`text-[15px] leading-relaxed ${tone === "light" ? "text-on-dark/80" : "text-ink-muted"}`}>{item}</span>
        </li>
      ))}
    </ul>
  );
}
