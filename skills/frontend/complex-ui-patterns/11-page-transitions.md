# 11: Complex Page Transitions (FLIP Techniques)

High-end applications mimic iOS navigation. A user shouldn't see a harsh refresh when clicking a link.

## The Concept of FLIP
FLIP (First, Last, Invert, Play) is an animation technique that calculates the bounding box of an element (like a small product thumbnail) and mathematically transitions it into its final state (a full-page Hero image).

## Implementing View Transitions
Use `framer-motion`'s `<AnimatePresence>` or React 19 / Browsers' native `View Transitions API`.

1.  **Shared Layout IDs:** When transitioning from a grid view to a detail view, wrap the image in a `framer-motion` layout ID:
    `<motion.img layoutId={`product-image-${id}`} />`
2.  **Delay Unmount:** Prevent the old DOM layout from unmounting immediately upon route change until the 500ms `framer-motion` layout shift completes.

**Note on Lenis:** Upon any route change, immediately call `lenis.scrollTo(0, { immediate: true })` before the new page transition starts to avoid rendering the new page halfway down the viewport.
