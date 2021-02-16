import React from "react";
import { injectIntl, FormattedMessage } from "react-intl";

// import Link from "next/link";

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  ProjectNavLink,
  IconsPack,
} from "../../components/NavbarElements";

const Navbar = () => (
  <>
    <Nav>
      <ProjectNavLink href="/">
        <FormattedMessage id="IMS_PROJECT" />
      </ProjectNavLink>
      <NavMenu>
        <NavLink>
          <FormattedMessage id="PRESENTATION" />
        </NavLink>
        <NavLink>
          <FormattedMessage id="ABOUT" />
        </NavLink>
      </NavMenu>
      <IconsPack className="ml-5" />
      <Bars />
    </Nav>
  </>
);

export default injectIntl(Navbar);
