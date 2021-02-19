import styled from "styled-components";

const ProjectNavLink = styled.a`
  color: ${(props) => props.theme.colors.light};
  letter-spacing: 0.2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  white-space: nowrap;
  cursor: pointer;
  font: 700 16px Roboto Mono, sans-serif;
  &.active {
    color: ${(props) => props.theme.colors.primary};
  }
  :hover {
    color: ${(props) => props.theme.colors.primary};
    text-decoration: none;
  }
`;

export default ProjectNavLink;
