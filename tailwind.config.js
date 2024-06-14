/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["lato", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        PtSans: ["PT Sans", "sans-serif"],
        "space-age": ["Space Age", "sans-serif"],
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
        "plants-container-bg":
          "radial-gradient(circle at center, #000 30%, #111 70%, #000 100%)",
      },
      colors: {
        cardsCustomGray: "rgba(31, 29, 29, 0.406)",
      },
      boxShadow: {
        "planet-shadow": "0px 4px 8px rgba(0,0,0,0.6)"
      },

      keyframes: {
          
        rotate: {
          to: {
            objectPosition: "100%",
          },
      }},
    animation: {
      rotate: "rotate 20s linear alternate infinite"
  },
      transitionProperty: {
        top: "top",
      },
      dropShadow: {
        "white-outline":
          "0 0 0 white, 0 0 0.5rem white, 0 0 1rem white, 0 0 2rem white",
      },
     
    },
  },
  plugins: [
  ],
};
