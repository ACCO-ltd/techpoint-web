import Link from "next/link";
import type { ProductStatus } from "@/content/site";
import { Icon } from "./Icon";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "light" | "ghost-light" | "ghost-dark" | "dark";
  className?: string;
  external?: boolean;
};

// Brand: blue is reserved for the one primary action in a view.
const variants = {
  primary: "bg-brand text-white hover:bg-brand-strong",
  light: "bg-white text-ink hover:bg-surface-raised",
  dark: "bg-ink text-white hover:bg-ink-soft",
  "ghost-light": "text-on-dark ring-1 ring-inset ring-night-line hover:bg-night-raised",
  "ghost-dark": "text-ink ring-1 ring-inset ring-line hover:bg-surface-raised",
};

export function Button({ href, children, variant = "primary", className = "", external }: ButtonProps) {
  const cls = `group inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-[15px] font-semibold transition-colors duration-200 ${variants[variant]} ${className}`;
  const inner = (
    <>
      {children}
      <Icon name={external ? "arrow-up-right" : "arrow"} className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
    </>
  );
  if (external) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

/** Section label: 13px, the only size at which the brand allows all caps. */
export function Eyebrow({ children, tone = "dark", className = "" }: { children: React.ReactNode; tone?: "dark" | "light"; className?: string }) {
  return (
    <p className={`flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.06em] ${tone === "light" ? "text-brand-light" : "text-brand"} ${className}`}>
      <span className={`size-1.5 rounded-full ${tone === "light" ? "bg-brand-light" : "bg-brand"}`} />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  tone = "dark",
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  tone?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={`${align === "center" ? "mx-auto text-center [&>p:first-child]:justify-center" : ""} max-w-2xl ${className}`}>
      {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
      <h2 className={`mt-4 text-balance text-[30px] leading-[1.15] tracking-[-0.025em] sm:text-[36px] ${tone === "light" ? "text-on-dark" : "text-ink"}`}>
        {title}
      </h2>
      {intro && <p className={`mt-4 text-pretty text-[18px] leading-[28px] ${tone === "light" ? "text-on-dark-muted" : "text-ink-muted"}`}>{intro}</p>}
    </div>
  );
}

/** Second half of a two-tone headline, set in the muted ink. */
export function Accent({ children }: { children: React.ReactNode }) {
  return <span className="text-ink-muted [.text-on-dark_&]:text-on-dark-muted">{children}</span>;
}

// Signal green means "live" only; everything else stays neutral or brand tint.
const statusStyles: Record<ProductStatus, string> = {
  Live: "bg-signal/10 text-[#00835C] ring-signal/30",
  Pilot: "bg-brand-tint text-brand-strong ring-brand/20",
  "In development": "bg-surface-raised text-ink-muted ring-line",
};
const statusStylesDark: Record<ProductStatus, string> = {
  Live: "bg-signal-light/10 text-signal-light ring-signal-light/30",
  Pilot: "bg-brand-light/10 text-brand-light ring-brand-light/30",
  "In development": "bg-night-raised text-on-dark-muted ring-night-line",
};

export function StatusPill({ status, tone = "dark" }: { status: ProductStatus; tone?: "dark" | "light" }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[12px] font-semibold ring-1 ring-inset ${tone === "light" ? statusStylesDark[status] : statusStyles[status]}`}
    >
      <span className={`size-1.5 rounded-full bg-current ${status === "Live" ? "animate-pulse-soft" : ""}`} />
      {status}
    </span>
  );
}
