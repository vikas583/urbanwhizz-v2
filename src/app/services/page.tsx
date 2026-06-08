import type { Metadata } from "next";
import { Button, Container, Section, SectionHeading, Card } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { Icon } from "@/components/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Custom Software Development Services",
  description:
    "UrbanWhizz builds custom software — billing and invoicing systems, web applications, internal dashboards and integrations — designed around your business workflow.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Custom Software Development Services · UrbanWhizz",
    description:
      "Billing software, custom web apps, internal tools and integrations built around your workflow.",
    url: `${site.domain}/services`,
  },
};

const services = [
  {
    id: "billing",
    icon: Icon.Receipt,
    title: "Billing & invoicing software",
    desc: "Custom billing platforms with invoicing, taxes, recurring plans and payment tracking — built to match exactly how your business bills its customers.",
    points: ["Invoices & estimates", "Tax & discount rules", "Payment tracking", "Statements & reports"],
  },
  {
    id: "webapps",
    icon: Icon.Code,
    title: "Custom web applications",
    desc: "Tailored platforms, portals and tools that fit your process — instead of bending your business to fit someone else's template.",
    points: ["Customer & admin portals", "Workflow automation", "Role-based access", "Cloud-ready builds"],
  },
  {
    id: "dashboards",
    icon: Icon.Layers,
    title: "Dashboards & internal tools",
    desc: "Internal tools and dashboards that turn scattered data into clear, daily decisions for your team.",
    points: ["Operational dashboards", "Reporting & exports", "Data entry tools", "Team workflows"],
  },
  {
    id: "integrations",
    icon: Icon.Plug,
    title: "Integrations & APIs",
    desc: "Connect the systems you already use — payroll, accounting, CRMs and more — into one reliable, automated flow.",
    points: ["Third-party integrations", "Custom APIs", "Data sync", "Automation"],
  },
  {
    id: "maintenance",
    icon: Icon.Wrench,
    title: "Maintenance & support",
    desc: "We don't disappear at launch. We monitor, maintain and keep improving the software we build for you.",
    points: ["Ongoing support", "Enhancements", "Monitoring", "Updates"],
  },
  {
    id: "consulting",
    icon: Icon.Compass,
    title: "Solution consulting",
    desc: "Not sure where to start? We help you scope the right solution before a line of code is written.",
    points: ["Discovery & scoping", "Tech advice", "Roadmapping", "Estimates"],
  },
];

const steps = [
  { n: "01", title: "Discover", desc: "We learn your process, goals and the gaps in your current tools." },
  { n: "02", title: "Design", desc: "We map the workflow and shape a clear, usable solution with you." },
  { n: "03", title: "Build", desc: "We develop in steady milestones, with working software you can review." },
  { n: "04", title: "Support", desc: "We launch, train your team and keep improving it over time." },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200/70">
        <div className="absolute inset-0 -z-10 bg-grid" />
        <div className="absolute inset-x-0 top-0 -z-10 h-[380px] bg-gradient-to-b from-brand-50/70 to-transparent" />
        <Container className="pb-16 pt-16 sm:pt-20">
          <div className="max-w-3xl">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-3.5 py-1.5 text-xs font-semibold text-brand-700 shadow-soft">
                <Icon.Code width={14} height={14} /> Software services
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 text-4xl font-bold leading-[1.1] text-ink sm:text-5xl">
                Custom software,{" "}
                <span className="bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text text-transparent">
                  built around your business
                </span>
                .
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                When off-the-shelf tools don&apos;t fit, {site.company} designs
                and builds software that does — from billing systems to internal
                dashboards. We&apos;ve already built custom billing software for a
                client, and we&apos;d love to build the right solution for you.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/contact">
                  Start a project
                  <Icon.Arrow width={17} height={17} />
                </Button>
                <Button href="/whizzhr" variant="secondary">
                  See our product
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Services grid */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="What we build"
              title="Services that cover the full build"
              intro="From first idea to live software and beyond — here's how we can help."
              align="center"
              className="mb-14"
            />
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.id} delay={(i % 3) * 80}>
                <Card id={s.id} className="h-full scroll-mt-24">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white">
                    <s.icon />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {s.desc}
                  </p>
                  <ul className="mt-4 space-y-1.5">
                    {s.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-center gap-2 text-sm text-slate-700"
                      >
                        <Icon.Check width={15} height={15} className="text-brand-600" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Case study */}
      <Section className="bg-paper-soft">
        <Container>
          <Reveal>
            <div className="grid items-center gap-10 rounded-3xl border border-slate-200/80 bg-white p-8 shadow-soft sm:p-12 lg:grid-cols-[1.1fr_1fr]">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                  <Icon.Receipt width={14} height={14} /> Case study · Billing software
                </span>
                <h2 className="mt-5 text-2xl font-bold text-ink sm:text-3xl">
                  Custom billing software for Simsan Fraser Maintenance
                </h2>
                <p className="mt-4 leading-relaxed text-slate-600">
                  Simsan Fraser Maintenance needed billing that matched the way
                  they actually invoice their facility-maintenance work.
                  We designed and built a custom billing system around their
                  process — replacing manual, spreadsheet-driven invoicing with
                  software that fits their business.
                </p>
                <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                  {[
                    "Tailored invoicing flow",
                    "Faster, accurate billing",
                    "Built around their process",
                    "Ongoing support",
                  ].map((p) => (
                    <li
                      key={p}
                      className="flex items-center gap-2 text-sm text-slate-700"
                    >
                      <Icon.Check width={16} height={16} className="text-brand-600" />
                      {p}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://www.simsanfrasermain.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700"
                >
                  Visit Simsan Fraser Maintenance
                  <Icon.Arrow width={16} height={16} className="-rotate-45" />
                </a>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-brand-600 to-brand-700 p-7 text-white shadow-lift">
                <Icon.Receipt width={30} height={30} className="text-accent-400" />
                <p className="mt-5 text-lg font-medium leading-relaxed">
                  &ldquo;We build the software around how a business actually
                  works — not the other way around. Simsan&apos;s billing is a
                  good example of exactly that.&rdquo;
                </p>
                <p className="mt-5 text-sm text-brand-100">— The {site.company} team</p>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Process */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Our process"
              title="A clear path from idea to live software"
              align="center"
              className="mb-14"
            />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 80}>
                <div className="relative h-full rounded-2xl border border-slate-200/80 bg-white p-7 shadow-soft">
                  <span className="text-3xl font-bold text-brand-100">{s.n}</span>
                  <h3 className="mt-2 text-lg font-semibold text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {s.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section>
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-ink px-8 py-16 text-center shadow-lift sm:px-16">
              <div className="absolute inset-0 z-0 bg-grid opacity-30" />
              <div className="relative">
                <h2 className="mx-auto max-w-2xl text-3xl font-bold text-white sm:text-4xl">
                  Have a project in mind?
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-slate-300">
                  Tell us what you&apos;re trying to solve. We&apos;ll help you
                  scope it and recommend the right way to build it.
                </p>
                <div className="mt-8">
                  <Button href="/contact">
                    Talk to us
                    <Icon.Arrow width={17} height={17} />
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
