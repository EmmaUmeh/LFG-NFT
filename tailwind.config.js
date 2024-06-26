/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#A259FF",
        secondary: "#3B3B3B",
      },
  
    },
  },
  plugins: [],
};


// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//         "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//         "./components/**/*.{js,ts,jsx,tsx,mdx}",
//         "./app/**/*.{js,ts,jsx,tsx,mdx}",
//       ],
//   theme: {
    
//     container: {
//       padding: {
//         DEFAULT: '1rem',
//         sm: '2rem',
//         lg: '4rem',
//         xl: '5rem',
//         '2xl': '6rem',
//       }
//     },

//     screens: {
//       'sm': {'max': '767px'},
//       // => @media (min-width: 640px and max-width: 767px) { ... }

//       'md': {'min': '768px', 'max': '1023px'},
//       // => @media (min-width: 768px and max-width: 1023px) { ... }

//       'lg': {'min': '1024px', 'max': '1279px'},
//       // => @media (min-width: 1024px and max-width: 1279px) { ... }

//       'xl': {'min': '1280px', 'max': '1535px'},
//       // => @media (min-width: 1280px and max-width: 1535px) { ... }

//       '2xl': {'min': '1536px'},
//       // => @media (min-width: 1536px) { ... }
//     },

//     extend: {
//       colors: {
//         primary: "#A259FF",
//         secondary: "#3B3B3B",
//       },
//     },
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [],
// };