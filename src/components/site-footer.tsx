import Link from "next/link";
import { Logo } from "./logo";
import { Icon } from "./icons";
import { site } from "@/lib/site";

const columns = [
  {
    title: "Product",
    links: [
      { label: "WhizzHR overview", href: "/whizzhr" },
      { label: "Attendance tracking", href: "/whizzhr#features" },
      { label: "Leave management", href: "/whizzhr#features" },
      { label: "Book a demo", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Custom software", href: "/services" },
      { label: "Billing systems", href: "/services#billing" },
      { label: "Internal tools", href: "/services" },
      { label: "Integrations", href: "/services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "Why UrbanWhizz", href: "/#why" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-ink text-slate-300">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo tone="light" />
            <p className="mt-5 text-sm leading-relaxed text-slate-400">
              {site.description}
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-2.5 text-slate-300 hover:text-white"
              >
                <Icon.Mail width={17} height={17} className="text-brand-300" />
                {site.email}
              </a>
              <p className="flex items-center gap-2.5 text-slate-400">
                <Icon.Pin width={17} height={17} className="text-brand-300" />
                {site.location}
              </p>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} {site.company}. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-sm text-slate-400">
            <a href={site.social.linkedin} className="hover:text-white">
              LinkedIn
            </a>
            <a href={site.social.twitter} className="hover:text-white">
              Twitter
            </a>
            <Link href="/contact" className="hover:text-white">
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
