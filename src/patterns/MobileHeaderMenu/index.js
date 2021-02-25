import React from "react";
import { injectIntl, FormattedMessage } from "react-intl";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  FaFacebookF,
  FaInfo,
  FaTwitter,
  FaGithub,
  FaTv,
  FaYoutube,
} from "react-icons/fa";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 10;
  background: ${(props) => props.theme.colors.background};
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
const MenuButton = styled.a`
  display: flex;
  width: 100vw;
  height: 100px;
  font: 600 16px Roboto, sans-serif;
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.light};
  align-items: center;

  :hover {
    cursor: pointer;
    background: ${(props) => props.theme.colors.primary};
    text-decoration: none;
    color: ${(props) => props.theme.colors.light};
  }
`;
function MobileHeaderMenu({ show }) {
  return (
    <div>
      {show ? (
        <Container>
          <ul>
            <li>
              <MenuButton>
                <FaTv
                  size="1.3rem"
                  style={{ marginLeft: "20%", marginRight: "20px" }}
                />
                <FormattedMessage id="PRESENTATION_CAPITALIZED" />
              </MenuButton>
            </li>
            <li>
              <MenuButton>
                <FaInfo
                  size="1.1rem"
                  style={{ marginLeft: "20%", marginRight: "20px" }}
                />
                <FormattedMessage id="ABOUT_CAPITALIZED" />
              </MenuButton>
            </li>
            <li>
              <MenuButton>
                <FaFacebookF
                  size="1.3rem"
                  style={{ marginLeft: "20%", marginRight: "20px" }}
                />
                Facebook
              </MenuButton>
            </li>
            <li>
              <MenuButton>
                <FaTwitter
                  size="1.3rem"
                  style={{ marginLeft: "20%", marginRight: "20px" }}
                />
                Twitter
              </MenuButton>
            </li>
            <li>
              <MenuButton>
                <FaGithub
                  size="1.3rem"
                  style={{ marginLeft: "20%", marginRight: "20px" }}
                />
                Github
              </MenuButton>
            </li>
            <li>
              <MenuButton>
                <FaYoutube
                  size="1.3rem"
                  style={{ marginLeft: "20%", marginRight: "20px" }}
                />
                Youtube
              </MenuButton>
            </li>
          </ul>
        </Container>
      ) : null}
    </div>
  );
}

export default injectIntl(MobileHeaderMenu);

MobileHeaderMenu.propTypes = {
  show: PropTypes.bool,
};
MobileHeaderMenu.defaultProps = {
  show: false,
};
