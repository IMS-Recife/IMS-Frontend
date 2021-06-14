import Head from "next/head";
import { injectIntl } from "react-intl";
import React from "react";
import Layout from "../../components/Layout";

import Map from "../../patterns/Map";

function MapPage() {
  return (
    <Layout>
      <Head>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Map />
    </Layout>
  );
}
export default injectIntl(MapPage);
