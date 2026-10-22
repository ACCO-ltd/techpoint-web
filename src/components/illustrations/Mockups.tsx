/**
 * Coded product interface previews. These are illustrative compositions with
 * sample data; replace with real screenshots once approved for publication.
 */

function WindowChrome({ title, children, className = "" }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-black/8 bg-white shadow-[0_1px_0_rgba(255,255,255,0.6)_inset,0_40px_80px_-30px_rgba(11,18,32,0.45),0_12px_24px_-12px_rgba(11,18,32,0.2)] ${className}`}
    >
      <div className="flex h-9 items-center gap-2 border-b border-black/6 bg-[#F4F6FA] px-4">
        <span className="size-2.5 rounded-full bg-[#E2E6EE]" />
        <span className="size-2.5 rounded-full bg-[#E2E6EE]" />
        <span className="size-2.5 rounded-full bg-[#E2E6EE]" />
        <span className="ml-3 truncate rounded-md bg-white px-3 py-0.5 font-mono text-[10px] text-ink-muted ring-1 ring-black/5">{title}</span>
      </div>
      {children}
    </div>
  );
}

const bars = [38, 52, 44, 61, 57, 72, 66, 80, 74, 88, 83, 95];

export function ErpMockup({ className = "" }: { className?: string }) {
  return (
    <WindowChrome title="app.rukna / operations" className={className}>
      <div className="flex text-ink">
        <aside className="hidden w-40 shrink-0 border-r border-black/6 bg-[#F4F6FA] p-3 sm:block">
          <div className="mb-4 flex items-center gap-2 px-2 pt-1">
            <span className="size-5 rounded-md bg-ink" />
            <span className="text-[12px] font-semibold">Rukna</span>
          </div>
          {["Overview", "Finance", "Sales", "Inventory", "Procurement", "People", "Reports"].map((item, i) => (
            <div
              key={item}
              className={`mb-0.5 flex items-center gap-2 rounded-md px-2 py-1.5 text-[11px] ${i === 0 ? "bg-brand-tint font-medium text-ink" : "text-ink-muted"}`}
            >
              <span className={`size-1.5 rounded-full ${i === 0 ? "bg-brand" : "bg-black/15"}`} />
              {item}
            </div>
          ))}
        </aside>
        <div className="min-w-0 flex-1 p-4 sm:p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[13px] font-semibold tracking-tight">Operations overview</p>
              <p className="font-mono text-[9.5px] text-ink-muted">All branches · this quarter</p>
            </div>
            <span className="rounded-md bg-brand px-2.5 py-1 text-[10px] font-medium text-white">+ New invoice</span>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2.5 lg:grid-cols-4">
            {[
              ["Revenue", "$418.2k", "+8.4%"],
              ["Receivables", "$96.7k", "32 open"],
              ["Stock value", "$254.9k", "4 sites"],
              ["Open POs", "18", "6 awaiting"],
            ].map(([k, v, s]) => (
              <div key={k} className="rounded-lg border border-black/6 p-2.5">
                <p className="text-[9.5px] text-ink-muted">{k}</p>
                <p className="mt-1 text-[14px] font-semibold tracking-tight">{v}</p>
                <p className="font-mono text-[9px] text-brand">{s}</p>
              </div>
            ))}
          </div>
          <div className="mt-3 grid gap-2.5 lg:grid-cols-5">
            <div className="rounded-lg border border-black/6 p-3 lg:col-span-3">
              <div className="flex items-center justify-between">
                <p className="text-[10.5px] font-medium">Revenue by month</p>
                <p className="font-mono text-[9px] text-ink-muted">USD</p>
              </div>
              <div className="mt-3 flex h-24 items-end gap-1.5">
                {bars.map((h, i) => (
                  <div key={i} className="flex-1 rounded-t-[3px] bg-brand-tint" style={{ height: `${h}%` }}>
                    <div className="h-full rounded-t-[3px] bg-brand" style={{ opacity: 0.35 + (i / bars.length) * 0.65 }} />
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-lg border border-black/6 p-3 lg:col-span-2">
              <p className="text-[10.5px] font-medium">Approvals</p>
              {[
                ["PO-2041 · Cement", "Pending"],
                ["Leave · A. Hassan", "Approved"],
                ["PO-2038 · Steel", "Approved"],
              ].map(([t, s]) => (
                <div key={t} className="mt-2 flex items-center justify-between gap-2 border-t border-black/5 pt-2">
                  <span className="truncate text-[10px] text-ink-soft">{t}</span>
                  <span
                    className={`shrink-0 rounded-full px-1.5 py-0.5 font-mono text-[8px] ${s === "Pending" ? "bg-surface-raised text-ink-muted" : "bg-signal/10 text-[#00835C]"}`}
                  >
                    {s}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </WindowChrome>
  );
}

const payments = [
  ["Hodan Ali", "B2 · 4A", "EVC Plus", "$650", "RC-1043"],
  ["Abdi Warsame", "B1 · 2C", "eDahab", "$480", "RC-1042"],
  ["Nimco Yusuf", "B3 · 7B", "WaafiPay", "$720", "RC-1041"],
  ["Farah Osman", "B1 · 1A", "Cash", "$390", "RC-1040"],
] as const;

export function PmsMockup({ className = "" }: { className?: string }) {
  return (
    <WindowChrome title="app.sukaan / overview" className={className}>
      <div className="flex text-ink">
        <aside className="hidden w-40 shrink-0 border-r border-black/6 bg-[#F4F6FA] p-3 sm:block">
          <div className="mb-4 flex items-center gap-2 px-2 pt-1">
            <span className="size-5 rounded-md bg-brand" />
            <span className="text-[12px] font-semibold">Sukaan</span>
          </div>
          {["Overview", "Properties", "Tenants", "Invoices", "Payments", "Owners", "Maintenance", "Reports"].map((item, i) => (
            <div
              key={item}
              className={`mb-0.5 flex items-center gap-2 rounded-md px-2 py-1.5 text-[11px] ${i === 0 ? "bg-brand-tint font-medium text-ink" : "text-ink-muted"}`}
            >
              <span className={`size-1.5 rounded-full ${i === 0 ? "bg-brand" : "bg-black/15"}`} />
              {item}
            </div>
          ))}
        </aside>
        <div className="min-w-0 flex-1 p-4 sm:p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[13px] font-semibold tracking-tight">Portfolio overview</p>
              <p className="text-[9.5px] text-ink-muted">3 buildings · 126 units · this month</p>
            </div>
            <span className="rounded-md bg-brand px-2.5 py-1 text-[10px] font-medium text-white">+ Record payment</span>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2.5 lg:grid-cols-4">
            {[
              ["Occupancy", "94%", "118 of 126 units"],
              ["Collected", "$48.6k", "82% of billed"],
              ["Overdue", "$6.2k", "14 tenants"],
              ["Maintenance", "9 open", "3 urgent"],
            ].map(([k, v, s]) => (
              <div key={k} className="rounded-lg border border-black/6 p-2.5">
                <p className="text-[9.5px] text-ink-muted">{k}</p>
                <p className="mt-1 text-[14px] font-semibold tracking-tight">{v}</p>
                <p className="text-[9px] text-ink-muted">{s}</p>
              </div>
            ))}
          </div>
          <div className="mt-3 rounded-lg border border-black/6">
            <div className="flex items-center justify-between border-b border-black/6 px-3 py-2">
              <p className="text-[10.5px] font-medium">Recent payments</p>
              <p className="text-[9px] text-ink-muted">Reminders sent today: 32 SMS · 18 WhatsApp</p>
            </div>
            {payments.map(([tenant, unit, method, amount, receipt]) => (
              <div key={receipt} className="grid grid-cols-[1.4fr_0.8fr_1fr_0.7fr] items-center gap-2 border-b border-black/5 px-3 py-1.5 text-[10px] last:border-0 sm:grid-cols-[1.4fr_0.8fr_1fr_0.7fr_0.8fr]">
                <span className="truncate font-medium">{tenant}</span>
                <span className="text-ink-muted">{unit}</span>
                <span>
                  <span className="rounded-full bg-[#F4F6FA] px-1.5 py-0.5 text-[8.5px] text-ink-soft ring-1 ring-black/5">{method}</span>
                </span>
                <span className="text-right font-semibold tabular-nums">{amount}</span>
                <span className="hidden text-right font-mono text-[9px] text-ink-muted sm:block">{receipt}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </WindowChrome>
  );
}

export function InvoiceMockup({ className = "" }: { className?: string }) {
  return (
    <WindowChrome title="invoice-generator / INV-0142" className={className}>
      <div className="bg-[#F4F6FA] p-4 text-ink sm:p-5">
        <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-black/5">
          <div className="flex items-start justify-between">
            <div>
              <span className="block size-6 rounded-md bg-[#E2E6EE]" />
              <p className="mt-2 text-[11px] font-semibold">Horizon Trading Co.</p>
              <p className="text-[9px] text-ink-muted">Sample business</p>
            </div>
            <div className="text-right">
              <p className="text-[15px] font-semibold tracking-tight">Invoice</p>
              <p className="font-mono text-[9px] text-ink-muted">INV-0142</p>
            </div>
          </div>
          <div className="mt-4 border-t border-black/6 pt-2">
            {[
              ["Consulting services", "12 h", "$840.00"],
              ["System configuration", "1", "$450.00"],
              ["Training session", "2", "$300.00"],
            ].map(([d, q, a]) => (
              <div key={d} className="grid grid-cols-[1fr_auto_auto] gap-4 border-b border-black/5 py-1.5 text-[10px]">
                <span className="text-ink-soft">{d}</span>
                <span className="font-mono text-ink-muted">{q}</span>
                <span className="font-mono">{a}</span>
              </div>
            ))}
          </div>
          <div className="mt-2 flex justify-end">
            <div className="w-36 space-y-1 text-[10px]">
              <div className="flex justify-between text-ink-muted">
                <span>Subtotal</span>
                <span className="font-mono">$1,590.00</span>
              </div>
              <div className="flex justify-between border-t border-black/8 pt-1 font-semibold">
                <span>Total</span>
                <span className="font-mono">$1,590.00</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3 flex gap-2">
          <span className="rounded-md bg-ink px-2.5 py-1 text-[10px] font-medium text-on-dark">Download PDF</span>
          <span className="rounded-md px-2.5 py-1 text-[10px] font-medium text-ink-soft ring-1 ring-black/10">Share link</span>
        </div>
      </div>
    </WindowChrome>
  );
}

export function ProductMockup({ type, className }: { type: "erp" | "pms" | "invoice"; className?: string }) {
  if (type === "pms") return <PmsMockup className={className} />;
  if (type === "invoice") return <InvoiceMockup className={className} />;
  return <ErpMockup className={className} />;
}
