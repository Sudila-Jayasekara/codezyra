/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        // 'primary':'#ff7300',
         'primary':'#A594F9',
        'backgroundLightGray':'#f7f8fb',
        'backgroundDarkGray':'#f0f2f5',
        'white':'#ffffff',
      }
    },
  },
  plugins: [],
}

