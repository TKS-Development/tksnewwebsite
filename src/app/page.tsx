import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { HeroSection } from "@/components/hero-section";
import { AnimateIn } from "@/components/animate-in";
import { site } from "@/lib/site";

const principles = [
  {
    title: "We tie every project to a real number.",
    body: "More leads converted, hours saved, support tickets handled automatically. If we can't attach a measurable outcome to an automation, we won't pitch it to you.",
  },
  {
    title: "We stay involved past launch day.",
    body: "You get the workflow analysis, the build, the staff training, and post-launch tuning — included. The automations that fail are usually the ones nobody's checking on after go-live.",
  },
  {
    title: "Built for your budget, not a Fortune 500's.",
    body: "Our work is sized for small and mid-sized teams. Practical scope, fast timelines, and investments that make sense at your stage of growth.",
  },
  {
    title: "Your automations should evolve as you do.",
    body: "Every engagement includes mandatory post-launch support. Your business keeps changing — your workflows need to keep up.",
  },
];

const aiSolutions = [
  "Lead Follow-Up Automation",
  "Customer Service Chatbot",
  "Sales Pipeline Automation",
  "CRM Cleanup & Automation",
  "Proposal & Contract Generation",
  "Custom Business Assistant",
  "Reporting & Dashboards",
  "Workflow Automation",
];

const aiSolutionBodies = [
  "We build follow-up sequences that reach out to every new lead automatically — the right message, at the right time, without anyone on your team lifting a finger.",
  "A chatbot that answers your most common questions 24/7, captures contact info, and routes anything complex to the right person. Fewer repeat emails, faster response times.",
  "We connect your inbox, calendar, and CRM so deals move forward on their own — follow-up reminders, pipeline updates, and activity logging without the manual input.",
  "We fix your CRM data, eliminate duplicates, and build automations that keep it accurate going forward. No more stale contacts or missed follow-ups from bad data.",
  "Turn a few inputs into a polished proposal, contract, or SOW in minutes. We build templates connected to your CRM so your team can close faster with less back-and-forth.",
  "A private assistant trained on your processes, FAQs, and internal docs. Your team gets instant answers to common questions without interrupting a manager.",
  "Dashboards that pull from your existing tools and show you the numbers that actually matter — updated automatically, no spreadsheet required.",
  "We map your most time-consuming processes and automate the repetitive parts — intake, handoffs, notifications, follow-ups — so your team focuses on work that actually needs them.",
];

const assessmentIncludes = [
  "Workflow analysis & bottleneck review",
  "Software stack assessment",
  "AI opportunity mapping",
  "ROI projections",
  "60-day implementation roadmap",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  url: "https://thetks.com",
  email: site.email,
  telephone: site.phone,
  foundingDate: String(site.established),
  description:
    "TechKey Solutions helps small and mid-sized businesses implement practical AI automation — CRM, ERP, workflow automation, and AI consulting.",
  areaServed: "United States",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AI Automation Services",
    itemListElement: [
      "AI Assessment & Strategy",
      "Workflow Automation",
      "CRM Automation",
      "Customer Service Automation",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  },
  sameAs: [site.social.linkedin],
};

const partners = [
  "Salesforce",
  "Microsoft Dynamics",
  "HubSpot",
  "Zoho",
  "AppFolio",
  "Yardi",
  "RealPage",
  "Entrata",
  "DocuSign",
  "Knock CRM",
  "QuickBooks",
  "Asana",
  "Jira",
  "Monday.com",
  "Odoo",
  "WordPress",
  "Google Analytics",
  "Rent Cafe",
];

export const metadata: Metadata = {
  title: "TechKey Solutions — AI Automation for Small & Mid-Sized Businesses",
  description:
    "TechKey Solutions helps small and mid-sized businesses implement practical AI automation — reducing manual work, improving customer response times, and delivering measurable ROI.",
  keywords: [
    "AI automation for small business",
    "AI business consulting",
    "workflow automation",
    "AI implementation services",
    "small business AI solutions",
    "CRM automation",
    "business process automation",
    "AI consulting",
    "TechKey Solutions",
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    title: "TechKey Solutions — AI Automation for Small & Mid-Sized Businesses",
    description:
      "Practical AI automation for small and mid-sized businesses. Real operational outcomes — not experimental AI projects.",
    url: "/",
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechKey Solutions — AI Automation for Small & Mid-Sized Businesses",
    description:
      "Practical AI automation for small and mid-sized businesses. Real operational outcomes — not experimental AI projects.",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <HeroSection />

      {/* WHO WE ARE */}
      <section className="py-16 border-b border-line bg-canvas-2">
        <Container>
          <AnimateIn>
            <div className="grid lg:grid-cols-12 gap-10 items-baseline">
              <p className="lg:col-span-7 text-[19px] leading-relaxed text-ink-soft">
                We&apos;ve been building CRM,
                ERP, and integration solutions since 2016 — and for the past few years,
                most of what we build is AI automation. We work directly with the people
                who&apos;ll use what we build, and we stay involved long after the launch.
              </p>
              <div className="lg:col-span-4 lg:col-start-9 flex flex-col gap-3">
                <a href="/services" className="text-[14px] link-underline text-ink-soft">See our packages →</a>
              </div>
            </div>
          </AnimateIn>
        </Container>
      </section>

      {/* PRINCIPLES / WHY */}
      <section className="py-24">
        <Container>
          <AnimateIn>
            <SectionHeading
              index="I."
              eyebrow="Our approach"
              title="What makes us different."
              lede="A lot of AI consultants will deploy something and disappear. We work differently — and these four things are why our clients keep coming back."
            />
          </AnimateIn>

          <div className="mt-12 grid md:grid-cols-2 gap-5">
            {principles.map((p, i) => (
              <AnimateIn key={p.title} delay={i * 0.1}>
                <div className="rounded-2xl border border-line bg-canvas-2 p-8 flex flex-col h-full">
                  <h3 className="display text-2xl text-ink leading-[1.15]">
                    {p.title}
                  </h3>
                  <p
                    className="mt-4 text-[15px] leading-relaxed text-ink-soft flex-1"
                    dangerouslySetInnerHTML={{ __html: p.body }}
                  />
                </div>
              </AnimateIn>
            ))}
          </div>
        </Container>
      </section>

      {/* WHAT WE BUILD */}
      <section className="py-24 border-t border-line">
        <Container>
          <AnimateIn>
            <SectionHeading
              index="II."
              eyebrow="What we build"
              title="Services our clients ask for most."
              lede="These aren't theoretical capabilities — every one of these is something we've built and tuned for a real business. Most projects start with one or two, then expand from there."
            />
          </AnimateIn>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {aiSolutions.map((title, i) => (
              <AnimateIn key={title} delay={(i % 4) * 0.07}>
                <div className="rounded-2xl border border-line bg-canvas p-7 hover:border-accent/40 hover:shadow-sm transition group h-full flex flex-col">
                  <h3 className="display text-xl text-ink leading-tight">
                    {title}
                  </h3>
                  <p className="mt-3 text-[14px] text-ink-soft leading-relaxed flex-1">
                    {aiSolutionBodies[i]}
                  </p>
                  <span
                    aria-hidden="true"
                    className="mt-5 inline-block text-ink-soft/40 group-hover:text-accent group-hover:translate-x-0.5 transition"
                  >
                    →
                  </span>
                </div>
              </AnimateIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ASSESSMENT */}
      <section className="py-24 hero-bg text-canvas border-b border-canvas/10">
        <Container>
          <AnimateIn>
            <div className="grid lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-6">
                <span className="num-label !text-accent">The right starting point</span>
                <h2 className="display mt-4 text-4xl lg:text-5xl text-canvas leading-[1.05]">
                  AI Assessment &amp; Strategy
                </h2>
                <p className="mt-5 text-[16px] leading-relaxed text-canvas/75">
                  Before any automation is built, we map your workflows, identify
                  bottlenecks, and surface the highest-ROI opportunities in your
                  business. You walk away with a clear picture of where AI pays
                  off — and a concrete roadmap to get there.
                </p>
                <div className="mt-6 flex flex-wrap gap-4 items-baseline">
                  <span className="display text-4xl text-canvas">$4,500</span>
                  <span className="num-label !text-canvas/60">flat fee · 1–2 weeks</span>
                </div>
                <Link href="/contact" className="mt-8 btn-primary inline-flex">
                  <span>Start with an assessment</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
              <div className="lg:col-span-4 lg:col-start-9">
                <p className="eyebrow !text-canvas/50 mb-4">What&apos;s included</p>
                <ul className="space-y-3">
                  {assessmentIncludes.map((item) => (
                    <li
                      key={item}
                      className="flex items-baseline gap-3 text-[15px] text-canvas/80 border-b border-canvas/10 pb-3 last:border-b-0 last:pb-0"
                    >
                      <span aria-hidden="true" className="text-accent shrink-0">✦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimateIn>
        </Container>
      </section>

      {/* PARTNERS MARQUEE */}
      <section className="py-20 border-y border-line bg-canvas-2">
        <Container>
          <AnimateIn>
            <div className="flex flex-wrap items-baseline justify-between gap-6">
              <p className="eyebrow">Platforms we work on</p>
              <Link
                href="/services"
                className="text-[13px] text-ink-soft link-underline"
              >
                See the full list →
              </Link>
            </div>
          </AnimateIn>
        </Container>
        <div className="mt-8 marquee-mask overflow-hidden">
          <div className="flex gap-x-10 animate-[marquee_45s_linear_infinite] whitespace-nowrap">
            {[...partners, ...partners].map((p, i) => (
              <span
                key={`${p}-${i}`}
                className="display text-2xl text-ink-soft/60"
              >
                {p} <span className="text-line-strong mx-4">·</span>
              </span>
            ))}
          </div>
        </div>
        <style>{`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}</style>
      </section>

      {/* CTA */}
      <section className="py-28">
        <Container>
          <AnimateIn>
            <div className="grid lg:grid-cols-12 gap-10 items-end">
              <div className="lg:col-span-8">
                <p className="num-label">III. / Next step</p>
                <h2 className="display mt-6 text-5xl sm:text-6xl leading-[1.02] text-ink max-w-[18ch]">
                  Start with a conversation, not a contract.
                </h2>
                <p className="mt-6 text-[17px] leading-relaxed text-ink-soft max-w-xl">
                  We&apos;ll walk through your workflows together, find where AI
                  actually moves the needle, and put together an honest 60-day
                  plan. First call is free — no pitch, no pressure.
                </p>
              </div>
              <div className="lg:col-span-4 flex flex-col gap-4">
                <a href="https://calendly.com/techkeysolutions/15min?utm_medium=email&_hsenc=p2ANqtz-8Uo4hFPiyIJMLoVJ8ysbViG3qZWXmaEuPpcbIaUvunpYvYq_UzMMnn-t7eYLYmhtyL0H5joyGZbb9P3_TYzOb-XHeAHA&_hsmi=2&utm_content=2&utm_source=hs_email&month=2026-05" target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <span>Book a Consultation</span>
                  <span aria-hidden="true">→</span>
                </a>
                <a href={`mailto:${site.email}`} className="btn-secondary">
                  <span>{site.email}</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </AnimateIn>
        </Container>
      </section>
    </>
  );
}
