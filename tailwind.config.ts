import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#FAFAF8",
        ink: "#1C1C1C",
        muted: "#6F7278",
        panel: "#F2F4F5",
        accent: "#A7D8F5"
      },
      borderRadius: {
        brand: "12px"
      },
      boxShadow: {
        soft: "0 18px 55px rgba(28, 28, 28, 0.08)"
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "Montserrat", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
