import type { Metadata } from "next";
import { Button, Container, Section, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { Clients } from "@/components/clients";
import { Icon } from "@/components/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About UrbanWhizz",
  description:
    "UrbanWhizz is a software studio building custom web apps, software and workflow automations for growing businesses — from internal tools and dashboards to billing systems and integrations.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: Icon.Sparkle,
    title: "Useful over flashy",
    desc: "We build software people actually use every day — clear, fast and dependable.",
  },
  {
    icon: Icon.Handshake,
    title: "Partnership first",
    desc: "We treat your goals as our own and stay invested long after launch.",
  },
  {
    icon: Icon.Shield,
    title: "Built to trust",
    desc: "Security, reliability and careful handling of your data are non-negotiable.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200/70">
        <div className="absolute inset-0 -z-10 bg-grid" />
        <div className="absolute inset-x-0 top-0 -z-10 h-[360px] bg-gradient-to-b from-brand-50/70 to-transparent" />
        <Container className="pb-16 pt-16 sm:pt-20">
          <div className="max-w-3xl">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-3.5 py-1.5 text-xs font-semibold text-brand-700 shadow-soft">
                About us
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 text-4xl font-bold leading-[1.1] text-ink sm:text-5xl">
                We build the software that{" "}
                <span className="bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text text-transparent">
                  growing teams rely on
                </span>
                .
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                {site.company} is a product-and-services software company. On the
                product side, we build {site.product} — a modern platform for
                attendance and leave management. On the services side, we design
                and develop custom software, from billing systems to internal
                tools, for businesses that need something built around their
                exact workflow.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Story */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <SectionHeading
                eyebrow="Our story"
                title="Product depth, services flexibility"
                intro="We started by solving a real, everyday problem — managing attendance and leave without spreadsheets. That became WhizzHR. Along the way, businesses asked us to build other software around their processes, and our custom solutioning practice grew from there."
              />
              <p className="mt-5 leading-relaxed text-slate-600">
                Today we work with a growing roster of businesses across
                industries, combining a polished product with hands-on custom
                development — including bespoke billing software we built for a
                client.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { icon: Icon.Clock, label: "WhizzHR", sub: "Our attendance & leave product" },
                  { icon: Icon.Code, label: "Custom builds", sub: "Software around your workflow" },
                  { icon: Icon.Handshake, label: "Long-term", sub: "Partnership beyond launch" },
                  { icon: Icon.Shield, label: "Reliable", sub: "Secure & dependable delivery" },
                ].map((c) => (
                  <div
                    key={c.label}
                    className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-soft"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                      <c.icon />
                    </span>
                    <p className="mt-4 font-semibold text-ink">{c.label}</p>
                    <p className="mt-1 text-sm text-slate-500">{c.sub}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section className="bg-paper-soft">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="What we value"
              title="How we work with you"
              align="center"
              className="mb-14"
            />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="h-full rounded-2xl bg-white p-7 shadow-soft">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <v.icon />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-ink">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {v.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Clients */}
      <Section>
        <Clients heading="Some of the businesses we've worked with" />
      </Section>

      {/* CTA */}
      <Section className="pt-0">
        <Container>
          <Reveal>
            <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-slate-200/80 bg-white p-10 text-center shadow-soft sm:flex-row sm:text-left">
              <div>
                <h2 className="text-2xl font-bold text-ink">
                  Let&apos;s build something that works.
                </h2>
                <p className="mt-2 text-slate-600">
                  Whether it&apos;s {site.product} or a custom build, we&apos;d
                  love to hear from you.
                </p>
              </div>
              <Button href="/contact">
                Get in touch
                <Icon.Arrow width={17} height={17} />
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
