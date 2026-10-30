"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { company, nav, solutions } from "@/content/site";
import { Icon } from "./Icon";
import { Logo } from "./Logo";

/** Desktop dropdown listing the six practices. Opens on hover and on keyboard focus. */
function SolutionsMenu() {
  return (
    <div className="invisible absolute top-full left-1/2 w-[720px] -translate-x-1/2 pt-4 opacity-0 transition-[opacity,visibility,translate] duration-300 group-focus-within/menu:visible group-focus-within/menu:opacity-100 group-hover/menu:visible group-hover/menu:opacity-100">
      <div className="overflow-hidden rounded-2xl bg-white text-ink shadow-[0_32px_64px_-24px_rgba(11,18,32,0.35)] ring-1 ring-line">
        <ul className="grid grid-cols-2 gap-1 p-3">
          {solutions.map((s) => (
            <li key={s.slug}>
              <Link href={`/solutions/${s.slug}`} className="group/item flex gap-4 rounded-xl p-4 transition-colors hover:bg-surface-raised">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-tint text-brand transition-colors group-hover/item:bg-ink group-hover/item:text-brand-light">
                  <Icon name={s.icon} className="size-[18px]" />
                </span>
                <span>
                  <span className="block text-[14px] leading-snug font-semibold tracking-tight">{s.name}</span>
                  <span className="mt-1 block text-[13px] leading-snug text-ink-muted">{s.short}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between border-t border-line bg-surface-raised px-7 py-4">
          <p className="text-[13px] text-ink-muted">{company.tagline}</p>
          <Link href="/solutions" className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand hover:text-brand-strong">
            All solutions
            <Icon name="arrow" className="size-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  // The menu is tied to the path it was opened on, so navigating closes it.
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const open = menuPath === pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuPath(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Pages without a dark hero keep the solid header from the start.
  const solid = (scrolled || pathname === "/contact") && !open;
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? "border-b border-line bg-white/90 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <div className="container-x flex h-[72px] items-center justify-between gap-6">
        <Link href="/" aria-label="Techpoint Solutions — home" className="relative z-10">
          <Logo tone={solid ? "dark" : "light"} className="h-8 w-auto sm:h-9" />
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center">
            {nav.map((item) => {
              const hasMenu = item.href === "/solutions";
              return (
                // Remounting the menu item on navigation drops focus, so the dropdown closes.
                <li key={hasMenu ? `${item.href}:${pathname}` : item.href} className={hasMenu ? "group/menu relative" : undefined}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={`relative inline-flex items-center gap-1 rounded-full px-3 py-2 text-[15px] font-medium tracking-[-0.01em] transition-colors xl:px-4 ${
                      solid
                        ? isActive(item.href)
                          ? "text-ink"
                          : "text-ink-soft hover:text-ink"
                        : isActive(item.href)
                          ? "text-on-dark"
                          : "text-on-dark/70 hover:text-on-dark"
                    }`}
                  >
                    {item.label}
                    {hasMenu && <Icon name="chevron" className="size-3.5 opacity-60 transition-transform group-hover/menu:rotate-180" />}
                    {isActive(item.href) && (
                      <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-brand xl:inset-x-4" aria-hidden="true" />
                    )}
                  </Link>
                  {hasMenu && <SolutionsMenu />}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className={`hidden h-10 items-center gap-2 rounded-full px-5 text-[14px] font-semibold transition-all duration-300 sm:inline-flex ${
              "bg-brand text-white hover:bg-brand-strong"
            }`}
          >
            Discuss a project
            <Icon name="arrow" className="size-3.5" />
          </Link>
          <button
            type="button"
            onClick={() => setMenuPath(open ? null : pathname)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className={`relative z-10 grid size-10 place-items-center rounded-full ring-1 ring-inset transition-colors lg:hidden ${
              solid ? "text-ink ring-ink/15" : "text-on-dark ring-white/20"
            }`}
          >
            <Icon name={open ? "close" : "menu"} className="size-5" />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`fixed inset-0 -z-10 bg-night transition-[opacity,visibility] duration-500 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="grid-lines absolute inset-0 opacity-60" aria-hidden="true" />
        <nav aria-label="Mobile" className="container-x relative flex h-full flex-col pt-28 pb-10">
          <ul className="space-y-1">
            {nav.map((item, i) => (
              <li
                key={item.href}
                className="transition-all duration-500"
                style={{ transitionDelay: open ? `${80 + i * 50}ms` : "0ms", opacity: open ? 1 : 0, transform: open ? "none" : "translateY(12px)" }}
              >
                <Link
                  href={item.href}
                  className="flex items-center justify-between border-b border-night-line py-5 font-display text-3xl font-semibold tracking-[-0.025em] text-on-dark"
                >
                  {item.label}
                  <Icon name="arrow" className="size-5 text-brand-light" />
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="mt-auto inline-flex h-14 items-center justify-center gap-2 rounded-full bg-brand text-[16px] font-semibold text-white"
          >
            Discuss a project
            <Icon name="arrow" className="size-4" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
