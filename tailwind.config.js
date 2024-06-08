/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customRed: '#ff5555',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
}
