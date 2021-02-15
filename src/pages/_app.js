import PropTypes from "prop-types";
import React from "react";
import { ThemeProvider } from "styled-components";
import I18nProvider from "../i18n/I18nProvider";

import GlobalStyle from "../styles/global";
import "bootstrap/dist/css/bootstrap.css";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <I18nProvider>
        <Component {...Component} {...pageProps} />
        <GlobalStyle />
      </I18nProvider>
    </ThemeProvider>
  );
}

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.string,
  pageProps: PropTypes.string,
};

MyApp.defaultProps = {
  Component: "",
  pageProps: "",
};
