import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit"],
        figtree: ["Figtree"],
        youngSerif: ["Young Serif"],
        Montserrat: ["Montserrat"],
        Fraunces: ["Fraunces"],
        Poppins: ["Poppins"],
        Barlow: ["Barlow Semi Condensed"],
        IBM: ["IBM Plex Sans"],
        Manrope: ["Manrope"],
        Rubik: ["Rubik"],
        spaceMono: ["var(--font-space-mono)"],
      },
      colors: {
        "very-dark-grey": "#18171f",
        "dark-grey": "#24232c",
        "light-grey": "#e6e5ea",
        "sharp-green": "#a4ffaf",
        red: "#f64a4a",
        orange: "#fb7c58",
        yellow: "#f8cd65",
      },
    },
  },
};
export default config;
