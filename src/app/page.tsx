import Link from "next/link";
import { Button, Container, Section, SectionHeading, Card } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { HeroVisual } from "@/components/hero-visual";
import { Clients } from "@/components/clients";
import { Icon } from "@/components/icons";
import { site } from "@/lib/site";

const productFeatures = [
  {
    icon: Icon.Clock,
    title: "Smart attendance",
    desc: "Web and mobile check-in, shift tracking and real-time presence across every location.",
  },
  {
    icon: Icon.Calendar,
    title: "Leave management",
    desc: "Configurable leave types, balances and holiday calendars your team can actually understand.",
  },
  {
    icon: Icon.Workflow,
    title: "Approval workflows",
    desc: "Multi-level approvals that route to the right manager and notify everyone automatically.",
  },
  {
    icon: Icon.Chart,
    title: "Reports & insights",
    desc: "Attendance trends, leave usage and exportable reports for payroll in a couple of clicks.",
  },
];

const services = [
  {
    icon: Icon.Receipt,
    title: "Billing & invoicing software",
    desc: "Custom billing systems with invoicing, taxes and payments — built around how you actually bill.",
  },
  {
    icon: Icon.Code,
    title: "Custom web applications",
    desc: "Tailored platforms and dashboards that fit your process instead of forcing you into a template.",
  },
  {
    icon: Icon.Plug,
    title: "Integrations & APIs",
    desc: "Connect the tools you already use — payroll, accounting, CRMs — into one reliable flow.",
  },
];

const whyPoints = [
  {
    icon: Icon.Sparkle,
    title: "Built around your workflow",
    desc: "We design software to match how your business runs, not the other way around.",
  },
  {
    icon: Icon.Handshake,
    title: "A long-term partner",
    desc: "From first scope to ongoing support, you work with a team that stays invested.",
  },
  {
    icon: Icon.Shield,
    title: "Reliable & secure",
    desc: "Role-based access, dependable uptime and careful handling of your company data.",
  },
  {
    icon: Icon.Rocket,
    title: "Practical delivery",
    desc: "Clear scope, steady milestones and software that ships and keeps improving.",
  },
];

const steps = [
  { n: "01", title: "Discover", desc: "We learn your process, goals and the gaps in your current tools." },
  { n: "02", title: "Design", desc: "We map the workflow and shape a clear, usable solution together." },
  { n: "03", title: "Build", desc: "We develop in steady milestones, with working software you can review." },
  { n: "04", title: "Support", desc: "We launch, train your team and keep improving it over time." },
];

export default function HomePage() {
  return (
    <>
      {/* ---------------------------------------------------------------- */}
      {/* Hero                                                              */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-grid" />
        <div className="absolute inset-0 -z-10 bg-radial-fade" />
        <div className="absolute inset-x-0 top-0 -z-10 h-[420px] bg-gradient-to-b from-brand-50/60 to-transparent" />

        <Container className="pb-20 pt-16 sm:pb-28 sm:pt-24">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-3.5 py-1.5 text-xs font-semibold text-brand-700 shadow-soft backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
                  Product &amp; software services
                </span>
              </Reveal>

              <Reveal delay={80}>
                <h1 className="mt-6 text-4xl font-bold leading-[1.08] text-ink sm:text-5xl lg:text-[3.4rem]">
                  Software that runs the{" "}
                  <span className="bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text text-transparent">
                    everyday work
                  </span>{" "}
                  of your business.
                </h1>
              </Reveal>

              <Reveal delay={160}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
                  {site.company} builds{" "}
                  <strong className="text-ink">{site.product}</strong>, a modern
                  attendance &amp; leave platform — and designs custom software,
                  from billing systems to internal tools, for growing teams.
                </p>
              </Reveal>

              <Reveal delay={240}>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Button href="/whizzhr">
                    Explore {site.product}
                    <Icon.Arrow width={17} height={17} />
                  </Button>
                  <Button href="/contact" variant="secondary">
                    Talk to us
                  </Button>
                </div>
              </Reveal>

              <Reveal delay={320}>
                <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-500">
                  <span className="flex items-center gap-2">
                    <Icon.Check width={16} height={16} className="text-brand-600" />
                    Trusted by growing businesses
                  </span>
                  <span className="flex items-center gap-2">
                    <Icon.Check width={16} height={16} className="text-brand-600" />
                    Product + custom builds
                  </span>
                </div>
              </Reveal>
            </div>

            <Reveal delay={200}>
              <HeroVisual />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Clients                                                           */}
      {/* ---------------------------------------------------------------- */}
      <Clients className="border-y border-slate-200/70 bg-paper-soft py-14" />

      {/* ---------------------------------------------------------------- */}
      {/* Two pillars                                                       */}
      {/* ---------------------------------------------------------------- */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="What we do"
              title="One product, and software built just for you"
              intro="Start with WhizzHR to run attendance and leave out of the box — or partner with us to build the custom software your business needs."
              align="center"
              className="mb-14"
            />
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="flex h-full flex-col rounded-3xl border border-slate-200/80 bg-gradient-to-br from-brand-600 to-brand-700 p-8 text-white shadow-lift sm:p-10">
                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur">
                  Our product
                </span>
                <h3 className="mt-5 text-2xl font-bold">{site.product}</h3>
                <p className="mt-3 text-brand-100">
                  A modern CMS for company management — attendance, leave,
                  approvals and reports in one clean, easy-to-use platform.
                </p>
                <ul className="mt-6 space-y-2.5 text-sm text-brand-50">
                  {[
                    "Attendance & shift tracking",
                    "Leave & holiday management",
                    "Approvals & notifications",
                    "Payroll-ready reports",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <Icon.Check width={17} height={17} className="text-accent-400" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-2">
                  <Link
                    href="/whizzhr"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand-700 transition-transform hover:-translate-y-0.5"
                  >
                    See {site.product}
                    <Icon.Arrow width={16} height={16} />
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="flex h-full flex-col rounded-3xl border border-slate-200/80 bg-white p-8 shadow-soft sm:p-10">
                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-paper-muted px-3 py-1 text-xs font-semibold text-slate-600">
                  Our services
                </span>
                <h3 className="mt-5 text-2xl font-bold text-ink">
                  Custom software solutioning
                </h3>
                <p className="mt-3 text-slate-600">
                  When off-the-shelf doesn&apos;t fit, we design and build
                  software around your exact process — like the billing system
                  we built for a client.
                </p>
                <ul className="mt-6 space-y-2.5 text-sm text-slate-700">
                  {[
                    "Billing & invoicing software",
                    "Custom web applications",
                    "Dashboards & internal tools",
                    "Integrations & APIs",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <Icon.Check width={17} height={17} className="text-brand-600" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-2">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                  >
                    Explore services
                    <Icon.Arrow width={16} height={16} />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* WhizzHR features                                                  */}
      {/* ---------------------------------------------------------------- */}
      <Section className="bg-paper-soft">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow={`Inside ${site.product}`}
              title="Everything you need to manage your people"
              intro="Replace spreadsheets and scattered tools with one platform built for attendance and leave."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {productFeatures.map((f, i) => (
              <Reveal key={f.title} delay={i * 80}>
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

      {/* ---------------------------------------------------------------- */}
      {/* Services                                                          */}
      {/* ---------------------------------------------------------------- */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">
            <Reveal>
              <SectionHeading
                eyebrow="Custom solutioning"
                title="Software shaped around your business"
                intro="From billing platforms to internal tools, we build the software that fits the way your team works — and support it long after launch."
              />
              <div className="mt-8">
                <Button href="/services" variant="secondary">
                  See how we work
                  <Icon.Arrow width={16} height={16} />
                </Button>
              </div>
            </Reveal>

            <div className="grid gap-5">
              {services.map((s, i) => (
                <Reveal key={s.title} delay={i * 100}>
                  <div className="flex items-start gap-5 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white">
                      <s.icon />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-ink">{s.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* Why UrbanWhizz                                                    */}
      {/* ---------------------------------------------------------------- */}
      <Section id="why" className="bg-paper-soft">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Why UrbanWhizz"
              title="A partner that builds, ships and stays"
              intro="We combine a polished product with hands-on custom development — so you get software that works today and grows with you."
              align="center"
              className="mb-14"
            />
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyPoints.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <div className="h-full rounded-2xl bg-white p-7 text-center shadow-soft">
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <p.icon />
                  </span>
                  <h3 className="mt-5 text-base font-semibold text-ink">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {p.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* Process                                                           */}
      {/* ---------------------------------------------------------------- */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="How we work"
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

      {/* ---------------------------------------------------------------- */}
      {/* Quote                                                             */}
      {/* ---------------------------------------------------------------- */}
      <Section className="bg-ink text-white">
        <Container>
          <Reveal>
            <figure className="mx-auto max-w-3xl text-center">
              <Icon.Sparkle width={32} height={32} className="mx-auto text-accent-400" />
              <blockquote className="mt-6 text-2xl font-medium leading-relaxed sm:text-3xl">
                &ldquo;UrbanWhizz understood our process and built software that
                fit it exactly. Attendance and billing that used to take days now
                runs on its own.&rdquo;
              </blockquote>
              <figcaption className="mt-6 text-sm text-slate-400">
                Operations lead · UrbanWhizz client
              </figcaption>
            </figure>
          </Reveal>
        </Container>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* CTA                                                               */}
      {/* ---------------------------------------------------------------- */}
      <Section>
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 to-brand-700 px-8 py-16 text-center shadow-lift sm:px-16">
              <div className="absolute inset-0 z-0 bg-grid opacity-20" />
              <div className="relative">
                <h2 className="mx-auto max-w-2xl text-3xl font-bold text-white sm:text-4xl">
                  Ready to run your business on better software?
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-brand-100">
                  Book a demo of {site.product}, or tell us about the custom
                  solution you have in mind. We&apos;ll take it from there.
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-700 transition-transform hover:-translate-y-0.5"
                  >
                    Book a demo
                    <Icon.Arrow width={17} height={17} />
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 rounded-full bg-white/10 px-7 py-3.5 text-sm font-semibold text-white ring-1 ring-white/30 backdrop-blur transition-colors hover:bg-white/20"
                  >
                    Discuss a project
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
