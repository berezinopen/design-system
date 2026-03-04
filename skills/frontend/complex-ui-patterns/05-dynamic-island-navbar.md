# 05: Dynamic Island Navbar

Instead of a generic 100vw wide header stuck to the top of the browser, premium sites use responsive, floating navbars.

## The Two States of the Island

### State 1: Top of Page
When `window.scrollY === 0`, the navbar looks like a standard transparent header spanning the layout grid.

### State 2: Scrolling (The Island)
As the user scrolls down, the navbar detaches from the edges.
1. Its width shrinks (e.g., to `max-w-xl`).
2. Its border radius becomes fully rounded (`rounded-full`).
3. Its background shifts from transparent to Glassmorphism (`bg-[hsl(var(--color-bg))/80] backdrop-blur-md`).
4. Its position becomes strictly fixed (`z-nav`).

## GSAP Implementation
Do not use CSS transitions for this if possible; use GSAP `ScrollTrigger` mapped to the first 100px of scroll to fluently morph the navbar from State 1 to State 2 via scrubbing.
