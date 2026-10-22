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
import { industries, principles, problems, deliveryProcess, products, solutions } from "@/content/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientMarquee />
      <Problems />
      <Capabilities />
      <Industries />
      <Products />
      <Approach />
      <Trust />
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
            <Eyebrow tone="light">Enterprise Software · Business Systems · Applied AI</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 text-balance text-[40px] leading-[1.06] tracking-[-0.025em] sm:text-[52px] lg:text-[56px]">
              Enterprise technology, built around your <Accent>business.</Accent>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-on-dark-muted sm:text-xl">
              Techpoint Solutions helps organizations design, implement and evolve business software, connected systems and
              practical AI — and supports them long after launch.
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
                ["Discovery-led", "Requirements before code"],
                ["Secure by default", "Roles, audit, backups"],
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
  const [lead, ...rest] = solutions;
  return (
    <section className="bg-surface-raised py-24 sm:py-32">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <Reveal>
            <SectionHeading
              eyebrow="Solutions & capabilities"
              title={
                <>
                  From business challenges to <Accent>working systems.</Accent>
                </>
              }
            />
          </Reveal>
          <Reveal delay={100}>
            <Button href="/solutions" variant="ghost-dark">
              All solutions
            </Button>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
          <Reveal className="md:col-span-2 lg:row-span-2">
            <SolutionTile solution={lead} large />
          </Reveal>
          {rest.map((s, i) => (
            <Reveal key={s.slug} delay={(i + 1) * 70}>
              <SolutionTile solution={s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionTile({ solution: s, large }: { solution: (typeof solutions)[number]; large?: boolean }) {
  return (
    <Link
      href={`/solutions/${s.slug}`}
      className={`group relative isolate flex h-full flex-col justify-end overflow-hidden rounded-3xl bg-night p-7 text-on-dark ${large ? "min-h-[440px] sm:p-10 lg:min-h-[600px]" : "min-h-[290px]"}`}
    >
      <Image
        src={s.image}
        alt=""
        fill
        sizes={large ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, 50vw"}
        className="-z-20 object-cover opacity-55 transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-night via-night/75 to-night/10" aria-hidden="true" />
      <span className="absolute top-6 left-6 grid size-11 place-items-center rounded-2xl border border-white/15 bg-white/8 backdrop-blur-md sm:top-7 sm:left-7">
        <Icon name={s.icon} className="size-5 text-brand-light" />
      </span>
      <span className="absolute top-6 right-6 grid size-10 place-items-center rounded-full bg-surface text-night opacity-0 transition-all duration-500 group-hover:opacity-100 sm:top-7 sm:right-7">
        <Icon name="arrow-up-right" className="size-4" />
      </span>
      <h3 className={`font-semibold tracking-[-0.025em] ${large ? "text-[30px] leading-[1.15] tracking-[-0.025em] sm:text-[36px]" : "text-[20px] leading-tight tracking-[-0.02em]"}`}>{s.name}</h3>
      <p className={`mt-3 text-on-dark-muted ${large ? "max-w-md text-[18px] leading-relaxed" : "text-[15px] leading-relaxed"}`}>{s.short}</p>
      {large && (
        <ul className="mt-7 flex flex-wrap gap-2">
          {s.capabilities.slice(0, 5).map((c) => (
            <li key={c.title} className="rounded-full border border-white/15 bg-white/6 px-3 py-1.5 text-[12px] text-on-dark/85 backdrop-blur-sm">
              {c.title}
            </li>
          ))}
        </ul>
      )}
    </Link>
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
              intro="Our products demonstrate what we build and maintain — each with a clear purpose, audience and availability status."
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

function Trust() {
  return (
    <section className="bg-surface-raised py-24 sm:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionHeading
              eyebrow="Why organizations trust us"
              title="Evidence over slogans."
              intro="Trust comes from how we work, not from how loudly we claim it. These are the engineering commitments behind every system we deliver."
            />
          </Reveal>
          <Reveal delay={100} className="relative mt-10 aspect-[5/4] overflow-hidden rounded-3xl">
            <Image src="/images/team-laptops.jpg" alt="Engineering team collaborating on laptops" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
            <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-surface/95 p-5 backdrop-blur">
              <p className="text-[15px] leading-snug font-medium text-ink">
                Product walkthroughs and relevant delivery examples are shared during discovery — with client permission where required.
              </p>
            </div>
          </Reveal>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 80}>
              <div className="h-full rounded-3xl bg-white p-7 ring-1 ring-line transition-shadow duration-500 hover:shadow-[0_24px_48px_-24px_rgba(11,18,32,0.25)]">
                <span className="grid size-11 place-items-center rounded-2xl bg-ink text-brand-light">
                  <Icon name={p.icon} className="size-5" />
                </span>
                <h3 className="mt-6 text-[20px] font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Partnership() {
  return (
    <section className="bg-surface py-24 sm:py-32">
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
            <Button href="/solutions/implementation-support" variant="dark">
              Implementation & support
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
