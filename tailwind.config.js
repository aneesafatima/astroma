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
        "planet-shadow":
          "0 0 60px rgba(255, 153, 0, 0.6), 0 0 120px rgba(255, 153, 0, 0.4), 0 0 180px rgba(255, 153, 0, 0.2)",
      },
      keyframes: {
        rotate: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-8192px 0",
          },
        },
        animation: {
          rotatePlanet: "rotate 15s linear infinite",
        },
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
    function ({ addUtilities }) {
      addUtilities({
        ".text-shadow": {
          "text-shadow":
            "0 0 0 #FFE4B5,  -1px -1px 0 #FFE4B5, 1px -1px 0 #FFE4B5,-1px 1px 0 #FFE4B5, 1px 1px 0 #FFE4B5",
            
        },
      });
    },
  ],
};
