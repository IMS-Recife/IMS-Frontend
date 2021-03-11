import Head from "next/head";
import { injectIntl } from "react-intl";
import React, { useState } from "react";
import Navbar from "../patterns/Navbar";
import MobileHeaderMenu from "../patterns/MobileLayout/MobileHeaderMenu";

import Map from "../patterns/Map";

function MapPage() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleShowMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <div>
      <Head>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar showMobileMenu={handleShowMobileMenu} />
      <MobileHeaderMenu show={showMobileMenu} />
      {!showMobileMenu && <Map />}
    </div>
  );
}
export default injectIntl(MapPage);
