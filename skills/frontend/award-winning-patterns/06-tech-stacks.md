---
type: knowledge-base
topic: tech
description: "Data on modern frontend frameworks, CMS, hosting, and performance optimization."
---

# Technology Stacks in Award-Winning Websites (2023–2025)

> Data from premium award platforms case studies, tech-stack analyzers, tutorial ecosystem disclosures, and Greenspector performance audits.

---

## 1. JavaScript Frameworks

| Framework | Prevalence | Evidence |
|-----------|-----------|----------|
| **Next.js (React)** | Dominant | Multiple SOTDs cite it explicitly; heavily promoted for SEO-friendly, high-performance sites; default in tutorial ecosystem |
| **React (without Next)** | Common | Plain React + Vite + GSAP + R3F for projects without SSR needs |
| **Angular** | Notable | Top Tier 3D Studio (v3) (Site of the Year 2023) documented as Angular + Three.js + TypeScript |
| **Svelte / SvelteKit** | Emerging | Premium Web3 Ecosystem Platform attributed to Svelte + Three.js + GSAP in some tech breakdowns |
| **a popular visual builder** | Common | Dedicated "premium award platforms Websites" gallery; Heco achieved Site of the Day purely on a popular visual builder |
| **Nuxt (Vue)** | Present | Leading Storytelling Agency (Labs) uses Nuxt + Three.js + Cannon.js |
| **Vanilla JS** | Present | premium award platforms maintains a "Vanilla JS" category; some winners deliberately avoid frameworks |
| **Astro** | Emerging | Detected on some builds; good for content-heavy sites with islands of interactivity |

### The Pattern
> Next.js + React is the dominant framework pairing, but award-winners are **framework-agnostic** — what matters is the quality of the output. Angular, Svelte, and even a popular visual builder can win.

---

## 2. Styling Approaches

| Approach | Prevalence | Notes |
|----------|-----------|-------|
| **Tailwind CSS** | Common | premium award platforms maintains a Tailwind category; used in many tutorial projects and clones |
| **Custom CSS + design tokens** | Common | High-craft studios maintain their own CSS architecture with custom properties |
| **CSS-in-JS / CSS Modules** | Present | Often combined with Next.js and React Three Fiber projects |
| **Vanilla CSS** | Present | Especially in smaller, crafted marketing sites and creative demos |

### Design System Rule
> The styling tool doesn't matter. What matters: **all values trace to tokens**, never ad-hoc Tailwind utilities like `text-blue-500` or `rounded-3xl`.

---

## 3. Animation & Motion Libraries

| Library | Role | Context |
|---------|------|---------|
| **GSAP** | Core animation engine | De facto standard; timeline control, ScrollTrigger, SplitText |
| **Three.js** | 3D rendering | All immersive Site of the Year winners |
| **React Three Fiber** | Three.js for React | Growing in Next.js ecosystem |
| **Lenis** | Smooth scroll | Replaces Award-Winning Digital Agency Scroll; syncs to GSAP ticker |
| **Framer Motion** | Component animation | Popular in React/Next portfolio and SaaS sites |
| **Lottie** | Vector animation | Brand illustrations, micro-animations (Vibrant Beverage E-commerce Maté) |
| **Cannon.js** | Physics engine | 3D physics (Leading Storytelling Agency (Labs) glass fragments) |
| **Wiggle Bones** | Cloth simulation | Audio-reactive cloth (AI Audio Experiential Microsite) |

---

## 4. CMS & Data Layer

| CMS | Usage Context |
|-----|--------------|
| **Sanity** | Headless CMS for portfolios and product sites; paired with Next.js |
| **Contentful** | Headless CMS for marketing and content-heavy sites |
| **a leading e-commerce platform** | E-commerce backend (Vibrant Beverage E-commerce Maté, Premium Hardware Brand) |
| **Visual Builder CMS** | Builder + CMS for small studios and portfolios |
| **Custom / none** | Many award sites are static builds with no CMS for maximum control |

---

## 5. Hosting & Deployment

| Platform | Usage Context |
|----------|--------------|
| **a leading deployment platform** | Default for Next.js; assumed by most tutorials |
| **a popular Jamstack host** | Detected on Top Tier 3D Studio (v3); common for Jamstack builds |
| **managed e-commerce hosting** | Commerce winners using a leading e-commerce platform infrastructure |
| **Visual Builder CDN** | visual-builder-created award sites |

---

## 6. Performance Characteristics

### Real-World Performance Data

| Metric | Typical Award-Winner Values | Notes |
|--------|---------------------------|-------|
| **HTTP requests** | 100–400+ per page | Heavy imagery, parallax, animation libraries |
| **Page weight** | 5–12+ MB transferred | Large 3D assets, videos, multiple font files |
| **Lighthouse Performance** | Variable (often 40-70) | Judges tolerate weight if experience feels smooth |
| **WPO DEV score** | 7.0–8.2/10 | Competent but not minimal |
| **Accessibility DEV score** | 6.6–7.2/10 | Decent but far from perfect |
| **Overall DEV score** | Low-to-mid 7s | Technical quality recognized but not extreme |

### Key Insight
> Judges tolerate non-trivial payloads and JS complexity **if the experience feels smooth and responsive**. Extreme weight and jank remain liabilities. Performance engineering matters — but user-perceived performance > Lighthouse score.

---

## 7. Image Optimization

### Formats
- **WebP/AVIF** consistently used by top-ranked sites
- Well-managed caching when properly configured

### Lazy Loading
- Native lazy-loading significantly improves perceived performance
- **Not universal** — several evaluated sites lacked proper lazy-loading

### 3D Asset Optimization
- Model decimation + texture baking
- Compressed VDB volume data
- Draco compression for 3D models
- Global Beverage Brand sheets and short looping videos replace DOM-heavy sequences

---

## 8. Font Loading

### Best Practices from Award Winners

| Practice | Status |
|----------|--------|
| Custom display + system/neutral body | Very common |
| Self-hosted woff2 | Growing (privacy and performance) |
| Variable fonts | Increasingly adopted |
| Font subsetting (Latin only) | Should be standard but not always done |
| `font-display: swap` | Expected baseline |

### Problem Area
- Some premium award platforms nominees load **15+ font files**
- Greenspector recommends variable fonts or system fonts to reduce overhead
- Self-hosting avoids third-party free font libraries requests

---

## 🤖 AI Agent Directives

<agent_rules>

1. **Next.js is the default** but not the only path — quality transcends framework choice
2. **GSAP + Three.js** is the motion/3D stack; don't deviate without reason
3. **Tailwind is acceptable** if all values trace to design tokens — no raw utility colors/radii
4. **Performance is about feel**, not Lighthouse scores — but 60fps is non-negotiable
5. **Self-host fonts** — privacy and performance; subset aggressively
6. **Lazy-load everything** below the fold — hero gets `fetchpriority="high"`
7. **CMS choice follows content need** — Sanity for flexibility, a leading e-commerce platform for commerce, none for maximum control

</agent_rules>
