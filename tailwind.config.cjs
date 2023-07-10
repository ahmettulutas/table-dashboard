module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px"
    },
    extend: {
      gridTemplateCols: {
        layout: "auto 1fr"
      },
      colors: {
        primaryGrayText: "#808191",
        primaryBlackText: "#1A1D1F",
        primaryGray: "#EFEFEF",
        primaryBlue: "var(--primary-blue)",
        darkPrimaryBlue: "#7264F0",
        primaryOrange: "#FFBC99",
        successLight: "#EAFAE4",
        success: "#4FBF67",
        error: "#FF4D4D",
        errorLight: "#FFE7E4",
        info: "#FEA500",
        infoLight: "#FFECCF",
        secondary: "#8F4DF4",
        darkBlue: "#244CB2",
        lightBlue: "#0069F6",
        bgGray: "#efefefcc",
        bgLightGray: "#F4F4F4"
      }
    },
    container: {
      width: "90%",
      padding: {
        DEFAULT: "1rem"
      }
    }
  },
  darkMode: "class"
};