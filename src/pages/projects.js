import React from "react";
import Select from "react-select";
import styled from "styled-components";
import Layout from "../components/Layout";

const SearchButton = styled.button`
  background: ${(props) => props.theme.colors.textColor1};
  color: #fff;
  padding: 10px 50px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
`;
const GreenCircle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: relative;
  background-color: ${(props) => props.theme.colors.secondaryLight};
  cursor: pointer;
`;
const YellowCircle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: relative;
  background-color: ${(props) => props.theme.colors.statusColor1};
  cursor: pointer;
`;

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
        <div className="mt-5">
          <table className="m-auto  w-100">
            <tr className="bg-primary-gray shadow p-5">
              <th className="p-3" style={{ width: "200px" }}>
                <label htmlFor="name">Nome</label>
                <Select id="name" className="mr-2" closeMenuOnSelect={false} />
              </th>
              <th className="p-3" style={{ width: "200px" }}>
                <label htmlFor="status">Status</label>
                <Select
                  id="status"
                  className="mr-2"
                  closeMenuOnSelect={false}
                />
              </th>
              <th className="p-3" style={{ width: "200px" }}>
                <label>Organização</label>
                <Select className="mr-2" closeMenuOnSelect={false} />
              </th>
              <th className="p-3" style={{ width: "300px" }}>
                <label>Grupo Temático</label>
                <div className="flex flex-row">
                  <div style={{ width: "300px" }}>
                    <Select className="mr-2" closeMenuOnSelect={false} />
                  </div>
                  <SearchButton className="ml-4" type="button">
                    Pesquisar
                  </SearchButton>
                </div>
              </th>
            </tr>
            <tr className="border-b border-gray-400">
              <td className="p-4 pt-5">
                <p>Calçada Legal</p>
              </td>
              <td className="flex flex-row p-4 pt-5">
                <YellowCircle className="mr-2" />
                <p className="">EM EXECUÇÃO</p>
              </td>
              <td className="p-4 pt-5">
                <p>
                  CTTU | Secretaria do Meio Ambiente | Secretaria de
                  Desenvolvimento
                </p>
              </td>
              <td className="p-4 pt-5">
                <p>
                  Mobilidade | Urbanismo | Meio ambiente | Acessibilidade |
                  Requalificação | Calçadas
                </p>
              </td>
            </tr>
            <tr className="border-b border-gray-400">
              <td className="p-4">
                <p>Habitação de interesse social</p>
              </td>
              <td className="flex flex-row p-4">
                <YellowCircle className="mr-2" />
                <p className="">EM EXECUÇÃO</p>
              </td>
              <td className="p-4">
                <p>
                  CTTU | Secretaria do Meio Ambiente | Secretaria de
                  Desenvolvimento
                </p>
              </td>
              <td className="p-4">
                <p>
                  Mobilidade | Urbanismo | Meio ambiente | Acessibilidade |
                  Requalificação | Calçadas
                </p>
              </td>
            </tr>
            <tr className="border-b border-gray-400">
              <td className="p-4">
                <p>Parque Capibaribe</p>
              </td>
              <td className="flex flex-row p-4">
                <GreenCircle className="mr-2" />
                <p className="">CONCLUÍDO</p>
              </td>
              <td className="p-4">
                <p>
                  CTTU | Secretaria do Meio Ambiente | Secretaria de
                  Desenvolvimento
                </p>
              </td>
              <td className="p-4">
                <p>
                  Mobilidade | Urbanismo | Meio ambiente | Acessibilidade |
                  Requalificação | Calçadas
                </p>
              </td>
            </tr>
            <tr className="border-b border-gray-400">
              <td className="p-4">
                <p>Requalificação Av. Cde. da Boa Vista</p>
              </td>
              <td className="flex flex-row p-4">
                <GreenCircle className="mr-2" />
                <p className="">CONCLUÍDO</p>
              </td>
              <td className="p-4">
                <p>
                  CTTU | Secretaria do Meio Ambiente | Secretaria de
                  Desenvolvimento
                </p>
              </td>
              <td className="p-4">
                <p>
                  Mobilidade | Urbanismo | Meio ambiente | Acessibilidade |
                  Requalificação | Calçadas
                </p>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </Layout>
);

export default Projects;
