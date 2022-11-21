/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      'screens': {
        "xs": {
          min: "320px",
          max: "640px"
        }
      }
    },
  },
  plugins: [],
}