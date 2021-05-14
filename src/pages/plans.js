import { injectIntl } from "react-intl";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Layout from "../components/Layout";

export const Container = styled.div`
  z-index: 0;
  opacity: 0.2;
`;

function Plans() {
  return (
    <>
      <Container>
        <Image
          alt="Mountains"
          src="/mapaims.jpeg"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </Container>
      <Layout />
    </>
  );
}
export default injectIntl(Plans);
