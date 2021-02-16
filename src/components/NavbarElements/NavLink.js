import styled from "styled-components";

const NavLink = styled.a`
  color: #1f81e8;
  letter-spacing: 0.2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font: 700 16px Roboto Mono, sans-serif;
  &.active {
    color: #fff;
  }
  :hover {
    color: #fff;
    text-decoration: none;
  }
`;

export default NavLink;
