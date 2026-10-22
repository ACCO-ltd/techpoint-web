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

export function SolutionDiagram({ type, className }: { type: "erp" | "app" | "integration" | "ai" | "lifecycle"; className?: string }) {
  switch (type) {
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
