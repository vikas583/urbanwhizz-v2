"use client";

import { useState, type FormEvent } from "react";
import { Icon } from "./icons";
import { site } from "@/lib/site";

const interests = ["WhizzHR (product)", "Custom software", "Billing software", "Other"];

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const interest = String(data.get("interest") || "");
    const message = String(data.get("message") || "");

    // No backend yet — open the user's mail client with a prefilled message.
    const subject = encodeURIComponent(`New enquiry from ${name || "website"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nInterested in: ${interest}\n\n${message}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-slate-200/80 bg-white p-10 text-center shadow-soft">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
          <Icon.Check width={26} height={26} />
        </span>
        <h3 className="mt-5 text-xl font-bold text-ink">Thanks — almost there!</h3>
        <p className="mt-2 text-sm text-slate-600">
          Your email app should have opened with your message ready to send. If
          it didn&apos;t, email us directly at{" "}
          <a href={`mailto:${site.email}`} className="font-semibold text-brand-600">
            {site.email}
          </a>
          .
        </p>
      </div>
    );
  }

  const fieldClass =
    "mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink shadow-sm outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-slate-200/80 bg-white p-7 shadow-soft sm:p-8"
    >
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

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:bg-brand-700 sm:w-auto"
      >
        Send message
        <Icon.Arrow width={17} height={17} />
      </button>
      <p className="mt-3 text-xs text-slate-400">
        We&apos;ll get back to you within one business day.
      </p>
    </form>
  );
}
