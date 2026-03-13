import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#f7f5f2",
        "background-soft": "#faf9f7",
        ecru: "#e8e4dc",
        "sf-black": "#1c1b1a",
        "sf-charcoal": "#4a4745",
        "sf-gold": "#a67c52",
        "sf-gold-light": "#c4a574",
        "sf-muted": "#6e6a66",
        "sf-border": "#e5e2dd",
        "sf-cream": "#f0ede8"
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 45px rgba(26, 25, 24, 0.08)",
        card: "0 4px 24px rgba(26, 25, 24, 0.06)"
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.5s ease-out forwards"
      },
      keyframes: {
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        slideUp: { "0%": { opacity: "0", transform: "translateY(14px)" }, "100%": { opacity: "1", transform: "translateY(0)" } }
      },
      transitionDuration: { "400": "400ms" }
    }
  },
  plugins: []
};

export default config;

