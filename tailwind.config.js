/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: 'class',
  
  theme: {
    container:{
      center:true,
      screens:{
        lg:'1140px',
        xl:'1140px',
        '2xl':'1140px'
      }
    },
    extend: {fontFamily:{
      gemunu: ['Gemunu Libre', 'sans-serif'],
      open: ['Open Sans', 'sans-serif']
    },
    colors: {
      't-red': '#BC1A45',
      'black': '#000000',
      't-melon': '#FFD369',
      't-grey': '#DDDDDD',
      't-white': '#F7F7F7',
      'bg-transparent': 'transparent',
    },
    spacing:{
      128 :'32rem',
    },
  
  
  
  
  },
   
    
  },
  plugins: [],
}

