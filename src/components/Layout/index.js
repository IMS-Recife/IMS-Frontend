import React from "react";
import PropTypes from "prop-types";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";
import Navbar from "../../patterns/Navbar";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Footer from "../Footer";

const ToggleButton = styled.div`
  cursor: pointer;
  width: 35px;
  height: 35px;
  background: ${(props) => props.theme.colors.darkBlue};
  color: #fff;
  text-align: center;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  margin-left: 50px;
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 15px;
  display: none;
  @media (max-width: 768px) {
    display: flex;
  }
`;

const Layout = ({ children }) => (
  <>
    <Navbar />
    <Header />
    <ToggleButton>
      <FaBars />
    </ToggleButton>
    <div className="flex flex-row">
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
