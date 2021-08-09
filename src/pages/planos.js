import { injectIntl } from "react-intl";
import React from "react";
import Layout from "../components/Layout";
import Breadcrumbs from "../components/Breadcrumbs";

function Plans() {
  return (
    <>
      <Layout>
        <div
          className="flex flex-column"
          style={{
            backgroundImage: `url("/mapaimsBW.jpeg")`,
            minHeight: "calc(100vh - 136px)",
          }}
        >
          <Breadcrumbs />
          <div
            className="m-16 mt-3 bg-primary-gray shadow-xl p-8"
            style={{
              minHeight: "calc(100vh - 264px)",
            }}
          >
            <div className="py-2 px-5">
              <h1 className="font-raleway uppercase text-4xl font-bold text-primary-text ">
                Planos
              </h1>
              <div className="flex">
                <p className="w-25 mt-3">
                  Nessa página estão listados os Planos em desenvolvimento e em
                  vigência na cidade do Recife. Estão disponíveis os produtos de
                  cada etapa da elaboração dos planos, assim como indicadores
                  relativos ao seu processo de elaboração ou à sua fase de
                  implementação. Todos os arquivos contratados no escopo dos
                  planos podem ser acessados, além da espacialização dos
                  elementos do plano na visualização georreferenciada.
                </p>
                <select className="bg-transparent border rounded-xl p-2 border-black border-8 self-start ml-auto mt-5">
                  <option>Atualização mais recente</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
export default injectIntl(Plans);
