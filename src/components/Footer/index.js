import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme.colors.secondaryDark};
  height: 200px;
  width: 100%;
  @media (min-width: 850px) {
    display: none;
  }
`;

function Footer() {
  return (
    <Container className="items-center justify-center">IMS|MVP|2021</Container>
  );
}

export default Footer;
