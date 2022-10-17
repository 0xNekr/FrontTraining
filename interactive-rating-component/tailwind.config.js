/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#141519',
        'background-card': '#1f2630',
        'button-submit': '#fc7613',
        'title-text': '#f9fdfe',
        'body-text': '#707781',
        'button-rate': '#262f38',
        'button-selected': '#7c8896'
      },
      fontFamily: {
        'overpass': ['Overpass', 'sans-serif']
      }
    },
  },
  plugins: [],
}

// Background color #141519 (20 21 25)
// Background card color #1f2630
// Button color #fc7613
