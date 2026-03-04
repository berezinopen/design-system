# 10: WebGL & Three.js Canvas Management

WebGL provides unparalleled 3D rendering but is computationally expensive and memory intensive. 

## The Absolute Rules for 3D

1.  **Never render WebGL globally.** The `<Canvas>` element (from `@react-three/fiber`) should only be mounted in the specific Hero or Feature section where it is needed.
2.  **Fallback Background:** The canvas takes a moment to initialize. Always provide a CSS fallback background (`bg-[hsl(var(--color-bg))]`) to prevent the dreaded white flash.
3.  **Responsiveness and DPI:** Lock the pixel ratio to prevent performance collapse on high-end mobile devices: `<Canvas dpr={[1, 2]}>`.

## Layering the Canvas In The Z-Scale
If the 3D element acts as a background for the whole page (e.g., floating particles behind text):
*   Position the `<Canvas>` wrapper as `fixed inset-0 z-behind pointer-events-none`.
*   Let Lenis scroll the regular DOM elements over the top in the `z-base` layer.

If the 3D element is interactive (e.g., spinning a shoe model):
*   Ensure it sits at `z-content`.
*   Suspend Lenis scroll globally while the user is actively "dragging" or rotating the object.
