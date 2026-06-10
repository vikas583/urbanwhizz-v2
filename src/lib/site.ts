/**
 * Central place for company / product facts and navigation.
 * Update values here and they propagate across the whole site + SEO metadata.
 */

export const site = {
  company: "UrbanWhizz",
  product: "WhizzHR",
  domain: "https://www.urbanwhizz.com",
  email: "info@urbanwhizz.com",
  phone: "+91 00000 00000",
  location: "India",
  tagline: "Software that runs the everyday work of your business.",
  description:
    "UrbanWhizz designs and builds custom web apps, software and workflow automations for growing businesses — from internal tools and dashboards to billing systems and integrations, built around how you work.",
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
