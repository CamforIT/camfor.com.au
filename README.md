# Camfor — camfor.com.au

**Connecting & Protecting Rural Communities**

Clean-rebuilt website for Camfor PTY LTD, migrated from Wix to a modern Next.js stack. Camfor is an IT infrastructure and security hardware provider serving rural Victoria, Australia.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS 4
- **Forms:** React Hook Form + Zod validation
- **Icons:** Lucide React
- **SEO:** next-sitemap, JSON-LD structured data, OpenGraph
- **Deployment:** Vercel (recommended) or Docker

## Getting Started

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/page.tsx      # About page
│   ├── api/contact/route.ts # Contact form API
│   ├── contact/page.tsx    # Contact page
│   ├── projects/page.tsx   # Projects page
│   ├── services/page.tsx   # Services page
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout (Header + Footer)
│   ├── not-found.tsx       # 404 page
│   └── page.tsx            # Homepage
├── components/             # React components
│   ├── ContactForm.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── ITSurveyForm.tsx
│   ├── SecurityAssessmentForm.tsx
│   └── ServiceInquiryForm.tsx
└── lib/                    # Utilities
    ├── constants.ts        # Site config & nav links
    ├── schemas.ts          # Zod form schemas
    └── seo.ts              # SEO metadata helpers

content/                    # Extracted Markdown content
public/images/              # Optimised image assets
```

## Pages

| Route       | Description                              |
|-------------|------------------------------------------|
| `/`         | Homepage — hero, forms, features         |
| `/about`    | About Us — founder story, values         |
| `/services` | IT & security services                   |
| `/contact`  | Contact form & details                   |
| `/projects` | Project portfolio (coming soon)          |

## Forms

4 forms are included, all validated with Zod:

1. **Security Assessment** (homepage) — multi-field lead capture
2. **IT Survey** (homepage) — quick survey with user type radio
3. **Service Inquiry** (services page) — general inquiry
4. **Contact Form** (contact page) — email/subject/message

Forms POST to `/api/contact`. To enable email delivery, install [Resend](https://resend.com) and set `RESEND_API_KEY` in `.env.local`.

## Building for Production

```bash
npm run build    # Builds Next.js + generates sitemap.xml & robots.txt
npm start        # Starts production server
```

## Deployment on Vercel

1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Set environment variables (`RESEND_API_KEY`, etc.)
4. Deploy

Domain configuration:
- Set `www.camfor.com.au` as primary domain
- Add redirect from `camfor.com.au` → `www.camfor.com.au`

## SEO

- ✅ Unique meta title & description per page
- ✅ OpenGraph tags
- ✅ JSON-LD LocalBusiness structured data
- ✅ Canonical URLs
- ✅ Auto-generated `sitemap.xml` and `robots.txt`
- ✅ 301 redirect map for Wix URL patterns
- ✅ Accessibility: skip-to-content, semantic HTML, ARIA labels

## Migration Artefacts

| File                  | Purpose                                        |
|-----------------------|------------------------------------------------|
| `url-map.json`        | All URLs discovered from the Wix site          |
| `redirect-map.json`   | Old URL → new URL mapping                     |
| `content/`            | Extracted content in clean Markdown            |
| `content-index.json`  | Structured index of all pages                  |

## License

© 2022–2026 Camfor PTY LTD. All rights reserved.
