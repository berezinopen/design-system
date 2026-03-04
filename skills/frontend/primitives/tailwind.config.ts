import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            zIndex: {
                'behind': '-1',
                'base': '0',        // Main document flow
                'content': '10',    // Elevated cards, internal components
                'nav': '50',        // Sticky headers/footers
                'fixed': '100',     // Floating Action Buttons (FAB), LLM Widgets
                'overlay': '200',   // Backdrops
                'modal': '300',     // Popups, Drawers, Lightboxes
                'toast': '400',     // Notifications
                'noise': '500',     // Universal texture filter (MUST sit on top of EVERYTHING)
                'cursor': '9999',   // Custom GSAP Cursor (if used)
            }
        },
    },
    plugins: [],
};

export default config;
