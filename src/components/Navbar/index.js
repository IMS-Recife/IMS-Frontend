import React from "react";
import { injectIntl, FormattedMessage } from "react-intl";
import styled from "styled-components";

import { LanguagesDropdownSelect } from "../Selects";

const Nav = styled.nav`
  background: ${(props) => props.theme.colors.primaryLight};
  height: 52px;
`;

const ProjectNavLink = styled.a`
  color: ${(props) => props.theme.colors.secondary};
  letter-spacing: 0.2rem;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;
  font: 700 16px Roboto Mono, sans-serif;
  :hover {
    color: ${(props) => props.theme.colors.secondaryDark};
    text-decoration: none;
  }
`;

const NavLink = styled.a`
  color: ${(props) => props.theme.colors.textColor1};
  letter-spacing: 0.2rem;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;
  font: 700 16px Roboto Mono, sans-serif;
  :hover {
    color: ${(props) => props.theme.colors.primaryDark};
    text-decoration: none;
  }
`;

const Navbar = () => (
  <>
    <Nav className="grid grid-cols-2 w-100">
      <div className="flex items-center justify-start">
        <ProjectNavLink href="/">
          Integrated Management System - IMS
        </ProjectNavLink>
      </div>
      <div className="flex items-center justify-end mr-3">
        <LanguagesDropdownSelect />
        <NavLink href="/">Cadastre-se</NavLink>
        <NavLink href="/">Login</NavLink>
      </div>
    </Nav>
  </>
);

export default injectIntl(Navbar);
