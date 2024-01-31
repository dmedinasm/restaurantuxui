/** @type {import('tailwindcss').Config} */
module.exports  =  {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: '#dcca87',
        secondary: '#0C0B08',
        colortext: '#AAAAAA'
      },
      fontFamily:{
        cormorant: ['Cormorant Upright', 'serif'],
        opensans: ['Open Sans', 'sans-serif'],
        bester:['Bestermind', 'serif']

      },
      backgroundImage: {
        'bgAbout': "url('./assets/BGAbout.png')",
        'bgMenu' : "url('./assets/bgMenu.png')" ,
        'bgChef' : "url('./assets/bgChef.png')",
        'bgAward' : "url('./assets/bgaward.png')"
      }
      
    },

   
  },
  plugins: [],
}

