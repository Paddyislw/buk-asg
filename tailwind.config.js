/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        etherium:{
          primary:'#1b1b1b',
          primaryLight:'#303030'
        },
        polygon:{

          //primary:'#190e24',
          primary:'#0e0a14',
          primaryLight:'#160f23'
          //primaryLight:'#271638'
        }
      }
    },
  },
  plugins: [],
}