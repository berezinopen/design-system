/**
 * BEREZIN DESIGN SYSTEM V3.0
 * UNIVERSAL STYLE TOKENS (THE DNA)
 * 
 * This file is the "Phase 0" deliverable. 
 * Before building components, we define the "Physics" of the brand here.
 * The AI agent will read this to determine how to construct the UI.
 * 
 * RULE: Every visual decision in the codebase must trace back to a token here.
 * If a value isn't here, it doesn't exist.
 */

// ── Pre-built color palettes ──────────────────────────────────────────
const COLOR_PRESETS = {
    noir: {
        primary: '0 0% 7%',        // #111111 — warm black
        surface: '0 0% 4%',        // #0a0a0a — deepest surface
        surfaceAlt: '0 0% 9%',        // #171717 — elevated surface
        accent: '24 95% 53%',     // #F26522 — signal orange
        text: '40 10% 96%',     // #F5F3EF — warm cream
        textMuted: '0 0% 55%',       // #8c8c8c — secondary text
        border: '0 0% 15%',       // #262626 — subtle edges
    },
    warm: {
        primary: '30 15% 97%',     // #FAF8F5 — warm white
        surface: '30 20% 94%',     // #F3EDE5 — parchment
        surfaceAlt: '30 15% 90%',     // #EBE3D9 — elevated
        accent: '15 80% 50%',     // #E6571A — terracotta
        text: '20 10% 10%',     // #1C1917 — dark brown-black
        textMuted: '20 5% 45%',      // #756E67 — warm gray
        border: '20 10% 85%',     // #DDD5CB — soft edge
    },
    cold: {
        primary: '220 15% 97%',    // #F5F7FA — cold white
        surface: '220 20% 94%',    // #E8ECF3 — blue-tinted
        surfaceAlt: '220 15% 90%',    // #DDE2EB — elevated
        accent: '220 90% 56%',    // #2563EB — electric blue
        text: '220 15% 8%',     // #111827 — near black
        textMuted: '220 5% 45%',     // #6B7280 — cool gray
        border: '220 10% 88%',    // #D1D5DB — cool edge
    },
    neon: {
        primary: '260 10% 5%',     // #0C0A14 — purple-black
        surface: '260 15% 8%',     // #13101F — dark purple
        surfaceAlt: '260 10% 12%',    // #1E1A2E — elevated
        accent: '150 100% 50%',   // #00FF88 — neon green
        text: '0 0% 100%',      // #FFFFFF — pure white
        textMuted: '260 5% 50%',     // #837D89 — muted violet
        border: '260 10% 20%',    // #332E41 — violet edge
    },
} as const;

export const BRAND_DNA = {
    // ── 1. TYPOGRAPHY PHYSICS ─────────────────────────────────────────
    typography: {
        // "Loudness" of the brand.
        // High ratio (1.6+) = Dramatic/Editorial. Low ratio (1.2) = Functional/SaaS.
        scaleRatio: 1.618, // Golden Ratio

        // The "Voice" — Replace these with your chosen fonts.
        headingFont: 'Inter, sans-serif',
        bodyFont: 'Inter, sans-serif',
        monoFont: 'JetBrains Mono, monospace',

        // Text rendering mode
        flavor: 'oversized' as 'oversized' | 'minimal' | 'technical',

        // Font features (enable for premium typography)
        features: {
            tabularNums: true,     // Aligns numbers in columns
            ligatures: true,       // fi, fl, ffi ligatures
            kerning: true,         // Optical kerning
        },
    },

    // ── 2. COLOR TOKENS ───────────────────────────────────────────────
    // All values are HSL channels: "H S% L%"
    // Usage in code: hsl(var(--color-accent))
    colors: {
        preset: 'noir' as keyof typeof COLOR_PRESETS,
        ...COLOR_PRESETS.noir,

        // Override individual tokens here if using a preset as base:
        // accent: '24 95% 53%',
    },

    // ── 3. SPACING SCALE ──────────────────────────────────────────────
    // Based on 4px base unit. Use these tokens, never arbitrary values.
    spacing: {
        xs: '0.25rem',   // 4px  — tight gaps, icon padding
        sm: '0.5rem',    // 8px  — input padding, tag gaps
        md: '1rem',      // 16px — card padding, section gaps
        lg: '2rem',      // 32px — section padding
        xl: '4rem',      // 64px — major section breaks
        '2xl': '8rem',    // 128px — hero vertical padding

        // Fluid versions for vertical rhythm
        sectionY: 'clamp(4rem, 10vh, 8rem)',
        heroY: 'clamp(6rem, 15vh, 12rem)',
        gap: 'clamp(1rem, 2vw, 4rem)',
    },

    // ── 4. BORDER-RADIUS TOKENS ───────────────────────────────────────
    // Radius is brand identity, not decoration. Choose deliberately.
    radius: {
        none: '0px',     // Brutalist, editorial
        subtle: '2px',     // Premium minimal
        default: '4px',     // Professional, clean
        soft: '8px',     // Modern SaaS
        round: '16px',    // Glassmorphism, friendly
        pill: '999px',   // Tags, badges only

        // The active radius for this project:
        active: '0px' as string,  // Set to one of the above
    },

    // ── 5. GRID PHYSICS ───────────────────────────────────────────────
    layout: {
        mode: 'chaos' as 'chaos' | 'rigid' | 'swiss',
        maxWidth: '1400px',
        contentWidth: '720px',  // For text-heavy sections
    },

    // ── 6. MOTION PHYSICS ─────────────────────────────────────────────
    motion: {
        weight: 'heavy' as 'heavy' | 'snappy' | 'inertial',

        // Standard easing curves
        ease: [0.16, 1, 0.3, 1] as readonly number[],    // Expo — premium feel
        easeOut: [0, 0, 0.2, 1] as readonly number[],     // Smooth deceleration
        easeSpring: 'elastic.out(1, 0.3)',                 // For magnetic/playful

        // Duration scale
        fast: 0.2,  // Hover states, micro-interactions
        medium: 0.5,  // Element transitions, reveals
        slow: 1.2,  // Page transitions, hero animations
    },

    // ── 7. TEXTURE & SURFACE ──────────────────────────────────────────
    surface: {
        type: 'glass' as 'glass' | 'solid' | 'grain' | 'wireframe',
        noiseOpacity: 0.05,         // 0 = clean, 0.1+ = gritty
        noiseAnimated: true,        // Animated grain (film feel)
        backdropBlur: '12px',       // For glass surfaces
    },
} as const;

export { COLOR_PRESETS };
