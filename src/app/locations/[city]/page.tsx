import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { AnimateIn } from "@/components/animate-in";
import { site } from "@/lib/site";
import { locations, getLocation } from "@/lib/locations";

type Params = { city: string };

export function generateStaticParams() {
  return locations.map((l) => ({ city: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { city } = await params;
  const loc = getLocation(city);
  if (!loc) return { title: "Not found" };
  const title = `AI Automation for ${loc.city} Businesses · TechKey Solutions`;
  return {
    title,
    description: loc.description,
    keywords: [
      `AI automation ${loc.city}`,
      `AI consulting ${loc.city}`,
      `business automation ${loc.city}`,
      `AI solutions ${loc.city} ${loc.state}`,
      `workflow automation ${loc.city}`,
      "TechKey Solutions",
    ],
    robots: { index: true, follow: true },
    alternates: { canonical: `/locations/${loc.slug}` },
    openGraph: {
      title,
      description: loc.description,
      url: `/locations/${loc.slug}`,
      siteName: site.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: loc.description,
    },
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { city } = await params;
  const loc = getLocation(city);
  if (!loc) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    url: "https://thetks.com",
    telephone: site.phone,
    email: site.email,
    areaServed: {
      "@type": "City",
      name: loc.city,
      containedInPlace: { "@type": "State", name: "California" },
    },
    description: loc.description,
    serviceType: [
      "AI Automation",
      "Business Process Optimization",
      "CRM Implementation",
      "Workflow Automation",
    ],
    sameAs: [site.social.linkedin],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="border-b border-line">
        <Container className="pt-20 pb-24 lg:pt-28 lg:pb-32">
          <AnimateIn>
            <div className="flex items-center gap-3">
              <span className="num-label">Locations</span>
              <span className="h-px w-10 bg-line-strong" />
              <span className="eyebrow">
                {loc.region} · {loc.city}, {loc.state}
              </span>
            </div>
            <h1 className="hero-headline mt-8 text-ink max-w-[22ch]">
              {loc.headline}
            </h1>
            <p className="mt-12 max-w-2xl text-[18px] leading-relaxed text-ink-soft">
              {loc.intro}
            </p>
          </AnimateIn>
        </Container>
      </section>

      {/* INDUSTRIES */}
      <section className="py-14 border-b border-line bg-canvas-2">
        <Container>
          <AnimateIn>
            <p className="eyebrow mb-8">Industries we serve in {loc.city}</p>
            <div className="flex flex-wrap gap-3">
              {loc.industries.map((industry) => (
                <span
                  key={industry}
                  className="border border-line rounded-full px-4 py-1.5 text-[14px] text-ink-soft display"
                >
                  {industry}
                </span>
              ))}
            </div>
          </AnimateIn>
        </Container>
      </section>

      {/* HOW WE HELP */}
      <section className="py-24 border-b border-line">
        <Container>
          <AnimateIn>
            <div className="flex items-center gap-3 mb-12">
              <span className="num-label">I.</span>
              <span className="h-px w-10 bg-line-strong" />
              <span className="eyebrow">How we help {loc.city} businesses</span>
            </div>
          </AnimateIn>
          <div className="grid md:grid-cols-3 gap-6">
            {loc.services.map((s, i) => (
              <AnimateIn key={s.title} delay={i * 0.1}>
                <div className="rounded-2xl border border-line bg-canvas-2 p-8 flex flex-col h-full">
                  <h2 className="display text-2xl text-ink">{s.title}</h2>
                  <p className="mt-4 text-[15px] leading-relaxed text-ink-soft flex-1">
                    {s.body}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </Container>
      </section>

      {/* QUOTE */}
      <section className="py-24 bg-canvas-2 border-b border-line">
        <Container>
          <AnimateIn>
            <figure className="max-w-4xl">
              <p className="display text-3xl sm:text-4xl lg:text-5xl text-ink leading-[1.1]">
                “We work with businesses across California — fully remote, no
                overhead, and always focused on results you can measure.”
              </p>
              <figcaption className="mt-10 flex items-center gap-4 num-label">
                <span className="h-px w-10 bg-line-strong" />
                {site.name}
              </figcaption>
            </figure>
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
                  Ready to automate your {loc.city} business?
                </h2>
                <p className="mt-6 text-[17px] leading-relaxed text-ink-soft max-w-xl">
                  Book a free 15-minute consultation and we&apos;ll walk through
                  your workflows, identify the highest-leverage automation
                  opportunities, and tell you exactly where to start.
                </p>
              </div>
              <div className="lg:col-span-4 flex flex-col gap-4">
                <a
                  href="https://calendly.com/techkeysolutions/15min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <span>Book a Free Consultation</span>
                  <span aria-hidden="true">→</span>
                </a>
                <Link href="/services" className="btn-secondary">
                  <span>See our services</span>
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
