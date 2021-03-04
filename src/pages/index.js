import Head from "next/head";
import { injectIntl } from "react-intl";
import React, { useState } from "react";
import Navbar from "../patterns/Navbar";
import MobileHeaderMenu from "../patterns/MobileLayout/MobileHeaderMenu";
import MobileLayout from "../patterns/MobileLayout";
import MobileDashboard from "../patterns/MobileDashboard/MobileDashboard";
import Dashboard from "../patterns/Dashboard";
import Layout from "../patterns/Layout";

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
      <MobileLayout show={!showMobileMenu}>
        <MobileDashboard />
      </MobileLayout>
      <Layout>
        <Dashboard />
      </Layout>
    </div>
  );
}
export default injectIntl(Home);
