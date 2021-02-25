import React from "react";
import { injectIntl, FormatMessage } from "react-intl";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: calc(100vh);
  z-index: 10;
  background: ${(props) => props.theme.colors.background};
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
const MenuButton = styled.a`
  display: flex;
  width: 100vw;
  height: 70px;
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.light};
  border: none;
  justify-content: center;
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
              <MenuButton>Olá</MenuButton>
            </li>
            <li>
              <MenuButton>Olá</MenuButton>
            </li>
            <li>
              <MenuButton>Olá</MenuButton>
            </li>
            <li>
              <MenuButton>Olá</MenuButton>
            </li>
            <li>
              <MenuButton>Olá</MenuButton>
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
