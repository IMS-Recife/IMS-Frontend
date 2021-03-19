import React from "react";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import I18nProvider from "../i18n/I18nProvider";
import "../styles/global.scss";
import "react-toastify/dist/ReactToastify.css";

import GlobalStyle from "../styles/global";
import "bootstrap/dist/css/bootstrap.css";
import theme from "../styles/theme";
import { LayoutProvider } from "../contexts/layout";

function MyApp({ Component, pageProps }) {
  return (
    <LayoutProvider>
      <ThemeProvider theme={theme}>
        <I18nProvider>
          <Component {...pageProps} />
          <GlobalStyle />
        </I18nProvider>
      </ThemeProvider>
    </LayoutProvider>
  );
}

export default MyApp;
