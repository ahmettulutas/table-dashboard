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
        primaryGray: "#EFEFEF"
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