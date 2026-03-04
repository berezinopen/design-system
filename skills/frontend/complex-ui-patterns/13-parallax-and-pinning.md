# 13: Parallax and GSAP Pinning

Typical CSS `sticky` or background-attachment `fixed` breaks down in high-end smooth scroll environments.

## The Pinning Rule
If you need a section (like an image on the left) to remain static while text scrolls on the right, use GSAP's `ScrollTrigger` with `pin: true`.

1.  Specify the `trigger` element (usually the parent container).
2.  Set `pin: true` on the specific element you want locked on screen.
3.  Define the `end` point dynamically based on the parent's height or the scroll distance `("+=100%")`.
4.  **Absolute Rule:** Set `pinSpacing: true` or `false` carefully. If `true`, GSAP will inject padding to prevent layout collapse when the pin releases.

## Multi-Layer Parallax
For true depth, elements must scroll at different speeds. Do not use generic integer offsets.

The optimal formula in `useGSAP`:
Animate the `yPercent` of an image wrapped inside an `overflow-hidden` container from `-20%` to `20%` as the user scrolls past it. Scrub it to the scroll progress. This creates perfect, lag-free parallax locked to Lenis.
