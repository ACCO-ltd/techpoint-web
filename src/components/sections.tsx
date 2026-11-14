import Link from "next/link";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { company } from "@/content/site";
import { Button, Eyebrow } from "./ui";

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
  breadcrumb,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  /** Kept so existing pages can still pass a photo; the redesigned hero is type-only. */
  image?: string;
  imageAlt?: string;
  children?: React.ReactNode;
  breadcrumb?: { label: string; href: string };
}) {
  return (
    <section className="bg-gradient-to-b from-white to-surface-raised pt-28 pb-16 text-center sm:pt-36 sm:pb-24">
      <div className="scroll-hero container-x flex flex-col items-center">
        {breadcrumb && (
          <Link href={breadcrumb.href} className="mb-6 inline-flex items-center gap-2 text-[14px] text-ink-muted transition-colors hover:text-ink">
            <Icon name="arrow" className="size-3.5 rotate-180" />
            {breadcrumb.label}
          </Link>
        )}
        <Reveal load>
          <Eyebrow className="justify-center sm:text-[17px]">{eyebrow}</Eyebrow>
        </Reveal>
        <Reveal load delay={80}>
          <h1 className="mt-4 max-w-4xl text-balance text-[40px] leading-[1.05] tracking-[-0.04em] text-ink sm:text-[56px] lg:text-[72px]">{title}</h1>
        </Reveal>
        {intro && (
          <Reveal load delay={160}>
            <p className="mt-5 max-w-2xl text-pretty text-[19px] leading-[1.35] tracking-[-0.015em] text-ink-muted sm:text-[22px]">{intro}</p>
          </Reveal>
        )}
        {children && (
          <Reveal load delay={240} className="flex w-full flex-col items-center [&>*]:justify-center">
            {children}
          </Reveal>
        )}
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
    <section className="bg-surface-raised py-20 sm:py-32">
      <Reveal className="container-x flex flex-col items-center gap-5 text-center">
        <h2 className="max-w-4xl text-balance text-[36px] leading-[1.05] tracking-[-0.04em] text-ink sm:text-[52px] lg:text-[64px]">{title}</h2>
        <p className="max-w-2xl text-pretty text-[19px] leading-[1.35] tracking-[-0.015em] text-ink-muted sm:text-[21px]">{body}</p>
        <Button href={href} className="mt-2 h-[46px] px-6 text-[17px] font-normal">
          {cta}
        </Button>
        <p className="text-[14px] text-ink-muted">Response within {company.responseTime}</p>
      </Reveal>
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
