import React from "react";
import {
  Menu,
  MenuItem,
  ProSidebar,
  SidebarContent,
  SubMenu,
} from "react-pro-sidebar";
import {
  FaAngleLeft,
  FaAngleRight,
  FaCity,
  FaDollarSign,
  FaInfoCircle,
} from "react-icons/fa";
import { RiVirusFill } from "react-icons/ri";
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

const StyledProSidebar = styled(ProSidebar)`
  margin-top: 0px;
  @media (min-width: 768px) {
    margin-left: 35px;
  }
  @media (max-width: 768px) {
    position: absolute;
    top: 0;
  }
`;

const Sidebar = () => {
  const {
    collapseSideBar,
    setCollapseSideBar,
    toggledSidebar,
    handleToggleSidebar,
  } = useLayout();

  const intl = useIntl();
  return (
    <StyledProSidebar
      collapsed={collapseSideBar}
      breakPoint="md"
      toggled={toggledSidebar}
      onToggle={handleToggleSidebar}
    >
      <SidebarContent>
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

          <Link href="/covid">
            <MenuItem
              className="mt-2"
              icon={
                <RiVirusFill
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
              <FaDollarSign
                size="1.8rem"
                title={intl.formatMessage({ id: "ECONOMY" })}
              />
            }
          >
            <FormattedMessage id="ECONOMY" />
          </MenuItem>
          <SubMenu
            title={intl.formatMessage({ id: "URBANISM" })}
            className="mt-2"
            icon={
              <FaCity
                size="1.8rem"
                title={intl.formatMessage({ id: "URBANISM" })}
              />
            }
          >
            <SubMenu title="PROJETOS PUBLICOS">
              {" "}
              <MenuItem>
                <FormattedMessage id="PUBLIC_TOURS_REQUALIFICATION" />
              </MenuItem>
            </SubMenu>
            <MenuItem>
              <FormattedMessage id="PUBLIC_PLANS" />
            </MenuItem>
            <MenuItem>
              <FormattedMessage id="OTHER_BASES" />
            </MenuItem>
          </SubMenu>
          <MenuItem
            className="mt-2"
            icon={
              <FaInfoCircle
                size="1.8rem"
                title={intl.formatMessage({ id: "ABOUT" })}
              />
            }
          >
            <FormattedMessage id="ABOUT" />
          </MenuItem>
        </Menu>
      </SidebarContent>
    </StyledProSidebar>
  );
};

export default Sidebar;
