import styled from "styled-components";

const RightNavMenu = styled.div`
  position: absolute;
  right: 20px;
  margin-top: 10px;
  display: flex;
  @media screen and (max-width: 860px) {
    display: none;
  }
`;

export default RightNavMenu;
