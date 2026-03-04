# 03: Modals and Side Panels (Drawers)

High-end modals and panels must feel deeply integrated into the aesthetic, not like native browser alerts.

## The Glassmorphism Backdrop
Never use solid `#000` for a modal backdrop. Always use a blurred overlay to keep the site context visible but out of focus.

```tsx
<div className="fixed inset-0 z-overlay bg-black/40 backdrop-blur-sm">
   {/* Modal content sits here at z-modal */}
</div>
```

## Lenis Scroll Locking (Critical)
When a modal opens, the background page MUST STOP scrolling.

1. **For full takeover panels:** Use `lenis.stop()` via the `useLenis` hook.
2. **For scrollable modals:** You must add the `data-lenis-prevent` attribute to the internal scrolling `div` of the modal, otherwise Lenis will scroll the body underneath it.

## Entry Animations (GSAP)
Modals should not instantly pop (`display: block`). 
*   **Drawers** slide in from the right (`x: '100%' -> x: 0`).
*   **Modals** scale up slightly (`scale: 0.95 -> 1`) while the opacity fades in.
