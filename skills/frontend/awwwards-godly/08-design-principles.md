---
type: knowledge-base
topic: principles
description: "The 15 core design principles distilled from all research."
---

# Design Principles: What Separates Award-Winners from Typical Sites

> Distilled from 12+ case studies, 3 deep research reports, and the Berezin Design System philosophy. These are the actionable rules an AI agent must follow.

---

## The 15 Principles

<agent_rules>
### 1. Typography IS the Design
Award-winning sites make type the primary structural and emotional element. Custom or distinctive display faces carry brand identity — they are logos, mood-setters, and hierarchy drivers simultaneously.

**Rule**: Choose one expressive heading font and one neutral body font. The heading font should be distinctive enough to be memorable. Never default to system fonts for headlines.

→ See: [01-typography.md](./01-typography.md)

---

### 2. Maximum 3 Active Colors
Richness comes from gradients, opacity shifts, and lighting — not from more color swatches. Most SOTY winners use 1 background + 1 text + 1 accent.

**Rule**: Define 3 core HSL tokens. Generate all variations (hover, muted, disabled) programmatically from those. If you need a 4th color, justify it.

→ See: [02-color-palettes.md](./02-color-palettes.md)

---

### 3. Whitespace IS the Luxury
Award-winners use 55–65% viewport content width vs the 80–90% of typical sites. Entire screen quadrants are dedicated to negative space. This is the single strongest signal of premium quality.

**Rule**: Content column maxes at 1000–1280px. Text blocks max at 380–560px for readable line length. Section padding is generous (80–140px desktop). If it feels "empty," it's probably right.

→ See: [03-spacing-and-layout.md](./03-spacing-and-layout.md)

---

### 4. Scroll IS the Narrative
Scroll isn't a way to "reveal more content" — it's the primary interaction that drives the story forward. Pin, scrub, and transform. Every scroll event should feel intentional.

**Rule**: Use GSAP ScrollTrigger for all scroll-linked motion. Pin sections that need to tell a multi-state story. Horizontal galleries for secondary content. Progress indicators for orientation.

→ See: [04-animation-and-motion.md](./04-animation-and-motion.md)

---

### 5. Restraint Over Spectacle
A few signature interactions beat everything-animated. Award winners have 2–3 memorable motion moments, not 50 subtle ones. Polished restraint > animated chaos.

**Rule**: Identify maximum 3 signature interactions per page. Everything else gets subtle fade-in reveals. Hovers stay under 0.3s. Hero can be dramatic (1.2s). Body reveals are 0.6–0.8s.

→ See: [04-animation-and-motion.md](./04-animation-and-motion.md)

---

### 6. Never Generic Copy
"Learn More" and "Get Started" don't exist in this ecosystem. CTAs match the narrative. Headlines carry meaning. Even error pages have personality.

**Rule**: Every CTA must be specific to the action it enables. Every headline must communicate a value proposition. 404 pages must be on-brand micro-experiences.

→ See: [05-ux-patterns.md](./05-ux-patterns.md)

---

### 7. Navigation Disappears
Persistent chrome is antithetical to immersion. Top bars are sparse (3–5 links), transparent over heroes, hidden on scroll-down. Many desktop sites use hamburger overlay menus.

**Rule**: Start with the minimal viable navigation. For story-driven sites, consider section-based scroll navigation instead of traditional menus. Always: hide on scroll-down, reveal on scroll-up.

→ See: [05-ux-patterns.md](./05-ux-patterns.md)

---

### 8. Dark Mode is Default (for Creative)
Portfolio, creative, 3D-forward, and experiential sites default to dark. It makes neon accents pop, grades motion beautifully, and signals modernity. Light mode is for content-heavy/reading experiences.

**Rule**: Never pure black (#000000) — use #0a0a0a, #0d0d0d, or #121212. Text at #e8e8e8 or #f5f5f5, never #ffffff. Desaturate accents slightly in dark contexts.

→ See: [02-color-palettes.md](./02-color-palettes.md)

---

### 9. Fluid Everything
Nothing is fixed. Type scales with viewport via `clamp()`. Spacing scales with viewport. Layout restructures at breakpoints, it doesn't just adjust margins. Mobile simplifies 3D rather than removing it.

**Rule**: All type tokens must use `clamp()`. All spacing tokens must be responsive. Layout shifts at ~768px and ~1024px — structural changes, not tweaks.

→ See: [01-typography.md](./01-typography.md), [03-spacing-and-layout.md](./03-spacing-and-layout.md)

---

### 10. Performance IS Design
60fps is non-negotiable. Users and judges tolerate large payloads if the experience feels buttery. Performance engineering (baking textures, selective post-processing, adaptive mobile quality) is a design skill, not an afterthought.

**Rule**: Kill GSAP timelines on unmount. Defer non-critical JS. Lazy-load below fold. Simplify 3D on mobile. Never render off-screen. Self-host fonts, subset aggressively.

→ See: [06-tech-stacks.md](./06-tech-stacks.md), [04-animation-and-motion.md](./04-animation-and-motion.md)

---

### 11. One Idea Per Section
Content hierarchy in award-winners follows a strict pattern: each scroll section presents exactly one key insight, metric, or feature. No dense copy blocks. Problem → Solution → Proof → CTA.

**Rule**: Each `<section>` has one headline, one supporting statement, one visual, and optionally one CTA. If you're writing multiple paragraphs in a section, you need more sections.

→ See: [05-ux-patterns.md](./05-ux-patterns.md)

---

### 12. GSAP + Three.js = The Standard
There is no serious alternative for award-level motion and 3D on the web. GSAP handles timelines, scroll, and DOM animation. Three.js handles 3D. Lenis handles smooth scroll. Everything else is secondary.

**Rule**: Default to GSAP for all animation. Default to Three.js for any 3D requirement. Use Lenis for smooth scrolling. Framer Motion is acceptable for simple React component animation. Never hallucinate alternative 3D stacks.

→ See: [04-animation-and-motion.md](./04-animation-and-motion.md), [06-tech-stacks.md](./06-tech-stacks.md)

---

### 13. Accessibility is the Gap (and the Opportunity)
Most award-winners score 6.6–7.2/10 on accessibility. This is the Achilles heel of the ecosystem. A site that achieves Awwwards-level aesthetics AND strong accessibility would be exceptional.

**Rule**: Always implement `prefers-reduced-motion`. Always ensure 4.5:1 text contrast. Always provide keyboard navigation. Disable custom cursor on touch. These are non-negotiable baseline, not "nice to have."

→ See: [05-ux-patterns.md](./05-ux-patterns.md)

---

### 14. Custom Type is the Ultimate Differentiator
Many SOTY winners use commissioned or modified fonts — PP Award-Winning Digital Agency New, High-Impact Compressed Display Font (Luxury Web3 Gaming Layer), High-End Design Studio Font. When the font IS the brand, the entire design gains coherence that no amount of layout tricks can match.

**Rule**: For hero/brand typography, explore distinctive display faces (Migra, PP Editorial New, Clash Display, custom commissions). For body, stay with tried Inter/Manrope/DM Sans. Pair expressiveness with neutrality.

→ See: [01-typography.md](./01-typography.md)

---

### 15. Award-Winning ≠ 3D
Pet Care Services Platform (SOTY Users' Choice 2024) proves that charismatic illustration, engaging copy, and practical UX can beat full 3D immersion. Luxury Fashion Heritage Site proves that editorial photography + whitespace can do it. Vibrant Beverage E-commerce Maté proves that color and Lottie can do it.

**Rule**: Match technique to story. 3D for immersive/tech brands. Editorial grids for heritage/fashion. Playful illustration for approachable services. The technique serves the narrative, never the reverse.

→ See: [07-case-studies.md](./07-case-studies.md)

---

</agent_rules>

## Quick Reference:<agent_routing>
 The Decision Framework

```
Starting a new project?

1. Define the story type:
   → Immersive/tech → Dark mode + 3D + GSAP + Three.js
   → Editorial/heritage → Light mode + editorial grid + fade/parallax
   → Playful/approachable → Color-forward + illustration/Lottie + micro-animation

2. Lock the Style Kit (Phase 0 from Berezin):
   → 1 heading font + 1 body font
   → 3 HSL color tokens
   → Grid type (immersive vs editorial vs playful)
   → Motion physics (heavy/dramatic vs light/playful)
   → Border radius (none/subtle/soft/round)
   → Spacing emphasis (tight vs airy)

3. Build to principles:
   → Whitespace > content density
   → Scroll = narrative
   → 3 signature interactions max
   → One idea per section
   → Never generic copy
   → 60fps or it doesn't ship
```

</agent_routing>