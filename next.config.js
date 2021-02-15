const withImages = require("next-images");

module.exports = withImages({
  esModule: true,
  i18n: {
    locales: ["en", "pt-br"],
    defaultLocale: "pt-br",
    localeDetection: false,
  },
});
