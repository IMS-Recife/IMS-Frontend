import PropTypes from "prop-types";
import React from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "../styles/global";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component Component={Component} pageProps={pageProps} />
      <GlobalStyle />
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
