import React from "react";
import { injectIntl, FormattedMessage } from "react-intl";
import styled from "styled-components";

import IconsPack from "../IconsPack";
import { LanguagesDropdownSelect } from "../Selects";

const Nav = styled.nav`
  background: ${(props) => props.theme.colors.lead};
  height: 52px;
`;

const ProjectNavLink = styled.a`
  color: ${(props) => props.theme.colors.light};
  letter-spacing: 0.2rem;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;
  font: 700 16px Roboto Mono, sans-serif;
  :hover {
    color: ${(props) => props.theme.colors.lightGrey};
    text-decoration: none;
  }
`;

const Navbar = () => (
  <>
    <Nav className="grid grid-cols-2 w-100">
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
