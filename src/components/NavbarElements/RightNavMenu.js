import styled from "styled-components";

const RightNavMenu = styled.div`
  padding: 0.5rem calc((170vw - 1000px) / 2);

  display: flex;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export default RightNavMenu;
