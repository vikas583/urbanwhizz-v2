import type { Metadata } from "next";
import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { ContactForm } from "@/components/contact-form";
import { Icon } from "@/components/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact UrbanWhizz",
  description:
    "Get in touch with UrbanWhizz. Book a WhizzHR demo or discuss a custom software project — billing systems, web apps, internal tools and more.",
  alternates: { canonical: "/contact" },
};

const reasons = [
  { icon: Icon.Clock, title: "Book a WhizzHR demo", desc: "See our attendance & leave platform live." },
  { icon: Icon.Code, title: "Discuss a custom build", desc: "Billing software, web apps or internal tools." },
  { icon: Icon.Handshake, title: "Just exploring", desc: "Not sure yet? We're happy to point you the right way." },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-200/70">
        <div className="absolute inset-0 -z-10 bg-grid" />
        <div className="absolute inset-x-0 top-0 -z-10 h-[320px] bg-gradient-to-b from-brand-50/70 to-transparent" />
        <Container className="py-16 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
            {/* Left: intro + reasons */}
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-3.5 py-1.5 text-xs font-semibold text-brand-700 shadow-soft">
                Contact
              </span>
              <h1 className="mt-6 text-4xl font-bold leading-[1.1] text-ink sm:text-5xl">
                Let&apos;s talk
              </h1>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-slate-600">
                Tell us what you need and we&apos;ll get back to you within one
                business day. No pressure, no jargon.
              </p>

              <div className="mt-8 space-y-4">
                {reasons.map((r) => (
                  <div key={r.title} className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-brand-600 shadow-soft ring-1 ring-slate-100">
                      <r.icon />
                    </span>
                    <div>
                      <p className="font-semibold text-ink">{r.title}</p>
                      <p className="text-sm text-slate-600">{r.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 space-y-3 border-t border-slate-200 pt-8 text-sm">
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-3 text-ink hover:text-brand-600"
                >
                  <Icon.Mail width={18} height={18} className="text-brand-600" />
                  {site.email}
                </a>
                <p className="flex items-center gap-3 text-slate-600">
                  <Icon.Pin width={18} height={18} className="text-brand-600" />
                  {site.location}
                </p>
              </div>
            </Reveal>

            {/* Right: form */}
            <Reveal delay={120}>
              <ContactForm />
            </Reveal>
          </div>
        </Container>
      </section>

      <Section className="py-14">
        <Container>
          <p className="text-center text-sm text-slate-400">
            Prefer email? Reach us anytime at{" "}
            <a href={`mailto:${site.email}`} className="font-semibold text-brand-600">
              {site.email}
            </a>
          </p>
        </Container>
      </Section>
    </>
  );
}
