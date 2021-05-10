import React from "react";
import {
  Menu,
  MenuItem,
  ProSidebar,
  SidebarContent,
  SubMenu,
} from "react-pro-sidebar";
import { GoSearch } from "react-icons/go";
import { RiMoneyDollarCircleLine, RiVirusFill } from "react-icons/ri";
import { BsFileEarmark } from "react-icons/bs";
import { VscHome } from "react-icons/vsc";
import { FaAngleLeft, FaAngleRight, FaCity } from "react-icons/fa";

import { FormattedMessage, useIntl } from "react-intl";
import Link from "next/link";
import styled from "styled-components";
import useLayout from "../../contexts/layout";

const ArrowButton = styled.button`
  color: ${(props) => props.theme.colors.primary};
  background: none;
  border: none;
  width: 1.5rem;
  height: 1.5rem;
`;

const StyledProSidebar = styled(ProSidebar)`
  @media (min-width: 768px) {
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
        <Menu iconShape="round">
          <ArrowButton
            type="button"
            onClick={() => setCollapseSideBar((prevState) => !prevState)}
          >
            <MenuItem
              style={{ color: "#fff", marginTop: "20px" }}
              icon={
                collapseSideBar ? (
                  <FaAngleRight style={{ color: "#fff" }} size="2.5rem" />
                ) : (
                  <FaAngleLeft style={{ color: "#fff" }} size="2.5rem" />
                )
              }
            />
          </ArrowButton>
          <MenuItem
            className="mt-2"
            icon={
              <GoSearch
                style={{ color: "#fff" }}
                size="1.8rem"
                title={intl.formatMessage({ id: "SEARCH" })}
              />
            }
          />
          <MenuItem
            className="mt-2"
            icon={
              <VscHome
                style={{ color: "#fff" }}
                size="1.9rem"
                title={intl.formatMessage({ id: "HOME" })}
              />
            }
          >
            <FormattedMessage id="HOME" />
          </MenuItem>
          <MenuItem
            className="mt-2"
            icon={
              <BsFileEarmark
                style={{ color: "#fff" }}
                size="1.7rem"
                title={intl.formatMessage({ id: "PLANS" })}
              />
            }
          >
            <FormattedMessage id="PLANS" />
          </MenuItem>
          <SubMenu
            title={intl.formatMessage({ id: "PROJECTS" })}
            className="mt-2"
            icon={
              <FaCity
                size="1.5rem"
                title={intl.formatMessage({ id: "PROJECTS" })}
              />
            }
          >
            <SubMenu style={{ color: "#fff" }} title="PROJETOS PUBLICOS">
              <Link href="/map">
                <MenuItem>
                  <FormattedMessage
                    style={{ color: "#fff" }}
                    id="PUBLIC_TOURS_REQUALIFICATION"
                  />
                </MenuItem>
              </Link>
            </SubMenu>
            <MenuItem style={{ color: "#fff" }}>
              <FormattedMessage id="PUBLIC_PLANS" />
            </MenuItem>
            <MenuItem style={{ color: "#fff" }}>
              <FormattedMessage id="OTHER_BASES" />
            </MenuItem>
          </SubMenu>
          <Link href="/economy">
            <MenuItem
              className="mt-2"
              icon={
                <RiMoneyDollarCircleLine
                  size="1.8rem"
                  title={intl.formatMessage({ id: "ECONOMY" })}
                />
              }
            >
              <FormattedMessage id="ECONOMY" />
            </MenuItem>
          </Link>
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
        </Menu>
      </SidebarContent>
    </StyledProSidebar>
  );
};

export default Sidebar;
