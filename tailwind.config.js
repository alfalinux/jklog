/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,html}"],
  theme: {
    extend: {
      colors: {
        "biru-muda-jkl": "#059cfbff",
        "biru-tua-jkl": "#037bc2ff",
        "hitam-muda-jkl": "#333333ff",
      },
      fontFamily: {
        righteous: ["Righteous", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: ["tailwindcss-react-aria-components", "tailwindcss-animate"],
};
