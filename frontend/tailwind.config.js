/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'orange':'#ff7300',
        'gray':'#f7f8fb',
        'white':'#ffffff',
      }
    },
  },
  plugins: [],
}

