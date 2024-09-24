import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        purple: "#A729F5",
        "dark-navy": "#313E51",
        navy: "#3B4D66",
        "grey-navy": "#626C7F",
        "light-bluish": "#626C7F",
        "light-grey": "#F4F6FA",
        green: "#26D782",
        red: "#EE5454",
      },
      fontFamily: {
        rubik: "Rubik, sans-serif",
      },
    },
  },
  plugins: [],
};
export default config;
