import Head from "next/head";
import { injectIntl, FormattedMessage } from "react-intl";
import React, { useState } from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";

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
        width="70px"
        height="70px"
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
          marginTop: "25px",
        }}
        className="mt-5 mt-sm-3"
      >
        <span
          style={{
            font: "700 10px Roboto, sans-serif",
            color: "#87c2ff",
            display: "block",
            textAlign: "center",
          }}
          className="mt-5 mt-sm-3"
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
      <Container fluid>
        <div className="row">
          <div className="col-2 col-md-2 col-lg-2 m-0 p-0">
            <ProSidebar
              style={{ marginLeft: "30px", marginTop: "0px" }}
              collapsed={collapseSideBar}
            >
              <Menu iconShape="square">
                <ArrowButton
                  type="button"
                  onClick={() => setCollapseSideBar(!collapseSideBar)}
                >
                  <MenuItem
                    style={{ color: "#FFFFFF", marginTop: "20px" }}
                    icon={
                      collapseSideBar ? (
                        <FaAngleRight size="2rem" />
                      ) : (
                        <FaAngleLeft size="2rem" />
                      )
                    }
                  />
                </ArrowButton>
                <MenuItem
                  className="mt-2"
                  style={{ color: "#FEEC47" }}
                  icon={<FaPlusSquare size="1.8rem" />}
                >
                  <FormattedMessage id="ADD_INDICATOR" />
                </MenuItem>
                <MenuItem className="mt-2" icon={<FaBuffer size="1.8rem" />}>
                  <FormattedMessage id="SHOW_ALL" />
                </MenuItem>
                <MenuItem className="mt-2" icon={<FaChartBar size="1.8rem" />}>
                  <FormattedMessage id="ANALYSIS" />
                </MenuItem>
                <MenuItem className="mt-2" icon={<FaChartLine size="1.8rem" />}>
                  <FormattedMessage id="SIRD" />
                </MenuItem>
                <MenuItem className="mt-2" icon={<FaCity size="1.8rem" />}>
                  <FormattedMessage id="NEIGHBORHOODS" />
                </MenuItem>
                <MenuItem
                  className="mt-2"
                  icon={<FaMapMarkedAlt size="1.8rem" />}
                >
                  <FormattedMessage id="MAP" />
                </MenuItem>
              </Menu>
            </ProSidebar>
          </div>
          <div className="col-12 col-sm-10 col-md-10 ml-0">
            <div
              className="card card-responsive p-4 pt-5 ml-0"
              style={{
                marginBottom: "40px",
                marginLeft: "0px",
              }}
            >
              <div className="row">
                <div
                  className="card card-custom bg-secondary col-12 m-0 mb-3 col-md-5 mr-md-2 m-xl-2 ml-xl-5 "
                  style={{ height: "250px" }}
                />
                <div
                  className="card card-custom bg-primary col-12 m-0 mb-3 col-md-6  m-lg-0 ml-xl-2 mt-xl-2"
                  style={{ height: "250px" }}
                />
                <div
                  className="card card-custom bg-info col-12 m-0 mb-3 col-md-4 mr-md-2 m-xl-2 ml-xl-5 "
                  style={{ height: "300px" }}
                />
                <div
                  className="card card-custom bg-success col-12 m-0 mb-3 col-md-7  m-xl-2"
                  style={{ height: "300px" }}
                />
                <div
                  className="card card-custom bg-warning col-12 m-0 mb-3 col-md-4 mr-md-2 m-xl-2 ml-xl-5 mb-xl-4 "
                  style={{ height: "300px" }}
                />
                <div
                  className="card card-custom bg-danger col-12 m-0 mb-3 col-md-7  m-xl-2 mb-4"
                  style={{ height: "300px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
export default injectIntl(Home);
