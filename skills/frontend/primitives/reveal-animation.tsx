"use client";

import React, { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface RevealAnimationProps {
    children: React.ReactNode;
    className?: string;
    /** Animation direction: 'up' | 'down' | 'left' | 'right' | 'fade' */
    direction?: "up" | "down" | "left" | "right" | "fade";
    /** Delay in seconds */
    delay?: number;
    /** Duration in seconds */
    duration?: number;
    /** Distance in pixels */
    distance?: number;
    /** Stagger children by this many seconds */
    stagger?: number;
    /** If true, animation scrubs with scroll instead of triggering once */
    scrub?: boolean;
    /** How much of the element must be visible to trigger (0-1) */
    threshold?: number;
}

/**
 * RevealAnimation — GSAP ScrollTrigger wrapper for scroll-triggered reveals.
 *
 * USAGE:
 *   <RevealAnimation direction="up" stagger={0.1}>
 *     <Card />
 *     <Card />
 *     <Card />
 *   </RevealAnimation>
 *
 * For single elements:
 *   <RevealAnimation direction="up">
 *     <h2>Section Title</h2>
 *   </RevealAnimation>
 *
 * RULES:
 * - Use on EVERY section entry. Sections that "pop" into existence feel amateur.
 * - Default direction is "up" — the most natural scroll-triggered motion.
 * - Use stagger for lists/grids to create cascading reveal.
 * - Use scrub={true} for parallax-like effects (hero sections).
 */
export const RevealAnimation: React.FC<RevealAnimationProps> = ({
    children,
    className = "",
    direction = "up",
    delay = 0,
    duration = 0.8,
    distance = 40,
    stagger = 0,
    scrub = false,
    threshold = 0.2,
}) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const getFromVars = useCallback(() => {
        const base = { opacity: 0 };
        switch (direction) {
            case "up":
                return { ...base, y: distance };
            case "down":
                return { ...base, y: -distance };
            case "left":
                return { ...base, x: distance };
            case "right":
                return { ...base, x: -distance };
            case "fade":
                return base;
            default:
                return { ...base, y: distance };
        }
    }, [direction, distance]);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const targets =
            stagger > 0 ? Array.from(container.children) : [container];

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: `top ${100 - threshold * 100}%`,
                end: scrub ? "bottom top" : undefined,
                scrub: scrub ? 1 : false,
                once: !scrub,
            },
        });

        tl.from(targets, {
            ...getFromVars(),
            duration,
            delay,
            stagger: stagger > 0 ? stagger : undefined,
            ease: "power3.out",
            clearProps: scrub ? undefined : "all",
        });

        return () => {
            tl.kill();
            tl.scrollTrigger?.kill();
        };
    }, [direction, delay, duration, distance, stagger, scrub, threshold, getFromVars]);

    return (
        <div ref={containerRef} className={className}>
            {children}
        </div>
    );
};
