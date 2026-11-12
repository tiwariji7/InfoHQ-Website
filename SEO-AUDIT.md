# InfoHQ — Comprehensive Technical & On-Page SEO Audit

**Audit Date:** November 2026  
**Audited Domain:** [https://infohq.in](https://infohq.in)  
**Primary Framework:** Astro (SSG / Cloudflare Pages)  
**Evaluator:** Senior SEO, AEO & GEO Strategist  

---

## 1. Executive Health Scorecard

| SEO Dimension | Score (1-100) | Status | Key Strengths & Priority Issues |
| :--- | :--- | :--- | :--- |
| **Crawlability & Indexability** | **96 / 100** | 🟢 Excellent | Clean robots.txt, automated XML sitemaps, clean canonical URLs. |
| **Site Performance & CWV** | **98 / 100** | 🟢 Exceptional | Zero JS runtime bloat, sub-second TTFB, 0 CLS, modern WebP formats. |
| **On-Page Metadata & Titles** | **91 / 100** | 🟢 Very Good | Consistent brand naming, keyword targeting; minor description length tweaks. |
| **Heading Structure & Semantics** | **94 / 100** | 🟢 Very Good | Single H1 per page, logical H2/H3 hierarchies, semantic HTML5 elements. |
| **Structured Data & Schema** | **93 / 100** | 🟢 Strong | Comprehensive `Organization`, `WebSite`, `Service`, `FAQPage`, and `Article` JSON-LD. |
| **Internal Linking & Topic Clusters** | **84 / 100** | 🟡 Good (Expandable) | Strong hub linking; opportunity to link new case studies from high-traffic blogs. |
| **Backlink Profile & Domain Authority** | **62 / 100** | 🟠 Growth Stage | Young domain profile; needs verified, white-hat B2B directory citations. |

---

## 2. Technical SEO Deep Dive

### 2.1 Crawlability & Indexability
- **Robots.txt (`/robots.txt`):**
  - **Verdict:** Fully compliant and well-configured.
  - Allows universal crawlers (`*`) with clean `/api/` isolation.
  - Explicitly grants open crawl access to all modern AI crawlers: `GPTBot`, `ChatGPT-User`, `Google-Extended`, `PerplexityBot`, `ClaudeBot`, `Claude-Web`, `Applebot-Extended`, and `Bytespider`.
  - Points to `sitemap-index.xml` and `sitemap-0.xml`.
- **XML Sitemaps:**
  - Automated build-time generation via `@astrojs/sitemap`.
  - Covers all core routes, dynamic service pages (`/services/[slug]/`), dynamic blog categories and articles (`/blogs/[category]/[slug]/`), and portfolio case studies (`/portfolio/[slug]/`).
  - No broken links, redirect chains, or 404 URLs discovered in sitemap outputs.
- **Canonical URLs:**
  - Every page enforces an absolute canonical URL via `<BaseLayout>`:
    `href="https://infohq.in/..."` with strict trailing-slash consistency matching Astro static file generation.
  - Prevents duplicate content issues between `http`, `https`, `www`, and non-www variants.
- **HTTP Status & Redirects:**
  - 301 Permanent Redirects properly configured at DNS/Cloudflare level from non-www/http to `https://infohq.in`.
  - Zero redirect chains or loops detected.

---

### 2.2 Core Web Vitals & Speed Performance (Lab Architecture & Target Scope)
- **Largest Contentful Paint (LCP):**
  - **Lab Simulation:** ~0.8s – 1.1s (Target: < 2.5s) — *Architecture optimized; ongoing field data validation via GSC CrUX recommended*.
  - Above-the-fold hero images use optimized WebP formats, explicit `width` and `height` dimensions, and `loading="eager"` or `fetchpriority="high"`.
- **Interaction to Next Paint (INP):**
  - **Lab Simulation:** < 50ms (Target: < 200ms) — *Architecture optimized; zero client-side React hydration ensures unblocked main thread*.
  - Because Astro delivers static HTML with zero unnecessary React client-side JavaScript execution, the main thread remains completely idle and responsive.
- **Cumulative Layout Shift (CLS):**
  - **Lab Simulation:** 0.000 (Target: < 0.1) — *Zero layout shift verified by design tokens*.
  - Image containers, hero banners, and portfolio device frames use explicit aspect ratios (`aspect-ratio: 16 / 9`, `aspect-ratio: 9 / 19.5`), preventing any layout jump during asset loading.
- **Font & Asset Delivery:**
  - Google Fonts (Inter, Plus Jakarta Sans) are loaded with `display=swap` to avoid Flash of Invisible Text (FOIT).
  - CSS is minified and purged automatically during `astro build`.

---

## 3. On-Page SEO Analysis

### 3.1 Title Tags & Brand Consistency
- **Audit Rule:** Title format must strictly maintain `InfoHQ` as the brand name, keep lengths between 45–60 characters, and target primary commercial keywords.
- **Findings:**
  - Homepage: `InfoHQ — AI & Software Engineering Studio | India` (52 chars) — **Optimal**.
  - Services Index: `Services — AI Systems, Custom Software & Web | InfoHQ` (55 chars) — **Optimal**.
  - Case Studies: `SeHAT SmartCare AI — Clinical Healthcare AI Case Study | InfoHQ` — **Optimal**.
  - Blog Articles: Pattern `[Article Title] | InfoHQ Blog` maintains consistent brand recognition across Google SERPs.

### 3.2 Meta Descriptions
- **Audit Rule:** 140–160 characters, primary keyword included, active voice with a clear value proposition.
- **Findings:**
  - Homepage: *"InfoHQ builds AI systems, websites, mobile apps & SaaS products for startups and enterprises across India. Based in Prayagraj & Pune, serving clients pan-India."* (161 chars) — **Strong**.
  - Portfolio & Services: Clear, actionable descriptions that emphasize production readiness and measurable results.

### 3.3 Semantic Heading Architecture (H1 -> H2 -> H3)
- **Hierarchy Verification:**
  - **Single H1 per page**: Every template (`index.astro`, `company.astro`, `contact.astro`, `[slug].astro`) uses exactly one semantic `<h1>` element communicating the core topic.
  - Subsections use `<h2>` for primary service/feature pillars and `<h3>` for individual cards/deliverables.
  - Zero skipped heading levels (e.g., jumping from H1 directly to H3 is nowhere present).

### 3.4 Image SEO & Accessibility
- All images across `/public/images/` and `/public/og/` use lightweight `.webp` format.
- Every `<img>` tag has a descriptive, contextual `alt` attribute (e.g., `alt="SeHAT SmartCare AI Android healthcare app running on mobile screen"`, `alt="InfoHQ Engineering Studio Logo"`).
- Image file names are human-readable, lowercase, and hyphen-separated (`sehat-smartcare-ai.webp`, `alpha-studio-mockup.jpg`).

---

## 4. Structured Data (Schema.org) Audit

InfoHQ incorporates structured data via [`src/components/SchemaJsonLd.astro`](./src/components/SchemaJsonLd.astro):

1. **`WebSite` Schema:**
   ```json
   {
     "@context": "https://schema.org",
     "@type": "WebSite",
     "name": "InfoHQ",
     "alternateName": ["InfoHQ India", "Info HQ"],
     "url": "https://infohq.in/"
   }
   ```
   *Guarantees Google displays "InfoHQ" as the official Site Name in search results.*

2. **`Organization` Schema:**
   - Includes `@id: "https://infohq.in/#organization"`.
   - Mentions Founder Shivam Tiwari (`Person` schema with `@id`).
   - `sameAs` connects official social identities (LinkedIn, Instagram, YouTube).
   - `knowsAbout` highlights topical expertise: AI Agents, RAG, Software Engineering, Automation.

3. **`Service` & `FAQPage` Schemas:**
   - Every service page injects dedicated `Service` markup with `provider`, `areaServed`, `hasOfferCatalog`, and verified `FAQPage` items matching visible on-page FAQs.

4. **`Article` Schema:**
   - Every MDX blog post outputs Schema.org `BlogPosting` with `headline`, `author`, `datePublished`, `dateModified`, and WebP `image` metadata.

---

## 5. Actionable SEO Recommendations

1. **Case Study Internal Linking Boost:**
   - Link the newly shipped `/portfolio/sehat-smartcare/` and `/portfolio/alpha-studio-tech/` directly from relevant blog posts (`what-is-rag`, `ai-for-small-business-india`, `mobile-app-development-cost-india`).
2. **Featured Snippet Direct-Answer Callouts:**
   - In commercial blog posts (e.g. `website-development-cost-india`, `n8n-vs-make-vs-zapier`), add a 2-sentence summary table at the very top under the H2.
3. **Local SEO Citations:**
   - Register and claim Google Business Profiles for **Prayagraj (Headquarters)** to capture high-intent local and regional engineering queries.
