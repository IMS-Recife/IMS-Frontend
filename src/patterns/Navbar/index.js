import React from "react";
import { injectIntl, FormattedMessage } from "react-intl";
import styled from "styled-components";
import Link from "next/link";

const Nav = styled.nav`
  background: #262f51;
  height: 60px;
  display: flex;
  justify-content: space-between;
`;

const ProjectNavLink = styled.a`
  color: #ffffff;
  display: inline;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;
  font: 700 16px Roboto mono, sans-serif;

  :hover {
    color: #1f81e8;
    text-decoration: none;
  }
`;
const NavLink = styled.a`
  color: #1f81e8;
  display: inline;
  align-items: center;
  text-decoration: none;
  padding: 0 3rem;
  cursor: pointer;
  font: 700 16px Roboto mono, sans-serif;

  :hover {
    text-decoration: none;
    color: #ffffff;
  }
`;

const Ul = styled.ul`
  list-style: none;
`;

const Li = styled.li`
  display: inline;
  text-align: center;
`;

function Navbar() {
  return (
    <div>
      <Nav>
        <div style={{ verticalAlign: "middle", position: "relative" }}>
          <Ul style={{ listStyleType: "none", marginTop: "25px" }}>
            <Li>
              <Link href="/#">
                <ProjectNavLink>
                  <FormattedMessage id="IMS_PROJECT" />/
                </ProjectNavLink>
              </Link>
            </Li>
            <Li>
              <Link href="/#">
                <NavLink>
                  <FormattedMessage id="PRESENTATION" />
                </NavLink>
              </Link>
            </Li>
            <Li>
              <Link href="/#">
                <NavLink>
                  <FormattedMessage id="ABOUT" />
                </NavLink>
              </Link>
            </Li>
          </Ul>
        </div>
      </Nav>
    </div>
  );
}

export default injectIntl(Navbar);
