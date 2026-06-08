import type { Metadata } from "next";
import Link from "next/link";
import { Button, Container, Section, SectionHeading, Card } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { HeroVisual } from "@/components/hero-visual";
import { Icon } from "@/components/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "WhizzHR — Attendance & Leave Management Software",
  description:
    "WhizzHR by UrbanWhizz is a modern attendance and leave management system — check-in, shifts, leave balances, approvals and payroll-ready reports in one platform.",
  alternates: { canonical: "/whizzhr" },
  openGraph: {
    title: "WhizzHR — Attendance & Leave Management Software",
    description:
      "A modern attendance and leave management platform for growing teams.",
    url: `${site.domain}/whizzhr`,
  },
};

const features = [
  {
    icon: Icon.Clock,
    title: "Attendance tracking",
    desc: "Web and mobile check-in / check-out, shift schedules and live presence across teams and locations.",
  },
  {
    icon: Icon.Calendar,
    title: "Leave management",
    desc: "Define leave types and policies, track balances and let employees apply in a few taps.",
  },
  {
    icon: Icon.Workflow,
    title: "Approvals & workflows",
    desc: "Multi-level approval chains that notify managers and keep everyone in the loop.",
  },
  {
    icon: Icon.Chart,
    title: "Reports & analytics",
    desc: "Attendance trends, leave usage and exportable, payroll-ready reports on demand.",
  },
  {
    icon: Icon.Users,
    title: "Employee directory",
    desc: "A single source of truth for your people, roles, teams and reporting lines.",
  },
  {
    icon: Icon.Shield,
    title: "Roles & permissions",
    desc: "Granular, role-based access so the right people see exactly what they should.",
  },
];

const outcomes = [
  { stat: "Hours", label: "saved every payroll cycle on manual tracking" },
  { stat: "One", label: "platform replacing spreadsheets and scattered tools" },
  { stat: "Real-time", label: "visibility into attendance and leave" },
];

const faqs = [
  {
    q: "Can WhizzHR handle multiple shifts and locations?",
    a: "Yes. You can configure shifts, multiple work locations and per-team policies, with attendance rolled up into one view.",
  },
  {
    q: "Is the leave policy configurable?",
    a: "Fully. Create your own leave types, accrual rules, balances and holiday calendars to match your company policy.",
  },
  {
    q: "Can we export data for payroll?",
    a: "Attendance and leave data export into clean, payroll-ready reports so you can process payroll without re-keying anything.",
  },
  {
    q: "Can WhizzHR be customised for our workflow?",
    a: "Absolutely — as a product-and-services company, UrbanWhizz can tailor WhizzHR or integrate it with the tools you already use.",
  },
];

export default function WhizzHRPage() {
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: site.product,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, iOS, Android",
    offers: { "@type": "Offer", priceCurrency: "USD" },
    description:
      "Attendance and leave management software for growing teams, by UrbanWhizz.",
    publisher: { "@type": "Organization", name: site.company },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200/70">
        <div className="absolute inset-0 -z-10 bg-grid" />
        <div className="absolute inset-x-0 top-0 -z-10 h-[420px] bg-gradient-to-b from-brand-50/70 to-transparent" />
        <Container className="pb-20 pt-16 sm:pt-20">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_1fr]">
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-3.5 py-1.5 text-xs font-semibold text-brand-700 shadow-soft">
                  <Icon.Clock width={14} height={14} /> The {site.company} product
                </span>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="mt-6 text-4xl font-bold leading-[1.1] text-ink sm:text-5xl">
                  Attendance &amp; leave,{" "}
                  <span className="bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text text-transparent">
                    finally simple
                  </span>
                  .
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-600">
                  {site.product} is a modern CMS for company management. Track
                  attendance, manage leave, run approvals and pull payroll-ready
                  reports — all in one clean platform your whole team will use.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href="/contact">
                    Book a demo
                    <Icon.Arrow width={17} height={17} />
                  </Button>
                  <Button href="#features" variant="secondary">
                    See features
                  </Button>
                </div>
              </Reveal>
            </div>
            <Reveal delay={200}>
              <HeroVisual />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Outcomes */}
      <div className="border-b border-slate-200/70 bg-paper-soft py-12">
        <Container>
          <div className="grid gap-8 sm:grid-cols-3">
            {outcomes.map((o) => (
              <div key={o.label} className="text-center">
                <p className="text-3xl font-bold text-brand-600">{o.stat}</p>
                <p className="mt-1 text-sm text-slate-600">{o.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Features */}
      <Section id="features">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Features"
              title="One platform for your whole team"
              intro="Everything you need to run attendance and leave — and nothing you don't."
              align="center"
              className="mb-14"
            />
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 80}>
                <Card className="h-full">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                    <f.icon />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-ink">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {f.desc}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section className="bg-paper-soft">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="FAQ"
              title="Questions, answered"
              align="center"
              className="mb-12"
            />
          </Reveal>
          <div className="mx-auto max-w-3xl divide-y divide-slate-200">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 60}>
                <details className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-ink">
                    {f.q}
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-brand-600 ring-1 ring-slate-200 transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {f.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section>
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 to-brand-700 px-8 py-16 text-center shadow-lift sm:px-16">
              <div className="absolute inset-0 z-0 bg-grid opacity-20" />
              <div className="relative">
                <h2 className="mx-auto max-w-2xl text-3xl font-bold text-white sm:text-4xl">
                  See {site.product} in action
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-brand-100">
                  Book a quick, no-pressure demo and we&apos;ll show you how
                  {" "}{site.product} fits your team.
                </p>
                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-700 transition-transform hover:-translate-y-0.5"
                  >
                    Book a demo
                    <Icon.Arrow width={17} height={17} />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
