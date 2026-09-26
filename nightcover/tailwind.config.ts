import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        stone: {
          DEFAULT: "#F5F2EA",
          alt: "#ECE6D7",
        },
        ink: {
          DEFAULT: "#13223B",
          soft: "#33394A",
        },
        forest: {
          DEFAULT: "#2E4A3B",
          hover: "#233B2F",
        },
        gold: "#A9824F",
        line: "#DAD2BC",
      },
      fontFamily: {
        serif: ["var(--font-source-serif)", "Georgia", "serif"],
        sans: ["var(--font-instrument-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1120px",
      },
    },
  },
  plugins: [],
};

export default config;
