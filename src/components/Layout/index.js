import React from "react";
import PropTypes from "prop-types";
import Navbar from "../Navbar";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Footer from "../Footer";
import ToggleSidebarButton from "../ToggleSidebarButton/index";

const Layout = ({ children }) => (
  <>
    <Navbar />
    <Header />
    <ToggleSidebarButton />
    <div className="flex flex-row mt-6">
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
