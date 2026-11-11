import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { AnimateIn } from "@/components/animate-in";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "AI Automation Services & Packages · TechKey Solutions",
  description:
    "Practical AI automation packages for small and mid-sized businesses. From a $4,500 strategy assessment to full-scale AI transformation — real results, measurable outcomes.",
  keywords: [
    "AI automation services",
    "AI implementation for small business",
    "AI business optimization",
    "AI consulting packages",
    "workflow automation pricing",
    "AI assessment and strategy",
    "lead automation",
    "customer service automation",
    "TechKey Solutions",
  ],
  alternates: { canonical: "/services" },
  openGraph: {
    title: "AI Automation Services & Packages · TechKey Solutions",
    description:
      "Practical AI automation packages for small and mid-sized businesses. Start with a strategy assessment or jump straight to implementation.",
    url: "/services",
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation Services & Packages · TechKey Solutions",
    description:
      "Practical AI automation packages for small and mid-sized businesses. Start with a strategy assessment or jump straight to implementation.",
  },
};

const assessmentIncludes = [
  "Workflow analysis",
  "Process bottleneck review",
  "Software stack review",
  "AI opportunity mapping",
  "ROI projections",
  "Implementation roadmap",
];

const assessmentDeliverables = [
  "AI readiness assessment",
  "Automation recommendations",
  "ROI estimate",
  "60-day implementation roadmap",
];

const commonSolutions = [
  "Lead automation",
  "Customer service automation",
  "Scheduling automation",
  "CRM optimization",
  "Proposal & document automation",
  "Internal AI assistants",
  "Reporting dashboards",
  "Workflow automation",
];

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-line">
        <Container className="pt-20 pb-24 lg:pt-28 lg:pb-32">
          <AnimateIn>
            <div className="flex items-center gap-3">
              <span className="num-label">Services</span>
              <span className="h-px w-10 bg-line-strong" />
              <span className="eyebrow">AI Automation & Business Optimization</span>
            </div>
            <h1 className="hero-headline mt-8 text-ink max-w-[22ch]">
              Practical AI. Measurable results.
            </h1>
            <p className="mt-12 max-w-2xl text-[18px] leading-relaxed text-ink-soft">
              We don&apos;t just deploy AI tools — we ensure they actually drive
              measurable business results. Every engagement starts with a clear
              assessment and ends with automations your team owns and uses every day.
            </p>
          </AnimateIn>
        </Container>
      </section>

      {/* COMMON SOLUTIONS STRIP */}
      <section className="py-14 border-b border-line bg-canvas-2">
        <Container>
          <AnimateIn>
            <p className="eyebrow mb-8">Common solutions</p>
            <div className="flex flex-wrap gap-3">
              {commonSolutions.map((s) => (
                <span
                  key={s}
                  className="border border-line rounded-full px-4 py-1.5 text-[14px] text-ink-soft display"
                >
                  {s}
                </span>
              ))}
            </div>
          </AnimateIn>
        </Container>
      </section>

      {/* ASSESSMENT */}
      <section className="py-24 border-b border-line">
        <Container>
          <AnimateIn>
            <div className="grid lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-5">
                <span className="num-label">01 / The right starting point</span>
                <h2 className="display mt-4 text-4xl lg:text-5xl text-ink leading-[1.05]">
                  AI Assessment & Strategy
                </h2>
                <p className="mt-5 text-[16px] leading-relaxed text-ink-soft">
                  Before any automation is built, we map your workflows,
                  identify bottlenecks, and surface the highest-ROI
                  opportunities in your business. You walk away with a clear
                  picture of where AI pays off — and a concrete roadmap to
                  get there.
                </p>
                <div className="mt-6 flex flex-wrap gap-4 items-baseline">
                  <span className="display text-4xl text-ink">$4,500</span>
                  <span className="num-label">flat fee · 1–2 weeks</span>
                </div>
                <Link href="/contact" className="mt-8 btn-primary inline-flex">
                  <span>Start with an assessment</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>

              <div className="lg:col-span-3 lg:col-start-7">
                <p className="eyebrow mb-4">Includes</p>
                <ul className="space-y-3">
                  {assessmentIncludes.map((item) => (
                    <li
                      key={item}
                      className="flex items-baseline gap-3 text-[15px] text-ink border-b border-line pb-3 last:border-b-0 last:pb-0"
                    >
                      <span aria-hidden="true" className="text-accent shrink-0">✦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-3">
                <p className="eyebrow mb-4">Deliverables</p>
                <ul className="space-y-3">
                  {assessmentDeliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-baseline gap-3 text-[15px] text-ink border-b border-line pb-3 last:border-b-0 last:pb-0"
                    >
                      <span aria-hidden="true" className="text-accent shrink-0">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimateIn>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-28">
        <Container>
          <AnimateIn>
            <div className="grid lg:grid-cols-12 gap-10 items-end">
              <div className="lg:col-span-8">
                <p className="num-label">II. / Next step</p>
                <h2 className="display mt-6 text-5xl sm:text-6xl leading-[1.02] text-ink max-w-[18ch]">
                  Not sure where to start?
                </h2>
                <p className="mt-6 text-[17px] leading-relaxed text-ink-soft max-w-xl">
                  Book a free consultation and we&apos;ll walk through your
                  current workflows, pinpoint your highest-leverage automation
                  opportunities, and recommend the right starting point.
                </p>
              </div>
              <div className="lg:col-span-4 flex flex-col gap-4">
                <a href="https://calendly.com/techkeysolutions/15min?utm_medium=email&_hsenc=p2ANqtz-8Uo4hFPiyIJMLoVJ8ysbViG3qZWXmaEuPpcbIaUvunpYvYq_UzMMnn-t7eYLYmhtyL0H5joyGZbb9P3_TYzOb-XHeAHA&_hsmi=2&utm_content=2&utm_source=hs_email&month=2026-05" target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <span>Book a Consultation</span>
                  <span aria-hidden="true">→</span>
                </a>
                <Link href="/services/ai" className="btn-secondary">
                  <span>See our methodology</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </AnimateIn>
        </Container>
      </section>
    </>
  );
}
