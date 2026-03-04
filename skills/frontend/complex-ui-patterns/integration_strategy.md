# Integration Strategy: Berezin Design System V2.0 

## The Problem
We have advanced rules for Z-Index, Modals, and LLM UI in the `advance` folder. If we randomly paste them into `SKILL.md`, the document becomes too long. LLM agents will suffer from *context fatigue* and start ignoring rules, or worse, apply heavy Z-index management to simple static landing pages where it's not needed.

## The Goal
1. The LLM must know *when* to use these advanced rules (Frictionless context switching).
2. The rules must be physically segregated so they are only read when the context demands it.

## The Proposed Architecture

Instead of bloating `SKILL.md`, we transform it into a **Router**.

### 1. The Core `SKILL.md` (The Router)
We update the main `SKILL.md` file to act as the central nervous system. We add a new trigger section at the top:

```markdown
> [!IMPORTANT]
> **CONTEXTUAL SUB-ROUTINES (Read only when applicable)**
> Beyond the core aesthetic, if the user requests specific complex features, you MUST read the corresponding architecture file before writing code:
> 
> - If building **Navigation, AI Assistants, Modals, or Floating Buttons**: Read `./advance/01-z-index-and-layout.md`
> - If building **Contextual AI, Chat Widgets, or Glassmorphism UI**: Read `./advance/02-contextual-ai-ui.md`
```

### 2. Updating `anti-patterns.md`
We add a strict new section to the existing anti-patterns file to create a hard boundary against bad Z-index habits:

```markdown
## 10. Z-Index & Fixed Layout Anti-Patterns
| ❌ Never | ✅ Instead |
|----------|-----------|
| `z-10`, `z-50`, `z-[9999]` | Use semantic tokens from `tailwind.config.ts` (e.g., `z-nav`, `z-fixed`, `z-modal`). |
| `<div className="fixed">` inside Lenis `ScrollProvider` | Fixed UI sidebars/FABs must sit *outside* the main Lenis wrapper in `layout.tsx`. |
| Modal background scrolls the page | Use `data-lenis-prevent` on the modal's internal scroll container, or `lenis.stop()` for full-screen takeovers. |
```

### 3. Creating the Missing Primitives
We must physically create the `tailwind.config.ts` blueprint (or modify `brand-dna.ts`) inside the agent folder so the LLM doesn't have to guess the Z-Scale.

We need to add to `.agent/skills/frontend/primitives/`:
- `tailwind.config.ts` (with the predefined Z-scale extension)
- `modal-wrapper.tsx` (a boilerplate component that automatically handles `lenis.stop()` and `lenis.start()`)

## Why this works (The "No BS" reason)
1. **Token Efficiency:** The LLM doesn't read 3000 words on Modals if the user just asks for a simple landing page.
2. **Deterministic Output:** By creating the `modal-wrapper.tsx` primitive, the LLM just imports it. It physically cannot make the mistake of forgetting to halt the scroll wheel.
3. **Scalability:** Tomorrow, if you want to add WebGL/Three.js rules, you just add `03-webgl-canvas.md` to the index.
