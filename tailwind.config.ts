import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        aloe_pink: "#FDB3D7",
        aloe_pink_2: "#F98ECD",
        blossom_blue: "#63D0FD",
        blossom_blue_2: "#2993D2",
      },
      backgroundImage: {
        "hero-pattern_1": "url('/imgs/spa_1.webp')",
        "hero-pattern_2": "url('/imgs/spa_2.webp')",
      },
    },
  },
  plugins: [],
};
export default config;
