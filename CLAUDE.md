# DevCanvas — personal portfolio

Next.js 14 (App Router) + Tailwind + Framer Motion. Live on Vercel: https://dev-canvas-liart.vercel.app/
Repo: https://github.com/Chuda-Mani/DevCanvas — Vercel auto-deploys on push to main.

## Structure
- `src/app/layout.tsx` — metadata, fonts
- `src/app/page.tsx` — composes sections: Header, Hero, Experience, Projects, Tape, Certifications, About, Contact, Footer
- `src/sections/` — one file per section. Testimonials.tsx is kept but not rendered (template text, not real)
- `src/components/` — Card, CardHeader, SectionHeader, Reveal (scroll-in animation), HeroOrbit, ToolboxItems, TechIcons
- `src/app/globals.css` — shared classes: `.section`, `.btn-primary/-secondary/-dark`, `.gradient-text`, `.chip`, `.tile`, `.logo-tile`, `.nav-item`
- `src/assets/` — SVG icons (React components via @svgr), images, `images/logos/` company logos
- Tech/brand icons come from `react-icons`; use filled sets (si, fa, ri, hi2) — the toolbox gradient fill turns stroke icons (tb, lu) into blobs

## Content facts (confirmed with owner)
- Current role: AI Intern at Emscale (start date and responsibilities still to be provided)
- Certification links must be public URLs (credly.com/badges/<id>, not credly.com/earner/...). The Red Hat Credly badge is "2024 Red Hat Academy – Program Learner", so it is labelled "View badge"
- Still missing: Salesforce/TCS/Cambridge credential links, CoderOne logo, real hobbies and book cover
- Emscale work projects (NexusAI, Sarvam, SEO agent) may be listed only as technology names — no client or product details

## Local setup notes
- Windows Smart App Control was blocking Next's SWC binary; it is now off and `npm run build` succeeds.
- Never run `npm run build` or delete `.next` while `npm run dev` is running — they share `.next` and corrupt each other

## Next steps
1. **SEO**: `metadataBase`, Open Graph/Twitter image, `sitemap.ts`, `robots.ts`, Person JSON-LD, canonical URL
2. Google Search Console + submit sitemap; suggest custom domain
3. SEO agent (separate project): crawl → audit → seed keywords → Google Ads API keyword ideas (CSV fallback) → generate metadata → open PR for review → monitor via Search Console

## Cleanup candidates
- Unused `export` / `predeploy` / `deploy` (gh-pages) scripts in package.json
- Empty `Portfolio/` folder; large commented-out code blocks in Tape/Testimonials
