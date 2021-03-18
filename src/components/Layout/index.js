import React from "react";
import PropTypes from "prop-types";
import Navbar from "../../patterns/Navbar";
import Header from "../Header";
import Sidebar from "../Sidebar";
import MobileToolbar from "../MobileToolbar";
import Footer from "../Footer";

const Layout = ({ children }) => (
  <>
    <Navbar />
    <Header />
    <MobileToolbar />
    <div className="flex">
      <Sidebar />
      {children}
    </div>
    <Footer />
  </>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
