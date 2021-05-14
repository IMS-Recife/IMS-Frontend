import React from "react";
import PropTypes from "prop-types";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Footer from "../Footer";

const Layout = ({ children }) => (
  <div className="flex flex-row h-100" style={{ height: "100vh" }}>
    <Sidebar style={{ height: "100%" }} />
    <div style={{ width: "100%", height: "100%" }}>
      <Navbar />
      {children}
      <Footer />
    </div>
  </div>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
