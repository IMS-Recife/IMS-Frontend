import React from "react";
import PropTypes from "prop-types";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Footer from "../Footer";

const Layout = ({ children }) => (
  <div className="flex flex-no-wrap h-full min-h-screen">
    <div className="bg-secondary-green h-screen sticky sticky top-0">
      <Sidebar />
    </div>
    <div className="w-full">
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
