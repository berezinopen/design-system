import React from 'react';

type BentoGridProps = {
    children: React.ReactNode;
    className?: string;
};

type BentoCardProps = {
    children: React.ReactNode;
    className?: string;
    colSpan?: 1 | 2 | 3 | 4;
    rowSpan?: 1 | 2 | 3;
    theme?: 'dark' | 'light' | 'glass';
};

/**
 * BentoGrid — Asymmetric grid system for high-end layouts.
 * 
 * RULES:
 * - Always include at least ONE card with colSpan={2} to break symmetry.
 * - Never use 3 identical cards in a row — vary spans and themes.
 * - Uses CSS custom property `--radius` from brand-dna tokens.
 */
export const BentoGrid: React.FC<BentoGridProps> = ({ children, className = '' }) => {
    return (
        <div
            className={`grid grid-cols-1 md:grid-cols-4 auto-rows-auto ${className}`}
            style={{ gap: 'var(--spacing-gap, clamp(1rem, 2vw, 4rem))' }}
        >
            {children}
        </div>
    );
};

export const BentoCard: React.FC<BentoCardProps> = ({
    children,
    className = '',
    colSpan = 1,
    rowSpan = 1,
    theme = 'dark',
}) => {
    const colSpanClass = {
        1: 'md:col-span-1',
        2: 'md:col-span-2',
        3: 'md:col-span-3',
        4: 'md:col-span-4',
    }[colSpan];

    const rowSpanClass = {
        1: 'md:row-span-1',
        2: 'md:row-span-2',
        3: 'md:row-span-3',
    }[rowSpan];

    const themeClass = {
        dark: 'bg-[hsl(var(--color-surface))] border border-[hsl(var(--color-border))] text-[hsl(var(--color-text))]',
        light: 'bg-[hsl(var(--color-surface-alt))] border border-[hsl(var(--color-border))] text-[hsl(var(--color-text))]',
        glass: 'bg-[hsl(var(--color-surface)/0.5)] backdrop-blur-xl border border-[hsl(var(--color-border)/0.3)] text-[hsl(var(--color-text))]',
    }[theme];

    return (
        <div
            className={`
                p-6 relative overflow-hidden group
                transition-colors duration-500
                hover:border-[hsl(var(--color-accent))]
                ${colSpanClass} ${rowSpanClass} ${themeClass} ${className}
            `}
            style={{ borderRadius: 'var(--radius, 0px)' }}
            data-animate="reveal"
        >
            {/* Content container */}
            <div className="relative z-10 h-full flex flex-col justify-between">
                {children}
            </div>

            {/* Hover glow — uses accent color, not generic white */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[hsl(var(--color-accent)/0.03)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </div>
    );
};
