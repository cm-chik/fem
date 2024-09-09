/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,js}", "./components/**/*.{html,js}"],
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
        spaceMono: ["Space Mono"],
      },
    },
  },
};
