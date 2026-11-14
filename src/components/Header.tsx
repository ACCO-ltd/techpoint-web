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
  // The menu is tied to the path it was opened on, so navigating closes it.
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const open = menuPath === pathname;

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuPath(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-black/[0.08] ${
        open ? "bg-white" : "bg-white/90 backdrop-blur-xl backdrop-saturate-150"
      }`}
    >
      <div className="container-x flex h-14 items-center justify-between gap-6">
        <Link href="/" aria-label="Techpoint Solutions — home" className="relative z-10">
          <Logo tone="dark" className="h-7 w-auto" />
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
                    className={`inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-[14px] tracking-[-0.01em] transition-colors ${
                      isActive(item.href) ? "font-semibold text-[#1d1d1f]" : "text-[#1d1d1f]/75 hover:text-[#1d1d1f]"
                    }`}
                  >
                    {item.label}
                    {hasMenu && <Icon name="chevron" className="size-3.5 opacity-60 transition-transform group-hover/menu:rotate-180" />}
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
            className="hidden h-8 items-center rounded-full bg-brand px-4 text-[13px] font-medium text-white transition-colors hover:bg-brand-strong sm:inline-flex"
          >
            Talk to us
          </Link>
          <button
            type="button"
            onClick={() => setMenuPath(open ? null : pathname)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="relative z-10 grid size-10 place-items-center rounded-full text-[#1d1d1f] lg:hidden"
          >
            <Icon name={open ? "close" : "menu"} className="size-5" />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`fixed inset-x-0 top-14 bottom-0 bg-white transition-[opacity,visibility] duration-300 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="container-x flex h-full flex-col overflow-y-auto pt-6 pb-8">
          <ul>
            {nav.map((item, i) => (
              <li
                key={item.href}
                className="transition-all duration-500"
                style={{ transitionDelay: open ? `${60 + i * 40}ms` : "0ms", opacity: open ? 1 : 0, transform: open ? "none" : "translateY(10px)" }}
              >
                <Link
                  href={item.href}
                  className="flex items-center justify-between border-b border-black/[0.08] py-4 font-sans text-[26px] font-semibold tracking-[-0.03em] text-[#1d1d1f]"
                >
                  {item.label}
                  <Icon name="arrow" className="size-5 text-brand" />
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/contact" className="mt-auto inline-flex h-13 items-center justify-center rounded-full bg-brand py-4 text-[16px] font-medium text-white">
            Talk to our team
          </Link>
        </nav>
      </div>
    </header>
  );
}
