/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["lato", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      screens: {
        xxs: "400px",
        xs: "550px",
        sm: "640px",
        md: "941px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      backgroundImage: {
        "homepage-bg": "url('src/assets/astroma-bg.jpg')",
        "custom-gradient":
          "linear-gradient(360deg, rgba(27,27,28,0.730550284629981) 0%, rgba(223,216,216,1) 100%)",
      },
      colors: {
        cardsCustomGray: "rgba(31, 29, 29, 0.406)",
      },
    },
  },
  plugins: [],
};
