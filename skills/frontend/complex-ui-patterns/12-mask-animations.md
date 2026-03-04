# 12: Mask Animations & Clipping Paths

Masking is the hallmark of modern Awwwards editorial sites. It reveals content systematically rather than just fading it in.

## CSS `clip-path` Reveals (The Standard)
Fading an image is cheap. Slicing it into view implies physical weight.

Instead of GSAP `opacity: 0 -> 1`, animate the `clip-path` inset:
```tsx
gsap.fromTo(imgRef.current,
  { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }, // Hidden at bottom
  { clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)", duration: 1.5, ease: "power4.inOut" }
)
```

## Cursor Positional Masking
A common premium effect is "scratching away" an image to reveal another beneath it using the mouse cursor.

1.  Stack two identical image containers. The top one is grayscale, the bottom one is color.
2.  Apply `mask-image` (a radial gradient SVG) to the top container.
3.  Update the `mask-position` coordinates in real-time derived from the user's mouse `{x, y}` coordinates.
4.  Apply a slight `gsap.quickTo` easing to the mask position to simulate fluid physics lagging behind the cursor.
