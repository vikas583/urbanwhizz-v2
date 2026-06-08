import { Icon } from "./icons";
import { site } from "@/lib/site";

/**
 * Abstract product preview shown in the hero — a stylised WhizzHR dashboard.
 * Pure markup/CSS so it stays crisp on every screen and adds zero JS weight.
 */
export function HeroVisual() {
  const bars = [42, 68, 55, 80, 60, 88, 72];
  const days = ["M", "T", "W", "T", "F", "S", "S"];

  return (
    <div className="relative">
      {/* glow */}
      <div className="absolute -inset-8 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-brand-100/70 via-transparent to-accent-400/20 blur-2xl" />

      <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-lift">
        {/* window bar */}
        <div className="flex items-center gap-2 border-b border-slate-100 bg-paper-soft px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <div className="ml-3 flex items-center gap-1.5 rounded-md bg-white px-2.5 py-1 text-[11px] text-slate-400 ring-1 ring-slate-200">
            app.{site.product.toLowerCase()}.com
          </div>
        </div>

        <div className="grid grid-cols-3 gap-px bg-slate-100">
          {/* sidebar */}
          <div className="col-span-1 space-y-2 bg-white p-4">
            <div className="mb-3 flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-brand-500 to-brand-700">
                <Icon.Clock width={13} height={13} className="text-white" />
              </span>
              <span className="text-[11px] font-bold text-ink">
                {site.product}
              </span>
            </div>
            {["Dashboard", "Attendance", "Leave", "Reports", "Team"].map(
              (item, i) => (
                <div
                  key={item}
                  className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-[10px] ${
                    i === 1
                      ? "bg-brand-50 font-semibold text-brand-700"
                      : "text-slate-500"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      i === 1 ? "bg-brand-500" : "bg-slate-300"
                    }`}
                  />
                  {item}
                </div>
              )
            )}
          </div>

          {/* main panel */}
          <div className="col-span-2 space-y-3 bg-paper-soft p-4">
            <div className="grid grid-cols-3 gap-2">
              {[
                { label: "Present", value: "94%", tone: "text-emerald-600" },
                { label: "On leave", value: "11", tone: "text-brand-600" },
                { label: "Pending", value: "3", tone: "text-amber-600" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-lg bg-white p-2.5 ring-1 ring-slate-100"
                >
                  <p className="text-[9px] uppercase tracking-wide text-slate-400">
                    {s.label}
                  </p>
                  <p className={`text-base font-bold ${s.tone}`}>{s.value}</p>
                </div>
              ))}
            </div>

            {/* chart */}
            <div className="rounded-lg bg-white p-3 ring-1 ring-slate-100">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-[10px] font-semibold text-ink">
                  Weekly attendance
                </p>
                <span className="rounded-full bg-emerald-50 px-1.5 py-0.5 text-[8px] font-semibold text-emerald-600">
                  +6%
                </span>
              </div>
              <div className="flex h-20 items-end justify-between gap-1.5">
                {bars.map((h, i) => (
                  <div
                    key={i}
                    className="flex flex-1 flex-col items-center gap-1"
                  >
                    <div
                      className="w-full rounded-t bg-gradient-to-t from-brand-500 to-brand-300"
                      style={{ height: `${h}%` }}
                    />
                    <span className="text-[8px] text-slate-400">{days[i]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* leave request row */}
            <div className="flex items-center justify-between rounded-lg bg-white p-2.5 ring-1 ring-slate-100">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-100 text-[9px] font-bold text-brand-700">
                  AK
                </span>
                <div>
                  <p className="text-[10px] font-semibold text-ink">
                    Leave request
                  </p>
                  <p className="text-[8px] text-slate-400">2 days · approved</p>
                </div>
              </div>
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500">
                <Icon.Check width={11} height={11} className="text-white" />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* floating badge */}
      <div className="absolute -bottom-5 -left-5 hidden items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 shadow-lift sm:flex">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50">
          <Icon.Check width={16} height={16} className="text-emerald-600" />
        </span>
        <div>
          <p className="text-xs font-bold text-ink">Auto check-in</p>
          <p className="text-[10px] text-slate-500">9:01 AM · on time</p>
        </div>
      </div>
    </div>
  );
}
