import styled from "styled-components";

const LeftNavMenu = styled.div`
  padding: 0.5rem calc((60vw - 900px) / 2);

  display: flex;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export default LeftNavMenu;
