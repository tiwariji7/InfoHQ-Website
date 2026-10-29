# InfoHQ — Official Design System & UI Specifications

> **System Status**: Active & Production-Locked  
> **Source Code Mapping**: `src/styles/global.css`, `src/components/*`, `src/pages/*`  
> **Scope**: Marketing Website & Web Applications (`InfoHQ`)  
> **Rule**: 100% fidelity to the production codebase. No deviations or approximations.

---

## 1. Brand Identity & Design Philosophy

InfoHQ operates on a **modern SaaS gradient-infused light design system**. Unlike conventional flat designs or heavy dark interfaces, the visual signature combines:
- **Clean Light Foundation**: Lavender-tinted white surfaces (`#F8F8FF` / `#FFFFFF`) that deliver exceptional readability and a crisp, airy presentation.
- **Vibrant Primary Brand Gradient**: A signature 4-stop horizontal spectrum (Coral $\to$ Pink $\to$ Purple $\to$ Blue) used for high-impact headlines, accent keywords, and brand graphics.
- **Solid Royal Violet CTAs**: High-contrast purple and magenta interactive elements with smooth translateY physics and colored ambient drop-shadows.
- **Glassmorphic Floating Navigation**: Translucent frosted navigation bar (`backdrop-filter: blur(16px)`) with subtle borders and micro-glows.
- **Soft Curved Architecture**: Curated border radii ranging from `8px` for micro-elements up to `24px` for banner containers.

---

## 2. Complete Color Palette & Token Reference

### 2.1. Primary Brand Gradients

The primary gradient is strictly horizontal for text and borders, with specialized hover and vertical alternatives.

| Token Name | Value / Formula | Intended Usage |
|---|---|---|
| `--brand-gradient` | `linear-gradient(90deg, #E8604E 0%, #DD4985 35%, #914FBB 65%, #5782E0 100%)` | Hero heading text, key accent words, badge borders |
| `--brand-gradient-hover`| `linear-gradient(90deg, #d34f3e 0%, #c93d75 35%, #8040a8 65%, #4770ce 100%)` | Active and hover states for gradient CTA buttons |
| `--brand-gradient-vertical`| `linear-gradient(180deg, #E8604E 0%, #DD4985 35%, #914FBB 65%, #5782E0 100%)` | Vertical decorative dividers & graphic accents |
| `--nav-underline-gradient` | `linear-gradient(90deg, #5B4BF0 0%, #C24BD6 100%)` | Active navigation link animated underline |

#### 🌈 Primary Gradient Color Stops
- **Start (Coral / Orange-Red)**: `#E8604E` *(Card border tone: `#E96D47`)*
- **Mid 1 (Pink / Magenta)**: `#DD4985` *(Card border tone: `#E0468C`)*
- **Mid 2 (Purple / Violet)**: `#914FBB`
- **End (Blue-Violet / Royal)**: `#5782E0` *(Mid-tone accent: `#6D4DDE`)*

---

### 2.2. Interactive Buttons & CTA Gradients

| Token Name | Hex / Gradient Formula | Usage / Description |
|---|---|---|
| `--btn-cta-bg` | `linear-gradient(90deg, #5B4CF5 0%, #E85AA0 100%)` | Standard primary buttons across headers, hero & final CTA |
| `--btn-cta-shadow` | `0 8px 20px rgba(99, 88, 240, 0.35)` | Ambient purple/pink button drop shadow |
| *Pricing CTA Gradient* | `linear-gradient(90deg, #F43F5E 0%, #E11D48 20%, #7C3AED 70%, #2563EB 100%)` | Specialized high-conversion pill button on pricing page |
| *Pricing CTA Shadow* | `0 4px 18px rgba(225, 29, 72, 0.25)` | Coral-pink ambient button elevation |

---

### 2.3. Solid Brand Purples & Accent Shades

| Token Name | Hex Code | Visual Role |
|---|---|---|
| `--color-primary` | `#7C5CE8` | Primary brand purple for icons, links, and highlights |
| `--color-primary-hover` | `#6a48dc` | Hover state for solid primary interactions |
| `--color-primary-active` | `#5835cf` | Active/click state for primary interactions |
| `--color-primary-light` | `#E5DEFF` | Eyebrow badges, tag backgrounds, active sidebar items |
| `--color-primary-subtle` | `#F3F0FF` | Micro icon backgrounds, subtle tag fills |
| `--color-balance-top` | `#7775FA` | Upper gradient stop for balance widgets |
| `--color-balance-bottom`| `#7060F4` | Lower gradient stop for balance widgets |
| `--color-indigo-dark` | `#081E71` | Deep center integration icon background |

---

### 2.4. Typography Colors (Contrast-Optimized)

| Token Name | Hex / RGBA Code | Usage |
|---|---|---|
| `--color-text-heading` | `#1A085C` | High-contrast dark navy purple for H1–H6 & card titles |
| `--color-text-body` | `#4B5563` | Clean neutral dark grey for paragraphs, body copy, and lists |
| `--color-text-muted` | `#6B7280` | Secondary metadata, dates, reading times, subtitles |
| `--color-text-light` | `#9CA3AF` | Inactive placeholders, subtle hints |
| `--color-text-white` | `#FFFFFF` | Text on dark buttons, badges, and gradient fills |

---

### 2.5. Backgrounds, Surfaces & Borders

| Token Name | Value | Purpose |
|---|---|---|
| `--color-bg-page` | `#F8F8FF` | Default global document background (soft lavender white) |
| `--color-bg-section` | `#F4F3F9` | Alternating section background (`.section-alt`) |
| `--color-bg-wash` | `#E6DFFE` | Gentle gradient wash bottom (`.section-wash`) |
| `--color-surface-white` | `#FFFFFF` | Standard card surface, dialogs, dropdowns |
| `--color-border-card` | `#EAE6F7` | Card borders, input field outlines, structural divides |
| `--color-border-subtle`| `rgba(124, 92, 232, 0.12)` | Subtle glassmorphic boundaries and navbar borders |

---

### 2.6. Dark Surfaces & Brand Glows

Used for specialized high-tech sections (e.g., dark graphic panels, hero mockups, deep visual badges):

| Token Name | Value | Purpose |
|---|---|---|
| `--color-dark-navy` | `#1A085C` | Deep brand navy |
| `--color-dark-indigo` | `#081E71` | Deep indigo background |
| `--color-dark-surface` | `linear-gradient(135deg, #1A085C 0%, #081E71 100%)` | Dark gradient surfaces |
| `--color-text-dark-muted` | `rgba(230, 223, 254, 0.8)` | Muted light text over dark surfaces |
| `--color-glow-blue` | `rgba(87, 130, 224, 0.22)` | Ambient blue radial glow |
| `--color-glow-purple` | `rgba(145, 79, 187, 0.22)` | Ambient purple radial glow |
| `--color-glow-primary` | `rgba(124, 92, 232, 0.25)` | Ambient primary violet glow |
| `--color-border-dark-glow`| `linear-gradient(90deg, #914FBB 0%, #5782E0 100%)` | Border glow gradient |

---

### 2.7. Feature & Integration Accent Tints (Icon Pill Tiles)

| Style / Tile | Hex Code | Visual Character |
|---|---|---|
| WhatsApp / Teal Tile | `#E3FFFF` | Soft cyan wash |
| Messenger / Violet Tile | `#F5E8FF` | Soft magenta/lavender |
| Green / Status Tile | `#C8F7C3` | Light emerald / fresh green |
| Black / Terminal Tile | `#1D1D1D` | Deep graphite dark |
| Figma Accent Tile | `#8B64F3` | Medium electric violet |
| Voice Accent Tile (Left) | `#DACCF0` | Dusky muted purple |
| Accent Tile (Right) | `#EDD9DA` | Subtle rose tint |

---

### 2.8. Blog Category Color Schemes

Each blog category features a dedicated subtle gradient card cover fallback and palette:

| Category | Gradient Background | Theme Tone | Primary Icon |
|---|---|---|---|
| **AI Systems** (`ai`) | `linear-gradient(135deg, #FAF6FD 0%, #EDE5F9 100%)` | Violet / Purple | `Brain` |
| **Web Development** (`web`) | `linear-gradient(135deg, #F5F8FE 0%, #E3EDFB 100%)` | Sky Blue | `Globe` |
| **Automation** (`automation`)| `linear-gradient(135deg, #FBF6FA 0%, #F6E7F2 100%)` | Fuchsia / Pink | `Workflow` |
| **Cloud & DevOps** (`cloud`)| `linear-gradient(135deg, #F4F8FC 0%, #E1EFF9 100%)` | Cyan / Slate | `Cloud` |
| **UI/UX & Design** (`design`)| `linear-gradient(135deg, #FDF7F5 0%, #FAECE7 100%)` | Coral / Warm Peach | `PenTool` |
| **General / Architecture** | `linear-gradient(135deg, #FAF8FE 0%, #F3EFFE 100%)` | Brand Lavender | `LayoutGrid` |

---

## 3. Typography & Hierarchy

### 3.1. Font Families
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
```
- **Weights Used**:
  - `400` (Regular): Paragraphs, body copy, descriptions
  - `500` (Medium): Category chips, metadata, secondary links
  - `600` (SemiBold): Card titles, subheadings, form labels, buttons
  - `700` (Bold): Section titles, plan names, major badges
  - `800` (ExtraBold): H1 hero headings, pricing numbers, hero accents

---

### 3.2. Type Scale & Fluid Clamps

All headings use tight line heights (`1.15`–`1.2`) with negative letter-spacing (`-0.02em` to `-0.025em`) for modern digital editorial aesthetics.

| Token | Clamp / Value | Equivalent | Primary Usage |
|---|---|---|---|
| `--text-xs` | `0.75rem` | 12px | Chips, metadata, date badges, ribbons |
| `--text-sm` | `0.875rem` | 14px | Form inputs, buttons, navigation links |
| `--text-base` | `1rem` | 16px | Standard body paragraphs (line-height: 1.65) |
| `--text-lg` | `1.125rem` | 18px | Card headings (h3/h4), large body |
| `--text-xl` | `1.25rem` | 20px | Sub-section headers |
| `--text-2xl` | `1.5rem` | 24px | Feature headers |
| `--text-3xl` | `clamp(1.45rem, 2.6vw, 1.85rem)` | 24–30px | Consistent section headings |
| `--text-4xl` | `clamp(1.65rem, 3.2vw, 2.35rem)` | 28–38px | Major hero titles & section headers |
| `--text-5xl` | `clamp(2rem, 3.8vw, 2.85rem)` | 32–46px | Top-level H1 page headlines |

---

### 3.3. Typography Utility Classes

```css
/* Gradient Text Clipping */
.text-gradient {
  background: var(--brand-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: inline-block;
}

/* Eyebrow Pill Badge */
.text-eyebrow {
  display: inline-block;
  font-size: var(--text-xs);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-primary);
  background-color: var(--color-primary-light);
  padding: 4px 12px;
  border-radius: var(--radius-full);
  margin-bottom: 0.75rem;
}
```

---

## 4. Spacing, Elevation & Radii Tokens

### 4.1. Border Radii Scale
- `--radius-sm`: `8px` — Chips, tags, small icon tiles
- `--radius-md`: `12px` — Form fields, icon boxes (`48x48px`)
- `--radius-lg`: `16px` — Inner image containers, cover wrap media
- `--radius-xl`: `20px` — Core standard cards (`.card`, `.blog-card`, `.retainer-card`)
- `--radius-2xl`: `24px` — Large banner cards (Final CTA, Hero feature cards)
- `--radius-full`: `9999px` — Buttons, pills, badges, avatar circles

### 4.2. Elevation & Drop Shadows
- `--shadow-sm`: `0 1px 3px rgba(26, 8, 92, 0.04)` (subtle border reinforcement)
- `--shadow-md`: `0 4px 16px rgba(26, 8, 92, 0.06)` (default card rest state)
- `--shadow-lg`: `0 10px 30px rgba(26, 8, 92, 0.08)` (dropdown menus & elevated panels)
- `--shadow-xl`: `0 20px 40px rgba(26, 8, 92, 0.1)` (card hover elevation)
- `--shadow-glow`: `0 0 25px rgba(124, 92, 232, 0.25)` (accent illumination)
- `--navbar-shadow`: `0 20px 50px rgba(99, 88, 240, 0.12), 0 2px 6px rgba(20, 20, 60, 0.04)`
- `--btn-cta-shadow`: `0 8px 20px rgba(99, 88, 240, 0.35)`

### 4.3. Layout Containers & Grid System
- **Maximum Width**: `--container-max: 1400px` (Expanded to `1440px` on screens $\ge 1600px$)
- **Container Padding**: `--container-pad: clamp(1rem, 3.5vw, 2.5rem)`
- **Grids**:
  - `.grid-2`: `grid-template-columns: repeat(2, 1fr)` (collapses to 1fr on mobile)
  - `.grid-3`: `grid-template-columns: repeat(3, 1fr)` (collapses to 2fr on tablet, 1fr on mobile)
  - `.grid-4`: `grid-template-columns: repeat(4, 1fr)` (collapses to 2fr on tablet, 1fr on mobile)
  - Grid Gaps: `clamp(1.25rem, 2vw, 1.75rem)`

---

## 5. UI Component Specifications

### 5.1. Standard Cards (`.card` & `article.card`)

The foundational container used across Problem/Solution, Services, Why InfoHQ, and Portfolio:

```css
article.card,
.card {
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: var(--color-surface-white, #FFFFFF);
  border-radius: var(--radius-xl, 20px);
  border: 1px solid var(--color-border-card, #EAE6F7);
  box-shadow: var(--shadow-md);
  padding: 24px;
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), 
              box-shadow 0.25s ease, 
              border-color 0.25s ease;
  position: relative;
  overflow-wrap: anywhere;
  word-break: break-word;
}

@media (max-width: 767px) {
  article.card,
  .card {
    padding: 20px;
  }
}

.card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-xl);
  border-color: rgba(124, 92, 232, 0.3);
}
```

---

### 5.2. Specialized Card Variants

#### A. Problem vs. Solution Cards (`.ps-card`)
- **Problem Card**:
  - Badge: `.problem-badge` (Rose/coral tint with text `THE PROBLEM`)
  - List Icons: `.ps-icon-problem` (Circle with cross mark $\times$, border `rgba(232, 96, 78, 0.25)`)
- **Solution Card**:
  - Badge: `.solution-badge` (Purple/indigo tint with text `THE SOLUTION`)
  - List Icons: `.ps-icon-solution` (Circle with checkmark $\checkmark$, background `var(--color-primary-light)`)

#### B. Why InfoHQ Cards (`.why-card`)
- Clean split-header with index numeral (`01`, `02`, `03`, `04`) in bold violet
- Accent bar divider (`.why-accent-bar`) color-coded:
  - `accent-blue`: `#5782E0`
  - `accent-purple`: `#914FBB`
  - `accent-pink`: `#DD4985`

#### C. Portfolio Project Cards (`.portfolio-card`)
- Status ribbon in header (`CLIENT PROJECT • DELIVERED` / `INTERNAL PRODUCT • ACTIVE` / `IN-PROGRESS SAAS`)
- Top-right external link icon with round hover effect
- Media preview wrap with `16px` inner radius
- Tech stack chips:
  - `.chip-blue`: Background `#EFF6FF`, text `#1D4ED8`
  - `.chip-purple`: Background `#FAF5FF`, text `#6B21A8`
  - `.chip-green`: Background `#F0FDF4`, text `#15803D`
  - `.chip-orange`: Background `#FFF7ED`, text `#C2410C`
- Bottom-pinned case study link with diagonal arrow $\nearr$

#### D. Blog Post Cards (`.blog-card`)
- **Container**: `border-radius: 20px`, padding `16px 16px 20px 16px`, height `100%`
- **Cover Wrap**: Fixed `height: 220px`, `border-radius: 16px`, `overflow: hidden`
  - On hover: image expands with `transform: scale(1.04)` over `0.4s cubic-bezier(0.16, 1, 0.3, 1)`
- **Category Fallback**: Dynamic category gradient + central ambient glow + Lucide icon (`size={44}`)
- **Date Badge**: Pill badge with calendar icon, background `#F4F0FA`, text `#5B4A80`
- **Card Footer**: Author avatar (`20x20px`), author name, bullet separator, reading time calculation (`4 min read`), and "Read Article" action badge with right arrow

#### E. Retainer Pricing Cards (`.retainer-card`)
- **Base Plan Card**:
  - White surface, `border: 1.5px solid #E2E8F0`, padding `clamp(1.35rem, 2vw, 1.75rem)`
  - Price typography: `clamp(1.85rem, 2.5vw, 2.25rem)`, bold `#0F172A`
  - Features list with green checkmark circles
- **Most Popular Tier (`Business Growth`)**:
  - Lifted baseline: `transform: translateY(-6px)` (on hover: `-9px`)
  - Border highlight: `#C7D2FE`
  - Elevation shadow: `0 10px 30px rgba(99, 102, 241, 0.12)`
  - Top Floating Ribbon: Centered pill with `background: var(--brand-gradient)`, text `MOST POPULAR`
  - Plan name styled with clipping `var(--brand-gradient)`

#### F. Final CTA Banner Card (`.cta-banner`)
- High-impact wide container with `border-radius: 24px` (`--radius-2xl`)
- Background: `linear-gradient(135deg, #FFFFFF 0%, #FAF8FE 60%, #F3EFFE 100%)`
- Dual radial glows:
  - Top-left glow: `radial-gradient(circle at 12% 20%, rgba(221, 73, 133, 0.07) 0%, transparent 45%)`
  - Bottom-right glow: `radial-gradient(circle at 88% 80%, rgba(124, 92, 232, 0.09) 0%, transparent 50%)`
- Eyebrow badge with sparkling star icon (`Sparkles`), dark high-contrast headline, and action button duo

---

### 5.3. Button System

```
[ Primary CTA Button Anatomy ]
+-------------------------------------------------------+
|  Get Free Consultation                 (  ->  )       |
|  [SemiBold 16px Text]               [36px Circle]     |
+-------------------------------------------------------+
```

| Variant | Class | Background / Border | Text Color | Icon Behavior |
|---|---|---|---|---|
| **Primary CTA** | `.btn-primary` | `var(--btn-cta-bg)` (`#5B4CF5` $\to$ `#E85AA0`) | `#FFFFFF` | Embedded 36px white circle with purple arrow (`.btn-icon-circle`) |
| **Gradient** | `.btn-gradient` | Brand gradient (`#E8604E` $\to$ `#DD4985` $\to$ `#914FBB` $\to$ `#7C5CE8`) | `#FFFFFF` | Smooth translateY + brightness shift |
| **Secondary Light** | `.btn-secondary.tone-light` | Background `#FFFFFF`, Border `#EAE6F7` | `#1A085C` | Subtle hover fill `#FAF9FE` |
| **Ghost** | `.btn-ghost` | Transparent | `#1A085C` | Background fills with `--color-primary-light` on hover |
| **Pricing Pill** | `.pricing-pill-btn` | `linear-gradient(90deg, #F43F5E 0%, #E11D48 20%, #7C3AED 70%, #2563EB 100%)` | `#FFFFFF` | White circle arrow badge |
| **Header Nav CTA** | `#nav-header-cta` | `linear-gradient(90deg, #5B4CF5 0%, #E85AA0 100%)` | `#FFFFFF` | Height: `40px`, padding: `0 18px`, compact font: `14px` |

#### Button Physics & Motion
- Hover translation: `transform: translateY(-2px)`
- Active press: `transform: scale(0.98)`
- Overlay effect: Inner pseudo-overlay `rgba(255, 255, 255, 0.14)` smoothly fading to `opacity: 1`
- Arrow micro-animation: `.btn-icon-circle` shifts `translateX(2px)` on hover

---

### 5.4. Iconography & Icon Boxes

- **Library**: `lucide-astro` icons augmented with optimized inline SVG paths.
- **Stroke Width**: `2` (default) to `2.5` (arrows and emphasis).
- **Icon Box (`.icon-box`)**:
  - Size: `48px x 48px`
  - Border radius: `12px` (`--radius-md`)
  - Center alignment with flexbox
  - On parent card hover: `transform: scale(1.05)`

#### Core Icon Mapping Table
| Purpose / Area | Icon Name | Source |
|---|---|---|
| AI Systems | `Brain` | Lucide |
| Web Development | `Globe`, `Code2` | Lucide |
| Mobile Apps | `Smartphone` | Lucide |
| Cloud & DevOps | `Cloud`, `Cpu` | Lucide |
| Security & Compliance | `ShieldCheck` | Lucide |
| Maintenance & Retainers | `Wrench` | Lucide |
| Automation & Workflows | `Workflow` | Lucide |
| UI/UX & Design | `Palette`, `PenTool` | Lucide |
| Digital Growth & Marketing | `TrendingUp`, `Share2` | Lucide |
| Architecture & Category Grid| `LayoutGrid` | Lucide |
| Call to Action Directions | `ArrowRight` | Lucide |
| Direct Email Contact | `Mail` | Lucide |
| WhatsApp Chat | Custom Brand WhatsApp SVG | Inline SVG |
| Social Media Profiles | Custom SVG (LinkedIn, YouTube, Instagram) | Inline SVG |
| Highlight & Eyebrow Badges| `Sparkles` | Lucide |

---

### 5.5. Form Controls & Inputs

- **Inputs, Selects, Textareas**:
  - Minimum height: `44px` (touch-target compliant)
  - Border radius: `12px` (`--radius-md`)
  - Border: `1px solid var(--color-border-card, #EAE6F7)`
  - Surface: `#FFFFFF`
  - Text: `var(--color-text-heading, #1A085C)`
- **Focus State**:
  - Border color: `var(--color-primary, #7C5CE8)`
  - Box shadow: `0 0 0 3px rgba(124, 92, 232, 0.15)`
- **Mobile Safari Rule**:
  - Explicit `font-size: 16px !important` on screens $\le 767px$ to prevent automatic iOS zoom on focus.

---

## 6. Layout Components & Global Navigation

### 6.1. Floating Glassmorphism Navbar (`#site-header`)
- **Position**: Floating sticky container (`top: 12px`, centered)
- **Background**: `rgba(255, 255, 255, 0.85)`
- **Backdrop Filter**: `blur(16px)`
- **Border**: `1px solid rgba(120, 110, 220, 0.12)`
- **Shadow**: `0 20px 50px rgba(99, 88, 240, 0.12), 0 2px 6px rgba(20, 20, 60, 0.04)`
- **Nav Links**:
  - Inactive: `#14143C` (Font weight: `500`)
  - Hover: `#5B4BF0`
  - Active: `#5B4BF0` with animated gradient bottom indicator (`linear-gradient(90deg, #5B4BF0 0%, #C24BD6 100%)`)
- **Breakpoint**: Desktop nav displays on $\ge 1024px$; under $1024px$, switches to mobile hamburger toggle and slide-in drawer.

### 6.2. Footer Architecture (`#site-footer`)
- **Theme**: Clean Light Surface (`#FFFFFF`), border top `1px solid #EAE6F7`
- **Columns**:
  1. Brand Block: Logo, tagline, email badge (`contact@infohq.in`), WhatsApp quick-chat pill, social icons (LinkedIn, YouTube, Instagram).
  2. Services links.
  3. Company links.
  4. Retainers / Pricing links.
  5. Live newsletter subscription form with async feedback and honeypot spam protection.
- **Bottom Bar**: Copyright, registered address (`Pune & Prayagraj`), terms of service, privacy policy, cookie preferences trigger.

### 6.3. Mobile Sticky Action Bar (`#sticky-mobile-cta`)
- Fixed bottom bar on viewports $\le 767px$ (`height: 60px`, `z-index: 99`)
- Includes "Book Free Consultation" CTA button
- Smoothly hides via `IntersectionObserver` when the large Final CTA card scrolls into view, avoiding visual clutter.

---

## 7. Responsive Breakpoint Matrix

| Device Class | Viewport Range | Core Layout Rules |
|---|---|---|
| **Mobile** | $\le 767px$ | Single-column grids (`1fr`), card padding `20px`, sticky bottom CTA active, 16px input font size |
| **Tablet** | $768px - 1023px$ | 2-column grids (`repeat(2, 1fr)`), compact horizontal padding, hamburger drawer active |
| **Desktop** | $1024px - 1599px$ | Full 3-column / 4-column grids, horizontal floating navbar visible, desktop hover states |
| **Wide Desktop**| $\ge 1600px$ | Maximum container expansion to `1440px`, generous clamp margins |

---

## 8. Motion & Accessibility Standards

- **Transforms & Opacity Only**: All hover, entrance, and transition animations are strictly limited to `transform` and `opacity` to maintain zero Cumulative Layout Shift (CLS) and keep Core Web Vitals at **95+**.
- **Reduced Motion Support**:
  ```css
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
  ```
- **Focus Rings**: Accessible `:focus-visible` styling (`outline: 2px solid #5B4BF0; outline-offset: 2px;`).
- **Semantic Structure**: Strict HTML5 semantic hierarchy (single `<h1>` per page, `<section>`, `<article>`, and proper aria attributes).

---

*Verified against InfoHQ production codebase.*  
*Maintained in root directory: `d:\InfoHQ\design.md`*
