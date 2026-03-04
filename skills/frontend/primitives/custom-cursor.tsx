"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

type CursorMode = "default" | "view" | "play" | "drag" | "hidden";

/**
 * CustomCursor — Functional cursor with contextual modes.
 *
 * HOW IT WORKS:
 * Place <CustomCursor /> once in your root layout.
 * Then use data-cursor attributes on any element:
 *
 *   <a data-cursor="view">...</a>     → Cursor expands, shows "View"
 *   <video data-cursor="play">...</video>  → Cursor becomes play icon
 *   <div data-cursor="drag">...</div>  → Cursor shows drag arrows
 *   <div data-cursor="hidden">...</div>  → Cursor hides (for custom interactions)
 *
 * RULES:
 * - Use ONLY when it adds function. Decorative cursors are anti-pattern.
 * - Auto-disabled on touch devices.
 * - Default state: small dot (8px) with subtle lag behind mouse.
 */
export const CustomCursor: React.FC = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLSpanElement>(null);
    const [mode, setMode] = useState<CursorMode>("default");
    const [isTouch, setIsTouch] = useState(false);

    useEffect(() => {
        // Detect touch device
        if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
            setIsTouch(true);
            return;
        }

        const cursor = cursorRef.current;
        if (!cursor) return;

        // Smooth follow with GSAP quickTo
        const xTo = gsap.quickTo(cursor, "left", {
            duration: 0.5,
            ease: "power3.out",
        });
        const yTo = gsap.quickTo(cursor, "top", {
            duration: 0.5,
            ease: "power3.out",
        });

        const handleMouseMove = (e: MouseEvent) => {
            xTo(e.clientX);
            yTo(e.clientY);
        };

        // Detect data-cursor attributes
        const handleMouseOver = (e: MouseEvent) => {
            const target = (e.target as HTMLElement).closest("[data-cursor]");
            if (target) {
                const cursorType = target.getAttribute(
                    "data-cursor"
                ) as CursorMode;
                setMode(cursorType || "default");
            } else {
                setMode("default");
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    // Don't render on touch devices
    if (isTouch) return null;

    const modeConfig: Record<CursorMode, { size: number; text: string; opacity: number }> = {
        default: { size: 8, text: "", opacity: 1 },
        view: { size: 80, text: "View", opacity: 1 },
        play: { size: 80, text: "▶", opacity: 1 },
        drag: { size: 80, text: "⟷", opacity: 1 },
        hidden: { size: 0, text: "", opacity: 0 },
    };

    const config = modeConfig[mode];

    return (
        <>
            <style>{`
                * { cursor: none !important; }
            `}</style>
            <div
                ref={cursorRef}
                className="fixed pointer-events-none z-[9999] flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
                style={{
                    width: config.size,
                    height: config.size,
                    borderRadius: "50%",
                    backgroundColor:
                        mode === "default"
                            ? "hsl(var(--color-text, 0 0% 100%))"
                            : "transparent",
                    border:
                        mode !== "default" && mode !== "hidden"
                            ? "1px solid hsl(var(--color-text, 0 0% 100%))"
                            : "none",
                    opacity: config.opacity,
                    transition:
                        "width 0.3s cubic-bezier(0.16,1,0.3,1), height 0.3s cubic-bezier(0.16,1,0.3,1), background-color 0.3s, border 0.3s, opacity 0.3s",
                    mixBlendMode: mode === "default" ? "difference" : "normal",
                }}
            >
                {config.text && (
                    <span
                        ref={textRef}
                        className="text-[11px] font-mono uppercase tracking-widest"
                        style={{
                            color: "hsl(var(--color-text, 0 0% 100%))",
                        }}
                    >
                        {config.text}
                    </span>
                )}
            </div>
        </>
    );
};
