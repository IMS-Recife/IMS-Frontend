/* eslint-disable no-console */
import { injectIntl } from "react-intl";
import React, { useState } from "react";
import { StaticMap } from "react-map-gl";
import { GeoJsonLayer, ScatterplotLayer } from "@deck.gl/layers";
import { DeckGL } from "deck.gl";
import { VscClose } from "react-icons/vsc";
import styled from "styled-components";
import trees from "../../assets/Geojsons/passeiospublicos_arvores.json";
import streetPoles from "../../assets/Geojsons/passeiospublicos_postes.json";
import Breadcrumbs from "../common/Breadcrumbs";

const FilterSelect = styled.select`
  option:hover {
    background: #00711f;
  }
  option:focus {
    background: #00711f;
  }
  option:nth-child(even) {
    background: #c4c4c4;
  }
`;

const SmallInfoContainer = styled.div`
  background: ${(props) => props.theme.colors.primaryDarkGray};
  width: 450px;
  height: 100%;
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
const GreyCircle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: relative;
  background-color: ${(props) => props.theme.colors.primaryText};
  cursor: pointer;
`;

const Ring = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  position: relative;
  background-color: ${(props) => props.theme.colors.primaryText};
  margin: 10px;
  cursor: pointer;

  @media (max-width: 1366px) {
    width: 90px;
    height: 90px;
  }
`;
const Ring2 = styled.div`
  position: absolute;
  width: 80%;
  height: 80%;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.primaryDarkGray};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CalcadaLegalMap = () => {
  // const [lotes, setLotes] = useState(false);
  // const [logradouros, setLogradouros] = useState(false);
  const [calçadas, setCalçadas] = useState(true);
  const [calçadasAcessiveis, setCalçadasAcessiveis] = useState(false);
  const [vegetacao, setVegetacao] = useState(true);
  const [postes, setPostes] = useState(true);

  const filterHandler = (value) => {
    if (value === "Calçadas") {
      setCalçadas(true);
    } else if (value === "Calçadas Acessiveis") {
      setCalçadasAcessiveis(true);
    } else if (value === "Vegetação") {
      setVegetacao(true);
    } else if (value === "Postes") {
      setPostes(true);
    }
    // else if (value === "Logradouros") {
    //   setLogradouros(true);
    // } else if (value === "Lotes") {
    //   setLotes(true);
  };

  const filters = [
    // { id: 1, visible: lotes, description: "Lotes" },
    // { id: 2, visible: logradouros, description: "Logradouros" },
    {
      id: 1,
      visible: calçadas,
      description: "Calçadas",
    },
    {
      id: 2,
      visible: postes,
      description: "Postes",
    },
    {
      id: 3,
      visible: vegetacao,
      description: "Vegetação",
    },
    {
      id: 4,
      visible: calçadasAcessiveis,
      description: "Calçadas Acessíveis",
    },
  ];

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: -8.062591572045848,
    longitude: -34.87830963351148,
    zoom: 16,
  });

  const [showSidebar, setShowSidebar] = useState(false);
  const [showProjectSidebar, setShowProjecSidebar] = useState(true);

  const layers = [
    // new GeoJsonLayer({
    //   id: "Lotes",
    //   data:
    //     "https://raw.githubusercontent.com/Filipegbessaa/IMS-Frontend/dev_map/src/assets/lotes.json",
    //   opacity: 0.2,
    //   stroked: true,
    //   filled: true,
    //   lineWidthScale: 0.1,
    //   autoHighlight: true,
    //   highlightColor: [0, 0, 128, 128],
    //   wireframe: true,
    //   getFillColor: [255, 127, 0],
    //   pickable: true,
    //   onClick: ({ object }) => {
    //     console.log(object);
    //     setShowSidebar((prevState) => !prevState);
    //   },
    //   visible: filters[0].visible,
    // }),
    // new GeoJsonLayer({
    //   id: "Logradouros",
    //   data:
    //     "https://raw.githubusercontent.com/Filipegbessaa/IMS-Frontend/dev_map/src/assets/logradouros.json",
    //   opacity: 0.8,
    //   stroked: false,
    //   filled: true,
    //   getLineWidth: 0.5,
    //   getLineColor: [183, 72, 75],
    //   getFillColor: [183, 72, 75],
    //   visible: filters[0].visible,
    // }),
    new GeoJsonLayer({
      id: "Calçadas",
      data:
        "https://raw.githubusercontent.com/Filipegbessaa/IMS-Frontend/dev/src/assets/Geojsons/passeiospublicos_calcadas.json",
      opacity: 0.8,
      lineWidthScale: 0.03,
      stroked: true,
      filled: true,
      autoHighlight: true,
      highlightColor: [0, 0, 128, 128],
      pickable: true,
      onClick: ({ object }) => {
        console.log(object);
        setShowSidebar((prevState) => !prevState);
        if (showProjectSidebar === true) {
          setShowProjecSidebar(false);
        }
      },
      getLineWidth: 4,
      getFillColor: [55, 126, 184],
      visible: filters[0].visible,
    }),

    new ScatterplotLayer({
      id: "Postes",
      data: streetPoles.features,
      opacity: 0.8,
      filled: true,
      onClick: (e) => {
        console.log(e.object.properties.RefName);
      },
      autoHighlight: true,
      highlightColor: [220, 220, 220, 220],
      radiusMinPixels: 1,
      pickable: true,
      getPosition: (d) => d.geometry.coordinates,
      getFillColor: [80, 80, 80],
      visible: filters[1].visible,
    }),
    new ScatterplotLayer({
      id: "Arvores",
      data: trees.features,
      opacity: 0.8,
      filled: true,
      onClick: (e) => {
        console.log(e.object.properties.RefName);
      },
      autoHighlight: true,
      highlightColor: [220, 220, 0, 220],
      radiusMinPixels: 1,
      pickable: true,
      getPosition: (d) => d.geometry.coordinates,
      getFillColor: [91, 222, 126],
      visible: filters[2].visible,
    }),
    new GeoJsonLayer({
      id: "Calçadas Acessíveis",
      data:
        "https://raw.githubusercontent.com/Filipegbessaa/IMS-Frontend/dev/src/assets/Geojsons/calcadas_acessiveis.json",
      opacity: 0.8,
      stroked: true,
      filled: true,
      autoHighlight: true,
      highlightColor: [0, 0, 128, 128],
      pickable: true,
      onClick: ({ object }) => {
        console.log(object);
        setShowSidebar((prevState) => !prevState);
      },
      getLineWidth: 8,
      lineWidthMinPixels: 3,
      lineWidthMaxPixels: 3,
      getFillColor: [55, 126, 184],
      visible: filters[3].visible,
    }),
  ];
  return (
    <div
      className="card card-responsive m-0 p-0 border-0"
      style={{ minHeight: "100vh" }}
    >
      {showProjectSidebar && !showSidebar && (
        <div className="flex w-4/5">
          <div className="sm:w-4/5 2xl:w-3/5 h-full bg-white opacity-95 z-10 text-black border-r flex-grow">
            <div className="self-end">
              <div className="mr-0">
                <Breadcrumbs />
                <aside className="w-11/12 bg-primary-gray ml-16">
                  <h1 className="font-raleway text-5xl font-bold text-primary-text p-5 mb-2">
                    Calçada Legal
                  </h1>
                  <div className="flex flex-row ml-5">
                    <YellowCircle className="mr-2 mt-1" />
                    <h4 className="text-lg">Em execução</h4>
                  </div>
                  <p className="ml-5 w-3/5">
                    O Projeto Calçada Legal prevê a requalificação dos passeios
                    públicos dos principais corredores viários da cidade. Tem
                    como objetivo garantir o conforto, a segurança do pedestre
                    ao caminhar e a conectividade com a rede de transporte
                    público. Mais de 100 ruas são contempladas com financiamento
                    do PAC Pavimentação e recursos próprios da Prefeitura.
                  </p>
                  <div className="ml-5 flex flex-row">
                    <p
                      style={{ fontSize: "16px" }}
                      className="border border-black mr-2 font-bold p-3"
                    >
                      Acessibilidade
                    </p>
                    <p
                      style={{ fontSize: "16px" }}
                      className="border border-black font-bold p-3"
                    >
                      Meio Ambiente
                    </p>
                  </div>
                  <div className="flex flex-row">
                    <SmallInfoContainer className="rounded-xl ml-3 p-3 primary-gray-darker">
                      <div className="w-4/5 mx-auto">
                        <p className="text-2xl font-bold">Indicadores Totais</p>
                        <p className="text-md font-bold">
                          Última atualização:
                          <span className="font-normal"> 27/04/2021</span>
                        </p>
                      </div>
                      <div className="grid grid-cols-2">
                        <div>
                          <Ring>
                            <Ring2 className="flex justify-center items-center">
                              <h1 className="justify-center sm:text-2xl 2xl:text-4xl font-bold font-roboto">
                                100%
                              </h1>
                            </Ring2>
                          </Ring>
                          <p className="flex justify-center text-lg">
                            Total executado
                          </p>
                        </div>
                        <div className="mt-3">
                          <p className="text-sm font-bold">
                            Data de início:{" "}
                            <span className="font-normal">DD/MM/AAAA</span>
                          </p>
                          <p className="text-sm font-bold">
                            Data de fim:{" "}
                            <span className="font-normal">DD/MM/AAAA</span>
                          </p>
                          <p>Duração:</p>
                          <p className="text-sm font-bold">
                            Valor total licitado:{" "}
                            <span className="font-normal">R$</span>
                          </p>
                          <p className="text-sm font-bold">
                            Valor total pago:{" "}
                            <span className="font-normal">R$</span>
                          </p>
                        </div>
                      </div>
                    </SmallInfoContainer>
                    <SmallInfoContainer className="rounded-xl mt-3 ml-3 p-2">
                      <p className="flex justify-center text-2xl font-bold">
                        Lotes do Projeto
                      </p>
                      <table className="m-auto">
                        <thead>
                          <tr className="bg-primary-gray-dark shadow-md p-3">
                            <th className="p-2">
                              <p>Número</p>
                              <select className="bg-transparent border rounded-xl p-2 border-black border-8">
                                <option>Teste</option>
                              </select>
                            </th>
                            <th className="p-2">
                              <p>Status</p>
                              <select className="bg-transparent border rounded-xl p-2 border-black border-8">
                                <option>Teste</option>
                              </select>
                            </th>
                            <th className="p-2 m-auto">
                              <p>%Execução</p>
                              <select className="bg-transparent border rounded-xl p-2 border-black border-8">
                                <option>Teste</option>
                              </select>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-gray-400">
                            <td className="p-2">
                              <p className="ml-4">01</p>
                            </td>
                            <td className="flex flex-row p-2">
                              <GreenCircle className="mr-2" />
                              <p className="sm:text-xs 2xl:text-lg">
                                Concluído
                              </p>
                            </td>
                            <td className="p-2">
                              <p className="ml-4">100%</p>
                            </td>
                          </tr>
                          <tr className="border-b border-gray-400">
                            <td className="p-2">
                              <p className="ml-4">02</p>
                            </td>
                            <td className="flex flex-row p-2">
                              <GreenCircle className="mr-2" />
                              <p className="sm:text-xs 2xl:text-lg">
                                Concluído
                              </p>
                            </td>
                            <td className="p-2">
                              <p className="ml-4">100%</p>
                            </td>
                          </tr>
                          <tr className="border-b border-gray-400">
                            <td className="p-2">
                              <p className="ml-4">03</p>
                            </td>
                            <td className="flex flex-row p-2">
                              <YellowCircle className="mr-2" />
                              <p className="sm:text-xs 2xl:text-lg">
                                Em execução
                              </p>
                            </td>
                            <td className="p-2">
                              <p className="ml-4">50%</p>
                            </td>
                          </tr>
                          <tr className="border-b border-gray-400">
                            <td className="p-2">
                              <p className="ml-4">04</p>
                            </td>
                            <td className="flex flex-row p-2">
                              <GreyCircle className="mr-2" />
                              <p className="sm:text-xs 2xl:text-lg">
                                A executar
                              </p>
                            </td>
                            <td className="p-2">
                              <p className="ml-4">0%</p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </SmallInfoContainer>
                  </div>
                  <div className="flex flex-row mb-3">
                    <SmallInfoContainer className="rounded-xl mt-3 mr-3 ml-3 p-3">
                      <h1 className="flex justify-center text-2xl font-bold">
                        Indicadores do projeto
                      </h1>
                      <p className="text-md font-bold mt-3">
                        Área total de calçada projetada:
                        <span className="font-normal">_____m²</span>
                      </p>
                      <p className="text-md font-bold">
                        Quantidade total de árvores:
                        <span className="font-normal">_____</span>
                      </p>
                    </SmallInfoContainer>
                    <SmallInfoContainer className="rounded-xl mt-3 p-3">
                      <h1 className="flex justify-center text-2xl font-bold">
                        Arquivos do Projeto
                      </h1>
                      <div className="mt-3">
                        <p className="ml-4 uppercase text-md">
                          Prestação de contas lote 2
                        </p>
                        <hr />
                        <p className="ml-4 uppercase text-md">
                          Prestação de contas lote 2
                        </p>
                        <hr />
                        <p className="ml-4 uppercase text-md">
                          Prestação de contas lote 2
                        </p>
                      </div>
                    </SmallInfoContainer>
                  </div>
                </aside>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="bg-secondary-green hover:bg-secondary-green-darker py-3 px-5 z-20 text-white rounded-3xl self-end mb-5 ml-5 sticky bottom-10"
            onClick={() => setShowProjecSidebar(false)}
          >
            VER MAPA DO PROJETO
          </button>
        </div>
      )}
      {showSidebar && (
        <div className="w-2/5 h-full bg-white opacity-95 z-10 text-black border-r flex-grow">
          <button
            className="float-right mt-2 mr-2"
            onClick={() => setShowSidebar(false)}
            type="button"
          >
            <VscClose color="#00711F" size="1.5rem" />
          </button>
          <Breadcrumbs />
          <div className="mt-4 w-4/5 bg-primary-gray ml-16">
            <h1 className="font-raleway text-4xl font-bold text-primary-text p-5 mb-2">
              Calçada Legal | Lote 1
            </h1>
            <div className="flex flex-row ml-5">
              <GreenCircle className="mr-2 mt-1" />
              <h4 className="text-lg">Concluído</h4>
            </div>
            <div className="ml-5 flex flex-row">
              <p
                style={{ fontSize: "16px" }}
                className="border border-black mr-2 font-bold p-3"
              >
                Acessibilidade
              </p>
              <p
                style={{ fontSize: "16px" }}
                className="border border-black font-bold p-3"
              >
                Meio Ambiente
              </p>
            </div>
            <SmallInfoContainer className="rounded-xl mr-3 ml-5 p-3">
              <div className="w-4/5 mx-auto">
                <p className="text-2xl font-bold">Indicadores Totais</p>
                <p className="text-md font-bold">
                  Última atualização:
                  <span className="font-normal"> 27/04/2021</span>
                </p>
              </div>
              <div className="grid grid-cols-2">
                <div>
                  <Ring>
                    <Ring2 className="flex justify-center items-center">
                      <h1 className="justify-center text-4xl font-bold">
                        100%
                      </h1>
                    </Ring2>
                  </Ring>
                  <p className="flex justify-center">Total executado</p>
                </div>
                <div className="mt-3">
                  <p className="text-sm font-bold">
                    Data de início:{" "}
                    <span className="font-normal">DD/MM/AAAA</span>
                  </p>
                  <p className="text-sm font-bold">
                    Data de fim: <span className="font-normal">DD/MM/AAAA</span>
                  </p>
                  <p>Duração:</p>
                  <p className="text-sm font-bold">
                    Valor total licitado:{" "}
                    <span className="font-normal">R$</span>
                  </p>
                  <p className="text-sm font-bold">
                    Valor total pago: <span className="font-normal">R$</span>
                  </p>
                </div>
              </div>
            </SmallInfoContainer>
            <SmallInfoContainer className="rounded-xl mt-3 mr-3 ml-5 p-3">
              <h1 className="flex justify-center text-2xl font-bold mt-3">
                Indicadores do projeto
              </h1>
              <p className="text-md font-bold">
                Área total de calçada projetada:
                <span className="font-normal">_____m²</span>
              </p>
              <p className="text-md font-bold">
                Quantidade total de árvores:
                <span className="font-normal">_____</span>
              </p>
            </SmallInfoContainer>
            <SmallInfoContainer className="rounded-xl mt-3 mr-3 mb-3 ml-5 p-3">
              <h1 className="flex justify-center text-2xl font-bold">
                Arquivos do Projeto
              </h1>
              <div className="mt-3">
                <p className="ml-4 uppercase text-md">
                  Prestação de contas lote 2
                </p>
                <hr />
                <p className="ml-4 uppercase text-md">
                  Prestação de contas lote 2
                </p>
                <hr />
                <p className="ml-4 uppercase text-md">
                  Prestação de contas lote 2
                </p>
              </div>
            </SmallInfoContainer>
          </div>
        </div>
      )}
      {!showSidebar && (
        <div
          className="card card-responsive p-3"
          style={{
            maxWidth: "445px",
            position: "absolute",
            top: "30px",
            right: "30px",
            zIndex: "10",
          }}
        >
          <div className="map-card text-dark">
            <div className="map-card--body">
              <FilterSelect
                className="bg-white p-2 border-2 color-primary-dark rounded-md"
                onChange={(event) => filterHandler(event.target.value)}
              >
                <option selected hidden>
                  Adicionar Filtro
                </option>
                {!calçadas && <option>Calçadas</option>}
                {!calçadasAcessiveis && <option>Calçadas Acessiveis</option>}
                {!postes && <option>Postes</option>}
                {!vegetacao && <option>Vegetação</option>}
                {/* {!lotes && <option>Lotes</option>} */}
                {/* {!logradouros && <option>Logradouros</option>} */}
              </FilterSelect>
              <div className="flex flex-row flex-wrap">
                {calçadas && (
                  <div className="border border-primary-dark p-1 mr-2 ml-2 mt-2 m-0 flex flex-column h-100">
                    <button
                      type="button"
                      className="self-end"
                      onClick={() => setCalçadas(false)}
                    >
                      <VscClose />
                    </button>

                    <p className="font-bold m-0">Calçadas</p>
                  </div>
                )}
                {/* {logradouros && (
                  <div className="border border-primary-dark p-1 mr-2 ml-2 mt-2 m-0 flex flex-column h-100">
                    <button
                      type="button"
                      className="self-end"
                      onClick={() => setLogradouros(false)}
                    >
                      <VscClose />
                    </button>
                    <p className="font-bold m-0">Logradouros</p>
                  </div>
                )} */}
                {/* {lotes && (
                  <div className="border border-primary-dark p-1 mr-2 ml-2 mt-2 m-0 flex flex-column h-100">
                    <button
                      type="button"
                      className="self-end"
                      onClick={() => setLotes(false)}
                    >
                      <VscClose />
                    </button>
                    <p className="font-bold m-0">Lotes</p>
                  </div>
                )} */}
                {calçadasAcessiveis && (
                  <div className="border border-primary-dark p-1 mr-2 ml-2 mt-2 m-0 flex flex-column h-100">
                    <button
                      type="button"
                      className="self-end"
                      onClick={() => setCalçadasAcessiveis(false)}
                    >
                      <VscClose />
                    </button>
                    <p className="font-bold m-0">Calçadas Acessíveis</p>
                  </div>
                )}
                {postes && (
                  <div className="border border-primary-dark p-1 mr-2 ml-2 mt-2 m-0 flex flex-column h-100">
                    <button
                      type="button"
                      className="self-end"
                      onClick={() => setPostes(false)}
                    >
                      <VscClose />
                    </button>
                    <p className="font-bold m-0">Postes</p>
                  </div>
                )}
                {vegetacao && (
                  <div className="border border-primary-dark p-1 mr-2 ml-2 mt-2 m-0 flex flex-column h-100">
                    <button
                      type="button"
                      className="self-end"
                      onClick={() => setVegetacao(false)}
                    >
                      <VscClose />
                    </button>
                    <p className="font-bold m-0">Vegetação</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      <DeckGL
        controller
        layers={layers}
        viewState={viewport}
        onViewStateChange={(viewState) => setViewport(viewState.viewState)}
      >
        <StaticMap
          mapStyle="mapbox://styles/mapbox/streets-v11"
          reuseMaps
          mapboxApiAccessToken="pk.eyJ1IjoiaWFjYXB1Y2EiLCJhIjoiY2pnem4wMWRtMDJqZzMxbXd2YTkxbzAzdiJ9.fAmljrg3ipHbRWZY2comOA"
        />
      </DeckGL>
    </div>
  );
};

export default injectIntl(CalcadaLegalMap);
