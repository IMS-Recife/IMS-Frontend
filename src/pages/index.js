import Head from "next/head";
import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 100px;
  color: #f7ec45;
`;

const Paragraph = styled.p`
  font-size: 40px;
  color: #ffffff;
  margin-left: 40px;
`;

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Title>Homepage IMS</Title>
        <Paragraph>isso é um teste</Paragraph>
      </main>
    </div>
  );
}
