import { injectIntl } from "react-intl";
import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

export const Container = styled.div`
  z-index: 0;
  opacity: 0.2;
`;

function Plans() {
  return (
    <>
      <Layout>
        <div
          className="m-16 bg-primary-gray shadow-xl p-8"
          style={{
            minHeight: "calc(100vh - 264px)",
          }}
        >
          <h1 className="uppercase text-primary-text">Planos</h1>
          <p>
            Nessa página estão listados os Planos em desenvolvimento e em
            vigência na cidade do Recife. Estão disponíveis os produtos de cada
            etapa da elaboração dos planos, assim como indicadores relativos ao
            seu processo de elaboração ou à sua fase de implementação. Todos os
            arquivos contratados no escopo dos planos podem ser acessados, além
            da espacialização dos elementos do plano na visualização
            georreferenciada.
          </p>
        </div>
      </Layout>
    </>
  );
}
export default injectIntl(Plans);
