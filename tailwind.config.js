module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto"],
        raleway: ["Raleway, sans-serif"],
      },
      colors: {
        "primary-gray": "#F7F7F7",
        "primary-gray-darker": "#F2F2F2",
        "primary-dark": "#c4c4c4",
        "secondary-green": "#00A14B",
        "secondary-green-light": "#59C28A",
        "secondary-green-darker": "#00711F",
        "primary-text": "#4B4D53",

        "status-in-progress": "#FFEE58",
        "status-finished": "#53D378",
        "status-paralyzed": "#FFC2C2",
        "status-to-run": "#4b4d53",
      },
      fontWeight: {
        hairline: 100,
        "extra-light": 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        "extra-bold": 800,
        black: 900,
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["odd"],
      fontWeight: ["hover"],
    },
  },
  plugins: [],
};
