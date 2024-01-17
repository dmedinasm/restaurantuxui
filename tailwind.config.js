/** @type {import('tailwindcss').Config} */
module.exports  =  {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: '#dcca87',
        secondary: '#0C0B08'
      },
      fontFamily:{
        cormorant: ['Cormorant Upright', 'serif'],
        opensans: ['Open Sans', 'sans-serif']

      }
    },
  },
  plugins: [],
}

