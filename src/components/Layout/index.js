import React, { useState } from "react";
import PropTypes from "prop-types";
import Navbar from "../../patterns/Navbar";
import MobileHeaderMenu from "../../patterns/MobileLayout/MobileHeaderMenu";
import Header from "../Header";
import Sidebar from "../Sidebar";
import MobileToolbar from "../../patterns/MobileLayout/MobileToolbar";

const Layout = ({ children }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleShowMobileMenu = () => {
    setShowMobileMenu((prevState) => !prevState);
  };

  return (
    <>
      <Navbar showMobileMenu={handleShowMobileMenu} />
      <MobileHeaderMenu show={showMobileMenu} />
      <div style={showMobileMenu ? { display: "none" } : null}>
        <Header />
        <MobileToolbar />
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
