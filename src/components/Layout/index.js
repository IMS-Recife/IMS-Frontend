import React, { useState } from "react";
import PropTypes from "prop-types";
import Navbar from "../../patterns/Navbar";
import MobileHeaderMenu from "../../patterns/MobileLayout/MobileHeaderMenu";
import MobileLayout from "../../patterns/MobileLayout";
import MobileDashboard from "../../patterns/MobileDashboard/MobileDashboard";
import Header from "../Header";
import Sidebar from "../Sidebar";

const Layout = ({ children }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleShowMobileMenu = () => {
    setShowMobileMenu((prevState) => !prevState);
  };

  return (
    <>
      <Navbar showMobileMenu={handleShowMobileMenu} />
      <MobileHeaderMenu show={showMobileMenu} />
      <MobileLayout show={!showMobileMenu}>
        <MobileDashboard />
      </MobileLayout>
      <Header />
      <div className="flex">
        <Sidebar />
        {children}
      </div>
    </>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
