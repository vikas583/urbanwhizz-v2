import { Container } from "./ui";
import { Reveal } from "./reveal";
import { Icon } from "./icons";
import { clients } from "@/lib/site";

/**
 * Logo-wall style grid of real clients. Text wordmarks (not scraped images)
 * keep it crisp, consistent and fast. Each card links out to the client site.
 */
export function Clients({
  heading = "Trusted by teams we've helped grow",
  className = "",
}: {
  heading?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <Container>
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
            {heading}
          </p>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {clients.map((c, i) => (
            <Reveal key={c.name} delay={i * 70}>
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-5 shadow-soft transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift"
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-sm font-bold text-white">
                    {c.name
                      .split(" ")
                      .slice(0, 2)
                      .map((w) => w[0])
                      .join("")}
                  </span>
                  <Icon.Arrow
                    width={16}
                    height={16}
                    className="-rotate-45 text-slate-300 transition-colors group-hover:text-brand-600"
                  />
                </div>
                <div className="mt-4">
                  <p className="font-semibold leading-tight text-ink">{c.name}</p>
                  <p className="mt-0.5 text-xs text-slate-500">{c.tag}</p>
                  {"note" in c && c.note ? (
                    <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-brand-50 px-2 py-0.5 text-[11px] font-semibold text-brand-700">
                      <Icon.Receipt width={12} height={12} />
                      {c.note}
                    </span>
                  ) : null}
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </div>
  );
}
