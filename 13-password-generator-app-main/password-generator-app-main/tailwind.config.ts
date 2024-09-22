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
        spaceMono: ["Space Mono", "sans-serif"],
      },
      colors: {
        "sharp-green": "#b1f2b5",
        "sharp-yellow": "#f7cd64",
        "dark-gray": "#24332b",
        "light-gray": "#716d7e",
      },
    },
  },
};
export default config;
