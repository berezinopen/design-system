# Z-Index Hierarchy & Layout Architecture (Berezin V2.0)

When moving beyond simple scroll pages into complex applications (modals, floating LLMs, noise overlays, full-screen menus), arbitrary z-indexes (`z-10`, `z-50`, `z-[9999]`) destroy performance and maintainability. 

Every high-end "Awwwards-tier" application must adhere to a strict Z-Scale codified in `tailwind.config.ts`.

## 1. The Definitive Z-Scale

Do not use Tailwind's default `z-10` to `z-50`. Instead, define semantic layers in your configuration.

```typescript
// tailwind.config.ts (Theme extension)
extend: {
  zIndex: {
    'behind': '-1',
    'base': '0',        // Main document flow
    'content': '10',    // Elevated cards, internal components
    'nav': '50',        // Sticky headers/footers
    'fixed': '100',     // Floating Action Buttons (FAB), LLM Widgets
    'overlay': '200',   // Backdrops
    'modal': '300',     // Popups, Drawers, Lightboxes
    'toast': '400',     // Notifications
    'noise': '500',     // Universal texture filter (MUST sit on top of EVERYTHING)
    'cursor': '9999',   // Custom GSAP Cursor (if used)
  }
}
```

### Usage Rule:
Never type `z-50` or `z-10`. Always type `z-fixed`, `z-modal`, or `z-noise`. If a component doesn't fit a semantic layer, your architecture is flawed.

## 2. Fixed UI Integration with Lenis

Lenis handles `position: fixed` and `position: sticky` superbly *if placed correctly in the DOM*.

**Anti-Pattern:** Placing fixed elements *inside* an animated GSAP wrapper or a scaled container.
**Solution:** Fixed UI (like sidebars or FABs) must be direct children of the `<body>` or the main `<SmoothScrollProvider>`, never nested deep within layout sections.

```tsx
// ✅ Correct DOM Structure for Fixed Elements
export default function Layout({ children }) {
  return (
    <body>
      <NoiseOverlay className="fixed inset-0 z-noise pointer-events-none" />
      <CustomCursor className="fixed z-cursor pointer-events-none" />
      
      <main className="relative z-base">
        <Header className="sticky top-0 z-nav" />
        
        {/* Lenis Content */}
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </main>

      {/* Fixed UI outside the scroll flow */}
      <FloatingLLMWidget className="fixed bottom-6 right-6 z-fixed" />
    </body>
  )
}
```

## 3. Modals and Scroll Locking (Lenis Specific)

The biggest bug in premium frontends happens when a Modal opens, but the user can still scroll the background page using their mouse wheel.

**How to handle Modals with Lenis:**

1. **The Native Way (`data-lenis-prevent`):** 
   If your Modal has internal scrolling content, you *must* add the `data-lenis-prevent` attribute to the scrollable container inside the modal.
   ```tsx
   <div className="fixed inset-0 z-modal bg-black/50" backdrop>
     <div className="h-[50vh] overflow-y-auto" data-lenis-prevent>
        {/* Scrollable content here */}
     </div>
   </div>
   ```

2. **The Programmatic Way (Preferred for Full-Screen Modals):**
   When a full-screen drawer or modal opens, pause Lenis entirely to prevent background jank.
   ```tsx
   import { useLenis } from 'lenis/react'
   
   // Inside your Modal Component
   const lenis = useLenis()
   
   useEffect(() => {
     if (isOpen) {
       lenis?.stop()
       document.body.style.overflow = 'hidden' // Fallback
     } else {
       lenis?.start()
       document.body.style.overflow = ''
     }
   }, [isOpen, lenis])
   ```

## 4. Interaction Stacking Contexts

**The Pointer-Events Rule:**
Any layer above `z-nav` (like `z-noise` or `z-overlay`) MUST have `pointer-events-none` tightly managed.
*   Noise: Always `pointer-events-none`.
*   Overlay: `pointer-events-auto` only when active.

If you cannot click a button, 99% of the time an invisible `z-index` div (like a page transition wrapper or noise layer) is missing `pointer-events-none`.
