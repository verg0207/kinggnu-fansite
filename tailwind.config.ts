import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0b0b0f",
        paper: "#f5f2ea",
        accent: "#e63946",
        muted: "#8a8a8a"
      },
      fontFamily: {
        sans: ["'Noto Sans JP'", "'Inter'", "system-ui", "sans-serif"],
        display: ["'Bebas Neue'", "'Noto Sans JP'", "sans-serif"]
      }
    }
  },
  plugins: []
};
export default config;
