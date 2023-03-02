/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Orbitron, sans-serif',
      },
      colors: {
        background: '#09090A',
      }
    },
  },
  plugins: [],
}
