"use client";

import { ReactNode, useEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * SmoothScrollProvider — Lenis + GSAP ScrollTrigger sync.
 *
 * WHY THIS EXISTS:
 * Without syncing Lenis to GSAP's ticker, ScrollTrigger animations "jump" because
 * Lenis reports a different scroll position than what GSAP expects. This provider
 * guarantees both systems share the same RAF loop and scroll state.
 *
 * RULE: This MUST wrap your root layout. No exceptions.
 */


interface SmoothScrollProviderProps {
    children: ReactNode;
}

export const SmoothScrollProvider = ({ children }: SmoothScrollProviderProps) => {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        // 1. Initialize Lenis
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            touchMultiplier: 2,
        });
        lenisRef.current = lenis;

        // 2. Sync Lenis scroll to ScrollTrigger
        lenis.on("scroll", ScrollTrigger.update);

        // 3. Connect GSAP Ticker to Lenis
        // This ensures animations and scroll are perfectly synced on the same requestAnimationFrame
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        // 4. Disable GSAP's native lag smoothing to prevent stutter
        gsap.ticker.lagSmoothing(0);

        return () => {
            // Cleanup
            gsap.ticker.remove(lenis.raf);
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
};
