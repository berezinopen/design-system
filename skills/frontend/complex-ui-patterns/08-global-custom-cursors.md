# 08: Global Custom Cursors

Native cursors (`pointer`) destroy the immersion of a heavily designed aesthetic, especially brutualist or minimalist sites.

## The Architecture
A custom cursor is a `fixed` positioning div that perfectly trails the user's mouse `{x,y}` coordinates.
*   It must be the absolute highest index layer (`z-[9999]` or `z-cursor`).
*   It must have `pointer-events-none` so it doesn't block click events on the actual page elements below it.

## Contextual States
A premium cursor changes its shape based on what it is hovering over:
1.  **Default:** A small dot (mix-blend-mode difference).
2.  **Hovering a Link:** Scales up to a ring `scale(1.5)`.
3.  **Hovering a Carousel:** Becomes a pill shape containing the text "Drag" or "< >".
4.  **Hovering a Video:** Expands into a large circle containing a "Play" icon.

Use a global Context API to pass the "hover state" from individual components up to the main Cursor component in `layout.tsx`.
