export type Location = {
  slug: string;
  city: string;
  state: string;
  region: string;
  headline: string;
  intro: string;
  description: string;
  industries: string[];
  services: { title: string; body: string }[];
};

export const locations: Location[] = [
  {
    slug: "visalia",
    city: "Visalia",
    state: "CA",
    region: "Central Valley",
    headline: "AI Automation for Visalia Businesses",
    intro:
      "Visalia is one of the fastest-growing cities in the Central Valley — and the businesses here are competing on tighter margins than ever. TechKey Solutions works with Visalia companies to automate the repetitive work that slows growth: lead follow-up, scheduling, customer communication, and internal reporting. We work fully remote, so you get big-city expertise without the commute.",
    description:
      "TechKey Solutions helps Visalia businesses automate lead follow-up, scheduling, and reporting. Practical AI that reduces manual work and drives measurable results.",
    industries: [
      "Agriculture & agribusiness",
      "Healthcare & medical offices",
      "Construction & trades",
      "Retail & distribution",
      "Professional services",
    ],
    services: [
      {
        title: "Lead & inquiry automation",
        body: "Never let a new inquiry go cold. We build automated follow-up sequences that respond instantly and qualify prospects before your team lifts a finger.",
      },
      {
        title: "Scheduling & dispatch",
        body: "Field service and healthcare businesses use our automation to fill gaps in the schedule, reduce no-shows, and eliminate back-and-forth phone calls.",
      },
      {
        title: "Reporting dashboards",
        body: "Replace the weekly spreadsheet scramble with live dashboards that pull from your existing tools — so you always know where the business stands.",
      },
    ],
  },
  {
    slug: "fresno",
    city: "Fresno",
    state: "CA",
    region: "Central Valley",
    headline: "AI Solutions for Fresno Businesses",
    intro:
      "Fresno is the economic hub of the Central Valley — home to agriculture, logistics, healthcare, and a growing professional services sector. TechKey Solutions helps Fresno businesses cut manual overhead and compete more effectively by implementing AI automation that works inside the tools you already use. Fully remote engagement, results-driven delivery.",
    description:
      "TechKey Solutions helps Fresno businesses automate CRM, customer service, and document workflows. Practical AI for the Central Valley's growing business community.",
    industries: [
      "Agriculture & food processing",
      "Logistics & distribution",
      "Healthcare & behavioral health",
      "Education & nonprofits",
      "Legal & accounting firms",
    ],
    services: [
      {
        title: "CRM & pipeline automation",
        body: "We optimize Salesforce, HubSpot, and Dynamics CRMs to automatically capture, score, and route leads — so your sales team focuses on closing, not data entry.",
      },
      {
        title: "Customer service automation",
        body: "Deploy AI-powered chat and email triage that handles routine inquiries 24/7, escalating only the cases that need a human touch.",
      },
      {
        title: "Document & proposal automation",
        body: "Generate estimates, contracts, and proposals in minutes instead of hours. Especially valuable for logistics, legal, and construction businesses.",
      },
    ],
  },
  {
    slug: "sacramento",
    city: "Sacramento",
    state: "CA",
    region: "Greater Sacramento Area",
    headline: "AI Automation for Sacramento Businesses",
    intro:
      "Sacramento's business landscape spans state government contractors, professional services, healthcare systems, and a growing tech sector. TechKey Solutions works with Sacramento-area businesses to implement AI automation that reduces operational overhead, improves client responsiveness, and delivers the kind of measurable outcomes that justify the investment. We operate fully remotely and partner with your team wherever you are.",
    description:
      "TechKey Solutions helps Sacramento businesses automate workflows, build internal AI tools, and reduce operational overhead. Practical AI for government contractors, healthcare, and professional services.",
    industries: [
      "Government & public sector contractors",
      "Healthcare & life sciences",
      "Legal, accounting & consulting firms",
      "Real estate & property management",
      "Technology & SaaS companies",
    ],
    services: [
      {
        title: "Internal AI assistants",
        body: "Government contractors and professional services firms use our internal AI tools to surface policy documents, answer team questions, and accelerate research — without sharing sensitive data externally.",
      },
      {
        title: "Workflow & approval automation",
        body: "Replace email chains and manual handoffs with automated workflows that route requests, collect approvals, and notify stakeholders — all tracked in your existing systems.",
      },
      {
        title: "AI assessment & strategy",
        body: "Not sure where to start? Our $4,500 AI Assessment maps your workflows, identifies the highest-ROI automation opportunities, and delivers a 60-day implementation roadmap.",
      },
    ],
  },
  {
    slug: "san-jose",
    city: "San Jose",
    state: "CA",
    region: "Silicon Valley",
    headline: "AI Automation for San Jose Businesses",
    intro:
      "San Jose sits at the center of Silicon Valley, but not every business here is a tech giant with an AI team. TechKey Solutions serves the small and mid-sized businesses that power the region — professional services, healthcare, manufacturing, and local enterprises that need practical AI automation without the enterprise price tag. We work fully remote and integrate with the tools your team already uses.",
    description:
      "TechKey Solutions helps San Jose and Silicon Valley SMBs automate lead follow-up, CRM workflows, and reporting. Practical AI at a price that works for growing businesses.",
    industries: [
      "Professional services & consulting",
      "Healthcare & medical practices",
      "Light manufacturing & operations",
      "Real estate & property management",
      "Retail & e-commerce",
    ],
    services: [
      {
        title: "Lead automation & CRM optimization",
        body: "In a competitive market like the Bay Area, speed wins. We build automated lead capture and follow-up sequences that respond in seconds and keep prospects warm while your team is heads-down.",
      },
      {
        title: "Operational workflow automation",
        body: "Eliminate manual handoffs between your sales, ops, and finance teams. We connect your CRM, project management, and accounting tools so data flows automatically — no copy-paste required.",
      },
      {
        title: "Reporting & business intelligence",
        body: "Replace disconnected spreadsheets with automated dashboards that give you a real-time view of revenue, pipeline, and operational KPIs — built for how your business actually works.",
      },
    ],
  },
];

export function getLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}
