import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { ProductMockup } from "@/components/illustrations/Mockups";
import { Reveal } from "@/components/Reveal";
import { CtaBand, PageHero } from "@/components/sections";
import { Accent, StatusPill } from "@/components/ui";
import { products, type ProductStatus } from "@/content/site";

export const metadata: Metadata = {
  title: "Products",
  description: "Software built and operated by Techpoint Solutions — property management, ERP and business applications — with clear status and availability.",
  alternates: { canonical: "/products" },
};

const statusNotes: Record<ProductStatus, string> = {
  Live: "Available for use today.",
  Pilot: "Deployed with selected organizations.",
  "In development": "Being built; early-access conversations open.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Software portfolio"
        title={
          <>
            Products that show <Accent>what we build.</Accent>
          </>
        }
        intro="Each product addresses a specific operational need. We're clear about what's live, what's in pilot and what's still being built."
      >
        <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/10 pt-8">
          {(Object.keys(statusNotes) as ProductStatus[]).map((s) => (
            <li key={s} className="flex items-center gap-3">
              <StatusPill status={s} tone="light" />
              <span className="text-[14px] text-on-dark-muted">{statusNotes[s]}</span>
            </li>
          ))}
        </ul>
      </PageHero>

      <section className="bg-surface pt-20 sm:pt-28">
        <div className="container-x grid gap-4 md:grid-cols-2">
          <Reveal className="h-full rounded-4xl bg-ink p-8 text-on-dark sm:p-10">
            <span className="grid size-11 place-items-center rounded-2xl bg-brand-light/10 text-brand-light ring-1 ring-brand-light/20">
              <Icon name="box" className="size-5" />
            </span>
            <h2 className="mt-8 text-[24px] font-semibold tracking-tight">Techpoint products</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-on-dark-muted">
              Software we own, build and operate ourselves. You subscribe to a working product, configured for your organization, with
              setup, data migration and training from our team.
            </p>
          </Reveal>
          <Reveal delay={80} className="h-full rounded-4xl bg-surface-raised p-8 ring-1 ring-line sm:p-10">
            <span className="grid size-11 place-items-center rounded-2xl bg-brand-tint text-brand">
              <Icon name="briefcase" className="size-5" />
            </span>
            <h2 className="mt-8 text-[24px] font-semibold tracking-tight">Solutions & services</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
              Consulting, implementation and managed services across our six practices, delivered for systems you own.{" "}
              <Link href="/solutions" className="font-semibold text-brand hover:text-brand-strong">
                Explore solutions
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface py-20 sm:py-28">
        <div className="container-x space-y-6">
          {products.map((p, i) => (
            <Reveal key={p.slug}>
              <Link
                href={`/products/${p.slug}`}
                className="group grid items-center gap-10 overflow-hidden rounded-4xl bg-surface-raised p-8 ring-1 ring-line transition-shadow duration-500 hover:shadow-[0_40px_80px_-40px_rgba(11,18,32,0.35)] sm:p-12 lg:grid-cols-12"
              >
                <div className={`lg:col-span-5 ${i % 2 ? "lg:order-2 lg:col-start-8" : ""}`}>
                  <div className="flex flex-wrap items-center gap-3">
                    <StatusPill status={p.status} />
                    <span className="text-[13px] font-semibold text-ink-muted">{p.category}</span>
                  </div>
                  <h2 className="mt-6 text-[30px] leading-[1.15] tracking-[-0.025em] sm:text-[36px]">{p.name}</h2>
                  <p className="mt-1 text-[18px] text-ink-muted">{p.tagline}</p>
                  <p className="mt-6 text-[15px] leading-relaxed text-ink-muted">{p.summary}</p>
                  <p className="mt-6 text-[13px] font-semibold text-ink-muted">For: {p.audiences.join(" · ")}</p>
                  <span className="mt-10 inline-flex items-center gap-2 text-[15px] font-medium text-brand">
                    View product details
                    <Icon name="arrow" className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
                <div className={`lg:col-span-7 ${i % 2 ? "lg:order-1 lg:col-start-1" : ""}`}>
                  <ProductMockup product={p} className="transition-transform duration-700 group-hover:-translate-y-1.5" />
                </div>
              </Link>
            </Reveal>
          ))}
          <p className="pt-2 text-[13px] font-semibold text-ink-muted">Sukaan is shown from the live product, with client details blurred. Other previews are illustrative and use sample data.</p>
        </div>
      </section>

      <CtaBand
        title="Need a product tailored to your organization?"
        body="Our products can be configured, integrated and extended — or used as a starting point for a solution built around your workflows."
        cta="Request a demo"
        href="/contact?topic=product"
      />
    </>
  );
}
