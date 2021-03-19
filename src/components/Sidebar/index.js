import React from "react";
import { Menu, MenuItem, ProSidebar } from "react-pro-sidebar";
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
import { FormattedMessage, useIntl } from "react-intl";
import Link from "next/link";
import styled from "styled-components";
import useLayout from "../../contexts/layout";

const ArrowButton = styled.button`
  background: none;
  border: none;
  width: 1.5rem;
  height: 1.5rem;
`;

const Hr = styled.hr`
  border: 1px solid ${(props) => props.theme.colors.primary};
  margin-left: 22px;
  margin-top: 5px;
  margin-bottom: 5px;
  width: 80%;
`;
const StyledProSidebar = styled(ProSidebar)`
  margin-top: 0px;
  @media (min-width: 768px) {
    margin-left: 35px;
  }
`;

const Sidebar = () => {
  const { collapseSideBar, setCollapseSideBar } = useLayout();

  const intl = useIntl();
  return (
    <StyledProSidebar
      collapsed={collapseSideBar}
      breakPoint="sm"
      toggled="false"
    >
      <Menu iconShape="square">
        <ArrowButton
          type="button"
          onClick={() => setCollapseSideBar((prevState) => !prevState)}
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
        <Link href="/covid">
          <MenuItem
            className="mt-2"
            icon={
              <FaChartBar
                size="1.8rem"
                title={intl.formatMessage({ id: "COVID" })}
              />
            }
          >
            <FormattedMessage id="COVID" />
          </MenuItem>
        </Link>
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
        <Link href="/map">
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
        </Link>
      </Menu>
    </StyledProSidebar>
  );
};

export default Sidebar;
