# 04: Floating Action Dock (Godly Style)

The centered pill-shaped dock at the bottom of the screen is a hallmark of premium portfolios and SaaS landing pages.

## Layout & Positioning
The dock must sit at `z-fixed` to ensure it hovers over all Lenis scrolling content.

```tsx
<div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-fixed">
   <nav className="flex items-center gap-2 p-2 bg-[hsl(var(--color-bg))/80] backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
      {/* Dock Items */}
   </nav>
</div>
```

## OS X Dock Micro-interactions
Floating docks require interaction weight. When a user hovers over an icon (e.g., Share, Phone, X/Twitter):

1.  **The Target Hover:** The hovered icon scales up (`scale: 1.2`).
2.  **The Neighbor Push:** The icons immediately adjacent to the hovered icon scale up slightly (`scale: 1.1`) and physically push away to create space.

This is best achieved mathematically via GSAP tracking cursor proximity, or through advanced CSS sibling selectors (e.g., `&:hover + *`).

## Contextual Visbility
Like the AI widget, the dock should slide down out of view (`translate-y-[150%]`) when the user is aggressively scrolling down (consuming content), and slide back up when they scroll up or reach the bottom of the page.
