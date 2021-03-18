import React, { useState } from "react";
import PropTypes from "prop-types";
import Navbar from "../../patterns/Navbar";
import MobileHeaderMenu from "../MobileToggledNavbar";
import Header from "../Header";
import Sidebar from "../Sidebar";
import MobileToolbar from "../MobileToolbar";

const Layout = ({ children }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleShowMobileMenu = () => {
    setShowMobileMenu((prevState) => !prevState);
  };

  return (
    <>
      <Navbar showMobileMenu={handleShowMobileMenu} />
      <MobileHeaderMenu show={showMobileMenu} />
      <MobileToolbar />
      <div style={showMobileMenu ? { display: "none" } : null}>
        <Header />
        <div className="flex">
          <Sidebar />
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
