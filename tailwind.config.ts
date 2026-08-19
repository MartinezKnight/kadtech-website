import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        midnight: {
          DEFAULT: "#0B1220",
          900: "#070C16",
          800: "#0B1220",
          700: "#121B2E",
          600: "#1B2740",
        },
        graphite: "#1E2430",
        offwhite: "#F7F5F1",
        charcoal: "#1A1A1A",
        silver: "#C9CDD4",
        "silver-soft": "#E7E8EC",
        electric: "#3E6BFF",
        "electric-soft": "#7C9CFF",
        kadred: "#D2232A",
      },
      fontFamily: {
        display: ["var(--font-montserrat)", "sans-serif"],
        editorial: ["var(--font-montserrat)", "sans-serif"],
        body: ["var(--font-montserrat)", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      maxWidth: {
        "8xl": "90rem",
      },
    },
  },
  plugins: [],
};
export default config;
