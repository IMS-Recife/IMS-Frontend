import styled from "styled-components";

const NavLink = styled.a`
  color: ${(props) => props.theme.colors.primary};
  letter-spacing: 0.2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
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

export default NavLink;
