import Head from "next/head";
import { injectIntl } from "react-intl";
import React, { useState } from "react";
import Navbar from "../patterns/Navbar";
import MobileHeaderMenu from "../patterns/MobileHeaderMenu";
import MobileDashboard from "../patterns/MobileDashboard";
import Dashboard from "../patterns/DashBoard";

function Home() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

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
      <MobileDashboard show={!showMobileMenu} />
      <Dashboard />
    </div>
  );
}
export default injectIntl(Home);
