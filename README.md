# InfoHQ — Official Website

[![Astro](https://img.shields.io/badge/Astro-v5-FF5D01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare-Pages-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)](https://pages.cloudflare.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)

> Official corporate website and engineering showcase for **InfoHQ** ([infohq.in](https://infohq.in)) — delivering enterprise AI agent systems, full-stack cloud platforms, and scalable digital solutions.

---

## 🚀 Overview

**InfoHQ** is a modern software and artificial intelligence engineering agency. We specialize in building production-grade autonomous AI agents, enterprise web applications, mobile platforms, and high-performance cloud architectures.

This repository powers the official InfoHQ web presence, engineered for extreme performance, clean typography, responsive design, and seamless user interaction.

---

## ✨ Key Features

- **⚡ Blazing Fast Static Prerendering:** Built on Astro with 100% static prerendering for near-instant page loads and high Lighthouse scores.
- **🎨 Custom Design System:** Handcrafted CSS variables, elegant gradient accents, responsive typography, and glassmorphic card elements.
- **📱 Fully Responsive:** Adaptive layouts optimized across mobile (375px), tablet (768px), and desktop (1024px+).
- **🤖 Dedicated Service Showcases:** In-depth pages for AI Agent Systems, Cloud & DevOps, Custom Software, Business Automation, Mobile Apps, Cybersecurity, and UI/UX.
- **📂 Portfolio Case Studies:** Interactive showcases featuring flagship engineering projects such as **SeHAT SmartCare**.
- **🔍 Comprehensive SEO & Schema:** Built-in JSON-LD structured data (Organization, Services, Breadcrumbs, FAQs), OpenGraph tags, and automatic XML sitemaps.
- **🔒 Enterprise Privacy & Compliance:** Fully GDPR and data privacy-compliant structure with cookie consent banners and explicit legal terms.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [Astro](https://astro.build/) |
| **Adapter** | [@astrojs/cloudflare](https://docs.astro.build/en/guides/integrations-guide/cloudflare/) |
| **Icons** | [lucide-astro](https://lucide.dev/) |
| **Smooth Scroll** | [Lenis](https://lenis.darkroom.engineering/) |
| **Animations** | [GSAP](https://gsap.com/) |
| **Styling** | Vanilla CSS with Token-Based Design System |
| **Deployment** | [Cloudflare Pages](https://pages.cloudflare.com/) |

---

## 📁 Project Structure

```text
InfoHQ/
├── public/                     # Static production assets
│   ├── images/                 # Optimized .webp visuals & brand logos
│   ├── projects_images/        # Portfolio case study screenshots
│   ├── favicon.png             # Site favicon
│   └── sitemap.xml             # Production SEO sitemap
├── src/
│   ├── components/             # Reusable Astro UI components
│   │   ├── Header.astro        # Navigation bar with responsive drawer
│   │   ├── Footer.astro        # Global footer & navigation links
│   │   ├── FinalCTA.astro      # High-conversion closing CTA banner
│   │   ├── HeroGraphic.astro   # Interactive hero visuals
│   │   └── SchemaJsonLd.astro  # SEO Structured Data generator
│   ├── data/
│   │   └── servicesData.ts     # Centralized service offerings data
│   ├── layouts/
│   │   └── BaseLayout.astro    # Master HTML shell & SEO meta tags
│   ├── pages/                  # Page routes
│   │   ├── index.astro         # Homepage
│   │   ├── services/           # Service catalog & individual dynamic slugs
│   │   ├── portfolio.astro     # Case studies & featured work
│   │   ├── pricing.astro       # Transparent engagement tiers
│   │   ├── company.astro       # About InfoHQ, mission & engineering values
│   │   ├── blogs.astro         # Engineering insights & publications
│   │   ├── contact.astro       # Client consultation form
│   │   ├── privacy.astro       # Privacy Policy
│   │   └── terms.astro         # Terms of Service
│   └── styles/
│       └── global.css          # Core CSS variables, typography, and utility classes
├── astro.config.mjs            # Astro & Cloudflare adapter configuration
├── package.json                # Project scripts & dependencies
└── tsconfig.json               # TypeScript configuration
```

---

## 💻 Getting Started

### Prerequisites

- **Node.js** (v18.17.1 or higher)
- **npm** (or pnpm / yarn)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/tiwariji7/InfoHQ-Website.git
   cd InfoHQ-Website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   The site will be live at `http://localhost:4321`.

---

## 🏗️ Production Build

To build the project for deployment:

```bash
npm run build
```

This compiles all routes and outputs static assets into the `dist/` directory, optimized for Cloudflare Pages.

To preview the production build locally:

```bash
npm run preview
```

---

## 🌐 Deployment to Cloudflare Pages

1. Push your changes to GitHub:
   ```bash
   git push origin main
   ```
2. In the **Cloudflare Dashboard**, navigate to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
3. Select the `InfoHQ-Website` repository.
4. Set the build configurations:
   - **Framework Preset:** Astro
   - **Build Command:** `npm run build`
   - **Build Output Directory:** `dist`
5. Click **Save and Deploy**.

---

## 📬 Contact & Inquiries

For project inquiries, technical partnerships, or consultations:

- **Website:** [infohq.in](https://infohq.in)
- **General Inquiries:** [contact@infohq.in](mailto:contact@infohq.in)
- **Client Engagements:** [services@infohq.in](mailto:services@infohq.in)

---

&copy; 2026 InfoHQ (Alpha AI Services). All rights reserved.
