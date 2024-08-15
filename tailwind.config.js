/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3e5ea9",
        gray: {
          50: "#EDEDED",
          70: "#777",
          400: "#0C1322",
          700: "#CED0D3",
          900: "#AEB0B5"
        },
        secondary:"#F1F5FC",
        tertiary:"#5D626C",
        status: {
          100: "#3EA584",
          150: "#DEFEF3",
          200: "#BF1A2F",
          250: "#FFEFF1",
          300: "#1A7ABF",
          350: "#E4F2FF",
          400: "#EEB76B",
          450: "#FFF5E7"
        },
      },
      screens: {
        'phone': '400px',
        'phones': '500px',
        'tab': '600px',
        'mid': '900px',
        'mids': '1000px',
        'laptop': '1184px',
        
        'desktop': '1200px',
      },
    },
  },
  plugins: [],
}