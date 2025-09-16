import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // Ini instruksi yang benar: "Scan semua file relevan di dalam folder 'src'"
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-mona-sans)"],
      },
    },
  },
  plugins: [],
};
export default config;