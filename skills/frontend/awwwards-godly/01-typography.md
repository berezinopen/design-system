---
type: knowledge-base
topic: typography
description: "Rules for Awwwards-level typography, type scales, and font pairing."
---

# Typography in Award-Winning Websites (2023–2025)

> Data from global web performance data 2024, Awwwards font collections, Typ.io pairings, and case studies of SOTY/SOTD winners.

---

## 1. Top 20 Font Families

Ranked by recurrence across Awwwards "Best Fonts" collections, global web usage data, and contemporary font recommendation lists.

### Tier 1: Very Common (appear across multiple winners)

| Font | Classification | Typical Role | Why it wins |
|------|---------------|-------------|-------------|
| **Inter** | Neo-grotesque sans, variable | Body & UI | Rising ~1% global use; leading design tool's top UI font recommendation; clean, neutral, superb at small sizes |
| **Roboto** | Neo-grotesque sans | Body & UI | #1 most-used web font globally; standard platform design systems default; safe, proven |
| **Poppins** | Geometric sans | Headlines & UI | Top-10 Google Font; geometric precision reads well in SaaS and agency contexts |
| **Montserrat** | Geometric sans | Headlines & brand | Top-10 Google Font; strong personality for portfolios and brand sites |
| **PP Editorial New** | Didone serif | Display headlines | Used by Award-Winning Digital Agency's SOTY rebrand; defines the "editorial serif + grotesque" trend |
| **Custom display faces** | Brand-specific | Hero/wordmark | Many top-tier sites commission custom type — PP Award-Winning Digital Agency New, High-End Design Studio Font, High-Impact Compressed Display Font |

### Tier 2: Common (regular presence in award ecosystem)

| Font | Classification | Typical Role |
|------|---------------|-------------|
| **Open Sans** | Humanist sans | Body text — optimized for interface and paragraph legibility |
| **Lato** | Humanist sans | Body & UI — warm, neutral workhorse |
| **Source Sans 3** | Humanist sans | Body & UI — a major creative software company's open-source system font |
| **Manrope** | Geometric sans, variable | UI text — versatile, modern feel |
| **DM Sans** | Geometric sans | Body & UI — designed for on-screen text |
| **Raleway** | Neo-grotesque sans | Headings & UI — elegant, recommended by leading design tools |
| **Migra** | High-contrast serif | Display — a popular boutique type foundry; Awwwards curates "sites using Migra" |
| **Proxima Nova** | Neo-grotesque sans | Body & headings — commercial, heavily used via commercial font libraries |
| **Geist** | UI sans | UI text — a leading deployment platform's font; rising in dev/tech sites |
| **Satoshi** | Minimalist sans | UI & headings — popular in contemporary designer portfolios |
| **Clash Display** | Display grotesque | Hero headings — "impactful" headline choice |
| **Instrument Serif** | Contemporary serif | Editorial body — refined digital serif |
| **PP Mori** | Grotesque | Experimental/portfolio — Awwwards-featured free font |
| **Archivo / DM families** | Utility grotesques | Text — free-hosted workhorses; Awwwards tracks sites using them |

---

## 2. Font Pairings (Heading + Body)

The dominant pattern: **expressive serif or custom display heading** over **neutral, screen-optimized sans body**.

| # | Heading / Display | Body / UI | Where seen |
|---|-------------------|-----------|-----------|
| 1 | Migra (serif) | Inter (sans) | Classic editorial + UI; explicitly recommended pairing |
| 2 | Migra | Monument Extended | High-impact hero sections |
| 3 | PP Editorial New | Inter | Award-Winning Digital Agency SOTY case study |
| 4 | Playfair Display | Inter / Open Sans | Widely recommended serif + sans |
| 5 | DM Serif Display | DM Sans | Same superfamily for cohesive hierarchy |
| 6 | Satoshi | Instrument Serif | Premium editorial feel |
| 7 | Clash Display | Satoshi / DM Sans | Bold display + restrained body in creative sites |
| 8 | Raleway | Roboto | Elegant display + robust body |
| 9 | Montserrat | Lato | Geometric headline + warm body (SaaS/corporate) |
| 10 | Poppins | Source Sans Pro | Two UI workhorses for neutral contemporary interfaces |
| 11 | Proxima Nova | Classic Premium Serif | Commercial grotesque + classic serif for editorial |
| 12 | General Sans | PP Editorial New | Designer-friendly grotesque + editorial serif |
| 13 | Inter | Space Grotesk | UI workhorse + expressive grotesque (jitter.video) |
| 14 | Manrope | Migra | Geometric body over serif section titles |
| 15 | Archivo | DM Sans | Minimalist utility pairing |
| 16 | Custom variable display | Inter / system sans | Experimental faces + stable workhorse body |

### Pairing Rule of Thumb
> One font carries personality (heading). One font carries information (body). They should contrast in classification but share similar proportions.

---

<design_tokens>
## 3. Type Scale

### Recommended Scale with clamp() Values

Based on accessibility guidelines, modular scale documentation, and observed patterns in SOTY winners.

| Token | Desktop px | Mobile px | `clamp()` value | Usage |
|-------|-----------|----------|-----------------|-------|
| `display-xxl` | 64–80 | 40–56 | `clamp(2.5rem, 2rem + 8vw, 5rem)` | Hero headlines, splash screens |
| `display-xl` | 48–64 | 32–40 | `clamp(2rem, 1.5rem + 5vw, 4rem)` | Section hero headings |
| `h1` | 36–48 | 28–32 | `clamp(1.75rem, 1.2rem + 3vw, 3rem)` | Page titles |
| `h2` | 28–32 | 24–28 | `clamp(1.5rem, 1rem + 2vw, 2.25rem)` | Major section headings |
| `h3` | 22–24 | 20–22 | `clamp(1.35rem, 0.9rem + 1.5vw, 1.75rem)` | Sub-section headings |
| `body-lg` | 18–20 | 17–18 | `clamp(1.05rem, 0.95rem + 0.5vw, 1.25rem)` | Long-form reading, marketing copy |
| `body` | 16–18 | 16–17 | `clamp(1rem, 0.9rem + 0.4vw, 1.125rem)` | Default text |
| `caption` | 13–14 | 13–14 | `clamp(0.8rem, 0.7rem + 0.3vw, 0.9rem)` | Metadata, labels, supporting text |

---


</design_tokens>

<design_tokens>
## 4. Line-Height Tokens

| Text style | Line-height | Rationale |
|-----------|-------------|-----------|
| Body / paragraph | **1.5–1.6** | Standard web reading comfort; endorsed by leading academic research, USWDS |
| Body small / caption | **1.6–1.8** | More air for small text improves legibility |
| H1–H2 (multi-line) | **1.2–1.3** | Tighter for strong visual impact while readable |
| Display / hero (single-line) | **1.05–1.15** | Very tight to emphasize form and negative space |

> Award-winning editorial sites push display headings toward the lower end. Body copy still tracks near 1.5.

---


</design_tokens>

## 5. Letter-Spacing (Tracking)

| Context | Letter-spacing | Notes |
|---------|---------------|-------|
| **Body text** | `0` (natural metrics) | Only add positive tracking for very small sizes |
| **Large headings** | `-0.02em` to `-0.04em` | Improves perceived tightness at large sizes |
| **All-caps labels** | `+0.05em` to `+0.12em` | Critical for readability of uppercase text |
| **Category overlines** | `+0.08em` to `+0.12em` | Bold, all-caps labels and overlines |

### In Practice
- `tracking-tight` (~−0.025em) for hero headings in bold grotesques or high-contrast serifs
- `tracking-wide` (~+0.1em) for small uppercase navigation labels
- Never track sentence-case body text — rely on line-height and measure instead

---

## 6. Variable Fonts

### Adoption
- ~33% of websites now use at least one variable font (global web performance data 2024)
- Vast majority use the `wght` (weight) axis; fewer use `wdth` or `slnt`
- Rapidly growing since 2022

### Trend in Award Sites
- "Big-personality typography" dominates 2024–2026 Awwwards type trends
- Custom/licensed variable display faces combined with variable UI sans (Inter, Manrope, Geist)
- Enables responsive weight and optical-size tuning without multiple font files

### Design System Implications
- Prefer variable versions when available (Inter Variable, Manrope Variable, Playfair Variable)
- Standardize on weight tokens: **400** (regular), **500** (medium), **600** (semibold), **700** (bold)
- Use `font-variation-settings` sparingly; define named instances in tokens
- Continuous weight axis enables subtle emphasis (e.g., weight 550) but always encapsulate as tokens

---

## 7. Font-Weight Distribution

| Role | Typical Weights | Notes |
|------|----------------|-------|
| Body text | **400**, sometimes **500** | 500 for dense UIs or captions |
| Sans-serif headings | **600–700** | Standard strong heading weight |
| Serif headings | **400–500** | High-contrast serifs rely on letterform, not boldness |
| Display / hero | **700–900** | Especially in grotesques or compressed faces |

---

## 8. Site-Level Typography Examples

### 1. Award-Winning Digital Agency® (SOTM March 2023)
Custom **PP Award-Winning Digital Agency New** (variant of PP Editorial New) as central identity — "font instead of logo." UI text uses neutral sans (Inter-class).

### 2. High-End Design Studio (Award-Winning Digital Agency case study)
Custom **"High-End Design Studio Font"** — heavy typographic emphasis with a flexible editorial grid. Two contrasting universes (black-on-white vs white-on-black).

### 3. Brand Builders Summit 2024 (Typography Honors)
**Bifur + Constructivist Block** (display) + **Proxima Nova** (body). Multi-font display system with expressive display faces anchored by workhorse sans.

### 4. conference.awwwards.com
**Oswald** for headers (90px, line-height 1.2, letter-spacing 5px tracked caps), **Roboto** for secondary headings. Documented CSS values available.

### 5. Interactive Experimental Variable Font Variable (Typography Honors)
Custom variable font **"Interactive Experimental Variable Font"** — interactive, squashable display. Single experimental font + conventional text fonts for body.

### 6. Leading Storytelling Agency (Users' Choice SOTY 2023)
Scalable typography system with merged text styles, logical line-height groupings, and responsive consistency. Token-driven, multi-product architecture.

### 7. Sites using Migra (Awwwards collection)
**Migra** as display serif paired with Inter, PP Neue Montreal, TT Commons, or IBM Plex Sans. High-contrast serif headings + neutral grotesque body.

### 8. Sites using Archivo / DM families
Minimalist, typography-first layouts where the typeface carries visual identity in monochrome or muted environments.

### 9. Premium Web3 Ecosystem Platform (SOTY 2024)
Strong condensed display type + modern sans body. Type appears as part of shader-driven glitch and scramble effects while remaining readable.

### 10. Luxury Web3 Gaming Layer (SOTD 2024)
Custom-adapted **High-Impact Compressed Display Font** — used in distorted, perspective-clashing ways. Withstands complex transformations without losing legibility. Type is central to brand identity.

---

## 🤖 AI Agent Directives

<agent_rules>

1. **Always pair expressiveness with neutrality** — display face for headings, workhorse sans for body
2. **Variable fonts are not optional** — they're expected at award level for performance and flexibility
3. **Type scale must be fluid** — `clamp()` based, tested across 320px to 1920px+ viewports
4. **Tracking matters** — negative for large headings, positive for all-caps, zero for body
5. **Custom type is the ultimate differentiator** — many SOTY winners use commissioned or modified fonts
6. **Line-heights are context-aware** — not one value fits all; token by text style

</agent_rules>
