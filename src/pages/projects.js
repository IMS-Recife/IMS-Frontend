import React from "react";
import Layout from "../components/Layout";

const Projects = () => (
  <Layout>
    <div
      className="flex"
      style={{
        backgroundImage: `url("/mapaims.jpeg")`,
        minHeight: "calc(100vh - 136px)",
      }}
    >
      <div className="bg-primary-gray shadow-xl min-h-full p-8 m-16">
        <h1 className="uppercase text-primary-text">Projetos</h1>
        <p>
          Nessa página estão listados os Projetos em elaboração e em execução na
          cidade do Recife. Ao acessar a área de cada projeto você terá acesso
          aos produtos de cada etapa da sua elaboração, assim como indicadores
          relativos ao monitoramento da sua contratação e execução. Todos os
          arquivos contratados no escopo dos planos estão em anexo, além da
          espacialização dos elementos do projeto na visualização
          georreferenciada.
        </p>
      </div>
    </div>
  </Layout>
);

export default Projects;
