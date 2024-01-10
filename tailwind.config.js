/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'orange':'#E26434',
        'blue': '#002E5D',
        'white':'#fff'
      }
    },
  },
  plugins: [],
}

