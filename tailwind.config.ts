import type { Config } from "tailwindcss";
export default { content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"], theme: { extend: { colors: { ink: "#172733", wine: "#722f3f", ivory: "#f7f5f0", gold: "#b79b67" }, fontFamily: { serif: ["var(--font-serif)"], sans: ["var(--font-sans)"] } } }, plugins: [] } satisfies Config;
