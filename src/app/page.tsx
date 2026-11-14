import Image from "next/image";
import Link from "next/link";
import { LayerStack } from "@/components/home/LayerStack";
import { ScrollText } from "@/components/home/ScrollText";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { whatsappHref } from "@/components/WhatsAppButton";
import { clients, company, industries, principles, problems, products, type IconName } from "@/content/site";

export default function HomePage() {
  return (
    <div className="bg-white font-sans text-[17px] leading-[1.47] text-[#1d1d1f] [&_h1]:font-sans [&_h2]:font-sans [&_h3]:font-sans">
      <Hero />
      <Clients />
      <Layers />
      <Products />
      <Replace />
      <Industries />
      <Trust />
      <Company />
      <Delivery />
      <Closing />
    </div>
  );
}

/* ---------- shared pieces ---------- */

const h2 = "text-balance text-[34px] leading-[1.07] font-semibold tracking-[-0.035em] sm:text-[44px] lg:text-[56px]";
const sub = "text-pretty text-[19px] leading-[1.35] tracking-[-0.015em] text-[#6e6e73] sm:text-[21px] lg:text-[24px]";
const tile = "relative overflow-hidden rounded-[28px]";

function PillLink({ href, children, external }: { href: string; children: React.ReactNode; external?: boolean }) {
  const cls = "inline-flex h-[46px] items-center rounded-full bg-brand px-6 text-[17px] text-white transition-colors hover:bg-brand-strong";
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {children}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

function TextLink({ href, children, className = "", external }: { href: string; children: React.ReactNode; className?: string; external?: boolean }) {
  const cls = `inline-flex items-center gap-1 text-brand hover:underline ${className}`;
  const inner = (
    <>
      {children}
      <span aria-hidden="true">›</span>
    </>
  );
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {inner}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

function SectionIntro({ eyebrow, title, body }: { eyebrow: string; title: React.ReactNode; body?: string }) {
  return (
    <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-3.5 text-center">
      <p className="text-[15px] font-semibold tracking-[-0.01em] text-brand sm:text-[17px]">{eyebrow}</p>
      <h2 className={h2}>{title}</h2>
      {body && <p className={`${sub} max-w-[26em]`}>{body}</p>}
    </Reveal>
  );
}

/* ---------- sections ---------- */

function Hero() {
  return (
    <section className="overflow-hidden bg-gradient-to-b from-white from-55% to-[#f5f5f7] pt-28 sm:pt-36">
      <div className="scroll-hero container-x flex flex-col items-center gap-4 text-center">
        <Reveal load>
          <p className="text-[15px] font-semibold tracking-[-0.01em] text-brand sm:text-[17px]">Techpoint · Somalia and East Africa</p>
        </Reveal>
        <Reveal load delay={80}>
          <h1 className="text-balance text-[44px] leading-[1.04] font-semibold tracking-[-0.04em] sm:text-[68px] lg:text-[88px]">
            Technology that moves business forward.
          </h1>
        </Reveal>
        <Reveal load delay={160}>
          <p className={`${sub} max-w-[26em]`}>Software, secure infrastructure and practical AI for organizations that intend to grow.</p>
        </Reveal>
        <Reveal load delay={240} className="mt-2 flex flex-wrap items-center justify-center gap-x-7 gap-y-4">
          <PillLink href="/contact">Talk to our team</PillLink>
          <TextLink href="/solutions" className="text-[19px]">
            See what we do
          </TextLink>
        </Reveal>
      </div>
      <div className="mt-4 pb-10 sm:mt-2 md:pb-0">
        <LayerStack />
      </div>
    </section>
  );
}

function Clients() {
  return (
    <section aria-labelledby="clients-title" className="bg-[#f5f5f7] pt-4 pb-16 sm:pb-20">
      <div className="container-x flex flex-col items-center gap-7">
        <p id="clients-title" className="text-[14px] text-[#6e6e73]">
          Trusted by organizations across Somalia
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-12 gap-y-7 sm:gap-x-16">
          {clients.map((c) => {
            const height = Math.round(c.h * 0.72);
            return (
              <li key={c.name}>
                <Image
                  src={c.logo}
                  alt={c.name}
                  width={Math.round((c.w * height) / 360)}
                  height={height}
                  className={`w-auto grayscale ${c.name === "RBM" ? "opacity-70" : "opacity-55 brightness-0"}`}
                  style={{ height }}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

const layerTiles = [
  {
    kicker: "The foundation",
    name: "Cloud & security",
    body: "Migration, backup and recovery. Access control, data protection and incident response.",
    links: [
      { label: "Cloud", href: "/solutions/cloud-infrastructure" },
      { label: "Security", href: "/solutions/cybersecurity" },
    ],
    fill: "bg-[#1d1d1f]",
  },
  {
    kicker: "Reporting and insight",
    name: "Data",
    body: "Integration, management dashboards, reporting and governance leaders can trust.",
    links: [{ label: "Learn more", href: "/solutions/data-analytics" }],
    fill: "bg-brand",
  },
  {
    kicker: "Business systems",
    name: "Software",
    body: "ERP and business applications, web and mobile, and the integrations between them.",
    links: [{ label: "Learn more", href: "/solutions/software-development" }],
    fill: "bg-[#a9c1ff]",
  },
  {
    kicker: "Decision support",
    name: "AI & automation",
    body: "Document and workflow automation, and practical AI where it delivers measurable value.",
    links: [{ label: "Learn more", href: "/solutions/ai-automation" }],
    fill: "bg-white ring-[3px] ring-brand ring-inset",
  },
];

/** Small isometric stack with one layer lifted and filled. */
function MiniStack({ active, fill }: { active: number; fill: string }) {
  return (
    <div aria-hidden="true" className="relative mx-auto h-[210px] w-[260px] transition-transform duration-500 ease-out-expo group-hover:-translate-y-2">
      {[0, 1, 2, 3].map((i) => (
        <span
          key={i}
          className={`absolute left-[50px] size-40 rounded-[34px] [transform:rotateX(60deg)_rotateZ(45deg)] ${
            i === active ? `${fill} shadow-[0_30px_34px_-14px_rgba(31,94,255,0.5)]` : "bg-white/60 ring-[1.5px] ring-black/10 ring-inset"
          }`}
          style={{ top: 92 - i * 30 - (i === active ? 14 : 0) }}
        />
      ))}
    </div>
  );
}

function Layers() {
  return (
    <section className="bg-white py-16 sm:py-32">
      <div className="container-x max-w-[1148px]">
        <SectionIntro
          eyebrow="What we do"
          title={
            <>
              Four layers.
              <br />
              One accountable team.
            </>
          }
          body="Every organization's technology sits in these four layers. We work across all of them."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {layerTiles.map((l, i) => (
            <Reveal key={l.name} delay={(i % 2) * 90} className={`${tile} group flex flex-col items-center gap-2.5 bg-[#f5f5f7] px-7 pt-9 text-center sm:min-h-[480px] sm:px-12 sm:pt-12`}>
              <p className="text-[14px] font-semibold text-[#6e6e73]">{l.kicker}</p>
              <h3 className="text-[28px] leading-[1.1] font-semibold tracking-[-0.03em] sm:text-[32px]">{l.name}</h3>
              <p className="max-w-[20em] text-[17px] leading-[1.35] text-[#6e6e73] sm:text-[19px]">{l.body}</p>
              <p className="flex gap-5">
                {l.links.map((link) => (
                  <TextLink key={link.href} href={link.href}>
                    {link.label}
                  </TextLink>
                ))}
              </p>
              <div className="-mb-6 mt-auto scale-75 sm:mb-0 sm:scale-100">
                <MiniStack active={i} fill={l.fill} />
              </div>
            </Reveal>
          ))}
          <Reveal className={`${tile} flex flex-col gap-3 bg-[#f5f5f7] px-8 py-9 md:col-span-2 md:flex-row md:items-center md:gap-8 md:px-12`}>
            <h3 className="text-[28px] font-semibold tracking-[-0.03em] whitespace-nowrap sm:text-[32px]">Managed IT</h3>
            <p className="text-[17px] leading-[1.35] text-[#6e6e73] sm:text-[19px]">
              Strategy, procurement, support and training across every layer, for as long as you run the system.
            </p>
            <TextLink href="/solutions/it-consulting" className="whitespace-nowrap md:ml-auto">
              How we support you
            </TextLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function StatusDot({ status }: { status: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#6e6e73]">
      <span className={`size-[7px] rounded-full ${status === "Live" ? "bg-[#30b158]" : "bg-brand"}`} />
      {status}
    </span>
  );
}

function Products() {
  const [flagship, ...rest] = products;
  return (
    <section className="bg-[#f5f5f7] py-16 sm:py-32">
      <div className="container-x max-w-[1148px]">
        <SectionIntro
          eyebrow="Products"
          title={
            <>
              Software we build
              <br />
              and run ourselves.
            </>
          }
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          <div className={`${tile} flex flex-col items-center gap-3 bg-white px-6 pt-14 text-center md:col-span-2`}>
            <StatusDot status={flagship.status} />
            <h3 className={h2}>{flagship.name}</h3>
            <p className="text-[19px] leading-[1.3] text-[#6e6e73] sm:text-[22px]">{flagship.tagline}</p>
            <div className="mt-2 flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
              <PillLink href={`/products/${flagship.slug}`}>Explore {flagship.name}</PillLink>
              <TextLink href="/contact" className="text-[19px]">
                Book a demo
              </TextLink>
            </div>
            <div className="scroll-grow mt-10 w-full max-w-[900px]">
              <Image
                src="/products/sukaan-dashboard.png"
                alt="Sukaan dashboard showing apartments, occupancy and collections, with client details blurred"
                width={1017}
                height={640}
                sizes="(min-width: 960px) 900px, 100vw"
                className="h-auto w-full rounded-t-[18px] shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_40px_80px_-30px_rgba(0,0,0,0.35)]"
              />
            </div>
          </div>
          {rest.map((p, i) => (
            <Reveal key={p.slug} delay={i * 90} className={`${tile} flex flex-col items-center gap-3 bg-white px-8 py-10 text-center sm:min-h-[300px] sm:py-14`}>
              <StatusDot status={p.status} />
              <h3 className="text-[28px] leading-[1.1] font-semibold tracking-[-0.03em] sm:text-[32px]">{p.name}</h3>
              <p className="max-w-[19em] text-[17px] leading-[1.35] text-[#6e6e73] sm:text-[19px]">{p.tagline}</p>
              <TextLink href={`/products/${p.slug}`}>Learn more</TextLink>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const replacements = ["Entered once, used everywhere", "Routed, tracked and recorded", "Live figures from one source", "Staged migration with rollback"];

function Replace() {
  return (
    <section className="bg-white py-16 sm:py-32">
      <div className="container-x max-w-[1148px]">
        <ScrollText
          className="max-w-[19em] text-[30px] leading-[1.12] font-semibold tracking-[-0.035em] sm:text-[40px] lg:text-[48px]"
          segments={[
            { text: "Many organizations run on spreadsheets, paper and WhatsApp." },
            { text: "We replace them with one system your teams trust,", strong: true },
            { text: "and that keeps working as you grow." },
          ]}
        />
        <ul className="mt-10 grid gap-x-8 gap-y-8 sm:mt-16 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          {problems.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 70}>
              <h3 className="text-[21px] font-semibold tracking-[-0.02em]">{p.title}</h3>
              <p className="mt-2 text-[16px] text-[#6e6e73]">{p.body}</p>
              <p className="mt-3 text-[16px] font-medium text-brand">{replacements[i]}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

const sectors: { name: string; body: string; icon: IconName }[] = [
  { name: "Property", body: "Leases, rent collection, owner reporting and maintenance.", icon: "building" },
  ...industries.map((i) => ({ name: i.name, body: i.body, icon: i.name === "Construction" ? ("factory" as IconName) : i.icon })),
];

function Industries() {
  return (
    <section className="bg-[#f5f5f7] py-16 sm:py-32">
      <div className="container-x max-w-[1148px]">
        <SectionIntro eyebrow="Who we serve" title="Built for organizations with real operational complexity." />
        <ul className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-5 lg:grid-cols-5">
          {sectors.map((s, i) => (
            <Reveal as="li" key={s.name} delay={i * 60} className={`${tile} flex flex-col gap-2 bg-white p-5 last:col-span-2 sm:p-7 lg:last:col-span-1`}>
              <span className="mb-3 grid size-11 place-items-center rounded-2xl bg-brand-tint text-brand">
                <Icon name={s.icon} className="size-5" />
              </span>
              <h3 className="text-[19px] font-semibold tracking-[-0.02em]">{s.name}</h3>
              <p className="text-[15px] leading-[1.4] text-[#6e6e73]">{s.body}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

const trustTitles = ["Security as a default", "Your data stays yours", "Tested before it ships", "Documented and handed over"];
const trust = trustTitles.map((t) => principles.find((p) => p.title === t)).filter((p) => p !== undefined);

function Trust() {
  return (
    <section className="bg-white py-16 sm:py-32">
      <div className="container-x max-w-[1148px]">
        <SectionIntro eyebrow="Security and trust" title="Built in from the first line." body="These commitments apply to every system we deliver and every product we run." />
        <ul className="mt-10 grid gap-3 sm:mt-14 sm:grid-cols-2 sm:gap-5">
          {trust.map((p, i) => (
            <Reveal as="li" key={p.title} delay={(i % 2) * 90} className={`${tile} flex gap-5 bg-[#f5f5f7] p-8 sm:p-10`}>
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-white text-brand ring-1 ring-black/[0.06]">
                <Icon name={p.icon} className="size-[22px]" />
              </span>
              <div>
                <h3 className="text-[22px] font-semibold tracking-[-0.02em]">{p.title}</h3>
                <p className="mt-2 text-[17px] leading-[1.4] text-[#6e6e73]">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
        <p className="mt-8 text-center">
          <TextLink href="/how-we-work">How we work</TextLink>
        </p>
      </div>
    </section>
  );
}

const figures = [
  { value: clients.length, label: "organizations on our systems" },
  { value: products.length, label: "products built in-house" },
  { value: 4, label: "layers, one accountable team" },
];

function Company() {
  return (
    <section className="bg-[#f5f5f7] py-16 sm:py-32">
      <div className="container-x max-w-[1148px]">
        <SectionIntro
          eyebrow="The company"
          title={
            <>
              A team you can
              <br />
              call by name.
            </>
          }
        />
        <div className="mt-14 grid gap-5">
          <div className={`${tile} scroll-rise h-[380px] text-white sm:h-[560px]`}>
            <Image src="/images/team-laptops.jpg" alt="" fill sizes="(min-width: 1148px) 1100px, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 from-35% to-black/75" aria-hidden="true" />
            <div className="absolute inset-x-7 bottom-8 flex flex-col gap-4 sm:inset-x-14 sm:bottom-12 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
              <h3 className={`${h2} max-w-[10em]`}>Built here. Supported here.</h3>
              <p className="max-w-[22em] text-[17px] leading-[1.4] text-white/85 sm:text-[19px]">
                Based in {company.location} and working across East Africa. We agree success in writing, build in the open, and stay after launch.
              </p>
            </div>
          </div>
          <ul className="grid grid-cols-3 gap-3 sm:gap-5">
            {figures.map((f, i) => (
              <Reveal as="li" key={f.label} delay={i * 80} className={`${tile} bg-white px-2 py-7 text-center sm:px-5 sm:py-11`}>
                <span className="block text-[44px] leading-none font-semibold tracking-[-0.045em] sm:text-[80px]">{f.value}</span>
                <span className="mt-2 block text-[12.5px] leading-tight text-[#6e6e73] sm:text-[17px]">{f.label}</span>
              </Reveal>
            ))}
          </ul>
          <p className="mt-3 text-center">
            <TextLink href="/company">About Techpoint</TextLink>
          </p>
        </div>
      </div>
    </section>
  );
}

const phases = [
  { title: "Discover", body: "Objectives, users, systems and constraints, before anything is proposed." },
  { title: "Design", body: "Requirements and architecture your stakeholders sign off in plain language." },
  { title: "Build", body: "Short iterations, working software at every milestone, tested before go-live." },
  { title: "Run", body: "Training, monitoring and improvement for as long as you use the system." },
];

function Delivery() {
  return (
    <section className="bg-white py-16 sm:py-32">
      <div className="container-x max-w-[1148px]">
        <SectionIntro eyebrow="How we deliver" title="Four phases. No surprises." />
        <ol className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-5 lg:grid-cols-4">
          {phases.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 80} className={`${tile} bg-[#f5f5f7] px-5 py-6 sm:min-h-[230px] sm:px-7 sm:py-8`}>
              <span className="text-[15px] font-semibold text-brand">{i + 1}</span>
              <h3 className="mt-2.5 text-[26px] font-semibold tracking-[-0.03em]">{p.title}</h3>
              <p className="mt-2.5 text-[16px] text-[#6e6e73]">{p.body}</p>
            </Reveal>
          ))}
        </ol>
        <p className="mt-8 text-center">
          <TextLink href="/how-we-work">Our full delivery process</TextLink>
        </p>
      </div>
    </section>
  );
}

function Closing() {
  return (
    <section className="bg-[#f5f5f7] py-20 sm:py-36">
      <Reveal className="container-x flex flex-col items-center gap-4 text-center">
        <h2 className="text-balance text-[38px] leading-[1.05] font-semibold tracking-[-0.04em] sm:text-[56px] lg:text-[72px]">
          Let&apos;s talk about what your organization needs.
        </h2>
        <p className={`${sub} max-w-[26em]`}>The first conversation is about your requirements, and deciding together whether we&apos;re the right fit.</p>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-x-7 gap-y-4">
          <PillLink href="/contact">Talk to our team</PillLink>
          {whatsappHref && (
            <TextLink href={whatsappHref} external className="text-[19px]">
              Message us on WhatsApp
            </TextLink>
          )}
        </div>
        <p className="text-[14px] text-[#6e6e73]">Response within {company.responseTime}</p>
      </Reveal>
    </section>
  );
}
