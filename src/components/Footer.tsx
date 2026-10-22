import Link from "next/link";
import { company, products, solutions } from "@/content/site";
import { Icon } from "./Icon";
import { Logo } from "./Logo";

const columns = [
  {
    title: "Solutions",
    links: solutions.map((s) => ({ label: s.name, href: `/solutions/${s.slug}` })),
  },
  {
    title: "Products",
    links: [...products.map((p) => ({ label: p.name, href: `/products/${p.slug}` })), { label: "All products", href: "/products" }],
  },
  {
    title: "Company",
    links: [
      { label: "About Techpoint", href: "/company" },
      { label: "How we work", href: "/how-we-work" },
      { label: "Discuss a project", href: "/contact" },
      { label: "Privacy", href: "/privacy" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-night text-on-dark">
      <div className="grid-lines absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="container-x relative">
        <div className="grid gap-14 border-b border-night-line py-20 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo tone="light" className="h-9 w-auto" />
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-on-dark-muted">{company.description}</p>
            <div className="mt-8 space-y-3 text-[15px]">
              <a href={`mailto:${company.email}`} className="flex items-center gap-3 text-on-dark/80 transition-colors hover:text-on-dark">
                <Icon name="mail" className="size-4 text-brand-light" />
                {company.email}
              </a>
              <p className="flex items-center gap-3 text-on-dark/80">
                <Icon name="pin" className="size-4 text-brand-light" />
                {company.location} · Serving East Africa
              </p>
            </div>
          </div>
          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-7 lg:col-start-6">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="text-[13px] font-semibold text-on-dark-muted">{col.title}</p>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-[15px] text-on-dark/75 transition-colors hover:text-on-dark">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div aria-hidden="true" className="pointer-events-none select-none overflow-hidden pt-10">
          <p className="bg-gradient-to-b from-white/[0.1] to-transparent bg-clip-text text-center font-display text-[19vw] leading-[0.8] font-semibold tracking-[-0.05em] text-transparent">
            Techpoint
          </p>
        </div>

        <div className="flex flex-col gap-3 py-8 text-[13px] text-on-dark-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {company.name}. All rights reserved.</p>
          <p>{company.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
