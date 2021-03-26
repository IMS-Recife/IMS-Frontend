import React from "react";
import { injectIntl, FormattedMessage } from "react-intl";
import styled from "styled-components";

import IconsPack from "../IconsPack";
import { LanguagesDropdownSelect } from "../Selects";

const Nav = styled.nav`
  background: ${(props) => props.theme.colors.lead};
  height: 52px;
  width: 100vw;
`;

const ProjectNavLink = styled.a`
  color: ${(props) => props.theme.colors.light};
  letter-spacing: 0.2rem;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;
  font: 700 16px Roboto Mono, sans-serif;
  :hover {
    color: ${(props) => props.theme.colors.primary};
    text-decoration: none;
  }
`;

const NavLink = styled.a`
  color: ${(props) => props.theme.colors.primary};
  letter-spacing: 0.2rem;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;
  font: 700 16px Roboto Mono, sans-serif;
  &.active {
    color: ${(props) => props.theme.colors.light};
  }
  :hover {
    color: ${(props) => props.theme.colors.light};
    text-decoration: none;
  }
`;

const Navbar = () => (
  <>
    <Nav className="grid grid-cols-2">
      <div className="flex items-center justify-start">
        <ProjectNavLink href="/">
          <FormattedMessage id="IMS_PROJECT" />
        </ProjectNavLink>
      </div>
      <div className="flex items-center justify-end mr-3">
        <LanguagesDropdownSelect />
        <IconsPack />
      </div>
    </Nav>
  </>
);

export default injectIntl(Navbar);
