# 07: Page Preloaders & Curtain Reveals

Awwwards sites do not load blank white pages. They start by actively mounting a preloader before revealing the Hero section.

## Architecture of a Preloader

Your application layout should start tightly hidden, or placed behind an absolutely positioned curtain element (`z-[9999]`).

### The Percentage Loader
For content-heavy sites (images, canvas), display a massive fluid font percentage `00` to `100` in the center of the screen based on document load metrics or simulated GSAP timelines.

### The Curtain Reveal (GSAP)
Once the preloader hits 100%, do not just set `display: none` on it.
*   **Split the screen:** The left half slides `x: -100%`, the right half slides `x: 100%`.
*   **Or Elevate:** The preloader box slides up (`y: -100%`) using an `expo.out` easing curve.
*   **Stagger:** Immediately as the curtain lifts, trigger the `RevealAnimation` of the Hero section's headlines.

**CRITICAL:** Ensure `document.body.style.overflow = 'hidden'` is active while the preloader runs, so the user doesn't scroll prematurely through the hidden layout.
