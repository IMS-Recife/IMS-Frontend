import React from "react";
import { injectIntl, FormattedMessage } from "react-intl";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaGithubSquare,
  FaYoutubeSquare,
} from "react-icons/fa";

// import Link from "next/link";

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  ProjectNavLink,
  IconNavLink,
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
        <IconNavLink>
          <FaFacebookSquare size="1.6em" title="Facebook" />
        </IconNavLink>
        <IconNavLink>
          <FaTwitterSquare size="1.6em" title="Twitter" />
        </IconNavLink>
        <IconNavLink>
          <FaGithubSquare size="1.6em" title="Github" />
        </IconNavLink>
        <IconNavLink>
          <FaYoutubeSquare size="1.6em" title="Youtube" />
        </IconNavLink>
      </NavMenu>
      <Bars />
    </Nav>
  </>
);

export default injectIntl(Navbar);
