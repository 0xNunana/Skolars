/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        gold:'#D4AF37'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "hero":'url("/art.webp")',
          "update":'url("/bg-6.png")',
          dot:'url("/bg-dot.png")',
          menu: 'url("/dark.jpg")',
          latest: 'url("/bg-map-2.png")',
          player:'url("/logo.png")'
      },
      animation:{
        hero:'backentry 5s forwards alternate',
        'slideDown':'slideD 2s ease forwards',
      },
      keyframes:{
        backentry:{
          '0%':{
            opacity:1,
            transform:'scale(1.3) '
          },
          '50%':{
            opacity:1,
            transform:'scale(1) '
          },
          '100%':{
            opacity:1,
            transform:'scale(1.1)'
          }
  
        },
        slideD:{
          '0%':{
            opacity:'0',
transform:'translateY(-50px)'
          },
         
          '100%':{
            opacity:'1',
            transform:'translateY(0)'

          }
        }
      }
    },
    
  },
  plugins: [],
};
