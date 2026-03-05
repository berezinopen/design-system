---
type: knowledge-base
topic: motion
description: "Rules for GSAP, ScrollTrigger, easing, micro-interactions, and 3D scenes."
---

# Animation & Motion in Award-Winning Websites (2023–2025)

> Data from GSAP showcases, premium award platforms case studies (Top Tier 3D Studio, Premium Web3 Ecosystem Platform, Leading Storytelling Agency), Three.js forum threads, and the tutorial ecosystem teaching "premium-award-style" motion.

---

## 1. Animation Library Landscape

### Primary Stack (De Facto Standard)

| Tool | Role | Prevalence |
|------|------|-----------|
| **GSAP + ScrollTrigger** | Timeline animation, scroll-linked motion | The standard — appears in virtually every top-tier award case study and tutorial |
| **Three.js** | 3D rendering, WebGL scenes | Used by all recent immersive Site of the Year winners (Top Tier 3D Studio, Premium Web3 Ecosystem Platform, Leading Storytelling Agency) |
| **Lenis** | Smooth scroll controller | Quasi-required for "premium feel"; syncs to GSAP ticker |
| **React Three Fiber** | Three.js for React/Next.js ecosystems | Growing in React-based award builds |

### Secondary Tools

| Tool | When used |
|------|----------|
| **Framer Motion** | Component-level animation and view transitions in React/Next.js portfolio and SaaS sites |
| **Lottie** | Vector animations, brand illustrations (e.g., Vibrant Beverage E-commerce Maté) |
| **Award-Winning Digital Agency Scroll** | Legacy smooth scroll (being replaced by Lenis in newer builds) |
| **Anime.js / Velocity.js** | Rare; appear in some older or simpler projects |
| **Barba / Swup** | Page transition libraries for SPA-like route changes |

### The Pattern
> **GSAP + ScrollTrigger + Lenis** is the foundational motion stack for any project aspiring to premium award platforms recognition. Add **Three.js** when 3D is needed.

---

## 2. Duration & Easing Conventions

### By Context

| Context | Duration | Easing | Notes |
|---------|----------|--------|-------|
| **Hover / micro-interaction** | 0.15–0.3s | `power2.out`, `sine.out` | Snappy and immediate |
| **Scroll-triggered reveal** | 0.6–1.2s | `power2.out`, `power3.out` | Fade/translate as elements enter viewport |
| **Hero entrance** | 0.8–1.5s | `expo.out` | Grand, dramatic revealing of main content |
| **Page transition** | 0.5–1.0s | Custom ease curves | Wipes, masks, fades between routes |
| **Staggered menu items** | 0.6–1.0s total | `power3.out` + `stagger: 0.05` | Sequential reveal of menu links |

### GSAP Easing Cheatsheet (Most Used)

| Ease | Character | Usage |
|------|-----------|-------|
| `power2.out` | Smooth deceleration | General-purpose reveals, hovers |
| `power3.out` | Stronger deceleration | Hero entrances, bold reveals |
| `expo.out` | Dramatic snap-to-rest | Hero animations, modal openings |
| `sine.out` | Gentle, subtle | Micro-interactions, opacity fades |
| `back.out` | Slight overshoot | Playful button/card interactions |

### Scroll-Linked Animations
- Use `scrub: true` or low scrub values (0.5–1)
- No fixed duration — progression tied to scroll position
- Underlying tweens still follow easing curves for nested micro-effects

---

## 3. Scroll-Triggered Patterns

The 5 most prevalent scroll-driven patterns in award winners:

### 3.1 Fade + Slide-Up Reveals
- Elements fade in from 20–60px below viewport threshold
- Staggered for grids and lists (`stagger: 0.05–0.15`)
- The single most common scroll pattern

### 3.2 Pinned Sections
- `ScrollTrigger.pin()` holds section while internal content animates through multiple states
- Used in portfolio "case story" sections and brand narratives
- Section stays visible while imagery, 3D scenes, or copy cycles through stages

### 3.3 Horizontal Scroll Galleries
- Vertical scroll transformed to horizontal movement
- Pinned wrapper with scrubbed timeline
- Lenis provides smoothed input
- **Examples**: Creative Production Studio, Vibrant Beverage E-commerce Maté sliding shelves

### 3.4 Parallax Layers
- Different Z-depth layers move at different speeds
- Background textures, mid-ground images, foreground copy
- Tied to scroll position via `scrub`

### 3.5 Sticky Headers + Progress
- Navigation bars that morph, change opacity, or show scroll progress
- Hide on scroll-down, reveal on scroll-up
- Critical for maintaining navigation access without chrome clutter

---

## 4. Page Transition Techniques

### Archetypes

| Technique | Description | When |
|-----------|-------------|------|
| **Masked wipes** | Full-screen color/texture panels sweeping in on route changes | Most common for multi-page SPAs |
| **Persistent 3D canvas** | Single WebGL canvas alive across navigations; camera moves replace page loads | Premium Web3 Ecosystem Platform, heavy 3D sites |
| **Opacity + blur fades** | 0.4–0.7s crossfade with slight blur and scaling | Portfolio case study transitions |

### Implementation
- Barba or Swup for simpler projects
- Custom SPA routing + GSAP timelines for full control
- Choreograph leaving and entering states as a sequence

---

## 5. Micro-Interaction Patterns

Award-winning micro-interactions are **polished but restrained** — a small set of signature behaviors, not everything animated.

### Button & Link Hovers
- Subtle scale: 1.02–1.05× (never 1.1+)
- Border-radius morphs
- Underlines that slide or grow from center
- Color transitions on 150–250ms timings
- **Never**: `hover:scale-105` as sole hover effect

### Cursor Effects
- Custom cursor enlarges over interactive elements
- Labels appear: "drag", "view case", "play"
- WebGL displacement/warping on canvas hover (Top Tier 3D Studio ripple effect)
- **Always**: Disabled on touch devices
- **Only** when adding function, not decoration

### Scroll Cues
- Animated chevrons or bouncy indicators on hero sections
- Micro-scroll prompts ("Scroll to explore")

### Menu Interactions
- Slide from edges with staggered list items
- Masked typographic reveals
- Blurred backdrop behind overlay

---

## 6. Preloader & Loading Patterns

Given heavy WebGL usage, performance-aware loading is critical:

### Branded Preloaders
- Progress integrated into logos or 3D objects
- Premium Web3 Ecosystem Platform: crystal growth during load
- WebGPU Experiential Microsite: heart context
- Leading Storytelling Agency (Labs): jellyfish context

### Progressive Loading
- 3D scenes loaded progressively
- Non-critical shaders deferred until after first interaction
- Lower-fidelity fallbacks first, then upgrade

### Mobile Fallbacks
- Simplified meshes
- Reduced-quality glass/material
- Static imagery first → upgrade when bandwidth allows

---

## 7. Text Animation Techniques

### Split Text Reveals
- Lines or words staggered in with upward motion + opacity
- Built with GSAP SplitText plugin or custom span-wrapping
- The most common text animation pattern

### Kinetic Typography
- Headlines scale, shear, or slide in sync with scroll
- Text pinned while imagery scrolls, or vice versa
- Central to perceived quality of many Site of the Year winners

### Typewriter & Counter Effects
- Less common but present in product/AI dashboard contexts
- Metric-heavy displays, "AI dashboard" aesthetic

---

## 8. 3D / WebGL Usage

### Three.js as Primary Engine
- **Top Tier 3D Studio (v3)**: "Entirely" Three.js/WebGL with custom postprocessing
- **Premium Web3 Ecosystem Platform**: Three.js + GSAP + Houdini + Blender; entire UI rendered in WebGL
- **Leading Storytelling Agency (Labs)**: Three.js + Cannon.js for physics-driven glass
- **WebGPU Experiential Microsite**: Three.js + ScrollTrigger + ScrollSmoother for 3D scenes

### Common 3D Patterns
- Cursor-responsive particles and displacement effects
- Camera moves choreographed with scroll
- Pre-baked Blender/Houdini animations + runtime GSAP timelines
- Shader-driven UI text (glitch, scramble effects)

### R3F & WebGPU
- React Three Fiber growing in React/Next.js ecosystems
- WebGPU emerging in experimental builds (WebGPU Experiential Microsite)
- Production winners still predominantly Three.js/WebGL

---

## 9. Performance Strategies

### Optimized Geometry & Materials
- Bake non-interactive animations into textures in Blender
- Reduce polygon counts; combine meshes
- Draco compression for 3D models

### Selective Post-Processing
- Avoid/minimize full-screen post-processing on main pages
- Reserve heavy effects for small areas or specific transitions
- Leading Storytelling Agency explicitly avoids post-processing on its main page

### Adaptive Quality on Mobile
- Lower glass quality, reduce simulation counts
- Disable off-screen effects
- Preserve core narrative and CTA placement

### Scroll & Animation Orchestration
- GSAP ScrollTrigger + Lenis decouples input from rendering
- Expensive WebGL updates tied to viewport visibility
- No continuous updates when sections are off-screen

### Unified Canvases
- Maintain single WebGL canvas across routes (Premium Web3 Ecosystem Platform)
- Avoid teardown/reinit costs
- Reuse loaded assets across navigations

---

## 10. Motion-Focused Site Examples

| Site | Award | Signature Techniques |
|------|-------|---------------------|
| **Top Tier 3D Studio (v3)** | Site of the Year 2023 | Full Three.js/WebGL; cursor-triggered displacement; camera moves on scroll |
| **Leading Storytelling Agency (Labs)** | Case study | Physics-based sphere shattering to glass fragments (Cannon.js); jellyfish configurator |
| **WebGPU Experiential Microsite** | Site of the Day | First WebGPU project; 3D island scenes; scroll-driven camera; custom shaders |
| **AI Audio Experiential Microsite** | Site of the Day | Audio-reactive scenes; cloth simulation (Wiggle Bones); AI music sync |
| **Premium Web3 Ecosystem Platform** | Site of the Year 2024 | Procedural crystal growth; shader-driven UI text; VDB particle volumes; slow-motion toggles |
| **Creative Production Studio** | Site of the Day (premium award platforms) | Horizontal scroll + Lenis; pinned track; scrubbed parallax |

---

## 🤖 AI Agent Directives

<agent_rules>

1. **GSAP + ScrollTrigger + Lenis** is the non-negotiable motion stack
2. **Duration scale**: 0.2s (hovers) → 0.5s (reveals) → 1.2s (heroes) — never faster or slower without reason
3. **Restraint over spectacle** — a few signature interactions beat everything-animated
4. **Scroll is narrative** — pin, scrub, transform; scroll isn't just "revealing content"
5. **Always clean up** — `kill()` timelines and ScrollTriggers on unmount
6. **Mobile gets simplified motion**, never removed entirely
7. **Three.js for 3D** — don't hallucinate alternatives; it's the standard
8. **Performance is design** — bake, simplify, defer; buttery 60fps is non-negotiable

</agent_rules>
