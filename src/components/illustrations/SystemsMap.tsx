/**
 * Hero illustration: an organization's business modules connected through a
 * single integration layer, with data moving between them.
 */
const C = 300;
const R = 205;

const modules = [
  { label: "Finance", sub: "Ledger · AP/AR", angle: -90 },
  { label: "Inventory", sub: "Stock · warehouse", angle: -30 },
  { label: "Procurement", sub: "POs · suppliers", angle: 30 },
  { label: "Analytics", sub: "Reports · KPIs", angle: 90 },
  { label: "AI Assist", sub: "Docs · search", angle: 150 },
  { label: "People", sub: "HR · payroll", angle: 210 },
].map((m) => {
  const rad = (m.angle * Math.PI) / 180;
  return { ...m, x: C + R * Math.cos(rad), y: C + R * Math.sin(rad) };
});

const round = (n: number) => Math.round(n * 10) / 10;

export function SystemsMap({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 600" className={className} role="img" aria-labelledby="systems-map-title">
      <title id="systems-map-title">
        Diagram of business modules — finance, inventory, procurement, analytics, AI and people — connected through one integration layer
      </title>
      <defs>
        <radialGradient id="core-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#5B8CFF" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#5B8CFF" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="node-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.09" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.03" />
        </linearGradient>
      </defs>

      <circle cx={C} cy={C} r="180" fill="url(#core-glow)" />

      {/* Orbit rings */}
      <g className="animate-spin-slow" style={{ transformOrigin: "300px 300px", transformBox: "view-box" }}>
        <circle cx={C} cy={C} r="120" fill="none" stroke="#fff" strokeOpacity="0.1" strokeDasharray="2 6" />
        <circle cx={C + 120} cy={C} r="3" fill="#5B8CFF" />
      </g>
      <g className="animate-spin-slower" style={{ transformOrigin: "300px 300px", transformBox: "view-box" }}>
        <circle cx={C} cy={C} r="272" fill="none" stroke="#fff" strokeOpacity="0.07" strokeDasharray="1 9" />
        <circle cx={C} cy={C - 272} r="2.5" fill="#fff" fillOpacity="0.5" />
        <circle cx={C - 272} cy={C} r="2" fill="#5B8CFF" fillOpacity="0.7" />
      </g>
      <circle cx={C} cy={C} r={R} fill="none" stroke="#fff" strokeOpacity="0.06" />

      {/* Connections */}
      {modules.map((m, i) => {
        const d = `M${C} ${C} L${round(m.x)} ${round(m.y)}`;
        return (
          <g key={m.label}>
            <path d={d} stroke="#fff" strokeOpacity="0.12" strokeWidth="1" />
            <path d={d} stroke="#5B8CFF" strokeOpacity="0.8" strokeWidth="1.2" strokeDasharray="3 9" className="animate-flow" />
            <circle r="3.2" fill="#C9D8FF">
              <animateMotion dur={`${2.8 + (i % 3) * 0.6}s`} repeatCount="indefinite" begin={`${i * 0.45}s`} path={d} keyPoints={i % 2 ? "1;0" : "0;1"} keyTimes="0;1" calcMode="linear" />
              <animate attributeName="opacity" values="0;1;1;0" dur={`${2.8 + (i % 3) * 0.6}s`} repeatCount="indefinite" begin={`${i * 0.45}s`} />
            </circle>
          </g>
        );
      })}

      {/* Core */}
      <circle cx={C} cy={C} r="70" fill="#0B1220" stroke="#5B8CFF" strokeOpacity="0.5" />
      <circle cx={C} cy={C} r="58" fill="#0B1220" stroke="#fff" strokeOpacity="0.12" />
      <circle cx={C} cy={C} r="78" fill="none" stroke="#5B8CFF" strokeOpacity="0.25" className="animate-pulse-soft" />
      {/* Techpoint mark (reversed): the pill is the platform, the dot is the point */}
      <g transform={`translate(${C - 20.4} ${C + 11}) scale(0.3)`}>
        <rect x="7" y="-118" width="122" height="44" rx="22" fill="none" stroke="#5B8CFF" strokeWidth="14" />
        <circle cx="68" cy="-22" r="34" fill="#FFFFFF" />
        <circle cx="68" cy="-22" r="22" fill="#0B1220" />
        <circle cx="68" cy="-22" r="13" fill="#5B8CFF" />
      </g>
      <text x={C} y={C + 30} textAnchor="middle" fill="#F4F6FA" fillOpacity="0.55" fontSize="10" fontWeight="500" style={{ fontFamily: "var(--font-inter)" }}>
        Integration
      </text>

      {/* Modules */}
      {modules.map((m) => (
        <g key={m.label} transform={`translate(${round(m.x - 68)} ${round(m.y - 25)})`}>
          <rect width="136" height="50" rx="12" fill="#151D2E" />
          <rect width="136" height="50" rx="12" fill="url(#node-fill)" stroke="#fff" strokeOpacity="0.16" />
          <rect x="12" y="15" width="20" height="20" rx="6" fill="#5B8CFF" fillOpacity="0.18" stroke="#5B8CFF" strokeOpacity="0.5" />
          <circle cx="22" cy="25" r="3" fill="#5B8CFF" />
          <text x="42" y="23" fill="#F4F6FA" fontSize="13" fontWeight="600" letterSpacing="-0.2" style={{ fontFamily: "var(--font-inter-tight)" }}>
            {m.label}
          </text>
          <text x="42" y="38" fill="#F4F6FA" fillOpacity="0.45" fontSize="9.5" style={{ fontFamily: "var(--font-inter)" }}>
            {m.sub}
          </text>
        </g>
      ))}
    </svg>
  );
}
