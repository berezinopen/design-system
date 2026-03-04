# 06: Magnetic "Mega-Cursor" Buttons

The physical 'pull' of a magnetic button separates good design from elite design.

## Implementation Details

Do not use simple `hover:scale` CSS classes. Magnetic buttons require JS calculation to literally follow the mouse pointer within a defined radius.

1.  Use `framer-motion` or GSAP's `quickTo` logic to read the mouse position over the button's bounding box.
2.  Move the button's text/icon element slightly *towards* the cursor position inside the button.
3.  Simultaneously, apply an elastic easing curve to return the element to the center when the mouse leaves.

## Mega-Cursor Takeover
For massive Call to Action buttons (e.g., "Add To Cart"):
*   When the mouse enters the bounding box of the button, the system's external Custom Cursor must vanish (`opacity: 0`).
*   The CTA Button itself shrinks by 10% and maps its `{x, y}` coordinates directly to the mouse, effectively *becoming* the new cursor.
*   Once the mouse leaves the area, the button snaps back to its original position using spring physics, and the normal cursor reappears.
