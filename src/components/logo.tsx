import Link from "next/link";

/** UrbanWhizz wordmark + monogram. `tone` adapts to dark footers. */
export function Logo({
  tone = "dark",
  className = "",
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  const text = tone === "light" ? "text-white" : "text-ink";
  const sub = tone === "light" ? "text-brand-200" : "text-brand-600";

  return (
    <Link
      href="/"
      aria-label="UrbanWhizz home"
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 shadow-soft">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M4 5l3.2 10L12 6l4.8 9L20 5"
            stroke="white"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-accent-400 ring-2 ring-white/70" />
      </span>
      <span className={`text-lg font-bold tracking-tight ${text}`}>
        Urban<span className={sub}>Whizz</span>
      </span>
    </Link>
  );
}
