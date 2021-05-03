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
              style={{ color: "#00539f", marginTop: "20px" }}
              icon={
                collapseSideBar ? (
                  <FaAngleRight style={{ color: "#00539f" }} size="2rem" />
                ) : (
                  <FaAngleLeft style={{ color: "#00539f" }} size="2rem" />
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
                size="2rem"
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
                size="1.6rem"
                title={intl.formatMessage({ id: "PLANS" })}
              />
            }
          >
            <FormattedMessage id="COVID" />
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
