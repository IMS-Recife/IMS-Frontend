import React from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import I18nProvider from "../i18n/I18nProvider";
import "../styles/global.scss";
import "react-toastify/dist/ReactToastify.css";

import GlobalStyle from "../styles/global";
import "bootstrap/dist/css/bootstrap.css";
import theme from "../styles/theme";
import { LayoutProvider } from "../contexts/layout";
import { PreviousPathProvider } from "../contexts/previousPath";

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <PreviousPathProvider>
        <LayoutProvider>
          <ThemeProvider theme={theme}>
            <I18nProvider>
              <Component {...pageProps} />
              <GlobalStyle />
            </I18nProvider>
          </ThemeProvider>
        </LayoutProvider>
      </PreviousPathProvider>
    </>
  );
}

export default MyApp;
