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
        'white':'#fff',
        'lightBlue':"#002E5D21",
        'lightOrange':"#F68D2949",
        'gradient': 'linear-gradient(45deg, #06193F, #E26434C2);'
      },
      fontFamily:{
        'playfair':['Playfair Display', 'serif'],
        'montserrat': ['Montserrat', 'sans-serif']
      },
      backgroundImage:{
        'gradient': 'linear-gradient(45deg, #06193F, #E26434C2);'
      }
    },
  },
  plugins: [],
}

