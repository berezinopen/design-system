---
name: Creative Frontend
description: "Berezin Design System V3.0 — A knowledge module for building Awwwards-tier, high-end web experiences."
---

# Berezin Design System V3.0

This skill codifies the workflow for building "Top Tier" websites of **any aesthetic** (Minimalist, Brutalist, Editorial, Corporate).
The core principle is not a specific visual style, but a **specific engineering process**.

> [!NOTE]
> **EMPIRICAL RESEARCH BASE (PREMIUM AWARD PLATFORMS & CURATED GALLERIES)**
> All design principles in this system are backed by data from 12+ top-tier Site of the Year / Site of the Day winners (2023–2025) and exclusive curated web galleries.
> The full research is located in `./award-winning-patterns/`.
> 
> **CRITICAL AGENT INSTRUCTION**: Before generating any code or making design decisions (typography, colors, layout, motion), you MUST read `./award-winning-patterns/README.md`. It contains an `<agent_routing>` table that will tell you exactly which specialized document to read next. Do not guess; use the empirical data.

> [!IMPORTANT]
> **THE UNIVERSAL MANIFESTO (SYSTEM PROMPT)**
> When asked to build a high-end frontend, you MUST follow this sequence. **DO NOT write page code until the Style Kit is defined.**
>
> **Phase 0: The Style Kit Definition (The DNA)**
> Before writing `page.tsx`, you must explicitly define the "Physics/Materials" of the brand:
> 1.  **Typography**: Define the *Scale* (e.g., 1.5 vs 1.125 ratio). Is it loud (huge headlines) or quiet (micro type)?
> 2.  **Color & Texture**: Select a palette preset (`noir`, `warm`, `cold`, `neon`) or define custom HSL tokens.
> 3.  **Grid Physics**: Is it rigid (12-col) or chaotic (Bento/Asymmetric)?
> 4.  **Motion Physics**: Is it "snappy" (0.2s easeOut) or "heavy" (1.2s Lenis)?
> 5.  **Border Radius**: None (brutalist), Subtle (2px), Soft (8px), or Round (16px)?
> 6.  **Spacing Scale**: Which spacing tokens to emphasize — tight (xs/sm) or airy (lg/xl)?
>
> **Only after these 6 are defined by the user (or proposed by you) can you execute.**
>
> **Phase 1: Contextual Sub-Routines (The Router)**
> Beyond the core aesthetic, if the user requests specific complex features, you MUST read the corresponding architecture file before writing code. Do not hallucinate architectures for:
> - If building **Navigation, AI Assistants, Sidebars, Modals, or Floating Buttons (Fixed UI)**: Read `./complex-ui-patterns/01-z-index-and-layout.md`, `03-modals-and-drawers.md`, `04-floating-action-dock.md`, `05-dynamic-island-navbar.md`
> - If building **Contextual AI, Chat Widgets, or Glassmorphism UI**: Read `./complex-ui-patterns/02-contextual-ai-ui.md`
> - If building **Custom Cursor interactions or Magnetic buttons**: Read `./complex-ui-patterns/06-magnetic-buttons.md`, `08-global-custom-cursors.md`
> - If building **Preloaders, Complex Route Transitions, or Async Media**: Read `./complex-ui-patterns/07-page-preloaders.md`, `11-page-transitions.md`, `15-lazy-loaders.md`
> - If building **Advanced Scroll & Layouts (Horizontal, Parallax, Pins, WebGL, Masks, Marquees)**: Read `./complex-ui-patterns/09-horizontal-scroll.md`, `10-webgl-integration.md`, `12-mask-animations.md`, `13-parallax-and-pinning.md`, `14-kinetic-typography.md`

## 1. Core Philosophy: "Engineering the Aesthetic"
Regardless of style (Brutalist vs Elegant), the engineering quality is immutable:
- **Rule:** Never block the main thread.
- **Rule:** Use `Lenis` for scroll smoothing (it adds "weight" to any style).
- **Rule:** Use `fluid-typography` (clamp) to ensure the design holds up on all screens.
- **Rule:** Content First. The layout serves the content strategy.
- **Rule:** Read `./anti-patterns.md` before every output. Non-negotiable.

## 2. Tech Stack Standards (The Universal Base)
This stack supports 99% of high-end use cases:
- **Framework:** Next.js (App Router) or Astro.
- **Styling:** Tailwind CSS (v4 preferred) + CSS custom properties from `brand-dna.ts`.
- **Animation:** GSAP (Complex) or Framer Motion (UI).
- **Scroll:** Lenis (Required for "Premium" feel). Use `smooth-scroll-provider.tsx`.
- **Texture:** CSS Filters / SVG Noise. Use `noise-overlay.tsx` (animated grain).
- **Reveals:** Use `reveal-animation.tsx` on every section entry.

## 3. Universal Design Principles
These apply to *all* styles:
- **Copywriting**: Never Generic. Never "Learn More" or "Get Started". Always specific, value-driven, and on-brand.
- **Navigation**: Context-aware. Don't default to a top navbar. Ask: "What is the most intuitive way to move through *this* story?"
- **Responsiveness**: It's not just "stacking columns". It's **adapting the experience** (e.g., removing heavy 3D on mobile, disabling custom cursor on touch).

## 4. Golden Primitives
Use these primitives to guarantee "Godly" output. They are located in `./primitives`.

### Brand DNA (`brand-dna.ts`)
- The config file where you define the "Physics" (Phase 0).
- Includes: typography, color presets (noir/warm/cold/neon), spacing scale, radius tokens, motion curves, surface type.
- **RULE:** Every visual value in your code must trace back to a token here. If it's not in brand-dna, it doesn't exist.

### Bento Grid (`bento-grid.tsx`)
A chaotic-compatible grid system.
- Use `span-2` and `row-span-2` liberally.
- Always include at least one "Hero Card" that dominates the visual field.
- Uses CSS custom property `--radius` — never hardcoded border-radius.
- Hover changes border color to accent — never scales the card.

### Smooth Scroll Provider (`smooth-scroll-provider.tsx`)
A Lenis + GSAP ScrollTrigger synchronized wrapper.
- **Critical:** You MUST wrap the root layout in this provider.
- **Config:** Lenis syncs to GSAP's ticker to prevent animation jumps.
- **This is the ONLY scroll provider to use.**

### Reveal Animation (`reveal-animation.tsx`)
GSAP ScrollTrigger wrapper for scroll-triggered element reveals.
- Use on EVERY section entry. Sections that "pop" into existence feel amateur.
- Supports: `direction` (up/down/left/right/fade), `stagger` (for grids), `scrub` (for parallax).
- Full GSAP cleanup on unmount.

### Noise Overlay (`noise-overlay.tsx`)
- Drop this into the main layout to instantly add "texture".
- Uses CSS `steps()` animation for film-like animated grain.
- Replaces complex WebGL noise shaders while keeping performance high.

### Custom Cursor (`custom-cursor.tsx`)
Functional cursor with contextual modes.
- Place once in root layout. Use `data-cursor="view"` / `"play"` / `"drag"` attributes on elements.
- Auto-disabled on touch devices.
- **RULE:** Use ONLY when it adds function. Decorative cursors are an anti-pattern.

### Magnetic Button (`magnetic-button.tsx`)
- Buttons physically pull toward the cursor using GSAP `quickTo`.
- Activates before cursor reaches element (proximity detection).
- Auto-disabled on touch devices.
- **RULE:** Use only on primary CTAs and nav items. Pull strength 0.2–0.4.

### Fluid Typography (`fluid-typography.css`)
- 10 type scale steps: `display`, `h1`, `h2`, `h3`, `body-lg`, `body`, `small`, `label`, `caption`, `mono`.
- Utilities: `text-balance`, `text-pretty`, `tabular-nums`, `oldstyle-nums`, `ligatures`, `kerning`.
- **RULE:** Don't use standard Tailwind `text-xl` etc. Always `text-fluid-*`.

## 5. Motion Principles
Motion is not a garnish; it is the **structure** of the site.
- **Scroll-Linked:** Changes that happen *as* you scroll (e.g., parallax, scrubbing video). Use `GSAP ScrollTrigger` with `scrub: true`.
- **Scroll-Triggered:** Events that happen *when* you reach a spot (e.g., text fade-in). Use `reveal-animation.tsx`.
- **Micro-interactions:**
    - **Magnetic Buttons:** Buttons pull toward cursor. Use `magnetic-button.tsx`.
    - **Custom Cursor:** Use only if it adds function (e.g., "View" or "Play" modes). Use `custom-cursor.tsx`.
- **Duration Scale:** `fast` (0.2s) for hovers, `medium` (0.5s) for reveals, `slow` (1.2s) for heroes.

## 6. Performance Guardrails (Lighthouse Protection)
- **Fonts:** Self-host woff2. Subset heavily. Use `font-display: swap`.
- **Images:** AVIF/WebP only. Lazy load everything below the fold. Hero: `fetchpriority="high"`.
- **Scripts:** Defer non-critical JS.
- **WebGL:** Dispose of geometries/materials when unmounting scenes. Disable on mobile.
- **GSAP:** Always `kill()` timelines and ScrollTriggers in cleanup.

## 7. Spacing System
Spacing is rhythm. Consistent spacing = professional, inconsistent = amateur.
- Use the 4px base unit scale from `brand-dna.ts`: `xs`(4px), `sm`(8px), `md`(16px), `lg`(32px), `xl`(64px), `2xl`(128px).
- **Section vertical padding:** Use `sectionY` fluid token — never fixed `py-20`.
- **Hero vertical padding:** Use `heroY` fluid token — always larger than normal sections.
- **Component gaps:** Use `gap` fluid token.
- **RULE:** If you type a number like `px-7` or `mt-11`, you're wrong. Use tokens.

## 8. Color Philosophy
- **Maximum 3 colors:** 1 background + 1 text + 1 accent. Everything else is opacity variations.
- **Never pure black (#000000):** Use warm blacks: `#0a0a0a`, `#0d0d0d`, `#111`.
- **Never pure white (#ffffff) on dark:** Use off-whites: `#f5f5f5`, `#e8e8e8`, `#fafaf9`.
- **HSL for variations:** Need a lighter accent? Increase L channel. Need muted text? Decrease S and increase L.
- **All colors from tokens:** Never Tailwind utility colors. Always `hsl(var(--color-*))`.

## 9. Border-Radius Philosophy
Radius is brand identity, not decoration.
- **Brutalist/Editorial:** `0px`. Sharp, intentional, confident.
- **Premium Minimal:** `2-4px`. Clean, professional, subtle.
- **Modern SaaS:** `8px`. Friendly, approachable.
- **Glassmorphism:** `12-16px`. Soft, floating.
- **RULE:** Choose ONE radius for the project and use it consistently. Never mix `rounded-lg` with `rounded-3xl`.
- Radius must come from `brand-dna.ts` → `radius.active`.

## 10. Anti-Patterns
**Read `./anti-patterns.md` before every output.** This is a hard requirement.

Key categories: Layout, Border-Radius, Shadow, Color, Hover, Typography, Copywriting, Structure, Performance.

If you catch yourself writing any of these, stop and fix:
- `rounded-lg` / `rounded-3xl` → Use `var(--radius)`
- `shadow-md` / `shadow-lg` → Use `border` or custom `box-shadow`
- `hover:scale-105` → Change `border-color` or inner element
- `bg-blue-500` → Use `hsl(var(--color-accent))`
- `"Learn More"` → Write specific, brand-aware CTA

## 11. Variable Fonts & Features
Premium typography details that separate good from great:
- **`font-variant-numeric: tabular-nums`** — Use on statistics, prices, counters. Ensures numbers align vertically.
- **`font-variant-numeric: oldstyle-nums`** — Use in editorial/narrative context for elegant numerals.
- **`font-feature-settings: 'liga' 1, 'calt' 1`** — Enable ligatures and contextual alternates.
- **`font-kerning: normal`** — Let the browser optimize letter spacing.
- **`text-rendering: optimizeLegibility`** — Better kerning and ligatures at cost of minor performance.
- **Subsetting:** Only include character sets you need (Latin, Latin Extended). Reduces font file by 60-80%.
