/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      colors: {
        primary: "#1967D2",
        secondary: "#B9CAE0",
      },
      screens: {
        lmd: "850px",
      },
    },
  },
  plugins: [],
}

