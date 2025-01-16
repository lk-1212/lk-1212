import type { Config } from "tailwindcss";

export default {
  content: [
    "./src//pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src//components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(1000px)" },
          "100%": { opacity: "1", transform: "translateX(0px)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-1000px)" },
          "100%": { opacity: "1", transform: "translateX(0px)" },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    animation: {
      "slide-in-left": "slideInLeft 1s ease-out forwards",
      "slide-in-right": "slideInRight 1s ease-out forwards",
    },
  },
  plugins: [],
} satisfies Config;
