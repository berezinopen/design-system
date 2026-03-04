# 15: Async Media & Skeleton Loaders

A premium site never displays jagged text shifts or broken image icons while media downloads asynchronously.

## Image Placeholders (The BlurHash Approach)
Never rely solely on React's `loading="lazy"`. 

1. Generate a tiny `blurDataURL` (a 10x10 base64 version of the image) during the Next.js build step or specify solid skeleton placeholders derived from the `brand-dna` color palette (`bg-black/5` in light mode).
2. Add a slow CSS transition to the `opacity` of the main `<img>` from `0 -> 1` that triggers `onLoad`.

## 4K Video Backgrounds
Autoplaying background videos must be treated with precision.
*   **The Mute Rule:** Videos must have the `muted`, `playsInline`, and `loop` attributes to auto-play on iOS.
*   **The Placeholder Rule:** Supply a standard `.jpg` poster image to the `<video>` tag for the crucial 500ms before the initial chunk streams successfully.

```tsx
<div className="relative w-full h-full bg-[hsl(var(--color-bg))] skeleton-pulse">
   <video src="/hero-loop.mp4" autoPlay loop muted playsInline poster="/hero-poster.jpg"
          className="object-cover w-full h-full transition-opacity duration-[2s] opacity-0 onloadeddata="this.classList.remove('opacity-0')"" />
</div>
```
