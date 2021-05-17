import React from "react";
import { Menu, MenuItem, ProSidebar, SidebarContent } from "react-pro-sidebar";
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
  height: 100vh !important;
  @media (min-width: 768px) {
  }
  @media (max-width: 768px) {
    position: absolute;
    top: 0;
  }
`;

const StyledMenuItem = styled(MenuItem)`
  padding: 0px;
  :hover {
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
      className="h-screen sticky"
      collapsed={collapseSideBar}
      breakPoint="md"
      toggled={toggledSidebar}
      onToggle={handleToggleSidebar}
    >
      <SidebarContent className="pt-5">
        <Menu iconShape="round">
          <ArrowButton
            type="button"
            onClick={() => setCollapseSideBar((prevState) => !prevState)}
          >
            <MenuItem
              style={{ color: "#fff", marginTop: "20px" }}
              icon={
                collapseSideBar ? (
                  <FaAngleRight style={{ color: "#fff" }} size="2rem" />
                ) : (
                  <FaAngleLeft style={{ color: "#fff" }} size="2rem" />
                )
              }
            />
          </ArrowButton>
          <StyledMenuItem
            className="mt-2"
            icon={
              <GoSearch
                style={{ color: "#fff" }}
                size="1.8rem"
                title={intl.formatMessage({ id: "SEARCH" })}
              />
            }
          />
          <StyledMenuItem
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
          </StyledMenuItem>
          <StyledMenuItem
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
          </StyledMenuItem>
          <StyledMenuItem
            title={intl.formatMessage({ id: "PROJECTS" })}
            className="mt-2"
            icon={
              <FaCity
                size="1.5rem"
                title={intl.formatMessage({ id: "PROJECTS" })}
              />
            }
          >
            <FormattedMessage id="PROJECTS" />
          </StyledMenuItem>
          <Link href="/economy">
            <StyledMenuItem
              className="mt-2"
              icon={
                <RiMoneyDollarCircleLine
                  size="1.8rem"
                  title={intl.formatMessage({ id: "ECONOMY" })}
                />
              }
            >
              <FormattedMessage id="ECONOMY" />
            </StyledMenuItem>
          </Link>
          <Link href="/covid">
            <StyledMenuItem
              className="mt-2"
              icon={
                <RiVirusFill
                  size="1.8rem"
                  title={intl.formatMessage({ id: "COVID" })}
                />
              }
            >
              <FormattedMessage id="COVID" />
            </StyledMenuItem>
          </Link>
        </Menu>
      </SidebarContent>
    </StyledProSidebar>
  );
};

export default Sidebar;
