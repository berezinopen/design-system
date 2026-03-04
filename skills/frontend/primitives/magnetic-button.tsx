"use client";

import React, { useEffect, useRef, forwardRef } from "react";
import gsap from "gsap";

interface MagneticButtonProps {
    children: React.ReactNode;
    pull?: number;          // Pull strength: 0 to 1 (default 0.3)
    proximity?: number;     // Proximity activation radius in px (default 40)
    className?: string;
}

/**
 * MagneticButton — Element that physically pulls toward the cursor.
 *
 * USAGE:
 *   <MagneticButton pull={0.3}>
 *     <button className="...">Click me</button>
 *   </MagneticButton>
 *
 * RULES:
 * - Use only on primary CTAs and nav items. Not on every element.
 * - Pull should be subtle (0.2–0.4). Higher values feel broken.
 * - Automatically disabled on touch devices.
 */
const MagneticButton = forwardRef<HTMLDivElement, MagneticButtonProps>(
    ({ children, pull = 0.3, proximity = 40, className = '' }, externalRef) => {
        const innerRef = useRef<HTMLDivElement>(null);
        const ref = (externalRef as React.RefObject<HTMLDivElement>) || innerRef;

        useEffect(() => {
            const element = ref.current;
            if (!element) return;

            // Disable on touch devices
            if ('ontouchstart' in window) return;

            const xTo = gsap.quickTo(element, "x", {
                duration: 1,
                ease: "elastic.out(1, 0.3)",
            });
            const yTo = gsap.quickTo(element, "y", {
                duration: 1,
                ease: "elastic.out(1, 0.3)",
            });

            const handleMouseMove = (e: MouseEvent) => {
                const { clientX, clientY } = e;
                const rect = element.getBoundingClientRect();

                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;

                // Check proximity — activate before cursor reaches element
                const distX = clientX - centerX;
                const distY = clientY - centerY;
                const distance = Math.sqrt(distX * distX + distY * distY);
                const activationRadius = Math.max(rect.width, rect.height) / 2 + proximity;

                if (distance < activationRadius) {
                    xTo(distX * pull);
                    yTo(distY * pull);
                } else {
                    xTo(0);
                    yTo(0);
                }
            };

            const handleMouseLeave = () => {
                xTo(0);
                yTo(0);
            };

            // Listen on window for proximity detection (not just the element)
            window.addEventListener("mousemove", handleMouseMove);
            element.addEventListener("mouseleave", handleMouseLeave);

            return () => {
                window.removeEventListener("mousemove", handleMouseMove);
                element.removeEventListener("mouseleave", handleMouseLeave);
            };
        }, [pull, proximity, ref]);

        return (
            <div ref={innerRef} className={`inline-block ${className}`}>
                {children}
            </div>
        );
    }
);

MagneticButton.displayName = "MagneticButton";

export default MagneticButton;
