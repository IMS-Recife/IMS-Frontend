import styled from "styled-components";

const ProjectNavLink = styled.a`
  color: #fff;
  letter-spacing: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: start;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font: 700 16px Roboto Mono, sans-serif;
  &.active {
    color: #1f81e8;
  }
  :hover {
    color: #1f81e8;
    text-decoration: none;
  }
`;

export default ProjectNavLink;
