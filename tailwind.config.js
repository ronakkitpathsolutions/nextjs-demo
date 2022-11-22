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
          min: "200px",
          max: "375px"
        },
        "sm": {
          "min": "375px",
          "max": "425px"
        },
        "md": {
          "min": "425px",
          "max": "768px"
        },
        "lg": {
          "min": "768px",
          "max": "1024px"
        },
        "xl": {
          "min": "1024px",
          "max": "1260px"
        },
        "xxl": {
          "min": "1260px",
          "max": "1440px"
        },
        "3xl" : {
          "min": "1440px"
        }
      }
    },
  },
  plugins: [],
}