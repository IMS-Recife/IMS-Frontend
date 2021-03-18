import React from "react";
import { injectIntl, FormattedMessage } from "react-intl";

// import Link from "next/link";

import {
  Nav,
  NavLink,
  LeftNavMenu,
  ProjectNavLink,
  IconsPack,
} from "../../components/NavbarElements";
import { LanguagesDropdownSelect } from "../../components/Selects";

const Navbar = () => (
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
      <LanguagesDropdownSelect />
      <IconsPack />
    </Nav>
  </>
);

export default injectIntl(Navbar);
