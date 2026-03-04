# 09: Horizontal Scroll (Scroll-Jacking)

A staple of Awwwards portfolios is the horizontal gallery nested within a vertical scrolling page.

## GSAP ScrollTrigger Setup
To achieve horizontal scrolling that feels natural to the user turning their vertical mouse wheel, use `ScrollTrigger` with `pin: true`.

1.  **The Wrapper:** Create a container that is wide enough to hold all items side-by-side (`w-[300vw]`).
2.  **The Trigger:** Pin the parent container when it hits the top of the viewport.
3.  **The Animation:** Animate the wrapper along the X-axis (`x: -66.6%`) scrubbed perfectly to the vertical scroll progress.

```tsx
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// ...
gsap.to(galleryContent, {
  x: () => -(galleryContent.scrollWidth - window.innerWidth),
  ease: 'none',
  scrollTrigger: {
    trigger: galleryContainer,
    pin: true,
    scrub: 1, // Smooth dampening
    end: () => "+=" + galleryContent.scrollWidth, // Scroll distance = width
  }
})
```

## Lenis Integration
Lenis automatically hands off vertical wheel events to GSAP's horizontal scrub. Do not fight it. Ensure `overflow-x-hidden` is applied to `<body>` to prevent native browser horizontal scrollbars from breaking the illusion.
