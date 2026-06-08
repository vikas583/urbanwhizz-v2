import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { site } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: `${site.company} — Attendance, Leave & Custom Software`,
    template: `%s · ${site.company}`,
  },
  description: site.description,
  keywords: [
    "attendance management software",
    "leave management system",
    "employee attendance system",
    "HR management software",
    "WhizzHR",
    "custom software development",
    "billing software development",
    "internal tools development",
    "UrbanWhizz",
  ],
  applicationName: site.company,
  authors: [{ name: site.company }],
  creator: site.company,
  publisher: site.company,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.domain,
    siteName: site.company,
    title: `${site.company} — Attendance, Leave & Custom Software`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.company} — Attendance, Leave & Custom Software`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.company,
  url: site.domain,
  email: site.email,
  description: site.description,
  sameAs: [site.social.linkedin, site.social.twitter],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "SoftwareApplication",
        name: site.product,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description:
          "Attendance and leave management platform for growing teams.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Custom software development",
        description:
          "Bespoke software including billing systems, internal tools and integrations.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-paper text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
