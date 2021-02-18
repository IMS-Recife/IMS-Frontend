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
import MaterialUISelect from "../components/MaterialUISelect";
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
      <img
        src="/prefeiturarecife.png"
        alt="prefeitura do recife"
        width="100px"
        height="100px"
        className="rounded"
        style={{
          marginTop: "20px",
          marginLeft: "20px",
          display: "inline-block",
        }}
      />
      <div
        style={{
          position: "absolute",
          marginTop: "25px",
          marginLeft: "20px",
          display: "inline-block",
        }}
      >
        <MaterialUISelect />
      </div>

      <div
        style={{
          display: "inline-block",
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <span
          style={{
            marginTop: "10px",
            font: "700 10px Roboto, sans-serif",
            color: "#87c2ff",
            display: "block",
            textAlign: "center",
          }}
        >
          <FormattedMessage id="LAST_UPDATE" />
        </span>
        <span
          style={{
            marginTop: "5px",
            font: "500 18px Roboto, sans-serif",
            display: "block",
            textAlign: "center",
          }}
        >
          03/01/2020 23h59
        </span>
      </div>
      <div className="row">
        <ProSidebar style={{ marginLeft: "20px" }} collapsed={collapseSideBar}>
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
        <div className="container position-sticky mt-5">
          <div className="row">
            <div className="col-sm-12">
              <div className="card card-responsive" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default injectIntl(Home);
