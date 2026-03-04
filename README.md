# Berezin Design System V2.0

> **Berezin Design System V2.0 is an advanced UI/UX architectural brain for AI coding agents. It forces LLMs to generate premium frontend code by enforcing strict anti-patterns, fluid typography, Lenis scrolling, and 15 complex boilerplate UI architectures.**

A design system engineered for AI-assisted frontend development.

## 🚀 Quick Start (How to Use)

**Zero-friction setup for Humans and AI Agents:**

1. **Drop it in:** Copy the entire `.agent` folder into the root directory of your project.
2. **Prompts:** Open your AI IDE (Cursor, Windsurf) or Agent (Copilot, Gemini).
3. **Trigger:** Simply tell your AI: *"I want to build a landing page. Read the `.agent` folder first."*

The AI will automatically ingest the `SKILL.md` router and configure your project without hallucinating bad code.

---

## What Is This?

This `.agent` folder contains a complete set of **design rules, code primitives, and explicit prohibitions** that any AI coding assistant reads before writing frontend code.

Without it, an AI agent generates "good enough" output — functional, but visually generic.  
With it, the AI agent follows a strict engineering process that produces **award-tier results consistently.**

Think of it as a **brand manual for machines**: instead of a human creative director reviewing every decision, the rules are encoded upfront so the AI self-corrects before you ever see the output.

---

## What's Inside

| File | Purpose |
|------|---------|
| `INSTRUCTIONS.md` | Defines the AI's role, protocol, and quality bar |
| `skills/frontend/SKILL.md` | 11 sections of rules + The Router logic for complex UI features |
| `skills/frontend/anti-patterns.md` | 50+ explicit prohibitions — what the AI must **never** do |
| `skills/frontend/primitives/` | 10 ready-to-use boilerplate primitives (see below) |
| `skills/frontend/complex-ui-patterns/`| Lazy-loaded architectures for Z-Index, Modals, Fixed UI, and Contextual AI Widgets |

### Primitives

| Primitive | What It Does |
|-----------|-------------|
| `brand-dna.ts` | Design tokens — colors (4 presets), spacing, border-radius, motion curves, typography scale |
| `tailwind.config.ts` | Semantic Z-Scale configuration to prevent layering issues |
| `bento-grid.tsx` | Asymmetric grid layout system with token-based styling |
| `modal-wrapper.tsx` | Native Lenis-locked modal boilerplate that halts background scroll |
| `smooth-scroll-provider.tsx` | Lenis smooth scroll + GSAP ScrollTrigger synchronization |
| `reveal-animation.tsx` | Scroll-triggered element reveals with direction, stagger, and scrub support |
| `noise-overlay.tsx` | Animated film-grain texture overlay (pure CSS, no WebGL) |
| `custom-cursor.tsx` | Functional cursor with "View", "Play", "Drag" contextual modes |
| `magnetic-button.tsx` | Buttons that physically pull toward the cursor with elastic easing |
| `fluid-typography.css` | 10-step fluid type scale + text utilities (balance, tabular-nums, kerning) |

---

## How It Works

1. You tell the AI: *"Build me a landing page for X"*
2. The AI reads this system and **stops before writing code**
3. It first defines the **Brand DNA**: colors, typography, spacing, radius, motion weight
4. Only then does it build — using the primitives and respecting every anti-pattern rule
5. The result: a site that looks like it was built by a top creative agency

---

## The "Phase 0" Protocol

Before any code is written, 6 design dimensions must be defined:

| Dimension | Example Choices |
|-----------|----------------|
| **Typography** | Oversized/Editorial or Minimal/Swiss |
| **Color Palette** | `noir` (dark), `warm` (cream), `cold` (blue), `neon` (purple/green) |
| **Grid** | Bento/Asymmetric or Swiss/Rigid |
| **Motion** | Heavy (1.2s Lenis) or Snappy (0.2s ease) |
| **Border Radius** | None (0px) or Soft (8px) or Round (16px) |
| **Spacing** | Tight or Airy |

This prevents the most common AI failure mode: jumping straight into code without a design identity.

---

## What You Can Expect

| Without This System | With This System |
|--------------------|-----------------|
| `bg-blue-500` utility colors | HSL design tokens from a curated palette |
| `text-4xl font-bold` fixed sizes | Fluid type that scales from mobile to 4K |
| Identical cards in a 3-column grid | Asymmetric layouts with visual hierarchy |
| `hover:scale-105` on everything | Subtle border/color shifts, magnetic pull |
| Native browser scroll | Lenis-powered smooth scroll with weight |
| Elements appearing instantly | Scroll-triggered reveals with stagger |
| Default arrow cursor | Contextual cursor that communicates function |
| "Learn More" and "Get Started" | Specific, brand-aware copy |

---

## Compatibility

This system works with any AI coding assistant that reads `.agent` or `.cursor` directories:
- Google Antigravity
- Cursor
- Windsurf
- Claude (via project knowledge)
- Any agent that reads workspace files before generating code

**Tech stack:** Next.js or Astro · Tailwind CSS v4 · GSAP · Lenis · TypeScript

---

*Berezin Design System V2.0 — Built for machines, designed for humans.*
