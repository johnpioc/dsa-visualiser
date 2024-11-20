import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        primary: "var(--primary)",
        light: "var(--light)",
        dark: "var(--dark)"
      },
      fontFamily: {
        "primary": "var(--primary-font)"
      }
    },
  },
  plugins: [],
} satisfies Config;
