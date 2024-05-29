/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ['lato', 'sans-serif'],
      },
      screens: {
        xxs: "390px",
        xs: "400px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      backgroundImage: {
        "homepage-bg": "url('src/assets/astroma-bg.jpg')",
      },
      keyframes: {
        opacity: {
         to : {opacity : 1},
         from : {opacity: 0}
        }
    },
  },
  plugins: [
  ],
}
}