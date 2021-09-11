module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  important: true,
  theme: {
    extend: {
      colors: {
        embie: {
          blue: "#161644",
          red: "#EA492E",
          yellow: "#FFAF23",
          lightblue: "#60A1E2",
          purple: "#CDA7EA",
          grey: "#F2F2F2",
        },
      },
      // fontFamily: {
      //   body: "Raleway, sans-serif",
      //   title: "DM Serif Display, serif",
      // },
    },
  },
  plugins: [],
};
