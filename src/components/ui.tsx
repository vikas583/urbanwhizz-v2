import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

/* ------------------------------------------------------------------ */
/* Layout primitives                                                   */
/* ------------------------------------------------------------------ */

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-20 sm:py-28 ${className}`}>
      {children}
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Eyebrow + section heading                                           */
/* ------------------------------------------------------------------ */

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-brand-600">
      <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  const center = align === "center";
  return (
    <div
      className={`${center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">{title}</h2>
      {intro ? (
        <p className="mt-5 text-lg leading-relaxed text-slate-600">{intro}</p>
      ) : null}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Buttons                                                             */
/* ------------------------------------------------------------------ */

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
} & Omit<ComponentProps<typeof Link>, "href" | "className">;

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  ...rest
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2";
  const styles = {
    primary:
      "bg-brand-600 text-white shadow-soft hover:bg-brand-700 hover:-translate-y-0.5",
    secondary:
      "bg-white text-ink ring-1 ring-slate-200 shadow-soft hover:ring-brand-300 hover:-translate-y-0.5",
    ghost: "text-ink hover:text-brand-600",
  }[variant];

  return (
    <Link href={href} className={`${base} ${styles} ${className}`} {...rest}>
      {children}
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/* Card                                                                */
/* ------------------------------------------------------------------ */

export function Card({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <div
      id={id}
      className={`group rounded-2xl border border-slate-200/80 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift ${className}`}
    >
      {children}
    </div>
  );
}
