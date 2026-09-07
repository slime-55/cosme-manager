import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'], theme: { extend: { colors: { ink: '#3b3336', muted: '#7d7378', blush: '#f8f2f4', rose: '#9e637a', line: '#e8dbe0' }, fontFamily: { sans: ['var(--font-mplus)', 'sans-serif'], display: ['var(--font-mplus)', 'sans-serif'] } } }, plugins: [] };
export default config;
