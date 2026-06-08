# UrbanWhizz — Company Website

Marketing site for **UrbanWhizz**, a product-and-services software company.

- **Product:** WhizzHR — attendance & leave management platform
- **Services:** custom software (billing systems, web apps, internal tools, integrations)

Built with **Next.js 16 (App Router)**, **React 19**, **TypeScript** and **Tailwind CSS v4**.
Every page is statically prerendered — fast, cheap to host, and SEO-friendly.

## Getting started

```bash
npm install      # first time only
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Project structure

```
src/
  app/
    layout.tsx          # global metadata, JSON-LD, header + footer
    page.tsx            # home page
    whizzhr/page.tsx    # product page (+ FAQ, SoftwareApplication schema)
    services/page.tsx   # services page
    about/page.tsx      # about page
    contact/page.tsx    # contact page (+ form)
    sitemap.ts          # /sitemap.xml
    robots.ts           # /robots.txt
    globals.css         # design tokens (colors, shadows, animations)
  components/            # header, footer, logo, icons, cards, hero visual…
  lib/site.ts           # ← single source of company / product facts
```

## Customising

Most content lives in plain arrays at the top of each page file. Start here:

1. **`src/lib/site.ts`** — update these placeholders before launch:
   - `domain` → your real domain (used for canonical URLs, sitemap, Open Graph)
   - `email`, `phone`, `location`
   - `social.linkedin`, `social.twitter`
2. **Colours / fonts** — `src/app/globals.css` (`@theme` block).
3. **Navigation** — the `nav` array in `src/lib/site.ts`.

## SEO — already built in

- Per-page `<title>`, meta description and canonical URLs
- Open Graph + Twitter card metadata
- `sitemap.xml` and `robots.txt` generated automatically
- JSON-LD structured data (`Organization` + `SoftwareApplication`) for rich results
- Semantic headings, fast static pages, accessible markup

### Before you launch (SEO/marketing checklist)

- [ ] Set the real `domain` in `src/lib/site.ts`
- [ ] Add an Open Graph image at `src/app/opengraph-image.png` (1200×630) — Next.js picks it up automatically
- [ ] Verify the site in [Google Search Console](https://search.google.com/search-console) and submit `sitemap.xml`
- [ ] Add Google Analytics / a privacy-friendly analytics tag
- [ ] Create a Google Business Profile for local SEO
- [ ] Target keywords already wired into metadata: *attendance management software*, *leave management system*, *custom software development*, *billing software development*
- [ ] Consider adding a `/blog` later — regular content is the biggest lever for ranking

## Deploying (recommended: Vercel)

1. Push this repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new) — zero config, free tier works.
3. Add your custom domain in the Vercel dashboard.

Any Node host works too (`npm run build && npm run start`).

## Contact form

The contact form currently opens the visitor's email client with a prefilled
message (no backend needed). To capture submissions instead, wire the form in
`src/components/contact-form.tsx` to a service like Formspree, Resend, or a
Next.js route handler.
