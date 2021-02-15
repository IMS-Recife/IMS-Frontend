import Head from "next/head";
import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.css";
import PrefeituraRecife from "../assets/prefeiturarecife.png";

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
        <img src={PrefeituraRecife} alt="Prefeitura do Recife" />
        <Paragraph>isso é um teste</Paragraph>
        <button
          style={{ marginLeft: "50px" }}
          type="button"
          className="btn btn-success font-weight-bolder btn-lg"
        >
          Botão Teste Bootstrap
        </button>
      </main>
    </div>
  );
}
