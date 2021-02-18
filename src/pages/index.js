import Head from "next/head";
import React from "react";
import { ProSidebar, MenuItem, Menu } from "react-pro-sidebar";
import {
  FaGem,
  FaChartBar,
  FaChartLine,
  FaMapMarkedAlt,
  FaPlusSquare,
} from "react-icons/fa";
import Navbar from "../patterns/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <ProSidebar>
        <Menu iconShape="square">
          <MenuItem icon={<FaPlusSquare size="1.5rem" />}>Dashboard</MenuItem>
          <MenuItem icon={<FaGem size="1.5rem" />}>Dashboard</MenuItem>
          <MenuItem icon={<FaChartBar size="1.5rem" />}>Dashboard</MenuItem>
          <MenuItem icon={<FaChartLine size="1.5rem" />}>Dashboard</MenuItem>
          <MenuItem icon={<FaGem size="1.5rem" />}>Dashboard</MenuItem>
          <MenuItem icon={<FaMapMarkedAlt size="1.5rem" />}>Dashboard</MenuItem>
        </Menu>
      </ProSidebar>
    </div>
  );
}
