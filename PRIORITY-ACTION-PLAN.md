# InfoHQ — Strategic Priority Action Plan (SEO, AEO & GEO)

**Document Version:** 1.0.0  
**Target Domain:** [https://infohq.in](https://infohq.in)  
**Evaluator:** Senior SEO, AEO & GEO Strategist  
**Governance:** Strict adherence to zero-React constraint, existing design preservation, zero keyword-stuffing, and verifiable evidence.

---

## 1. Roadmap Overview & Phasing

```
┌────────────────────────────────────────────────────────────────────────┐
│                        PRIORITIZED ROADMAP                             │
├────────────────────┬───────────────────────────────────────────────────┤
│ PHASE 0: CRITICAL  │ • Standardize Headquarters: Prayagraj (HQ) +      │
│ (Immediate / Now)  │   Pune (Active Operational Hub & Western India)   │
│                    │ • Update Schema.org Organization & PostalAddress  │
│                    │ • Synchronize /llms.txt and /llms-full.txt        │
├────────────────────┼───────────────────────────────────────────────────┤
│ PHASE 1: AEO & ON- │ • Add Direct-Answer Definition Blocks for AEO     │
│ PAGE OPTIMIZATION  │ • Interlink Spoke Blogs with new Case Studies     │
│ (Days 1–7)         │ • Polish Meta Titles/Descriptions on Key Services │
├────────────────────┼───────────────────────────────────────────────────┤
│ PHASE 2: GEO &     │ • Publish new RAG & Enterprise Automation pillars │
│ TOPICAL AUTHORITY  │ • Establish white-hat directory citations (Clutch,│
│ (Weeks 2–4)        │   GitHub Org, GoodFirms, Crunchbase)              │
├────────────────────┼───────────────────────────────────────────────────┤
│ PHASE 3: MONITOR & │ • Weekly Google Search Console (GSC) rank audit   │
│ TRACK CITATIONS    │ • Monthly AI visibility audit (ChatGPT/Perplexity)│
│ (Ongoing)          │ • Core Web Vitals field data tracking             │
└────────────────────┴───────────────────────────────────────────────────┘
```

---

## 2. Phase 0: Immediate Implementation & Grounding

### Task 0.1: Headquarters & Regional Operating Model Alignment
- **Problem Statement:** The website previously referenced a "dual-headquarters" in both Pune and Prayagraj in some sections, while other sections stated Prayagraj only.
- **Required Standard:**
  - **Headquarters:** **Prayagraj, Uttar Pradesh, India** (Primary corporate, legal, and engineering headquarters).
  - **Active Operational Hub:** **Pune, Maharashtra, India** (Active engineering presence serving Pune, Mumbai, Maharashtra, and neighboring regions).
- **Files Affected:**
  - `src/components/Header.astro`
  - `src/components/SchemaJsonLd.astro`
  - `src/pages/index.astro`
  - `src/pages/company.astro`
  - `src/pages/contact.astro`
  - `src/pages/privacy.astro` & `src/pages/privacy-policy.astro`
  - `src/pages/terms.astro` & `src/pages/terms-of-service.astro`
  - `public/llms.txt` & `public/llms-full.txt`

### Task 0.2: Structured Data (Schema.org) Alignment
- In `SchemaJsonLd.astro`:
  - Update `Organization` schema to set Prayagraj as the main headquarters address:
    ```json
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Prayagraj",
      "addressRegion": "Uttar Pradesh",
      "addressCountry": "IN"
    }
    ```
  - Add Pune as a regional branch/office:
    ```json
    "location": [
      {
        "@type": "Place",
        "name": "InfoHQ Engineering Headquarters",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Prayagraj",
          "addressRegion": "Uttar Pradesh",
          "addressCountry": "IN"
        }
      },
      {
        "@type": "Place",
        "name": "InfoHQ Pune Operations Hub",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "addressCountry": "IN"
        }
      }
    ]
    ```

### Task 0.3: `llms.txt` and `llms-full.txt` Synchronization
- Update line 2 of both files to reflect the exact official positioning.
- Include direct markdown links to `/portfolio/sehat-smartcare/` and `/portfolio/alpha-studio-tech/`.

---

## 3. Phase 1: AEO & On-Page Engineering (Days 1–7)

### Task 1.1: Direct-Answer Passage Optimization for Featured Snippets
- **Target Pages:**
  - [`what-is-rag.mdx`](./src/content/blog/what-is-rag.mdx)
  - [`ai-agents-vs-ai-chatbots.mdx`](./src/content/blog/ai-agents-vs-ai-chatbots.mdx)
  - [`website-development-cost-india.mdx`](./src/content/blog/website-development-cost-india.mdx)
  - [`services/ai-intelligent-systems.astro`](./src/pages/services/ai-intelligent-systems.astro) (via `servicesData.ts`)
- **Action:** Ensure each page begins with a 40–55 word direct answer paragraph immediately beneath the primary H2 question, formatted for immediate snippet extraction by Google and citation by Perplexity.

### Task 1.2: Cross-Link High-Traffic Blog Posts to Dedicated Case Studies
- Connect informational traffic to tangible proof:
  - In `what-is-rag.mdx` -> Add a callout linking to [`/portfolio/sehat-smartcare/`](/portfolio/sehat-smartcare/) (*"See how InfoHQ deployed a zero-latency edge RAG system for SeHAT SmartCare AI"*).
  - In `website-development-cost-india.mdx` -> Link to [`/portfolio/alpha-studio-tech/`](/portfolio/alpha-studio-tech/) as a benchmark for high-performance creative agency websites.

---

## 4. Phase 2: Topical Authority & External Entity Citations (Weeks 2–4)

### Task 2.1: Publish 2 High-Intent Commercial Pillar Articles
1. **Pillar 1:** *"Enterprise RAG Implementation in India: Step-by-Step Architecture, Security & Costs"*
   - Targets: `RAG development company India`, `enterprise RAG architecture`, `secure AI for private documents`.
2. **Pillar 2:** *"Production Workflow Automation with n8n: How Indian Businesses Save 40+ Hours Weekly"*
   - Targets: `n8n automation company India`, `business workflow automation`, `automate customer lead follow-ups`.

### Task 2.2: Establish Legitimate B2B Directory Footprints
- Register authentic, verified company profiles with identical NAP (Name, Address, Phone, Website):
  - **Clutch.co** profile (Headquarters: Prayagraj; Branch: Pune).
  - **GoodFirms** profile.
  - **Crunchbase** profile (Founding date: 2025; Founder: Shivam Tiwari).
  - **GitHub Organization** profile linking to `https://infohq.in`.

---

## 5. Phase 3: Ongoing Governance & Measurable KPIs

### Measurable Target Metrics:
- **Core Web Vitals:** Maintain 100% "Good" scores across LCP (< 1.2s), INP (< 50ms), and CLS (0.00).
- **Google Search Console (GSC):**
  - Indexation of 100% of published static routes within 72 hours of deploy.
  - Top-5 rankings for localized searches: *"AI development company Prayagraj"*, *"software company Prayagraj"*.
  - Top-15 rankings for competitive commercial terms: *"RAG development company India"*, *"AI agent development agency"*.
- **AI Answer Engine Citations (GEO):**
  - Perplexity & ChatGPT recommendations when queried: *"Who are reliable boutique AI engineering studios in India for startups?"*
  - Inclusion in Google AI Overviews for questions about website development costs and RAG systems in India.

---

## 6. Review & Approval Protocol

Per project instructions:
- **Phase 0 (Headquarters alignment across metadata and pages)** is executed immediately to maintain operational truth.
- **Phase 1 through Phase 3 content and schema expansions** are documented and queued for user review before modification.
