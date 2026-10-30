/**
 * Single source of truth for Techpoint's public content.
 *
 * Positioning, vision, mission, tagline and the six strategic practices follow
 * the approved Techpoint corporate profile. Keep them word-for-word aligned.
 *
 * Anything marked `CONFIRM` is a working assumption that must be verified
 * before launch (see the launch checklist in README.md). Do not add client
 * logos, testimonials, statistics or outcomes unless they are approved and
 * verifiable.
 */

export const company = {
  name: "Techpoint Solutions",
  shortName: "Techpoint",
  positioning: "Enterprise Software & Digital Solutions",
  tagline: "Technology that moves business forward.",
  description:
    "Techpoint Solutions helps organizations modernize operations, strengthen digital capabilities, manage risk and grow sustainably through technology.",
  // Corporate profile, pages 3–5.
  vision:
    "To become a trusted technology partner recognised for delivering innovative, reliable and sustainable digital solutions that empower businesses and communities to thrive in an increasingly connected world.",
  mission:
    "To simplify technology, solve complex business challenges and enable organisations to achieve their objectives through secure digital infrastructure, intelligent solutions and dependable technology services.",
  // CONFIRM: production domain
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://techpoint.so",
  email: "info@techpoint.so",
  // CONFIRM: city / registered address and phone before publishing them
  location: "Somalia",
  serviceArea: "Somalia and East Africa, with remote delivery for international clients",
  // CONFIRM: only publish a response commitment the team can keep
  responseTime: "two business days",
} as const;

// "Insights" joins the navigation once there are articles to publish.
export const nav = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "Products", href: "/products" },
  { label: "How we work", href: "/how-we-work" },
  { label: "Company", href: "/company" },
  { label: "Our work", href: "/our-work" },
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
  | "briefcase"
  | "cloud"
  | "database"
  | "target"
  | "handshake"
  | "puzzle"
  | "fingerprint"
  | "network"
  | "gauge"
  | "alert"
  | "headset"
  | "brain";

export type Solution = {
  slug: string;
  icon: IconName;
  name: string;
  short: string;
  headline: string;
  intro: string;
  image: string;
  imageAlt: string;
  /** Business problems this practice addresses. */
  signals: string[];
  capabilities: { title: string; body: string; icon: IconName }[];
  deliverables: string[];
  /** Qualitative outcomes. Never publish figures here without verified evidence. */
  outcomes: string[];
  idealFor: string[];
  /** Product slugs that demonstrate this practice in production. */
  relatedProducts?: string[];
  diagram: "erp" | "app" | "integration" | "ai" | "lifecycle" | "cloud" | "security" | "data";
};

// The six strategic technology priorities from the corporate profile.
export const solutions: Solution[] = [
  {
    slug: "cloud-infrastructure",
    icon: "cloud",
    name: "Cloud Computing & Digital Infrastructure",
    short: "Cloud migration, infrastructure modernization, backup, disaster recovery and managed cloud services.",
    headline: "Infrastructure that stays available, recoverable and ready to grow.",
    intro:
      "We plan and carry out cloud migrations, modernize ageing infrastructure and put tested backup and recovery in place — then operate the environment so your systems stay healthy.",
    image: "/images/server-room.jpg",
    imageAlt: "Server racks with organized cabling in a data center",
    signals: [
      "Core systems run on a single server with no tested recovery plan",
      "Hosting costs and performance are hard to predict",
      "Backups exist, but nobody has tried restoring one",
      "Infrastructure changes depend on one person's knowledge",
    ],
    capabilities: [
      { icon: "cloud", title: "Cloud migration", body: "Assess, plan and move workloads to the cloud in controlled stages, with rollback at every step." },
      { icon: "server", title: "Infrastructure modernization", body: "Replace fragile servers and networks with standardized, documented environments." },
      { icon: "shield", title: "Backup", body: "Automated backup schedules with regular restore tests, not just copies on a disk." },
      { icon: "clock", title: "Disaster recovery", body: "Recovery objectives agreed with management and procedures rehearsed before they are needed." },
      { icon: "wrench", title: "Managed cloud services", body: "Patching, capacity, access and cost management handled under a clear service agreement." },
      { icon: "gauge", title: "Monitoring", body: "Uptime, performance and error monitoring with defined escalation paths." },
    ],
    deliverables: [
      "Infrastructure assessment and migration plan",
      "Target architecture and environment setup",
      "Backup schedule with tested restores",
      "Documented disaster recovery procedure",
      "Monitoring and alerting configuration",
      "Managed service agreement, where required",
    ],
    outcomes: [
      "Systems that can be restored within an agreed recovery window",
      "Predictable hosting and operating costs",
      "Infrastructure documented, not held in one person's head",
      "Capacity that grows with the organization",
    ],
    idealFor: ["Organizations running business-critical systems", "Teams moving off on-premise servers", "Multi-branch operations"],
    diagram: "cloud",
  },
  {
    slug: "cybersecurity",
    icon: "shield",
    name: "Cybersecurity & Digital Trust",
    short: "Risk assessment, network security, identity management, data protection and incident response.",
    headline: "Security designed in, in proportion to what you need to protect.",
    intro:
      "We help organizations understand their risks, protect their networks, identities and data, and prepare to respond when something goes wrong — so clients, partners and regulators can trust how information is handled.",
    image: "/images/circuit.jpg",
    imageAlt: "Close-up of a printed circuit board",
    signals: [
      "Staff share accounts or keep access after they leave",
      "Nobody can say where sensitive data is stored or who can see it",
      "There is no plan for what to do if systems are compromised",
      "Clients or regulators are asking about your security controls",
    ],
    capabilities: [
      { icon: "target", title: "Risk assessment", body: "Identify critical assets, threats and gaps, then prioritize what to fix first." },
      { icon: "network", title: "Network security", body: "Firewalls, segmentation, secure remote access and hardened endpoints." },
      { icon: "fingerprint", title: "Identity management", body: "Role-based access, multi-factor authentication and joiner–mover–leaver processes." },
      { icon: "lock", title: "Data protection", body: "Classification, encryption, retention and backups for sensitive information." },
      { icon: "alert", title: "Incident response", body: "A documented plan, clear responsibilities and support when an incident occurs." },
      { icon: "users", title: "Security awareness", body: "Practical training that helps staff recognise and report phishing and fraud." },
    ],
    deliverables: [
      "Risk assessment with prioritized findings",
      "Access control and identity policy",
      "Network and endpoint hardening",
      "Data classification and protection measures",
      "Incident response plan and contacts",
      "Staff awareness sessions",
    ],
    outcomes: [
      "A clear, prioritized view of your security risks",
      "Access that matches roles and ends when people leave",
      "Sensitive data identified, protected and recoverable",
      "A rehearsed plan for responding to incidents",
    ],
    idealFor: ["Organizations handling financial or personal data", "Institutions with many users", "Businesses facing client or regulatory review"],
    diagram: "security",
  },
  {
    slug: "ai-automation",
    icon: "spark",
    name: "Artificial Intelligence & Intelligent Automation",
    short: "AI-powered business solutions, workflow automation, implementation consulting and decision support.",
    headline: "AI and automation applied to real work, with people in control.",
    intro:
      "We help organizations find where AI and automation are genuinely useful, then build them into existing workflows with review steps, data controls and clear measures of value.",
    image: "/images/fiber.jpg",
    imageAlt: "Abstract network of connected lines and nodes",
    signals: [
      "Teams spend hours reading, extracting or classifying documents",
      "Approvals and notifications depend on someone remembering to forward an email",
      "Staff struggle to find answers in internal policies and records",
      "You want to use AI but need a responsible starting point",
    ],
    capabilities: [
      { icon: "doc", title: "AI-powered business solutions", body: "Document intelligence, classification and assistants built around your own data." },
      { icon: "flow", title: "Workflow automation", body: "Approvals, notifications, escalations and document generation with clear rules." },
      { icon: "compass", title: "Implementation consulting", body: "Assess use cases, data readiness and risk before committing to build." },
      { icon: "chart", title: "Decision support", body: "Summaries and insights that assist — not replace — accountable decision-makers." },
      { icon: "book", title: "Knowledge assistants", body: "Answer staff questions from approved documents, with sources cited." },
      { icon: "shield", title: "Responsible use", body: "Data handling, access controls, evaluation and human approval steps." },
    ],
    deliverables: [
      "Use-case assessment and prioritization",
      "Proof of value with defined success measures",
      "Integration into existing systems",
      "Evaluation and monitoring approach",
      "Usage guidelines for staff",
    ],
    outcomes: [
      "Less time spent on repetitive reading, typing and routing",
      "Faster, more consistent handling of routine requests",
      "AI use that is reviewed, logged and governed",
      "A roadmap built on proven value, not hype",
    ],
    idealFor: ["Document-heavy operations", "Universities and institutions", "Customer service teams"],
    diagram: "ai",
  },
  {
    slug: "data-analytics",
    icon: "chart",
    name: "Data Analytics & Business Intelligence",
    short: "Data integration, management dashboards, predictive analytics, reporting and governance.",
    headline: "Numbers leaders can trust, available when decisions are made.",
    intro:
      "We bring data from your operational systems together, define it consistently and deliver dashboards and reports management can rely on — with the governance to keep them accurate.",
    image: "/images/dashboard.jpg",
    imageAlt: "Analytics dashboard with charts on a laptop screen",
    signals: [
      "Management reports are assembled by hand at month end",
      "Departments report different numbers for the same thing",
      "Data sits in systems nobody can easily query",
      "You want forecasts, but trust in today's figures comes first",
    ],
    capabilities: [
      { icon: "database", title: "Data integration", body: "Combine finance, sales, inventory and operational data into one consistent model." },
      { icon: "chart", title: "Management dashboards", body: "Role-based dashboards showing the indicators each leader is accountable for." },
      { icon: "gauge", title: "Predictive analytics", body: "Forecasts and trend analysis once the underlying data is reliable." },
      { icon: "doc", title: "Reporting", body: "Scheduled and self-service reports that replace manual spreadsheet work." },
      { icon: "shield", title: "Data governance", body: "Ownership, definitions, access rules and quality checks agreed and documented." },
      { icon: "check", title: "Data quality", body: "Validation and reconciliation so figures agree across systems." },
    ],
    deliverables: [
      "Data source inventory and KPI definitions",
      "Integrated data model",
      "Management dashboards",
      "Scheduled and self-service reports",
      "Data governance and ownership guidelines",
    ],
    outcomes: [
      "One agreed definition for each key figure",
      "Reports produced automatically instead of by hand",
      "Leaders see current performance, not last month's",
      "A sound foundation for forecasting",
    ],
    idealFor: ["Executive and finance teams", "Multi-branch businesses", "Organizations with several core systems"],
    diagram: "data",
  },
  {
    slug: "software-development",
    icon: "code",
    name: "Software Development & Digital Transformation",
    short: "ERP and business applications, web and mobile software, API integration and systems modernization.",
    headline: "Business software shaped around how your organization actually runs.",
    intro:
      "We implement ERP and build business applications, portals and mobile software — then connect them to the systems you already rely on, so information is entered once and trusted everywhere.",
    image: "/images/code-laptop.jpg",
    imageAlt: "Laptop displaying application source code on a clean desk",
    signals: [
      "Finance, stock and sales live in separate tools and spreadsheets",
      "Teams rely on workarounds to fit packaged software",
      "Staff re-enter the same data into several systems",
      "An ageing internal system has become hard to maintain",
    ],
    capabilities: [
      { icon: "layers", title: "ERP & business applications", body: "Finance, HR, procurement, inventory and sales in one controlled system of record." },
      { icon: "code", title: "Web & mobile software", body: "Platforms, portals and internal tools that work in the office and in the field." },
      { icon: "link", title: "API integration", body: "Connect ERPs, payment providers, banking, messaging and third-party services." },
      { icon: "wrench", title: "Systems modernization", body: "Incremental rebuilds of legacy applications without disrupting daily operations." },
      { icon: "box", title: "Data migration", body: "Clean, map and move data from legacy tools with reconciliation checks." },
      { icon: "lock", title: "Security by design", body: "Authentication, authorization, validation and audit trails from the first sprint." },
    ],
    deliverables: [
      "Process mapping and requirements",
      "UX flows and interface design",
      "Architecture, data model and integration plan",
      "Iterative builds with milestone demos",
      "Data migration with reconciliation",
      "Automated testing, documentation and handover",
    ],
    outcomes: [
      "One system of record instead of scattered spreadsheets",
      "Information entered once and shared across systems",
      "Controlled, auditable workflows and approvals",
      "Software that absorbs new modules, users and integrations",
    ],
    idealFor: ["Trading & distribution", "Construction", "Property management", "Universities & institutions"],
    relatedProducts: ["sukaan", "rukna"],
    diagram: "integration",
  },
  {
    slug: "it-consulting",
    icon: "compass",
    name: "IT Consulting & Managed Technology Services",
    short: "Technology strategy, procurement, implementation, technical support and capability development.",
    headline: "A technology partner for the big decisions and the day-to-day.",
    intro:
      "We help leadership teams plan technology investments, select and procure the right tools and implement them properly — then provide the support and training that keep everything working.",
    image: "/images/planning.jpg",
    imageAlt: "Team planning a project around a table",
    signals: [
      "Technology decisions are made without a plan or budget view",
      "Vendors are chosen on price alone and later regretted",
      "IT support is reactive and depends on whoever is available",
      "Staff were never properly trained on the systems they use",
    ],
    capabilities: [
      { icon: "compass", title: "Technology strategy", body: "A roadmap that ties technology investment to business priorities and budget." },
      { icon: "cart", title: "Procurement", body: "Requirements, vendor evaluation and contract input for hardware, software and services." },
      { icon: "flow", title: "Implementation", body: "Planning, coordination and oversight so new systems go live properly." },
      { icon: "headset", title: "Technical support", body: "A defined support channel with response processes and escalation." },
      { icon: "wrench", title: "Maintenance", body: "Updates, security patches and fixes on a predictable cadence." },
      { icon: "graduation", title: "Capability development", body: "Role-based training that builds lasting skills inside your teams." },
    ],
    deliverables: [
      "Technology assessment and roadmap",
      "Vendor evaluation and procurement support",
      "Implementation plan and oversight",
      "Support channel with response process",
      "Training programme and user guides",
      "Periodic health reviews",
    ],
    outcomes: [
      "Technology spending tied to business priorities",
      "Fewer costly vendor and platform mistakes",
      "Predictable, accountable support",
      "Teams confident with the systems they rely on",
    ],
    idealFor: ["Organizations without in-house IT leadership", "Growing businesses", "Institutions planning major investments"],
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

/**
 * Corporate profile, page 13: our difference is how we deliver, not simply what we sell.
 * CONFIRM: add the profile's core values alongside these once their wording is approved for the web.
 */
export const differentiators = [
  { title: "Business outcomes first", body: "Every engagement starts from the result your organization needs, and success is agreed in writing before work begins.", icon: "target" as IconName },
  { title: "Integration, not islands", body: "We design systems to share information with what you already run, so data is entered once and trusted everywhere.", icon: "puzzle" as IconName },
  { title: "Security by design", body: "Access control, data protection, audit trails and backups are part of the baseline — never an optional extra.", icon: "lock" as IconName },
  { title: "Practical innovation", body: "We adopt cloud, data and AI where they deliver measurable value, and say so plainly when they don't.", icon: "spark" as IconName },
  { title: "Lasting partnerships", body: "We stay after launch with support, training and improvement, because business systems are never really finished.", icon: "handshake" as IconName },
];

/**
 * Internal delivery teams behind the six customer-facing practices.
 * CONFIRM: this mapping reflects how Techpoint actually staffs its work.
 */
export const deliveryGroups = [
  { title: "Business systems", body: "Requirements, process design, data and analytics, and technology advisory.", icon: "layers" as IconName, practices: ["data-analytics", "it-consulting"] },
  { title: "Product engineering", body: "Business applications, integrations, AI and our own software products.", icon: "code" as IconName, practices: ["software-development", "ai-automation"] },
  { title: "Infrastructure & security", body: "Cloud, networks, security operations, monitoring and support after go-live.", icon: "server" as IconName, practices: ["cloud-infrastructure", "cybersecurity"] },
];

export const enquiryTypes = [
  { value: "software-development", label: "Software or ERP", hint: "Business apps, integration, modernization", icon: "code" as IconName },
  { value: "cloud-infrastructure", label: "Cloud & infrastructure", hint: "Migration, backup, recovery", icon: "cloud" as IconName },
  { value: "cybersecurity", label: "Cybersecurity", hint: "Risk, access, data protection", icon: "shield" as IconName },
  { value: "ai-automation", label: "AI & automation", hint: "Documents, workflows, decision support", icon: "spark" as IconName },
  { value: "data-analytics", label: "Data & BI", hint: "Dashboards, reporting, governance", icon: "chart" as IconName },
  { value: "it-consulting", label: "Consulting & managed IT", hint: "Strategy, procurement, support", icon: "compass" as IconName },
  { value: "product", label: "A Techpoint product", hint: "Demo, pilot or pricing", icon: "box" as IconName },
  { value: "not-sure", label: "Not sure yet", hint: "Describe the problem; we'll help scope it", icon: "puzzle" as IconName },
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
