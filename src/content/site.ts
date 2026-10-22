/**
 * Single source of truth for Techpoint's public content.
 *
 * Anything marked `CONFIRM` is a working assumption that must be verified
 * before launch (see the launch checklist in README.md). Do not add client
 * logos, testimonials, statistics or outcomes unless they are approved and
 * verifiable.
 */

export const company = {
  name: "Techpoint Solutions",
  shortName: "Techpoint",
  tagline: "Innovation in motion",
  description:
    "Techpoint Solutions helps organizations design, implement and evolve enterprise software, connected business systems and practical AI.",
  // CONFIRM: production domain
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://techpoint.so",
  email: "info@techpoint.so",
  // CONFIRM: city / registered address and phone before publishing them
  location: "Somalia",
  serviceArea: "Somalia and East Africa, with remote delivery for international clients",
  // CONFIRM: only publish a response commitment the team can keep
  responseTime: "two business days",
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "Products", href: "/products" },
  { label: "How we work", href: "/how-we-work" },
  { label: "Company", href: "/company" },
] as const;

export type IconName =
  | "layers"
  | "code"
  | "link"
  | "spark"
  | "shield"
  | "server"
  | "chart"
  | "users"
  | "box"
  | "cart"
  | "book"
  | "doc"
  | "flow"
  | "check"
  | "clock"
  | "lock"
  | "compass"
  | "wrench"
  | "graduation"
  | "building"
  | "truck"
  | "factory"
  | "briefcase";

export type Solution = {
  slug: string;
  icon: IconName;
  name: string;
  short: string;
  headline: string;
  intro: string;
  image: string;
  imageAlt: string;
  signals: string[];
  capabilities: { title: string; body: string; icon: IconName }[];
  deliverables: string[];
  idealFor: string[];
  diagram: "erp" | "app" | "integration" | "ai" | "lifecycle";
};

export const solutions: Solution[] = [
  {
    slug: "enterprise-systems",
    icon: "layers",
    name: "Enterprise systems & ERP",
    short:
      "Finance, HR, procurement, inventory and operations brought into one dependable system of record.",
    headline: "One system of record for how your organization actually runs.",
    intro:
      "We implement and tailor enterprise business systems that replace spreadsheets and disconnected tools with controlled, auditable workflows — from the general ledger to the warehouse floor.",
    image: "/images/warehouse.jpg",
    imageAlt: "Distribution warehouse with organized inventory shelving",
    signals: [
      "Month-end close depends on spreadsheets passed between people",
      "Stock levels, purchases and sales live in different tools",
      "Approvals happen over chat and email with no audit trail",
      "Management reporting takes days to assemble by hand",
    ],
    capabilities: [
      { icon: "chart", title: "Finance & accounting", body: "Chart of accounts, receivables, payables, budgeting and financial reporting with clear controls." },
      { icon: "users", title: "HR & payroll", body: "Employee records, attendance, leave, payroll runs and role-based self-service." },
      { icon: "cart", title: "Procurement", body: "Requisitions, approvals, purchase orders and supplier management with full traceability." },
      { icon: "box", title: "Inventory & warehouse", body: "Multi-location stock, movements, valuation and reorder visibility." },
      { icon: "doc", title: "Sales & invoicing", body: "Quotations, orders, invoicing and customer statements connected to finance." },
      { icon: "shield", title: "Controls & audit", body: "Role-based permissions, approval chains and activity history across modules." },
    ],
    deliverables: [
      "Process mapping and gap analysis",
      "Configured and extended modules",
      "Data migration from legacy tools",
      "Role-based access design",
      "User training and documentation",
      "Post-launch stabilization support",
    ],
    idealFor: ["Trading & distribution", "Construction", "Manufacturing", "Growing multi-branch businesses"],
    diagram: "erp",
  },
  {
    slug: "custom-software",
    icon: "code",
    name: "Custom software & web applications",
    short:
      "Purpose-built platforms, portals and internal tools designed around your users and processes.",
    headline: "Software shaped around your process — not the other way round.",
    intro:
      "When off-the-shelf products force your teams into workarounds, we design and build secure, maintainable web applications around the way your organization needs to operate.",
    image: "/images/code-laptop.jpg",
    imageAlt: "Laptop displaying application source code on a clean desk",
    signals: [
      "Your core process is a competitive advantage no product supports",
      "Teams rely on workarounds to fit packaged software",
      "Customers or partners need a secure self-service portal",
      "An ageing internal system has become hard to maintain",
    ],
    capabilities: [
      { icon: "briefcase", title: "Business platforms", body: "Operational systems for case management, scheduling, field work and service delivery." },
      { icon: "users", title: "Portals", body: "Secure customer, supplier, student or partner portals with role-based access." },
      { icon: "wrench", title: "Internal tools", body: "Focused admin panels and workflow tools that remove repetitive manual effort." },
      { icon: "code", title: "Modernization", body: "Incremental rebuilds of legacy applications without disrupting daily operations." },
      { icon: "lock", title: "Security by design", body: "Authentication, authorization, input validation and auditability from the first sprint." },
      { icon: "chart", title: "Responsive by default", body: "Interfaces that work on desktop, tablet and phone for staff in the office and the field." },
    ],
    deliverables: [
      "Product discovery and requirements",
      "UX flows and interface design",
      "Architecture and data model",
      "Iterative builds with regular demos",
      "Automated testing",
      "Deployment, documentation and handover",
    ],
    idealFor: ["Universities & institutions", "Service organizations", "Operations-heavy businesses"],
    diagram: "app",
  },
  {
    slug: "integration-automation",
    icon: "link",
    name: "Integration & automation",
    short:
      "Connect the systems you already rely on and automate the workflows between them.",
    headline: "Make your systems work together — reliably and visibly.",
    intro:
      "We connect applications, data and people through controlled integrations and automated workflows, so information moves once, correctly, with a clear record of what happened.",
    image: "/images/datacenter-blue.jpg",
    imageAlt: "Network patch panel with connected ethernet cables",
    signals: [
      "Staff re-type the same data into several systems",
      "Reports disagree because data is copied, not shared",
      "Approvals stall waiting for someone to forward an email",
      "Payments, banking or messaging services aren't connected",
    ],
    capabilities: [
      { icon: "link", title: "API integration", body: "Connect ERPs, payment providers, messaging, banking and third-party services." },
      { icon: "flow", title: "Workflow automation", body: "Approvals, notifications, escalations and document generation with clear rules." },
      { icon: "server", title: "Data synchronization", body: "Scheduled and event-driven sync with validation, retries and error reporting." },
      { icon: "doc", title: "Document automation", body: "Generate invoices, contracts, certificates and reports from system data." },
      { icon: "box", title: "Data migration", body: "Clean, map and move data from legacy systems with reconciliation checks." },
      { icon: "chart", title: "Operational visibility", body: "Logs and dashboards that show what ran, what failed and why." },
    ],
    deliverables: [
      "Integration inventory and data flow mapping",
      "API design or connector implementation",
      "Error handling and monitoring",
      "Automated workflow configuration",
      "Runbooks for operations teams",
    ],
    idealFor: ["Organizations with multiple core systems", "Finance and operations teams", "Multi-branch businesses"],
    diagram: "integration",
  },
  {
    slug: "ai-solutions",
    icon: "spark",
    name: "Applied AI",
    short:
      "Practical AI where it delivers measurable value — with human oversight built in.",
    headline: "AI applied to real work, with people firmly in control.",
    intro:
      "We help organizations identify where AI is genuinely useful, then build it into existing workflows with appropriate review steps, data controls and clear measures of value.",
    image: "/images/fiber.jpg",
    imageAlt: "Abstract network of connected lines and nodes",
    signals: [
      "Teams spend hours reading, extracting or classifying documents",
      "Staff struggle to find answers in internal policies and records",
      "You want to explore AI but need a responsible starting point",
      "Requests arrive unstructured and need routing to the right team",
    ],
    capabilities: [
      { icon: "doc", title: "Document intelligence", body: "Extract structured data from invoices, forms and records with review queues." },
      { icon: "book", title: "Knowledge assistants", body: "Answer staff questions from your approved documents, with sources cited." },
      { icon: "flow", title: "Classification & routing", body: "Categorize incoming requests and route them to the right people." },
      { icon: "chart", title: "Decision support", body: "Summaries and insights that assist — not replace — accountable decision-makers." },
      { icon: "shield", title: "Responsible use", body: "Data handling, access controls, evaluation and human approval steps." },
      { icon: "compass", title: "AI readiness", body: "Assess use cases, data quality and risk before committing to build." },
    ],
    deliverables: [
      "Use-case assessment and prioritization",
      "Proof of value with defined success measures",
      "Integration into existing systems",
      "Evaluation and monitoring approach",
      "Usage guidelines for staff",
    ],
    idealFor: ["Document-heavy operations", "Universities", "Customer service teams"],
    diagram: "ai",
  },
  {
    slug: "implementation-support",
    icon: "server",
    name: "Implementation, cloud & support",
    short:
      "Deployment, infrastructure, training and long-term support that keep systems healthy after launch.",
    headline: "Launch is the beginning. We stay for what comes after.",
    intro:
      "We deploy, operate and improve business systems over time — configuring infrastructure, training teams, monitoring health and delivering enhancements as your organization changes.",
    image: "/images/server-room.jpg",
    imageAlt: "Server racks with organized cabling in a data center",
    signals: [
      "A system was delivered but nobody owns it now",
      "Hosting, backups and updates are handled ad hoc",
      "Staff were never properly trained on the tools they use",
      "Small improvements wait months for attention",
    ],
    capabilities: [
      { icon: "server", title: "Cloud & hosting", body: "Provisioning, configuration and hardening of cloud or on-premise environments." },
      { icon: "shield", title: "Backups & recovery", body: "Backup schedules, restore testing and documented recovery procedures." },
      { icon: "chart", title: "Monitoring", body: "Uptime, error and performance monitoring with clear escalation paths." },
      { icon: "users", title: "Training & adoption", body: "Role-based training, guides and help for teams through the transition." },
      { icon: "wrench", title: "Maintenance", body: "Security updates, dependency upgrades and bug fixes on a predictable cadence." },
      { icon: "flow", title: "Continuous improvement", body: "A managed backlog of enhancements prioritized with your stakeholders." },
    ],
    deliverables: [
      "Deployment and environment setup",
      "Backup and monitoring configuration",
      "Training sessions and user guides",
      "Support channel and response process",
      "Periodic health reviews",
    ],
    idealFor: ["Organizations running business-critical systems", "Teams without in-house IT operations"],
    diagram: "lifecycle",
  },
];

export type ProductStatus = "Live" | "Pilot" | "In development";

export type Product = {
  slug: string;
  name: string;
  category: string;
  status: ProductStatus;
  tagline: string;
  summary: string;
  problem: string;
  audiences: string[];
  capabilities: { title: string; body: string }[];
  availability: string;
  ownership: string;
  /** Coded preview used when there is no approved screenshot. */
  mockup?: "erp" | "invoice";
  /** Real product screenshot, shown in place of the coded preview. */
  screenshot?: { src: string; width: number; height: number; alt: string; url: string };
  externalUrl?: string;
  accent: string;
  /** Optional deep-dive sections shown on the product page. */
  cycle?: { title: string; body: string }[];
  roles?: { role: string; sees: string }[];
  paymentMethods?: string[];
  isolation?: string;
};

// CONFIRM: product status, ownership, scope and public URLs for each product.
export const products: Product[] = [
  {
    slug: "sukaan",
    name: "Sukaan",
    category: "Property management",
    status: "Live",
    tagline: "Buildings, tenants and money in one place.",
    summary:
      "A complete, cloud-based system for property management companies. Sukaan replaces spreadsheets, paper receipt books and scattered WhatsApp messages with one place to run buildings, tenants and finances.",
    problem:
      "Property companies often track leases in spreadsheets, write receipts from paper books and chase rent over WhatsApp. Sukaan runs the whole monthly cycle in one system, from billing and reminders to collection and owner reporting, with a numbered record of every payment.",
    audiences: ["Property management companies", "Building owners", "Real estate developers", "Utility providers"],
    capabilities: [
      { title: "Properties & units", body: "Buildings, floors and apartments, with occupancy at a glance." },
      { title: "Leases & rent schedules", body: "Sign a tenant to a lease and the rent schedule is created automatically." },
      { title: "Automatic invoicing", body: "Rent, deposits and utilities on one invoice, generated every month." },
      { title: "Reminders", body: "SMS, WhatsApp and email, sent by hand or automatically before and after the due date." },
      { title: "Local payments", body: "Cash, EVC Plus, eDahab, bank or online through WaafiPay, with a numbered receipt every time." },
      { title: "Payables", body: "Pay owners, suppliers and staff from your money accounts." },
      { title: "Owner reporting", body: "Owner statements, collection reports and profit and loss." },
      { title: "Staff & payroll", body: "Staff records and payroll alongside property operations." },
      { title: "Maintenance", body: "Requests from owners and tenants, tracked through to completion." },
    ],
    cycle: [
      { title: "Set up", body: "Add buildings, floors and apartments." },
      { title: "Lease", body: "Register tenants and sign leases. Rent schedules are created automatically." },
      { title: "Bill", body: "Rent, deposits and utilities go out on one invoice each month." },
      { title: "Remind", body: "SMS, WhatsApp and email reminders, manual or automatic." },
      { title: "Collect", body: "Cash, EVC Plus, eDahab, bank or WaafiPay, each with a numbered receipt." },
      { title: "Pay", body: "Settle owners, suppliers and staff from your money accounts." },
      { title: "Report", body: "Statements, collection reports and profit and loss for owners and management." },
    ],
    roles: [
      { role: "Company administrator", sees: "The full system: property, tenants, finance, staff and payroll, operations, reports and settings." },
      { role: "Building manager", sees: "The same tools, limited to the buildings they are assigned to." },
      { role: "Property owner", sees: "Their own units, their statement and their maintenance requests." },
      { role: "Tenant", sees: "Their lease, invoices, payments, utility bills and maintenance requests." },
      { role: "Utility provider", sees: "A separate portal to bill water, electricity or waste for the units they serve." },
    ],
    paymentMethods: ["Cash", "EVC Plus", "eDahab", "Bank transfer", "WaafiPay"],
    isolation:
      "Every company is separate. Each company's data, users, branding and integrations are private to that company.",
    availability:
      "Available now as a cloud service. Techpoint handles setup, migration of existing tenant and lease records, and staff training.",
    ownership: "Designed, built and maintained by Techpoint Solutions.",
    // Client name, logo and user names are blurred in this capture.
    screenshot: {
      src: "/products/sukaan-dashboard.png",
      width: 1017,
      height: 640,
      alt: "Sukaan dashboard showing apartments, occupancy, tenants, rent collected, deposits, utilities, outstanding balances, expenses and net income",
      url: "app.sukaan / dashboard",
    },
    accent: "#5B8CFF",
  },
  {
    slug: "rukna",
    name: "Rukna",
    category: "Enterprise systems",
    status: "Pilot",
    tagline: "Business operations, in one place.",
    summary:
      "An ERP platform for growing organizations that brings finance, inventory, procurement, sales and people management into a single system of record.",
    problem:
      "Growing businesses often run on a patchwork of spreadsheets and standalone tools. Rukna gives them connected modules with consistent data, approvals and reporting.",
    audiences: ["Trading & distribution", "Construction", "Manufacturing", "Multi-branch businesses"],
    capabilities: [
      { title: "Finance & accounting", body: "Ledger, receivables, payables and financial statements." },
      { title: "Inventory", body: "Multi-warehouse stock, transfers and valuation." },
      { title: "Procurement", body: "Requisitions, purchase orders and supplier records." },
      { title: "Sales", body: "Quotations, orders, invoicing and customer statements." },
      { title: "People", body: "Employee records, leave and payroll preparation." },
      { title: "Controls", body: "Role-based permissions and approval workflows." },
    ],
    availability:
      "Currently deployed with selected organizations. Implementation is delivered by Techpoint, including configuration, data migration and training.",
    ownership: "Developed and maintained by Techpoint Solutions.",
    mockup: "erp",
    accent: "#5B8CFF",
  },
  {
    slug: "invoice-generator",
    name: "Invoice generator",
    category: "Business applications",
    status: "Live",
    tagline: "Professional invoices in minutes.",
    summary:
      "A focused tool for small businesses and freelancers to create, brand and share professional invoices without a full accounting system.",
    problem:
      "Small teams lose time formatting invoices by hand and tracking what has been paid. Invoice generator produces consistent, professional documents and keeps a simple record.",
    audiences: ["Small businesses", "Freelancers & consultants", "Service providers"],
    capabilities: [
      { title: "Branded templates", body: "Logo, business details and consistent formatting." },
      { title: "Line items & tax", body: "Quantities, rates, discounts and tax calculation." },
      { title: "PDF export", body: "Download and share print-ready invoices." },
      { title: "Client records", body: "Reuse customer details across invoices." },
    ],
    availability: "Available to use. Contact Techpoint for business customization or integration.",
    ownership: "Built by Techpoint Solutions.",
    mockup: "invoice",
    accent: "#5B8CFF",
  },
];

export const deliveryProcess = [
  { n: "01", title: "Discovery", body: "Understand objectives, users, current systems and constraints before anything is proposed.", icon: "compass" as IconName },
  { n: "02", title: "Requirements", body: "Document workflows, roles, data and acceptance criteria in language your stakeholders sign off.", icon: "doc" as IconName },
  { n: "03", title: "Architecture", body: "Define the solution design, integrations, security model and a scoped delivery plan.", icon: "layers" as IconName },
  { n: "04", title: "Implementation", body: "Build in short iterations with working software demonstrated to you at every milestone.", icon: "code" as IconName },
  { n: "05", title: "Validation", body: "Automated tests, user acceptance testing and data reconciliation before go-live.", icon: "check" as IconName },
  { n: "06", title: "Deployment", body: "Controlled release with environment hardening, backups and a rollback plan.", icon: "server" as IconName },
  { n: "07", title: "Training", body: "Role-based training and documentation so your teams adopt the system with confidence.", icon: "users" as IconName },
  { n: "08", title: "Support", body: "Monitoring, maintenance and continuous improvement as your organization evolves.", icon: "wrench" as IconName },
];

export const problems = [
  {
    title: "Disconnected systems",
    body: "Critical information is spread across tools that don't talk to each other, so teams re-enter data and reports never agree.",
    icon: "link" as IconName,
  },
  {
    title: "Manual workflows",
    body: "Approvals, reconciliations and documents depend on spreadsheets, email and individual memory.",
    icon: "flow" as IconName,
  },
  {
    title: "Limited visibility",
    body: "Leaders wait days for numbers that should be available in minutes — and can't trust them when they arrive.",
    icon: "chart" as IconName,
  },
  {
    title: "Software that no longer fits",
    body: "Systems chosen years ago now hold the organization back, but replacing them feels risky.",
    icon: "wrench" as IconName,
  },
];

export const industries = [
  { name: "Education", body: "Universities, colleges and institutes modernizing academic and administrative operations.", icon: "graduation" as IconName, image: "/images/students.jpg" },
  { name: "Construction", body: "Project costing, procurement, site inventory and subcontractor management.", icon: "building" as IconName, image: "/images/construction.jpg" },
  { name: "Trading & distribution", body: "Stock across locations, purchasing, sales and receivables in one place.", icon: "truck" as IconName, image: "/images/warehouse.jpg" },
  { name: "Growing businesses", body: "Organizations whose operations have outgrown spreadsheets and point tools.", icon: "briefcase" as IconName, image: "/images/building.jpg" },
];

export const principles = [
  { title: "Requirements before code", body: "We confirm what success looks like, in writing, before we start building it.", icon: "doc" as IconName },
  { title: "Security as a default", body: "Role-based access, input validation, encrypted connections and audit trails are part of the baseline, not extras.", icon: "lock" as IconName },
  { title: "Tested before it ships", body: "Automated tests and structured acceptance testing with your team before every release.", icon: "check" as IconName },
  { title: "Documented and handed over", body: "Architecture notes, runbooks and user guides so your organization is never dependent on memory.", icon: "book" as IconName },
  { title: "Your data stays yours", body: "Clear data ownership, export paths and backup procedures agreed up front.", icon: "shield" as IconName },
  { title: "Built to evolve", body: "Maintainable architecture that can absorb new modules, integrations and users.", icon: "layers" as IconName },
];

export const enquiryTypes = [
  { value: "enterprise-systems", label: "ERP or business system", hint: "Finance, HR, inventory, procurement", icon: "layers" as IconName },
  { value: "custom-software", label: "Custom application", hint: "Platform, portal or internal tool", icon: "code" as IconName },
  { value: "integration-automation", label: "Integration or automation", hint: "Connect systems, automate workflows", icon: "link" as IconName },
  { value: "ai-solutions", label: "AI solution", hint: "Documents, knowledge, routing", icon: "spark" as IconName },
  { value: "implementation-support", label: "Support or modernization", hint: "Hosting, maintenance, upgrades", icon: "server" as IconName },
  { value: "product", label: "A Techpoint product", hint: "Demo, pilot or pricing", icon: "box" as IconName },
] as const;

export const timelines = ["As soon as possible", "Within 3 months", "3–6 months", "6+ months", "Still exploring"] as const;
export const budgets = ["Under $10k", "$10k – $25k", "$25k – $75k", "$75k+", "Not yet defined"] as const;

// Client logos in public/clients (cleaned from supplied artwork).
// CONFIRM: each organization has agreed to be listed publicly.
// `h` is the display height in px, tuned so marks of different shapes carry equal visual weight.
export const clients = [
  { name: "Asas Construction Co. (ACCO)", logo: "/clients/acco.png", w: 354, h: 52 },
  { name: "Nilesom Engineering Services Co.", logo: "/clients/nilesom.png", w: 1778, h: 34 },
  { name: "Elite Modern Furniture", logo: "/clients/elite.png", w: 907, h: 38 },
  { name: "Tacab Livestock & Agricultural Co.", logo: "/clients/tacab.png", w: 1139, h: 40 },
  { name: "Sukaan Property L.L.C", logo: "/clients/sukaan.png", w: 417, h: 56 },
  { name: "Gaadiid", logo: "/clients/gaadiid.png", w: 2137, h: 30 },
  { name: "RBM", logo: "/clients/rbm.png", w: 358, h: 50 },
] as const;
