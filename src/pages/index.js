import Head from "next/head";
import React from "react";
import { ProSidebar, SubMenu, MenuItem, Menu } from "react-pro-sidebar";
import { FaHeart, FaGem } from "react-icons/fa";
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
          <SubMenu title="Components" icon={<FaGem />}>
            <MenuItem>Component 1</MenuItem>
            <SubMenu title="Sub Component 1" icon={<FaHeart />}>
              {/* you can have more nested submenus ... */}
            </SubMenu>
          </SubMenu>
        </Menu>
      </ProSidebar>
    </div>
  );
}
