import React from "react";
import { PropTypes } from "prop-types";
import { injectIntl, FormattedMessage } from "react-intl";

// import Link from "next/link";

import styled from "styled-components";
import {
  Nav,
  NavLink,
  Bars,
  LeftNavMenu,
  ProjectNavLink,
  IconsPack,
} from "../../components/NavbarElements";

const BarsButton = styled.a``;

const Navbar = ({ showMobileMenu }) => (
  <>
    <Nav>
      <ProjectNavLink href="/">
        <FormattedMessage id="IMS_PROJECT" />
      </ProjectNavLink>
      <LeftNavMenu>
        <NavLink>
          <FormattedMessage id="PRESENTATION" />
        </NavLink>
        <NavLink>
          <FormattedMessage id="ABOUT" />
        </NavLink>
      </LeftNavMenu>
      <IconsPack className="ml-5" />
      <BarsButton onClick={() => showMobileMenu()} type="button">
        <Bars />
      </BarsButton>
    </Nav>
  </>
);

export default injectIntl(Navbar);

Navbar.defaultProps = {
  showMobileMenu: () => null,
};
Navbar.propTypes = {
  showMobileMenu: PropTypes.func,
};
