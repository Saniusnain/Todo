/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gilda: ["Gilda Display", 'serif'],
        // dosis: ["Dosis","sans-serif"],
        // poppins: ["Poppins","sans-serif"]
       },
    },
  },
  plugins: [],
}