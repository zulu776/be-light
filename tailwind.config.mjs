// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//     "./pages/**/*.{js,ts,jsx,tsx}",
//     "./components/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors:{
//         base: "#fff5d5",
//       }
//     },
//   },
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// }
// /** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pageBase: "#fff5d5",
        pageBaseDark: "#040301",
        brand: "red",
      },
      fontFamily: {
      helvetica: ['"Helvetica Neue"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;