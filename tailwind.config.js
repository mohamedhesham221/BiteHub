/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        primary:'#FFFFFF',
        secondary: '#000000',
        third: '#F5980C'
      },
      fontFamily:{
        poppins: ["Poppins", "serif"],
        lily: ["Lily Script One", "serif"],
        times: ["Times New Roman", "serif"]
      },
      dropShadow: {
        'header-shadow' : '0 4px 10px rgba(0,0,0,0.25)',
        'custom-shadow': '0 4px 4px rgba(0,0,0,0.25)'
      }
    },
  },
  plugins: [],
}

