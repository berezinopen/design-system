# 14: Kinetic Typography (Marquee)

Scrolling text banners are crucial for breaking up vertical layouts and establishing a brutalist or high-fashion aesthetic.

## The Architecture
A Marquee should never be powered by simple CSS `@keyframes` manipulating `margin-left`. This causes extreme jank on 120Hz monitors.

### The Infinite Loop Trick
1. Clone the exact text node twice within a hidden overflow container.
2. Use GSAP to animate the container's `xPercent` from `0` to `-100`.
3. Set `repeat: -1` and `ease: 'none'`.
4. **The Magic Hacking:** Because step 2 ends exactly where the first cloned node began, the loop is invisible to the human eye.

### Interactive Velocity (The Awwwards Touch)
A Godly marquee reacts to user behavior.
When the user spins their scroll wheel faster, modify the timeline's `timeScale()` dynamically to match the scroll velocity, returning it to baseline `1` using a spring interpolation (via React `useSpring` passing values to GSAP).
