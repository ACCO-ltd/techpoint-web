import type { Solution } from "@/content/site";
import { ErpMockup } from "./Mockups";

const mono = { fontFamily: "var(--font-inter)" };
const sans = { fontFamily: "var(--font-inter-tight)" };

/** Systems on the left and right exchanging data through a central integration hub. */
export function IntegrationDiagram({ className = "" }: { className?: string }) {
  const left = ["Banking", "Payments", "Messaging", "Legacy app"];
  const right = ["ERP", "Reporting", "Document store"];
  const ly = (i: number) => 60 + i * 80;
  const ry = (i: number) => 100 + i * 80;
  return (
    <svg viewBox="0 0 640 380" className={className} role="img" aria-label="Integration hub connecting external services to core business systems">
      {left.map((l, i) => {
        const d = `M150 ${ly(i)} C 230 ${ly(i)}, 240 190, 290 190`;
        return (
          <g key={l}>
            <path d={d} fill="none" stroke="#0B1220" strokeOpacity="0.15" strokeWidth="1.5" />
            <path d={d} fill="none" stroke="#1F5EFF" strokeWidth="1.5" strokeDasharray="3 9" className="animate-flow" />
            <rect x="20" y={ly(i) - 22} width="130" height="44" rx="10" fill="#fff" stroke="#0B1220" strokeOpacity="0.1" />
            <circle cx="42" cy={ly(i)} r="5" fill="#1F5EFF" />
            <text x="56" y={ly(i) + 4.5} fontSize="13" fontWeight="500" fill="#0B1220" style={sans}>{l}</text>
          </g>
        );
      })}
      {right.map((r, i) => {
        const d = `M350 190 C 400 190, 410 ${ry(i)}, 490 ${ry(i)}`;
        return (
          <g key={r}>
            <path d={d} fill="none" stroke="#0B1220" strokeOpacity="0.15" strokeWidth="1.5" />
            <path d={d} fill="none" stroke="#1F5EFF" strokeWidth="1.5" strokeDasharray="3 9" className="animate-flow" />
            <rect x="490" y={ry(i) - 22} width="130" height="44" rx="10" fill="#0B1220" />
            <circle cx="512" cy={ry(i)} r="5" fill="#5B8CFF" />
            <text x="526" y={ry(i) + 4.5} fontSize="13" fontWeight="500" fill="#F4F6FA" style={sans}>{r}</text>
          </g>
        );
      })}
      <circle cx="320" cy="190" r="48" fill="#E8EEFF" />
      <circle cx="320" cy="190" r="34" fill="#0B1220" />
      <path d="M306 182h28M320 182v18" stroke="#F4F6FA" strokeWidth="3.2" strokeLinecap="round" />
      <text x="320" y="262" textAnchor="middle" fontSize="12" fill="#5B6475" style={mono}>Validate · transform · log</text>
    </svg>
  );
}

/** A human-in-the-loop AI document workflow. */
export function AiPipelineDiagram({ className = "" }: { className?: string }) {
  const steps = [
    { t: "Intake", s: "Invoices, forms, requests" },
    { t: "AI extraction", s: "Fields, category, summary" },
    { t: "Human review", s: "Approve or correct" },
    { t: "System of record", s: "Posted with audit trail" },
  ];
  return (
    <div className={`grid gap-3 sm:grid-cols-4 ${className}`} role="img" aria-label="Documents flow through AI extraction and human review before reaching the system of record">
      {steps.map((st, i) => (
        <div key={st.t} className="relative">
          <div
            className={`h-full rounded-2xl p-5 ring-1 ${i === 2 ? "bg-ink text-on-dark ring-ink" : i === 1 ? "bg-brand-tint ring-brand/15" : "bg-white ring-ink/8"}`}
          >
            <p className={`text-[13px] font-semibold ${i === 2 ? "text-brand-light" : "text-brand"}`}>Step 0{i + 1}</p>
            <p className="mt-6 text-[18px] font-semibold tracking-tight">{st.t}</p>
            <p className={`mt-1 text-[13px] ${i === 2 ? "text-on-dark/70" : "text-ink-muted"}`}>{st.s}</p>
          </div>
          {i < steps.length - 1 && (
            <span className="absolute top-1/2 -right-3 z-10 hidden size-6 -translate-y-1/2 place-items-center rounded-full bg-surface text-brand ring-1 ring-ink/10 sm:grid">
              <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

/** The long-term relationship loop. */
export function LifecycleDiagram({ className = "", tone = "dark" }: { className?: string; tone?: "dark" | "light" }) {
  const stages = ["Discovery", "Delivery", "Adoption", "Support", "Improvement"];
  const cx = 250;
  const cy = 250;
  const r = 170;
  const light = tone === "light";
  return (
    <svg viewBox="0 0 500 500" className={className} role="img" aria-label="Continuous cycle: discovery, delivery, adoption, support and improvement">
      <circle cx={cx} cy={cy} r={r} fill="none" stroke={light ? "#fff" : "#0B1220"} strokeOpacity="0.12" strokeWidth="1.5" />
      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill="none"
        stroke="#1F5EFF"
        strokeWidth="1.5"
        strokeDasharray="3 10"
        className="animate-flow"
      />
      <circle r="5" fill="#5B8CFF">
        <animateMotion dur="14s" repeatCount="indefinite" path={`M${cx} ${cy - r} a${r} ${r} 0 1 1 -0.01 0`} />
      </circle>
      <circle cx={cx} cy={cy} r="92" fill={light ? "#151D2E" : "#E8EEFF"} />
      <text x={cx} y={cy - 6} textAnchor="middle" fontSize="20" fontWeight="600" letterSpacing="-0.4" fill={light ? "#F4F6FA" : "#0B1220"} style={sans}>
        Long-term
      </text>
      <text x={cx} y={cy + 18} textAnchor="middle" fontSize="20" fontWeight="600" letterSpacing="-0.4" fill={light ? "#F4F6FA" : "#0B1220"} style={sans}>
        partnership
      </text>
      {stages.map((s, i) => {
        const a = (-90 + i * 72) * (Math.PI / 180);
        const x = Math.round((cx + r * Math.cos(a)) * 10) / 10;
        const y = Math.round((cy + r * Math.sin(a)) * 10) / 10;
        return (
          <g key={s} transform={`translate(${x} ${y})`}>
            <rect x="-56" y="-17" width="112" height="34" rx="17" fill={light ? "#0B1220" : "#fff"} stroke={light ? "#1F5EFF" : "#0B1220"} strokeOpacity={light ? 0.5 : 0.12} />
            <text y="4.5" textAnchor="middle" fontSize="12.5" fontWeight="500" fill={light ? "#F4F6FA" : "#0B1220"} style={sans}>
              {s}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

/** Layered architecture of a custom application. */
export function AppStackDiagram({ className = "" }: { className?: string }) {
  const layers = [
    { t: "Interfaces", s: "Web · mobile-responsive · portals", c: "bg-white text-ink ring-ink/8" },
    { t: "Application logic", s: "Workflows · rules · approvals", c: "bg-brand-tint text-night ring-brand/15" },
    { t: "Data & security", s: "Roles · validation · audit trail", c: "bg-brand text-on-dark ring-brand" },
    { t: "Infrastructure", s: "Hosting · backups · monitoring", c: "bg-night text-on-dark ring-night" },
  ];
  return (
    <div className={`space-y-2.5 ${className}`} role="img" aria-label="Application architecture layers: interfaces, application logic, data and security, infrastructure">
      {layers.map((l, i) => (
        <div
          key={l.t}
          className={`flex items-center justify-between gap-4 rounded-2xl px-6 py-5 ring-1 ${l.c}`}
          style={{ marginInline: `${i * 14}px` }}
        >
          <span className="text-[18px] font-semibold tracking-tight">{l.t}</span>
          <span className="text-right font-mono text-[11px] tracking-[0.06em] opacity-70">{l.s}</span>
        </div>
      ))}
    </div>
  );
}

/** Office sites connecting securely to a cloud environment that replicates to a recovery site. */
export function CloudDiagram({ className = "" }: { className?: string }) {
  const sites = ["Head office", "Branches", "Field teams"];
  const sy = (i: number) => 90 + i * 100;
  const services = ["Applications", "Databases", "File storage"];
  return (
    <svg viewBox="0 0 640 380" className={className} role="img" aria-label="Office sites connect securely to a managed cloud environment, which is backed up to a separate recovery site">
      {sites.map((s, i) => {
        const d = `M150 ${sy(i)} C 210 ${sy(i)}, 210 190, 262 190`;
        return (
          <g key={s}>
            <path d={d} fill="none" stroke="#0B1220" strokeOpacity="0.15" strokeWidth="1.5" />
            <path d={d} fill="none" stroke="#1F5EFF" strokeWidth="1.5" strokeDasharray="3 9" className="animate-flow" />
            <rect x="20" y={sy(i) - 22} width="130" height="44" rx="10" fill="#fff" stroke="#0B1220" strokeOpacity="0.1" />
            <circle cx="42" cy={sy(i)} r="5" fill="#1F5EFF" />
            <text x="56" y={sy(i) + 4.5} fontSize="13" fontWeight="500" fill="#0B1220" style={sans}>{s}</text>
          </g>
        );
      })}
      <rect x="262" y="58" width="206" height="264" rx="18" fill="#0B1220" />
      <text x="282" y="88" fontSize="11" fill="#98A2B3" letterSpacing="0.6" style={mono}>MANAGED CLOUD</text>
      {services.map((s, i) => (
        <g key={s}>
          <rect x="282" y={104 + i * 56} width="166" height="42" rx="9" fill="#151D2E" stroke="#263047" />
          <circle cx="302" cy={125 + i * 56} r="4.5" fill="#2FD49E" className="animate-pulse-soft" />
          <text x="316" y={129.5 + i * 56} fontSize="13" fontWeight="500" fill="#F4F6FA" style={sans}>{s}</text>
        </g>
      ))}
      <text x="282" y="300" fontSize="11" fill="#98A2B3" style={mono}>Monitored · patched · encrypted</text>
      <path d="M468 190 H 508" stroke="#5B8CFF" strokeWidth="1.5" strokeDasharray="3 9" className="animate-flow" />
      <rect x="508" y="132" width="112" height="116" rx="14" fill="#E8EEFF" stroke="#1F5EFF" strokeOpacity="0.2" />
      <path d="M548 168 a16 16 0 1 1 -4 10.5" fill="none" stroke="#1F5EFF" strokeWidth="2" strokeLinecap="round" />
      <path d="M540 172 l4 6.5 6 -4.5" fill="none" stroke="#1F5EFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <text x="564" y="212" textAnchor="middle" fontSize="13" fontWeight="600" fill="#0B1220" style={sans}>Recovery site</text>
      <text x="564" y="230" textAnchor="middle" fontSize="11" fill="#5B6475" style={mono}>Tested restores</text>
      <text x="206" y="350" textAnchor="middle" fontSize="12" fill="#5B6475" style={mono}>Encrypted connections</text>
    </svg>
  );
}

/** Defence in depth: identity, network and application controls around protected data. */
export function SecurityDiagram({ className = "" }: { className?: string }) {
  const rings = [
    { r: 200, label: "Identity & access", fill: "#F4F6FA" },
    { r: 150, label: "Network & endpoints", fill: "#E8EEFF" },
    { r: 100, label: "Applications", fill: "#C9D7FF" },
  ];
  const c = 230;
  return (
    <div className={`grid items-center gap-8 lg:grid-cols-[1.2fr_1fr] ${className}`}>
      <svg viewBox="0 0 460 460" className="mx-auto w-full max-w-[440px]" role="img" aria-label="Layers of protection: identity and access, network and endpoints, and applications surround the organization's data">
        {rings.map((ring) => (
          <g key={ring.label}>
            <circle cx={c} cy={c} r={ring.r} fill={ring.fill} stroke="#0B1220" strokeOpacity="0.08" />
            <text x={c} y={c - ring.r + 30} textAnchor="middle" fontSize="13" fontWeight="600" fill="#0B1220" style={sans}>{ring.label}</text>
          </g>
        ))}
        <circle cx={c} cy={c} r="200" fill="none" stroke="#1F5EFF" strokeWidth="1.5" strokeDasharray="3 10" className="animate-flow" />
        <circle cx={c} cy={c} r="52" fill="#0B1220" />
        <path d={`M${c - 11} ${c - 2} v-7 a11 11 0 0 1 22 0 v7`} fill="none" stroke="#5B8CFF" strokeWidth="2.4" strokeLinecap="round" />
        <rect x={c - 16} y={c - 3} width="32" height="22" rx="5" fill="#5B8CFF" />
        <text x={c} y={c + 78} textAnchor="middle" fontSize="13" fontWeight="600" fill="#0B1220" style={sans}>Your data</text>
      </svg>
      <ol className="space-y-3">
        {[
          ["Identify", "Assets, risks and who needs access to what"],
          ["Protect", "Access control, hardening and encryption"],
          ["Detect", "Monitoring and alerts on unusual activity"],
          ["Respond", "A rehearsed plan with named responsibilities"],
          ["Recover", "Tested backups and documented restoration"],
        ].map(([t, d], i) => (
          <li key={t} className={`flex items-start gap-4 rounded-2xl p-4 ring-1 ${i === 1 ? "bg-ink text-on-dark ring-ink" : "bg-white ring-ink/8"}`}>
            <span className={`text-[13px] font-semibold tabular-nums ${i === 1 ? "text-brand-light" : "text-brand"}`}>0{i + 1}</span>
            <span>
              <span className="block text-[16px] font-semibold tracking-tight">{t}</span>
              <span className={`block text-[13px] ${i === 1 ? "text-on-dark/70" : "text-ink-muted"}`}>{d}</span>
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

/** Operational systems feeding a governed data model that serves dashboards and reports. */
export function DataDiagram({ className = "" }: { className?: string }) {
  const sources = ["Finance", "Sales", "Inventory", "People"];
  const sy = (i: number) => 70 + i * 80;
  const bars = [38, 56, 44, 72, 64, 88];
  return (
    <svg viewBox="0 0 640 380" className={className} role="img" aria-label="Finance, sales, inventory and people data flow into a governed data model that powers management dashboards and reports">
      {sources.map((s, i) => {
        const d = `M150 ${sy(i)} C 210 ${sy(i)}, 210 190, 250 190`;
        return (
          <g key={s}>
            <path d={d} fill="none" stroke="#0B1220" strokeOpacity="0.15" strokeWidth="1.5" />
            <path d={d} fill="none" stroke="#1F5EFF" strokeWidth="1.5" strokeDasharray="3 9" className="animate-flow" />
            <rect x="20" y={sy(i) - 22} width="130" height="44" rx="10" fill="#fff" stroke="#0B1220" strokeOpacity="0.1" />
            <circle cx="42" cy={sy(i)} r="5" fill="#1F5EFF" />
            <text x="56" y={sy(i) + 4.5} fontSize="13" fontWeight="500" fill="#0B1220" style={sans}>{s}</text>
          </g>
        );
      })}
      <rect x="250" y="120" width="150" height="140" rx="16" fill="#0B1220" />
      {[0, 1, 2].map((i) => (
        <ellipse key={i} cx="325" cy={156 + i * 22} rx="34" ry="9" fill="#151D2E" stroke="#5B8CFF" strokeOpacity="0.7" />
      ))}
      <text x="325" y="232" textAnchor="middle" fontSize="13" fontWeight="600" fill="#F4F6FA" style={sans}>Governed model</text>
      <text x="325" y="248" textAnchor="middle" fontSize="10.5" fill="#98A2B3" style={mono}>Definitions · quality</text>
      <path d="M400 190 H 440" stroke="#1F5EFF" strokeWidth="1.5" strokeDasharray="3 9" className="animate-flow" />
      <rect x="440" y="62" width="180" height="256" rx="16" fill="#fff" stroke="#0B1220" strokeOpacity="0.1" />
      <text x="460" y="92" fontSize="11" fill="#5B6475" letterSpacing="0.6" style={mono}>MANAGEMENT VIEW</text>
      <rect x="460" y="106" width="66" height="44" rx="8" fill="#E8EEFF" />
      <rect x="534" y="106" width="66" height="44" rx="8" fill="#F4F6FA" />
      <rect x="470" y="118" width="30" height="6" rx="3" fill="#1F5EFF" />
      <rect x="470" y="131" width="44" height="8" rx="4" fill="#0B1220" />
      <rect x="544" y="118" width="30" height="6" rx="3" fill="#98A2B3" />
      <rect x="544" y="131" width="40" height="8" rx="4" fill="#0B1220" />
      <line x1="460" y1="270" x2="600" y2="270" stroke="#0B1220" strokeOpacity="0.1" />
      {bars.map((h, i) => (
        <rect key={i} x={466 + i * 22} y={270 - h} width="14" height={h} rx="3" fill={i === bars.length - 1 ? "#1F5EFF" : "#C9D7FF"} />
      ))}
      <text x="460" y="298" fontSize="11" fill="#5B6475" style={mono}>Dashboards · reports</text>
    </svg>
  );
}

export function SolutionDiagram({ type, className }: { type: Solution["diagram"]; className?: string }) {
  switch (type) {
    case "cloud":
      return <CloudDiagram className={className} />;
    case "security":
      return <SecurityDiagram className={className} />;
    case "data":
      return <DataDiagram className={className} />;
    case "integration":
      return <IntegrationDiagram className={className} />;
    case "ai":
      return <AiPipelineDiagram className={className} />;
    case "lifecycle":
      return <LifecycleDiagram className={className} />;
    case "app":
      return <AppStackDiagram className={className} />;
    default:
      return <ErpMockup className={className} />;
  }
}
