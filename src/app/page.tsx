import Image from "next/image";
import Link from "next/link";
import { ClientMarquee } from "@/components/ClientLogos";
import { Icon } from "@/components/Icon";
import { LifecycleDiagram } from "@/components/illustrations/Diagrams";
import { ProductMockup } from "@/components/illustrations/Mockups";
import { SystemsMap } from "@/components/illustrations/SystemsMap";
import { Reveal } from "@/components/Reveal";
import { CheckList, CtaBand } from "@/components/sections";
import { Accent, Button, Eyebrow, SectionHeading, StatusPill } from "@/components/ui";
import { company, deliveryProcess, differentiators, industries, problems, products, solutions } from "@/content/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientMarquee />
      <Problems />
      <Capabilities />
      <Difference />
      <Industries />
      <Products />
      <Approach />
      <Partnership />
      <CtaBand />
    </>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-night text-on-dark">
      <div className="grid-lines absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_70%_40%,black_20%,transparent_75%)]" aria-hidden="true" />
      <div
        className="absolute top-[-20%] right-[-10%] -z-10 size-[60rem] rounded-full bg-[radial-gradient(circle,rgba(91,140,255,0.16),transparent_60%)]"
        aria-hidden="true"
      />
      <div className="container-x grid min-h-[100svh] items-center gap-12 pt-32 pb-20 lg:grid-cols-12 lg:gap-6 lg:pt-28">
        <div className="lg:col-span-6 xl:col-span-6">
          <Reveal>
            <Eyebrow tone="light">{company.positioning}</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 text-balance text-[44px] leading-[1.04] tracking-[-0.03em] sm:text-[56px] lg:text-[64px]">
              Technology that moves business <Accent>forward.</Accent>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-on-dark-muted sm:text-xl">
              We help organizations modernize operations, strengthen digital capabilities, manage risk and grow sustainably — with
              dependable software, secure infrastructure and practical AI.
            </p>
          </Reveal>
          <Reveal delay={240} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact" className="h-14 px-8 text-base">
              Discuss a project
            </Button>
            <Button href="/solutions" variant="ghost-light" className="h-14 px-8 text-base">
              Explore our solutions
            </Button>
          </Reveal>
          <Reveal delay={320}>
            <dl className="mt-14 grid max-w-xl grid-cols-3 gap-6 border-t border-white/10 pt-8">
              {[
                ["Outcome-led", "Success agreed up front"],
                ["Secure by design", "Access, audit, recovery"],
                ["Long-term", "Support beyond launch"],
              ].map(([t, d]) => (
                <div key={t}>
                  <dt className="text-[15px] font-semibold tracking-tight">{t}</dt>
                  <dd className="mt-1 text-[13px] leading-snug text-on-dark-muted">{d}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative lg:col-span-6 xl:col-span-6">
          <div className="relative mx-auto w-full max-w-[620px]">
            <SystemsMap className="h-auto w-full" />
            <div className="absolute top-[2%] -left-4 hidden animate-float rounded-xl border border-white/12 bg-night/80 px-4 py-3 shadow-2xl backdrop-blur-md sm:block">
              <p className="flex items-center gap-2 text-[12px] font-medium">
                <span className="grid size-5 place-items-center rounded-full bg-brand-light/20 text-brand-light">
                  <Icon name="check" className="size-3" />
                </span>
                Invoice posted to ledger
              </p>
              <p className="mt-1 pl-7 text-[12px] text-on-dark-muted">Sales → Finance · 0.4s</p>
            </div>
            <div
              className="absolute -right-4 bottom-[1%] hidden animate-float rounded-xl border border-white/12 bg-night/80 px-4 py-3 shadow-2xl backdrop-blur-md sm:block"
              style={{ animationDelay: "-4s" }}
            >
              <p className="flex items-center gap-2 text-[12px] font-medium">
                <span className="size-2 rounded-full bg-brand-light animate-pulse-soft" />
                Approval routed · PO-2041
              </p>
              <p className="mt-1 pl-4 text-[12px] text-on-dark-muted">Procurement → Finance lead</p>
            </div>
          </div>
          <p className="mt-2 text-center text-[13px] font-semibold text-on-dark-muted">
            One connected operating system for your organization
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Problems() {
  return (
    <section className="relative bg-surface py-24 sm:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <Reveal>
              <SectionHeading
                eyebrow="The problems we solve"
                title={
                  <>
                    Technology should solve <Accent>real</Accent> operational problems.
                  </>
                }
                intro="Many organizations run critical work across disconnected tools, manual processes and fragmented information. We design connected, maintainable systems around the way your business actually operates."
              />
            </Reveal>
            <Reveal delay={120} className="relative mt-10 hidden aspect-[4/3] overflow-hidden rounded-3xl lg:block">
              <Image src="/images/whiteboard.jpg" alt="Engineer mapping a business workflow on a whiteboard" fill sizes="40vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-night/50 to-transparent" />
            </Reveal>
          </div>
        </div>
        <ol className="lg:col-span-6 lg:col-start-7">
          {problems.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 60} className="group border-t border-line py-10 first:border-t-0 first:pt-0 lg:first:pt-4">
              <div className="flex items-start gap-6">
                <span className="text-[13px] font-semibold tabular-nums text-ink-muted">0{i + 1}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-4">
                    <span className="grid size-12 place-items-center rounded-2xl bg-brand-tint text-brand transition-colors duration-500 group-hover:bg-ink group-hover:text-on-dark">
                      <Icon name={p.icon} className="size-5.5" />
                    </span>
                    <h3 className="text-[22px] leading-[1.25] tracking-[-0.02em] sm:text-[24px]">{p.title}</h3>
                  </div>
                  <p className="mt-5 max-w-lg text-[18px] leading-relaxed text-ink-muted">{p.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
          <Reveal className="mt-4 rounded-3xl bg-ink p-8 text-on-dark">
            <p className="text-[20px] leading-snug font-medium tracking-tight">
              Our job is to replace that friction with systems your teams trust — and that keep working as you grow.
            </p>
            <Link href="/how-we-work" className="mt-5 inline-flex items-center gap-2 text-[15px] font-medium text-brand-light hover:text-on-dark">
              See how we approach a project
              <Icon name="arrow" className="size-4" />
            </Link>
          </Reveal>
        </ol>
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section className="bg-surface-raised py-24 sm:py-32">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <Reveal>
            <SectionHeading
              eyebrow="Six strategic practices"
              title={
                <>
                  One partner across your <Accent>entire technology estate.</Accent>
                </>
              }
              intro="From the infrastructure your systems run on to the data your leaders decide with — six practices, delivered by one accountable team."
            />
          </Reveal>
          <Reveal delay={100}>
            <Button href="/solutions" variant="ghost-dark">
              All solutions
            </Button>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 70} className="h-full">
              <SolutionTile solution={s} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionTile({ solution: s, index }: { solution: (typeof solutions)[number]; index: number }) {
  return (
    <Link
      href={`/solutions/${s.slug}`}
      className="group relative isolate flex h-full min-h-[380px] flex-col overflow-hidden rounded-3xl bg-night p-7 text-on-dark sm:p-8"
    >
      <Image
        src={s.image}
        alt=""
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        className="-z-20 object-cover opacity-40 transition-[transform,opacity] duration-[1.2s] ease-out group-hover:scale-[1.06] group-hover:opacity-30"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-night via-night/85 to-night/30" aria-hidden="true" />
      <div className="flex items-start justify-between">
        <span className="grid size-11 place-items-center rounded-2xl border border-white/15 bg-white/8 backdrop-blur-md">
          <Icon name={s.icon} className="size-5 text-brand-light" />
        </span>
        <span className="text-[13px] font-semibold tabular-nums text-on-dark-muted">
          0{index + 1} / 0{solutions.length}
        </span>
      </div>
      <div className="mt-auto pt-16">
        <h3 className="text-[22px] leading-[1.2] font-semibold tracking-[-0.02em]">{s.name}</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-on-dark-muted">{s.short}</p>
        <span className="mt-6 inline-flex items-center gap-2 text-[14px] font-semibold text-brand-light transition-colors group-hover:text-on-dark">
          Explore the practice
          <Icon name="arrow" className="size-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

/** Corporate profile, page 13: our difference is how we deliver, not simply what we sell. */
function Difference() {
  return (
    <section className="relative isolate overflow-hidden bg-night py-24 text-on-dark sm:py-32">
      <div className="grid-lines absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,black,transparent)]" aria-hidden="true" />
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <SectionHeading
              tone="light"
              eyebrow="Why Techpoint"
              title={
                <>
                  Our difference is how we deliver, <Accent>not simply what we sell.</Accent>
                </>
              }
            />
          </Reveal>
          <Reveal delay={100} className="lg:col-span-5">
            <p className="text-[18px] leading-relaxed text-on-dark-muted">
              Many firms can supply technology. We are accountable for whether it works for your organization — from the first
              requirement to years of support after launch.
            </p>
          </Reveal>
        </div>
        <ol className="mt-16 grid gap-px overflow-hidden rounded-3xl bg-night-line ring-1 ring-night-line sm:grid-cols-2 lg:grid-cols-5">
          {differentiators.map((d, i) => (
            <Reveal as="li" key={d.title} delay={i * 60} className="group flex flex-col bg-night p-7 transition-colors duration-500 hover:bg-night-raised">
              <div className="flex items-center justify-between">
                <span className="grid size-11 place-items-center rounded-2xl bg-brand-light/10 text-brand-light ring-1 ring-brand-light/20">
                  <Icon name={d.icon} className="size-5" />
                </span>
                <span className="text-[13px] font-semibold tabular-nums text-on-dark-muted">0{i + 1}</span>
              </div>
              <h3 className="mt-10 text-[19px] leading-snug font-semibold tracking-tight">{d.title}</h3>
              <p className="mt-2.5 text-[14px] leading-relaxed text-on-dark-muted">{d.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Industries() {
  return (
    <section className="bg-surface py-24 sm:py-32">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow="Who we serve"
            title="Built for organizations with real operational complexity."
            intro="We focus on sectors where dependable systems make a measurable difference to daily operations — across Somalia and East Africa, with delivery standards suited to international clients."
          />
        </Reveal>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind, i) => (
            <Reveal key={ind.name} delay={i * 70} className="h-full">
              <article className="group h-full overflow-hidden rounded-3xl bg-white ring-1 ring-line">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={ind.image} alt="" fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover transition-transform duration-[1.2s] group-hover:scale-105" />
                  <span className="absolute bottom-4 left-4 grid size-10 place-items-center rounded-xl bg-surface/95 text-ink shadow-lg backdrop-blur">
                    <Icon name={ind.icon} className="size-5" />
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-[20px] font-semibold tracking-tight">{ind.name}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">{ind.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Products() {
  const [featured, ...others] = products;
  return (
    <section className="relative isolate overflow-hidden bg-night py-24 text-on-dark sm:py-32">
      <div className="grid-lines absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" aria-hidden="true" />
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <Reveal>
            <SectionHeading
              tone="light"
              eyebrow="Software portfolio"
              title={
                <>
                  Purpose-built products. <Accent>One engineering mindset.</Accent>
                </>
              }
              intro="Alongside consulting and implementation, we build and operate our own software. Each product has a clear purpose, audience and availability status."
            />
          </Reveal>
          <Reveal delay={100}>
            <Button href="/products" variant="ghost-light">
              View portfolio
            </Button>
          </Reveal>
        </div>

        <Reveal className="mt-16">
          <Link
            href={`/products/${featured.slug}`}
            className="group grid overflow-hidden rounded-4xl border border-white/10 bg-gradient-to-br from-ink/80 to-night/60 lg:grid-cols-12"
          >
            <div className="flex flex-col p-8 sm:p-12 lg:col-span-5">
              <div className="flex items-center gap-3">
                <StatusPill status={featured.status} tone="light" />
                <span className="text-[13px] font-semibold text-on-dark-muted">{featured.category}</span>
              </div>
              <h3 className="mt-8 text-[30px] leading-[1.15] tracking-[-0.025em] sm:text-[36px]">{featured.name}</h3>
              <p className="mt-1 text-[18px] text-on-dark-muted">{featured.tagline}</p>
              <p className="mt-6 text-[15px] leading-relaxed text-on-dark-muted">{featured.summary}</p>
              <span className="mt-auto inline-flex items-center gap-2 pt-10 text-[15px] font-medium text-on-dark">
                Explore {featured.name}
                <Icon name="arrow" className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
            <div className="relative px-6 pb-0 sm:px-12 lg:col-span-7 lg:pt-12 lg:pr-0">
              <ProductMockup
                product={featured}
                className="translate-y-6 transition-transform duration-700 group-hover:translate-y-2 lg:rounded-r-none"
              />
            </div>
          </Link>
        </Reveal>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {others.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <Link
                href={`/products/${p.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-4xl border border-white/10 bg-white/[0.035] transition-colors hover:bg-white/[0.06]"
              >
                <div className="p-8 sm:p-10">
                  <div className="flex items-center gap-3">
                    <StatusPill status={p.status} tone="light" />
                    <span className="text-[13px] font-semibold text-on-dark-muted">{p.category}</span>
                  </div>
                  <h3 className="mt-6 text-[22px] leading-[1.25] tracking-[-0.02em] sm:text-[24px]">{p.name}</h3>
                  <p className="mt-3 max-w-md text-[15px] leading-relaxed text-on-dark-muted">{p.summary}</p>
                </div>
                <div className="mt-auto px-8 sm:px-10">
                  <ProductMockup product={p} className="translate-y-4 rounded-b-none transition-transform duration-700 group-hover:translate-y-1" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-[13px] font-semibold text-on-dark-muted">Sukaan is shown from the live product, with client details blurred. Other previews are illustrative and use sample data.</p>
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section className="bg-surface py-24 sm:py-32">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <Reveal>
            <SectionHeading
              eyebrow="How we work"
              title={
                <>
                  A disciplined approach <Accent>from day one.</Accent>
                </>
              }
              intro="Every engagement follows a clear delivery lifecycle, so you always know what is happening, what comes next and what you will receive."
            />
          </Reveal>
          <Reveal delay={100}>
            <Button href="/how-we-work" variant="ghost-dark">
              Our delivery process
            </Button>
          </Reveal>
        </div>
        <ol className="mt-16 grid gap-px overflow-hidden rounded-3xl bg-line ring-1 ring-line sm:grid-cols-2 lg:grid-cols-4">
          {deliveryProcess.map((step, i) => (
            <Reveal as="li" key={step.n} delay={(i % 4) * 70} className="group relative bg-surface p-7 transition-colors duration-500 hover:bg-white sm:p-8">
              <div className="flex items-center justify-between">
                <span className="text-[13px] font-semibold tabular-nums text-brand">{step.n}</span>
                <span className="grid size-10 place-items-center rounded-xl bg-brand-tint text-brand transition-all duration-500 group-hover:bg-ink group-hover:text-on-dark">
                  <Icon name={step.icon} className="size-[18px]" />
                </span>
              </div>
              <h3 className="mt-10 text-[20px] font-semibold tracking-[-0.025em]">{step.title}</h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-ink-muted">{step.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Partnership() {
  return (
    <section className="bg-surface-raised py-24 sm:py-32">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        <Reveal className="order-2 lg:order-1">
          <LifecycleDiagram className="mx-auto w-full max-w-[520px]" />
        </Reveal>
        <div className="order-1 lg:order-2">
          <Reveal>
            <SectionHeading
              eyebrow="Beyond launch"
              title={
                <>
                  A technology partner, <Accent>not a one-off vendor.</Accent>
                </>
              }
              intro="Business systems are never really finished. We stay involved after go-live — keeping your systems healthy, secure and aligned with how your organization is changing."
            />
          </Reveal>
          <Reveal delay={100}>
            <CheckList
              className="mt-10"
              items={[
                "Monitoring, maintenance and security updates",
                "Enhancements prioritized with your stakeholders",
                "New integrations as your ecosystem grows",
                "Training for new staff and new modules",
              ]}
            />
          </Reveal>
          <Reveal delay={160} className="mt-10">
            <Button href="/solutions/it-consulting" variant="dark">
              Managed technology services
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
