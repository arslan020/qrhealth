import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: "#A6AB95",
        "light-sage": "#B8C880",
        "dark-sage": "#5E6E53",
        "soft-green": "#E8EDE6",
        "warm-grey": "#F4F5F2",
      },
      fontFamily: {
        sans: ["var(--font-poppins)"],
      },
    },
  },
  plugins: [],
};

export default config;
