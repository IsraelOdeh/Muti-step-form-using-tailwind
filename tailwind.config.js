/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "cMarineblue": "hsl(213, 96%, 18%)",
        "cPurplishblue": "hsl(243, 100%, 62%)",
        "cPastelblue": "hsl(228, 100%, 84%)",
        "cLightblue": "hsl(206, 94%, 87%)",
        "cStrawberryred": "hsl(354, 84%, 57%)",        
        "cCoolgray": "hsl(231, 11%, 63%)",
        "cLightgray": "hsl(229, 24%, 87%)",
        "cMagnolia": "hsl(217, 100%, 97%)",
        "cAlabaster": "hsl(231, 100%, 99%)",
        "cWhite": "hsl(0, 0%, 100%)"
      },
      fontFamily:{
        "Ubuntu": ['Ubuntu', "sans-serif"]
      }
    },
  },
  plugins: [],
}

