"use client";

import { useActionState, useEffect, useState } from "react";
import { useFormStatus } from "react-dom";
import { Icon } from "./icons";
import { site } from "@/lib/site";
import { sendEnquiry, type ContactState } from "@/app/contact/actions";
import { Turnstile } from "./turnstile";

const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

const interests = ["WhizzHR (product)", "Custom software", "Billing software", "Other"];

const initialState: ContactState = { ok: false };

const fieldClass =
  "mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink shadow-sm outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
    >
      {pending ? "Sending…" : "Send message"}
      {!pending && <Icon.Arrow width={17} height={17} />}
    </button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(sendEnquiry, initialState);
  // Captured once on first render — used by the server's time-trap to reject
  // submissions that arrive impossibly fast (bots).
  const [renderedAt] = useState(() => Date.now());
  // Turnstile tokens are single-use; force a fresh challenge after any failure.
  const [resetKey, setResetKey] = useState(0);

  useEffect(() => {
    if (state.error) setResetKey((k) => k + 1);
  }, [state]);

  if (state.ok) {
    return (
      <div className="rounded-2xl border border-slate-200/80 bg-white p-10 text-center shadow-soft">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
          <Icon.Check width={26} height={26} />
        </span>
        <h3 className="mt-5 text-xl font-bold text-ink">Thanks — message sent!</h3>
        <p className="mt-2 text-sm text-slate-600">
          We&apos;ve received your enquiry and will get back to you within one
          business day. You can also reach us anytime at{" "}
          <a href={`mailto:${site.email}`} className="font-semibold text-brand-600">
            {site.email}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      className="rounded-2xl border border-slate-200/80 bg-white p-7 shadow-soft sm:p-8"
    >
      {/* Honeypot — hidden from humans, irresistible to bots. Do not remove. */}
      <div aria-hidden="true" className="absolute left-[-9999px] top-[-9999px]" hidden>
        <label>
          Leave this field empty
          <input name="website" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <input type="hidden" name="rt" value={renderedAt} readOnly />

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-ink">
          Name
          <input name="name" required className={fieldClass} placeholder="Your name" />
        </label>
        <label className="block text-sm font-medium text-ink">
          Work email
          <input
            name="email"
            type="email"
            required
            className={fieldClass}
            placeholder="you@company.com"
          />
        </label>
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-ink">
          Company
          <input name="company" className={fieldClass} placeholder="Company name" />
        </label>
        <label className="block text-sm font-medium text-ink">
          I&apos;m interested in
          <select name="interest" className={fieldClass} defaultValue={interests[0]}>
            {interests.map((i) => (
              <option key={i}>{i}</option>
            ))}
          </select>
        </label>
      </div>

      <label className="mt-5 block text-sm font-medium text-ink">
        How can we help?
        <textarea
          name="message"
          required
          rows={5}
          className={fieldClass}
          placeholder="Tell us a bit about what you need…"
        />
      </label>

      {turnstileSiteKey && (
        <Turnstile siteKey={turnstileSiteKey} resetKey={resetKey} />
      )}

      {state.error && (
        <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600" aria-live="polite">
          {state.error}
        </p>
      )}

      <SubmitButton />
      <p className="mt-3 text-xs text-slate-400">
        We&apos;ll get back to you within one business day.
      </p>
    </form>
  );
}
