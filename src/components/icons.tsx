import type { SVGProps } from "react";

/* A small, consistent stroke-based icon set (24×24, 1.8 stroke). */

type IconProps = SVGProps<SVGSVGElement>;

function Base({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      width={22}
      height={22}
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export const Icon = {
  Clock: (p: IconProps) => (
    <Base {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </Base>
  ),
  Calendar: (p: IconProps) => (
    <Base {...p}>
      <rect x="3" y="4.5" width="18" height="16" rx="2.5" />
      <path d="M3 9h18M8 2.5v4M16 2.5v4" />
    </Base>
  ),
  Check: (p: IconProps) => (
    <Base {...p}>
      <path d="M4 12.5l5 5L20 6" />
    </Base>
  ),
  Workflow: (p: IconProps) => (
    <Base {...p}>
      <rect x="3" y="3.5" width="6" height="6" rx="1.5" />
      <rect x="15" y="14.5" width="6" height="6" rx="1.5" />
      <path d="M9 6.5h5a4 4 0 0 1 4 4v4" />
    </Base>
  ),
  Chart: (p: IconProps) => (
    <Base {...p}>
      <path d="M4 4v16h16" />
      <path d="M8 15l3-4 3 2 4-6" />
    </Base>
  ),
  Shield: (p: IconProps) => (
    <Base {...p}>
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" />
      <path d="M9 12l2 2 4-4" />
    </Base>
  ),
  Users: (p: IconProps) => (
    <Base {...p}>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.5 20a5.5 5.5 0 0 1 11 0" />
      <path d="M16 5.2a3.2 3.2 0 0 1 0 6M17.5 20a5.5 5.5 0 0 0-2-4.3" />
    </Base>
  ),
  Code: (p: IconProps) => (
    <Base {...p}>
      <path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13 5l-2 14" />
    </Base>
  ),
  Receipt: (p: IconProps) => (
    <Base {...p}>
      <path d="M5 3.5h14v17l-2.3-1.5-2.3 1.5-2.4-1.5L9.6 20l-2.3-1.5L5 20z" />
      <path d="M9 8h6M9 12h6" />
    </Base>
  ),
  Layers: (p: IconProps) => (
    <Base {...p}>
      <path d="M12 3l9 5-9 5-9-5z" />
      <path d="M3 13l9 5 9-5M3 16.5l9 5 9-5" />
    </Base>
  ),
  Plug: (p: IconProps) => (
    <Base {...p}>
      <path d="M9 3v5M15 3v5M7 8h10v3a5 5 0 0 1-10 0z" />
      <path d="M12 16v5" />
    </Base>
  ),
  Wrench: (p: IconProps) => (
    <Base {...p}>
      <path d="M14.5 6.5a4 4 0 0 1-5.2 5.2L4 17l3 3 5.3-5.3a4 4 0 0 1 5.2-5.2l-2.6 2.6-2-2z" />
    </Base>
  ),
  Compass: (p: IconProps) => (
    <Base {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M15.5 8.5l-2 5-5 2 2-5z" />
    </Base>
  ),
  Sparkle: (p: IconProps) => (
    <Base {...p}>
      <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" />
    </Base>
  ),
  Rocket: (p: IconProps) => (
    <Base {...p}>
      <path d="M5 14c-1.5 1.5-2 5-2 5s3.5-.5 5-2" />
      <path d="M12 15l-3-3c1-4 4-8 9-9 .5 4-1 8-6 12z" />
      <circle cx="14.5" cy="9.5" r="1.4" />
    </Base>
  ),
  Handshake: (p: IconProps) => (
    <Base {...p}>
      <path d="M3 8l4-2 5 3 5-3 4 2v7l-4 2-4-3" />
      <path d="M12 9l-2.5 2.5a1.8 1.8 0 0 0 2.5 2.5l1-1 2 2" />
    </Base>
  ),
  Arrow: (p: IconProps) => (
    <Base {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </Base>
  ),
  Mail: (p: IconProps) => (
    <Base {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="M4 7l8 6 8-6" />
    </Base>
  ),
  Phone: (p: IconProps) => (
    <Base {...p}>
      <path d="M5 4h4l1.5 5-2 1.5a11 11 0 0 0 5 5l1.5-2 5 1.5v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
    </Base>
  ),
  Pin: (p: IconProps) => (
    <Base {...p}>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </Base>
  ),
};
