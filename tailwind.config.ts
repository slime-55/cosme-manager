import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'], theme: { extend: { colors: { ink: '#2e2a28', muted: '#827875', blush: '#f5ede9', rose: '#a96060', line: '#e8e0dc' }, fontFamily: { sans: ['var(--font-inter)', 'sans-serif'], display: ['var(--font-cormorant)', 'serif'] } } }, plugins: [] };
export default config;
