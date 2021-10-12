module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#ff284f",
        success: "#45c881",
        secondary: "#f7f8fa",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
