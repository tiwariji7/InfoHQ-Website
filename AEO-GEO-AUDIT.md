# InfoHQ — AEO & GEO Comprehensive Audit

**Audit Date:** November 2026  
**Audited Domain:** [https://infohq.in](https://infohq.in)  
**Evaluator:** Senior SEO, AEO & GEO Strategist  
**Methodology:** 3-Layer GEO Framework (Technical Accessibility, Content Citability, Schema Grounding, Entity Signals)

---

## 1. Executive Summary: What is AEO & GEO?

- **AEO (Answer Engine Optimization):** Structuring web content so that traditional search engines (Google, Bing) and voice assistants can extract immediate, single-source answers for Featured Snippets, "People Also Ask" (PAA) accordions, and Knowledge Panels.
- **GEO (Generative Engine Optimization):** Architecting website content, technical signals, and metadata so generative AI models (ChatGPT, Perplexity, Google Gemini, Claude, Google AI Overviews) can discover, parse, quote, and cite your brand as an authoritative source in generated answers.

---

## 2. 4-Dimension GEO Scorecard for InfoHQ

$$ \text{Composite GEO Score} = (\text{Technical} \times 0.20) + (\text{Citability} \times 0.35) + (\text{Schema} \times 0.20) + (\text{Brand Entity} \times 0.25) $$

| Dimension | Weight | Score (1-100) | Weighted | Analysis & Findings |
| :--- | :--- | :--- | :--- | :--- |
| **1. Technical AI Accessibility** | 20% | **98 / 100** | **19.6 / 20** | All major AI bots explicitly allowed in `robots.txt`; `/llms.txt` and `/llms-full.txt` published and structured; sub-second static HTML delivery. |
| **2. Content Citability & Structure** | 35% | **88 / 100** | **30.8 / 35** | High-density information, zero generic filler; strong step-by-step frameworks; opportunities to add more numerical statistics and clear entity labels. |
| **3. Structured Data & Grounding** | 20% | **94 / 100** | **18.8 / 20** | Rich JSON-LD on all templates (`Organization`, `WebSite`, `Service`, `FAQPage`, `Article`, `BreadcrumbList`). Validated syntax. |
| **4. Brand Entity & Knowledge Graph** | 25% | **76 / 100** | **19.0 / 25** | Clear founder association (Shivam Tiwari), social sameAs mapping; growing digital footprint; needs more external co-citations and directory mentions. |
| **TOTAL COMPOSITE GEO SCORE** | **100%** | — | **88.2 / 100 (Grade: A-)** | **Strong Foundation with High Upside Potential.** |

---

## 3. AEO Audit: Google Featured Snippets & Direct Answers

### 3.1 Passage-Level Answer Architecture
- **Snippet Opportunity:** When users search queries like *"how much does an AI agent cost in India"* or *"what is the difference between an AI agent and a chatbot"*, Google rewards passages that provide the answer in the first 40–60 words.
- **Current Status in InfoHQ:**
  - Blog post [`what-is-rag.mdx`](./src/content/blog/what-is-rag.mdx) starts with a direct definition: *"Retrieval-Augmented Generation (RAG) is an AI architecture that connects Large Language Models to private business documents..."* — **Passes Snippet Extraction Criteria**.
  - Blog post [`ai-agents-vs-ai-chatbots.mdx`](./src/content/blog/ai-agents-vs-ai-chatbots.mdx) provides a clear comparative bullet list — **High probability of snippet capture**.
- **Actionable Optimization:**
  - Add a dedicated `<div class="quick-answer-card">` or bold 2-sentence summary immediately below the primary H2 in all 12 service pages and commercial blog posts.

### 3.2 FAQ Accordion Formatting for AEO
- InfoHQ uses structured FAQ accordions across the homepage, service pages, and case studies.
- Every FAQ item on-page matches the JSON-LD `FAQPage` schema character-for-character to maintain content truthfulness. While Google restricted standalone FAQ rich snippets to authoritative/governmental sources, full schema alignment remains critical for AI engine knowledge ingestion, conversational search grounding, and entity verification.

---

## 4. GEO Audit: AI Answer Engine Visibility (ChatGPT, Perplexity, Gemini, Claude)

### 4.1 AI Crawler Accessibility (`robots.txt`)
InfoHQ's `/robots.txt` is in the top 5% of web implementations:
```txt
User-agent: GPTBot
Allow: /
User-agent: ChatGPT-User
Allow: /
User-agent: Google-Extended
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: ClaudeBot
Allow: /
User-agent: Claude-Web
Allow: /
```
- **Finding:** No bot blocking, no CAPTCHA friction, zero cloudflare-worker barriers for legitimate AI indexing bots.

### 4.2 `llms.txt` and `llms-full.txt` Audit
- **Standard:** Follows the [llmstxt.org](https://llmstxt.org) open specification.
- **Structure in InfoHQ:**
  - `/llms.txt`: Concise executive summary, core service catalog with markdown links, portfolio case study links, and categorized blog index.
  - `/llms-full.txt`: Deep technical specifications, engineering architecture, and complete service deliverables.
- **Updates Required:**
  - Update company location description in both files to reflect:
    *"Headquartered in Prayagraj, Uttar Pradesh, with an active operational presence in Pune, Maharashtra, delivering pan-India and globally."*
  - Add direct links to the newly launched case studies (`/portfolio/sehat-smartcare/` and `/portfolio/alpha-studio-tech/`).

### 4.3 Content Citability & "Hedge Language" Removal
AI systems are trained to prioritize **authoritative, self-contained, fact-based statements** over ambiguous marketing prose.

| Weak Marketing Copy (Low Citability) | InfoHQ High-Citability Standard (High GEO Citability) |
| :--- | :--- |
| *"We might be able to help you build great AI solutions that could improve your business."* | *"InfoHQ engineers production-grade RAG systems and autonomous AI agents in Python, FastAPI, and pgvector with <200ms query latency."* |
| *"Our pricing is very affordable compared to others."* | *"InfoHQ delivers fixed-scope business automations and AI prototypes starting from ₹19,999 with 2 to 4-week delivery cycles."* |
| *"We are a leading IT company in India."* | *"InfoHQ is an AI and software engineering studio headquartered in Prayagraj, Uttar Pradesh, with active engineering operations in Pune, Maharashtra."* |

- **Finding:** InfoHQ’s copy avoids generic buzzwords. The addition of verifiable project parameters (such as SeHAT’s 5 clinical workflows and 74% wait-time reduction) dramatically increases citability in Perplexity and ChatGPT search.

---

## 5. Entity SEO & Knowledge Graph Optimization

### 5.1 Brand Entity Recognition
To establish InfoHQ as a recognized entity in Google’s Knowledge Graph and LLM training sets:
1. **Canonical Schema `@id` Mapping:**
   - Organization: `https://infohq.in/#organization`
   - Founder: `https://infohq.in/company/#shivam-tiwari`
   - Website: `https://infohq.in/#website`
2. **`sameAs` Relationship Signals:**
   - Connected to verified external profiles on LinkedIn, Instagram, and YouTube.
   - Recommended addition: GitHub Organization (`https://github.com/tiwariji7` or company organization).

### 5.2 Topical Authority Clusters
AI search models cite websites that exhibit **topical completeness** rather than isolated keywords.
InfoHQ's content clusters:
- **Cluster 1 (AI & Intelligent Systems):** RAG architectures, AI agents vs chatbots, AI voice agents, DPDP Act data privacy.
- **Cluster 2 (Business Automation):** n8n vs Make vs Zapier, WhatsApp automation, lead management, invoice OCR.
- **Cluster 3 (Software & Modern Web):** Website development costs, mobile app costs, Next.js vs WordPress, Core Web Vitals.

---

## 6. Actionable Fixes for Maximum AEO/GEO Dominance

1. **Synchronize `llms.txt` and `llms-full.txt`**:
   - Update headquarters to **Prayagraj (HQ)** and **Pune (Active Hub)**.
   - Embed the new dedicated case study URLs.
2. **Add Direct-Answer H2 Summaries**:
   - Introduce concise 45-word answers at the top of high-traffic guides so Perplexity and Google Overviews can quote them verbatim.
3. **Structured Data Refinement**:
   - Ensure the Organization schema reflects Prayagraj as primary headquarters and Pune as an operating presence.
4. **Publish Technical Whitepapers / GitHub Repos**:
   - Open-source an Astro boilerplate or n8n workflow template under the InfoHQ GitHub brand to earn authoritative developer co-citations.
