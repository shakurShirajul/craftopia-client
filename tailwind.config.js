/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'poppins' : ['Poppins', 'sans-serif'],
      'inter' : ['Inter', 'sans-serif'],
      'roboto': ['Roboto', 'sans-serif'],
      'rancho': ['Rancho', 'cursive'],
    },
  },
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  plugins: [require("daisyui")],
}