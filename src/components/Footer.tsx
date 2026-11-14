import Link from "next/link";
import { company, products, solutions } from "@/content/site";
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
      { label: "Our work", href: "/our-work" },
      { label: "Discuss a project", href: "/contact" },
      { label: "Privacy", href: "/privacy" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-black/[0.08] bg-[#f5f5f7] text-[13px] leading-relaxed text-[#6e6e73]">
      <div className="container-x py-12">
        <div className="grid gap-10 border-b border-black/[0.08] pb-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo tone="dark" className="h-7 w-auto" />
            <p className="mt-4 max-w-xs">{company.description}</p>
            <p className="mt-4 text-[#424245]">
              <a href={`mailto:${company.email}`} className="hover:text-[#1d1d1f] hover:underline">
                {company.email}
              </a>
              <br />
              {company.location} · Serving East Africa
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-8">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="font-semibold text-[#1d1d1f]">{col.title}</p>
                <ul className="mt-3 space-y-2">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-[#424245] hover:text-[#1d1d1f] hover:underline">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Copyright © {company.name}. All rights reserved.
          </p>
          <p>{company.positioning}</p>
        </div>
      </div>
    </footer>
  );
}
