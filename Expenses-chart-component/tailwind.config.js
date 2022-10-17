/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'soft-red': '#ec775f',
        'cyan': '#76b5bc',
        'dark-brown': '#382314',
        'medium-brown': '#93867b',
        'cream': '#f8e9dd',
        'very-pale-orange': '#fffaf5'
      },
      fontFamily: {
        'sans': ['DM Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

// Background color #141519 (20 21 25)
// Background card color #1f2630
// Button color #fc7613
