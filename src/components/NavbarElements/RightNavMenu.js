import styled from "styled-components";

const RightNavMenu = styled.div`
  padding: 0.5rem 0px 0.5rem calc((160vw - 1000px) / 2);

  display: flex;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export default RightNavMenu;
