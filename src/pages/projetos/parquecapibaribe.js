import Head from "next/head";
import { injectIntl } from "react-intl";
import React from "react";
import Layout from "../../components/Layout";
import ParqueCapibaribeMap from "../../patterns/Map/ParqueCapibaribeMap";

function ParqueCapibaribe() {
  return (
    <Layout>
      <Head>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ParqueCapibaribeMap />
    </Layout>
  );
}
export default injectIntl(ParqueCapibaribe);
