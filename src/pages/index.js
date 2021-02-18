import Head from "next/head";
import { injectIntl, FormattedMessage } from "react-intl";
import React, { useState } from "react";
import styled from "styled-components";

import { ProSidebar, MenuItem, Menu } from "react-pro-sidebar";
import {
  FaAngleLeft,
  FaAngleRight,
  FaBuffer,
  FaChartBar,
  FaChartLine,
  FaCity,
  FaMapMarkedAlt,
  FaPlusSquare,
} from "react-icons/fa";
import Navbar from "../patterns/Navbar";

const ArrowButton = styled.button`
  background: none;
  border: none;
  width: 1.5rem;
  height: 1.5rem;
`;

function Home() {
  const [collapseSideBar, setCollapseSideBar] = useState(false);
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <ProSidebar collapsed={collapseSideBar}>
        <Menu iconShape="square">
          <ArrowButton
            type="button"
            onClick={() => setCollapseSideBar(!collapseSideBar)}
          >
            <MenuItem
              style={{ color: "#FFFFFF" }}
              icon={
                collapseSideBar ? (
                  <FaAngleRight size="1.5rem" />
                ) : (
                  <FaAngleLeft size="1.5rem" />
                )
              }
            />
          </ArrowButton>
          <MenuItem
            style={{ color: "#FEEC47" }}
            icon={<FaPlusSquare size="1.5rem" />}
          >
            <FormattedMessage id="ADD_INDICATOR" />
          </MenuItem>
          <MenuItem icon={<FaBuffer size="1.5rem" />}>
            <FormattedMessage id="SHOW_ALL" />
          </MenuItem>
          <MenuItem icon={<FaChartBar size="1.5rem" />}>
            <FormattedMessage id="ANALYSIS" />
          </MenuItem>
          <MenuItem icon={<FaChartLine size="1.5rem" />}>
            <FormattedMessage id="SIRD" />
          </MenuItem>
          <MenuItem icon={<FaCity size="1.5rem" />}>
            <FormattedMessage id="NEIGHBORHOODS" />
          </MenuItem>
          <MenuItem icon={<FaMapMarkedAlt size="1.5rem" />}>
            <FormattedMessage id="MAP" />
          </MenuItem>
        </Menu>
      </ProSidebar>
    </div>
  );
}
export default injectIntl(Home);
