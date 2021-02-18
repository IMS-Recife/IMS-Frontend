import Head from "next/head";
import { injectIntl, FormattedMessage } from "react-intl";
import React from "react";
import { ProSidebar, MenuItem, Menu } from "react-pro-sidebar";
import {
  FaBuffer,
  FaChartBar,
  FaChartLine,
  FaCity,
  FaMapMarkedAlt,
  FaPlusSquare,
} from "react-icons/fa";
import Navbar from "../patterns/Navbar";

function Home() {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <ProSidebar>
        <Menu iconShape="square">
          <MenuItem icon={<FaPlusSquare size="1.5rem" />}>
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
