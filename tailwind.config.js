/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#029388',
        'default': '#666666',
      },
      fontFamily:{
        'saira': ['Saira Semi Condensed', 'sans-serif'],
        'ptsans': ['PT Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}