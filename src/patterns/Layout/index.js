import { injectIntl, FormattedMessage, useIntl } from "react-intl";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import PropTypes from "prop-types";
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
import { MaterialUISelect } from "../../components/Selects";

const ArrowButton = styled.button`
  background: none;
  border: none;
  width: 1.5rem;
  height: 1.5rem;
`;

const Div = styled.div`
  @media screen and (max-width: 850px) {
    display: none;
  }
`;

const Hr = styled.hr`
  border: 1px solid ${(props) => props.theme.colors.primary};
  margin-left: 22px;
  margin-top: 5px;
  margin-bottom: 5px;
  width: 80%;
`;

// TODO pass the bigCardClassName to the children component as props
function Layout({ children }) {
  const intl = useIntl();
  const [collapseSideBar, setCollapseSideBar] = useState(false);
  const [sideBarClassName, setSideBarClassName] = useState(
    "col-2 col-md-2 col-lg-4 col-xl-2 m-0 p-0"
  );
  const [bigCardClassName, setBigCardClassName] = useState(
    "col-12 col-sm-10 col-md-10 col-lg-8 col-xl-10 ml-0"
  );

  useEffect(() => {
    if (collapseSideBar) {
      setSideBarClassName("col-2 col-md-2 col-lg-2 col-xl-1 m-0 p-0");
      setBigCardClassName(
        "col-12 col-sm-10 col-md-10 col-lg-10 col-xl-11 ml-0"
      );
    } else {
      setSideBarClassName("col-2 col-sm-5 col-md-4 col-lg-4 col-xl-2 m-0 p-0");
      setBigCardClassName("col-12 col-sm-7 col-md-8 col-lg-8 col-xl-10 ml-0");
    }
  }, [collapseSideBar]);
  return (
    <Div>
      <a href="http://www.recife.pe.gov.br/" target="_blank" rel="noreferrer">
        <img
          src="/prefeiturarecife.png"
          alt="prefeitura do recife"
          width="70px"
          height="70px"
          className="rounded"
          style={{
            marginTop: "20px",
            marginLeft: "40px",
            display: "inline-block",
          }}
        />
      </a>
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
        <div className="row mt-3">
          <div className={sideBarClassName}>
            <ProSidebar
              style={{ marginLeft: "35px", marginTop: "0px" }}
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
                  icon={
                    <FaPlusSquare
                      size="1.8rem"
                      title={intl.formatMessage({ id: "ADD_INDICATOR" })}
                    />
                  }
                >
                  <FormattedMessage id="ADD_INDICATOR" />
                </MenuItem>
                {!collapseSideBar && <Hr />}

                <MenuItem
                  className="mt-2"
                  icon={
                    <FaBuffer
                      size="1.8rem"
                      title={intl.formatMessage({ id: "SHOW_ALL" })}
                    />
                  }
                >
                  <FormattedMessage id="SHOW_ALL" />
                </MenuItem>
                <MenuItem
                  className="mt-2"
                  icon={
                    <FaChartBar
                      size="1.8rem"
                      title={intl.formatMessage({ id: "ANALYSIS" })}
                    />
                  }
                >
                  <FormattedMessage id="ANALYSIS" />
                </MenuItem>
                <MenuItem
                  className="mt-2"
                  icon={
                    <FaChartLine
                      size="1.8rem"
                      title={intl.formatMessage({ id: "SIRD" })}
                    />
                  }
                >
                  <FormattedMessage id="SIRD" />
                </MenuItem>
                <MenuItem
                  className="mt-2"
                  icon={
                    <FaCity
                      size="1.8rem"
                      title={intl.formatMessage({ id: "NEIGHBORHOODS" })}
                    />
                  }
                >
                  <FormattedMessage id="NEIGHBORHOODS" />
                </MenuItem>
                <MenuItem
                  className="mt-2"
                  icon={
                    <FaMapMarkedAlt
                      size="1.8rem"
                      title={intl.formatMessage({ id: "MAP" })}
                    />
                  }
                >
                  <FormattedMessage id="MAP" />
                </MenuItem>
              </Menu>
            </ProSidebar>
          </div>
          {children}
        </div>
      </Container>
    </Div>
  );
}

export default injectIntl(Layout);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
