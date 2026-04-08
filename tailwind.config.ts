import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{js,ts,jsx,tsx,mdx,css}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1E1E1E",
        paper: "#FAF7F2",
        teal: "#0F766E"
      },
      fontFamily: {
        heading: ["var(--font-cormorant)", "serif"],
        ui: ["var(--font-space-mono)", "monospace"]
      },
      boxShadow: {
        card: "0 8px 24px rgba(15, 118, 110, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
