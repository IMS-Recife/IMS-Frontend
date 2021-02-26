import Head from "next/head";
import { injectIntl } from "react-intl";
import React, { useState, useEffect } from "react";
import useWindowDimensions from "../Hooks/useWindowDimensions";
import Navbar from "../patterns/Navbar";
import MobileHeaderMenu from "../patterns/MobileHeaderMenu";
import MobileDashboard from "../patterns/MobileDashboard";
import Dashboard from "../patterns/DashBoard";

function Home() {
  const { width } = useWindowDimensions();
  const [windowWidth, setWindowWidth] = useState();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    setWindowWidth(width);
  }, []);

  const handleShowMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar showMobileMenu={handleShowMobileMenu} />
      <MobileHeaderMenu show={showMobileMenu} />
      {windowWidth <= 776 ? (
        <MobileDashboard show={!showMobileMenu} />
      ) : (
        <Dashboard />
      )}
    </div>
  );
}
export default injectIntl(Home);
