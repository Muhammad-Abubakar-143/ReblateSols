/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.html',
    "./src/**/*.{js,jsx}"
  ],
    theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      transformOrigin:{
        active:"translateX(-100%)"
      },
      transitionProperty:{
        testimonialItem: "transform 0.5s ease-in-out",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [ 
    // require('tailwind-scrollbar'),
  ],
};
