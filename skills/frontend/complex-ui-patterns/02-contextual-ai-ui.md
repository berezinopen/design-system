# Contextual UI & LLM Widget Integration (Berezin V2.0)

Modern premium websites integrate AI and contextual helper widgets (Floating Action Buttons - FABs) without breaking the aesthetic or distracting the user.

## 1. LLM / AI Widget Placement (The Z-Axis)

An AI assistant should feel like a native part of the "glass" layer of the site.

*   **Default State:** A subtle, magnetic button (FAB) fixed in the bottom-right corner (`z-fixed`).
*   **Active State:** Expands into a Glassmorphism panel.

### The Glassmorphism Recipe for Panels
Never use solid opaque colors for floating UI. They block the premium background (images, noise, scroll content). They must be translucent.

```tsx
// The perfect glass panel utility for LLM Widgets
className="bg-[hsl(var(--color-bg))/80] backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.1)]"
// Dark Mode variant:
className="bg-black/50 backdrop-blur-2xl border border-white/5 shadow-2xl"
```

## 2. Micro-Interactions for Floating UI

Do not just `display: block` or `opacity: 1` a floating UI. It must physically "enter" the space.

**The "Scale & Blur" Reveal (GSAP / Framer Motion):**
When the user clicks the AI FAB, the chat panel should not just slide up. It should scale up slightly (0.95 -> 1) while fading in, giving it physical weight.

```tsx
// Conceptual GSAP animation for opening the LLM Panel
gsap.fromTo(panelRef.current, 
  { 
    opacity: 0, 
    y: 20, 
    scale: 0.95,
    filter: 'blur(10px)' 
  }, 
  { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    filter: 'blur(0px)',
    duration: 0.5, 
    ease: 'power3.out' 
  }
)
```

## 3. Contextual Awareness (The "Smart" UI)

A premium feature of AI UI is avoiding the "Always On" distraction. 

**Scroll-Driven Visibility:**
*   Hide the FAB (`translate-y-[150%]`) when the user is scrolling *down* (they are reading/consuming content).
*   Reveal the FAB (`translate-y-0`) when the user scrolls *up* (they are looking for navigation or help).

**Implementation via Lenis Scroll Event:**
```tsx
import { useLenis } from 'lenis/react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

export function ContextualFAB() {
  const [isHidden, setIsHidden] = useState(false)
  
  useLenis(({ direction, velocity }) => {
    // Hide if scrolling down fast, show if scrolling up
    if (direction === 1 && velocity > 0.5) {
      setIsHidden(true)
    } else if (direction === -1) {
      setIsHidden(false)
    }
  })

  return (
    <button className={cn(
      "fixed bottom-6 right-6 z-fixed transition-transform duration-500 ease-out",
      isHidden ? "translate-y-[150%]" : "translate-y-0"
    )}>
      {/* AI Icon */}
    </button>
  )
}
```

## 4. Contextual Content Prompts

Instead of an empty chat window, the LLM should read the DOM. If the user clicks the AI button while viewing the "Pricing" section, the LLM's initial prompts should dynamically change.

**Architecture:**
1.  Wrap sections in `<section data-context="pricing">`.
2.  Use an `IntersectionObserver` to track the currently visible context.
3.  Pass this context to the LLM Widget state to alter its default introductory message.
