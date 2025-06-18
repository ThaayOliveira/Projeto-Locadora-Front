import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: 'hsl(0 0% 98%)', // Stone background
                foreground: 'hsl(24 10% 10%)', // Stone foreground
                card: {
                    DEFAULT: 'hsl(0 0% 100%)',
                    foreground: 'hsl(24 10% 10%)'
                },
                popover: {
                    DEFAULT: 'hsl(0 0% 100%)',
                    foreground: 'hsl(24 10% 10%)'
                },
                primary: {
                    DEFAULT: 'hsl(24 10% 10%)', // Stone primary
                    foreground: 'hsl(60 9% 98%)'
                },
                secondary: {
                    DEFAULT: 'hsl(24 6% 83%)', // Stone secondary
                    foreground: 'hsl(24 10% 10%)'
                },
                muted: {
                    DEFAULT: 'hsl(24 5% 96%)', // Stone muted
                    foreground: 'hsl(24 5% 45%)'
                },
                accent: {
                    DEFAULT: 'hsl(24 6% 83%)', // Stone accent
                    foreground: 'hsl(24 10% 10%)'
                },
                destructive: {
                    DEFAULT: 'hsl(0 84% 60%)',
                    foreground: 'hsl(60 9% 98%)'
                },
                border: 'hsl(24 6% 83%)', // Stone border
                input: 'hsl(24 6% 83%)', // Stone input
                ring: 'hsl(24 10% 10%)', // Stone ring
                chart: {
                    '1': 'hsl(24 10% 10%)',
                    '2': 'hsl(24 6% 83%)',
                    '3': 'hsl(24 5% 64%)',
                    '4': 'hsl(24 5% 45%)',
                    '5': 'hsl(24 4% 26%)'
                }
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            }
        }
    },
    plugins: [require("tailwindcss-animate")],
};
export default config;