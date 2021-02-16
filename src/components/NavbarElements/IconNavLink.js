import styled from "styled-components";

const NavLink = styled.a`
  color: #1f81e8;
  display: flex;
  align-items: center;
  padding: 0 0.2rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #fff;
  }
  :hover {
    color: #fff;
  }
`;

export default NavLink;
