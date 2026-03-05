# ⛔ Berezin Design System V3.0 — Anti-Patterns

> **Read this before EVERY output.** If any of these patterns appear in your generated code, you have failed the quality bar.

---

## 1. Layout Anti-Patterns

| ❌ Never | ✅ Instead |
|----------|-----------|
| 3 identical cards in `grid-cols-3` | Vary card sizes: one `col-span-2`, others `col-span-1`. Break symmetry. |
| `flex items-center justify-center` as default wrapper | Ask: does this content need centering? Use `grid` with `place-items` or asymmetric flex. |
| Identical padding on all sections | Vary vertical rhythm: hero gets `py-[clamp(6rem,15vh,12rem)]`, content sections get less. |
| Full-width sections with uniform `max-w-7xl` | Mix `max-w-4xl` (tight text) with `max-w-[1400px]` (wide media) within the same page. |
| Every section has a centered `h2` + `p` header | Break the pattern: some sections lead with the content, title comes second or sits on the side. |

---

## 2. Border-Radius Anti-Patterns

| ❌ Never | ✅ Instead |
|----------|-----------|
| `rounded-lg` or `rounded-3xl` without justification | Use radius from `brand-dna.ts`. Brutalist = `0px`. Premium minimal = `2-4px`. Glass = `12-16px`. |
| Same radius on every element | Cards, buttons, and images should have intentionally different radii. |
| `rounded-full` on avatars by default | Squared or subtly rounded avatars feel more editorial. Full circle = social media. |

---

## 3. Shadow Anti-Patterns

| ❌ Never | ✅ Instead |
|----------|-----------|
| `shadow-md`, `shadow-lg`, `shadow-xl` | Use `border` (1px subtle), or craft custom `box-shadow` with brand colors: `0 0 0 1px hsl(var(--border))` |
| Shadow as the only depth indicator | Use `border`, `background` shift, or `translate` on hover instead. |
| Drop shadows on dark backgrounds | Shadows are invisible on dark. Use glow: `box-shadow: 0 0 30px hsl(var(--accent) / 0.15)` |

---

## 4. Color Anti-Patterns

| ❌ Never | ✅ Instead |
|----------|-----------|
| Tailwind utility colors: `bg-blue-500`, `text-gray-600` | All colors from design tokens: `bg-[hsl(var(--surface))]`, `text-[hsl(var(--text-muted))]`. |
| Pure black `#000000` for backgrounds | Use warm blacks: `#0a0a0a`, `#0d0d0d`, `#111111`. Pure black feels dead. |
| Pure white `#ffffff` for text on dark | Use off-whites: `#f5f5f5`, `#e8e8e8`, `#fafaf9`. Pure white is harsh. |
| More than 3 colors in the palette | Stick to: 1 background + 1 text + 1 accent. Everything else is opacity variations. |
| Colored backgrounds on cards | Cards should be subtle: `surface` or `surface + 2%` lighter. Never `bg-blue-50`. |

---

## 5. Hover & Interaction Anti-Patterns

| ❌ Never | ✅ Instead |
|----------|-----------|
| `hover:scale-105` or `hover:scale-[1.02]` | Scale the **inner element** (image inside card), not the card itself. Or change border/color. |
| `hover:bg-gray-100` | Shift border color to accent, or reveal a hidden element (arrow, underline). |
| `transition-all` | Be explicit: `transition-colors duration-300` or `transition-transform duration-500`. `all` causes jank. |
| No `transition` on hover changes | Every hover state needs `transition`. Instant hover = amateur. |
| Hover effects on mobile | Detect touch and disable hover states. They cause "stuck" states on mobile. |

---

## 6. Typography Anti-Patterns

| ❌ Never | ✅ Instead |
|----------|-----------|
| Tailwind `text-xl`, `text-2xl`, `text-4xl` | Use `text-fluid-*` classes from `fluid-typography.css`. Never fixed font sizes. |
| Default `font-sans` / system font | Self-host `.woff2` files. Use Google Fonts only during prototyping. |
| Same font weight everywhere | Headlines: 700-900. Body: 400. Labels: 500. Feature numbers: 300 (light). Create contrast. |
| Centered text everywhere | Left-align body text. Center only short headlines or CTAs. Centered paragraphs are hard to read. |
| No `letter-spacing` on headings | Oversized text needs negative tracking (`-0.02em` to `-0.05em`). Labels need positive tracking (`0.05em` to `0.1em`). |
| Line breaks at random positions | Use `text-balance` on headlines, `text-pretty` on paragraphs. |

---

## 7. Copywriting Anti-Patterns

| ❌ Never | ✅ Instead |
|----------|-----------|
| "Learn More" | "See the craft", "Explore the process", "View the collection" — specific to what they'll see. |
| "Get Started" | "Start building", "Begin your project", "Create your first ___" — specific to the action. |
| "Features" as section title | Name the benefit: "Why teams ship 2x faster" or "Built for precision". |
| "Our Services" | "What we build", "The disciplines", or skip the heading entirely. |
| Lorem ipsum or placeholder text | Write real microcopy. If you don't know the brand, invent compelling placeholder that demonstrates tone. |
| Exclamation marks in CTAs | Professional tone. No "Sign Up Now!" — instead "Start free" or "Request access". |

---

## 8. Structural Anti-Patterns

| ❌ Never | ✅ Instead |
|----------|-----------|
| Every page starts with Hero → Features → CTA → Footer | Surprise the viewer. Start with a statement, scroll into content, reveal navigation contextually. |
| `<section>` without clear purpose | Every section must answer: what does the user learn or feel here? If you can't answer, remove it. |
| Header always at the top as horizontal navbar | Consider: side nav, hidden/reveal nav, contextual nav that appears on scroll, no nav at all. |
| Footer with 4 columns of links | Footer can be minimal: one line of links + copyright. Or editorial: final brand statement. |

---

## 9. Performance Anti-Patterns

| ❌ Never | ✅ Instead |
|----------|-----------|
| JPEG/PNG images | AVIF with WebP fallback. Always. |
| `loading="lazy"` missing on below-fold images | Every `<img>` below the fold gets `loading="lazy"`. Hero image: `loading="eager"` + `fetchpriority="high"`. |
| Google Fonts `<link>` in `<head>` | Self-host with `next/font` or manual `.woff2` + `font-display: swap`. |
| Heavy GSAP timelines without `kill()` | Always cleanup: `useEffect` returns `() => { timeline.kill(); ScrollTrigger.kill(); }` |

---

## 10. Z-Index & Fixed Layout Anti-Patterns

| ❌ Never | ✅ Instead |
|----------|-----------|
| Arbitrary numerical values: `z-10`, `z-50`, `z-[9999]` | Use semantic tokens from `tailwind.config.ts` (e.g., `z-nav`, `z-fixed`, `z-modal`, `z-noise`). Never guess a layer. |
| `<div className="fixed">` inside Lenis `ScrollProvider` | Fixed UI sidebars or FABs must sit *outside* the main Lenis wrapper in `layout.tsx` to prevent scroll-jacking bugs. |
| Modal background that scrolls the page | Use `data-lenis-prevent` on the modal's internal scroll container, or explicitly call `lenis.stop()` for full-screen takeovers. |
| Invisible unclickable buttons (`pointer-events` bugs) | Any layer above `z-nav` (like `z-noise` or `z-overlay`) MUST have `pointer-events-none` tightly managed to prevent interaction blocking. |

