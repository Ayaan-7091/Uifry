/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customRed: '#ff5555',
        darkBg:'rgba(17, 24, 39, 0.86)',
        dark2:'#1a1625'
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
}
