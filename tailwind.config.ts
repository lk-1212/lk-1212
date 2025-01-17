import type { Config } from "tailwindcss";

export default {
  content: [
    "./src//pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src//components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lora: ["Lora", "serif"],
        montserrat: ["montserrat", "serif"],
      },
      keyframes: {
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(1000px)" },
          "100%": { opacity: "1", transform: "translateX(0px)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-1000px)" },
          "100%": { opacity: "1", transform: "translateX(0px)" },
        },
        bounce: {
          "0%, 100%": {
            transform: "translateY(-25%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },
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
      bounce: "bounce 1s infinite",
    },
  },
  plugins: [],
} satisfies Config;
