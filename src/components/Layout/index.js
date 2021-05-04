import React from "react";
import PropTypes from "prop-types";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Footer from "../Footer";

const Layout = ({ children }) => (
  <div className="grid grid-cols-2">
    <Sidebar className="col-start" />
    <div className="">
      <Navbar />
      {children}
    </div>
  </div>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
