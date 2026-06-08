/**
 * Central place for company / product facts and navigation.
 * Update values here and they propagate across the whole site + SEO metadata.
 */

export const site = {
  company: "UrbanWhizz",
  product: "WhizzHR",
  domain: "https://www.urbanwhizz.com",
  email: "hello@urbanwhizz.com",
  phone: "+91 00000 00000",
  location: "India",
  tagline: "Software that runs the everyday work of your business.",
  description:
    "UrbanWhizz builds WhizzHR — a modern attendance & leave management platform — and designs custom software, from billing systems to internal tools, for growing teams.",
  social: {
    linkedin: "https://www.linkedin.com/company/urbanwhizz",
    twitter: "https://twitter.com/urbanwhizz",
  },
} as const;

export const clients = [
  {
    name: "Marswell Foods",
    tag: "Food & Beverage",
    href: "https://marswellfoods.com",
  },
  {
    name: "SilverBake Foods",
    tag: "Bakery & Foods",
    href: "https://silverbakefoods.com",
  },
  {
    name: "Simsan Fraser Maintenance",
    tag: "Facility Maintenance",
    href: "https://www.simsanfrasermain.com",
    note: "Custom billing software",
  },
  {
    name: "Realbliss Foods",
    tag: "Food & Beverage",
    href: "https://realbliss.co.in",
  },
] as const;

export const nav = [
  { label: "WhizzHR", href: "/whizzhr" },
  { label: "Services", href: "/services" },
  { label: "Why UrbanWhizz", href: "/#why" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
