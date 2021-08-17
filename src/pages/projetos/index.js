/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import Select from "react-select";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import usePreviousPath from "../../contexts/previousPath";
import Breadcrumbs from "../../components/Breadcrumbs";

const GreenCircle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: relative;
  background-color: ${(props) => props.theme.colors.secondaryLight};
`;
const YellowCircle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: relative;
  background-color: ${(props) => props.theme.colors.statusColor1};
`;

const Projects = () => {
  const { handleChangePreviousPath } = usePreviousPath();
  const router = useRouter();
  return (
    <Layout>
      <div
        className="flex flex-column"
        style={{
          backgroundImage: `url("/mapaimsBW.jpeg")`,
          minHeight: "calc(100vh - 136px)",
        }}
      >
        <Breadcrumbs />
        <div className="bg-primary-gray shadow-xl min-h-full m-16 mt-3">
          <div className="px-5 pt-5 mb-0">
            <h1 className="font-raleway uppercase text-4xl font-bold text-primary-text">
              Projetos
            </h1>
            <div className="flex">
              <p className="w-1/3 mt-3">
                Nessa página estão listados os Projetos em elaboração e em
                execução na cidade do Recife. Ao acessar a área de cada projeto
                você terá acesso aos produtos de cada etapa da sua elaboração,
                assim como indicadores relativos ao monitoramento da sua
                contratação e execução. Todos os arquivos contratados no escopo
                dos planos estão em anexo, além da espacialização dos elementos
                do projeto na visualização georreferenciada.
              </p>
              <select
                id="most_recent_update"
                className="bg-transparent border rounded-xl p-2 border-black border-8 self-end ml-auto"
              >
                <option>Atualização mais recente</option>
              </select>
            </div>
          </div>
          <div className="mt-1">
            <table className="m-auto  w-100">
              <thead>
                <tr className="bg-primary-gray shadow-sm">
                  <th className="p-3" style={{ width: "200px" }}>
                    <label htmlFor="name" className="uppercase">
                      Nome
                    </label>
                    <Select
                      instanceId="name"
                      className="mr-2"
                      closeMenuOnSelect={false}
                    />
                  </th>
                  <th className="p-3" style={{ width: "200px" }}>
                    <label htmlFor="status" className="uppercase">
                      Status
                    </label>
                    <Select
                      instanceId="status"
                      className="mr-2"
                      closeMenuOnSelect={false}
                    />
                  </th>
                  <th className="p-3" style={{ width: "200px" }}>
                    <label htmlFor="organization" className="uppercase">
                      Organização
                    </label>
                    <Select
                      instanceId="organization"
                      className="mr-2"
                      closeMenuOnSelect={false}
                    />
                  </th>
                  <th className="p-3" style={{ width: "300px" }}>
                    <label htmlFor="thematic_group" className="uppercase">
                      Grupo Temático
                    </label>
                    <div className="flex flex-row">
                      <div style={{ width: "300px" }}>
                        <Select
                          instanceId="thematic_group"
                          className="mr-2"
                          closeMenuOnSelect={false}
                        />
                      </div>
                      <button
                        className="ml-4 bg-primary-text text-white p-2 px-5 rounded-2xl"
                        type="button"
                      >
                        Pesquisar
                      </button>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-400">
                  <td className="p-4 pt-5 h-100">
                    <Link href="/projetos/calcadalegal">
                      <button
                        type="button"
                        className="hover:font-bold"
                        onClick={() => handleChangePreviousPath(router.asPath)}
                      >
                        <p className="cursor-pointer hover:font-bold uppercase">
                          Calçada Legal
                        </p>
                      </button>
                    </Link>
                  </td>
                  <td className="p-4 pt-5">
                    <div className="flex flex-row ml-5">
                      <YellowCircle className="mr-2" />
                      <p className="m-0">Em execução</p>
                    </div>
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
                    <Link href="/projetos/parquecapibaribe">
                      <button
                        type="button"
                        className="hover:font-bold"
                        onClick={() => handleChangePreviousPath(router.asPath)}
                      >
                        <p className="cursor-pointer hover:font-bold uppercase">
                          Parque Capibaribe
                        </p>
                      </button>
                    </Link>
                  </td>
                  <td className="p-4">
                    <div className="flex flex-row ml-5">
                      <GreenCircle className="mr-2" />
                      <p className="m-0">Concluído</p>
                    </div>
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
                    <p className="uppercase">Habitação de interesse social</p>
                  </td>
                  <td className="p-4">
                    <div className="flex flex-row ml-5">
                      <YellowCircle className="mr-2" />
                      <p className="m-0">Em execução</p>
                    </div>
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
                    <p className="uppercase">
                      Requalificação Av. Cde. da Boa Vista
                    </p>
                  </td>
                  <td className="p-4">
                    <div className="flex flex-row ml-5">
                      <GreenCircle className="mr-2" />
                      <p className="m-0">Concluído</p>
                    </div>
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
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
