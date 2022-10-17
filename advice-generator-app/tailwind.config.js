/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-cyan': '#cee3e9',
        'neon-green': '#52ffa8',
        'grayish-blue': '#4e5d73',
        'dark-grayish-blue': '#323a49',
        'dark-blue': '#1f2632'
      },
      fontFamily: {
        'manrope': ['Manrope', 'sans-serif']
      }
    },
  },
  plugins: [],
}

// Background color #141519 (20 21 25)
// Background card color #1f2630
// Button color #fc7613
