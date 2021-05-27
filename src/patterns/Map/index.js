import { injectIntl } from "react-intl";
import React, { useState } from "react";
import { StaticMap } from "react-map-gl";
import { GeoJsonLayer, ScatterplotLayer } from "@deck.gl/layers";
import { DeckGL } from "deck.gl";
import PropTypes from "prop-types";
import { VscClose } from "react-icons/vsc";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import styled from "styled-components";
import trees from "../../assets/Geojsons/passeiospublicos_arvores.json";
import streetPoles from "../../assets/Geojsons/passeiospublicos_postes.json";

const BigInfoContainer = styled.div`
  background: ${(props) => props.theme.colors.primary};
  opacity: 1;
`;
const SmallInfoContainer = styled.div`
  background: ${(props) => props.theme.colors.primaryDark};
  width: 450px;
  height: 100%;
`;
const DropdownsContainer = styled.div`
  background-color: ${(props) => props.theme.colors.primaryDark};
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
  background-color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
`;

const Ring = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  position: relative;
  background-color: black;
  margin: 10px;
  cursor: pointer;
`;
const Ring2 = styled.div`
  position: absolute;
  width: 80%;
  height: 80%;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.primaryDark};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Map = ({ show }) => {
  const [filters, setFilters] = useState([
    // { id: 1, visible: true, description: "Lotes" },
    // { id: 2, visible: true, description: "Logradouros" },
    {
      id: 1,
      visible: true,
      description: "Calçadas",
      value: "Calçadas",
      label: "Calçadas",
    },
    {
      id: 2,
      visible: true,
      description: "Postes",
      value: "Postes",
      label: "Postes",
    },
    {
      id: 3,
      visible: true,
      description: "Vegetação",
      value: "Vegetação",
      label: "Vegetação",
    },
    {
      id: 4,
      visible: false,
      description: "Calçadas Acessíveis",
      value: "Calçadas Acessíveis",
      label: "Calçadas Acessíveis",
    },
  ]);
  const animatedComponents = makeAnimated();

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: -8.062591572045848,
    longitude: -34.87830963351148,
    zoom: 16,
  });

  const [showSidebar, setShowSidebar] = useState(false);
  const [showProjectSidebar, setShowProjecSidebar] = useState(true);

  const toggleLayers = (id) => {
    const updatedLayers = filters.map((f) => {
      if (f.id === id) {
        return { ...f, visible: !f.visible };
      }
      return f;
    });
    setFilters(updatedLayers);
  };

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
        "https://raw.githubusercontent.com/Filipegbessaa/IMS-Frontend/map_enh/src/assets/Geojsons/passeiospublicos_calcadas.json",
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
        "https://raw.githubusercontent.com/Filipegbessaa/IMS-Frontend/map_enh/src/assets/Geojsons/calcadas_acessiveis.json",
      opacity: 0.8,
      lineWidthScale: 0.3,
      stroked: true,
      filled: true,
      autoHighlight: true,
      highlightColor: [0, 0, 128, 128],
      pickable: true,
      onClick: ({ object }) => {
        console.log(object);
        setShowSidebar((prevState) => !prevState);
      },
      getLineWidth: 4,
      getFillColor: [55, 126, 184],
      visible: filters[3].visible,
    }),
  ];
  //  {/* <div className="border-b p-4">
  //             <span className="text-gray-400">Logradouro</span>
  //             <p className="mt-2 font-black">Rua Siqueira Campos</p>
  //           </div>
  //           <div className="border-b p-4">
  //             <span className="text-gray-400">Lote</span>
  //             <p className="mt-2 font-black">8</p>
  //           </div>
  //           <div className="border-b p-4">
  //             <span className="text-gray-400">Tipo</span>
  //             <p className="mt-2 font-black">Rua</p>
  //           </div>
  //           <div className="border-b p-4">
  //             <span className="text-gray-400">Extensão</span>
  //             <p className="mt-2 font-black">418,57m</p>
  //           </div>
  //           <div className="border-b p-4">
  //             <span className="text-gray-400">Extensão executada</span>
  //             <p className="mt-2 font-black">0m</p>
  //           </div>
  //           <div className="border-b p-4">
  //             <span className="text-gray-400">Status da Obra</span>
  //             <p className="mt-2 font-black">A LICITAR</p>
  //           </div> */}
  return (
    <div
      className="card card-responsive m-0 p-0 border-0"
      style={show ? { minHeight: "100vh" } : { display: "none" }}
    >
      {showProjectSidebar && (
        <div className="w-3/5 h-full bg-white opacity-95 z-10 text-black border-r flex-grow">
          <BigInfoContainer className="float-right mt-5 w-11/12">
            <h1 className="ml-5 pt-3">Calçada Legal</h1>
            <div className="flex flex-row ml-5">
              <YellowCircle className="mr-2 mt-1" />
              <h4 className="">EM EXECUÇÃO</h4>
            </div>
            <p className="ml-5 w-4/5">
              O Projeto Calçada Legal prevê a requalificação dos passeios
              públicos dos principais corredores viários da cidade. Tem como
              objetivo garantir o conforto, a segurança do pedestre ao caminhar
              e a conectividade com a rede de transporte público. Mais de 100
              ruas são contempladas com financiamento do PAC Pavimentação e
              recursos próprios da Prefeitura.
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
              <SmallInfoContainer className="rounded-xl ml-3 p-3">
                <div className="flex flex-row flex-wrap justify-center">
                  <h1>Indicadores Totais</h1>
                  <h4>Última atualização: 27/04/2021</h4>
                </div>
                <div className="grid grid-cols-2">
                  <div>
                    <Ring>
                      <Ring2 className="flex justify-center items-center">
                        <h1 className="justify-center">100%</h1>
                      </Ring2>
                    </Ring>
                    <h5 className="flex justify-center">Total executado</h5>
                  </div>
                  <div className="mt-5">
                    <h6>Data de início: DD/MM/AAAA</h6>
                    <h6>Data de fim: DD/MM/AAAA</h6>
                    <h6>Duração:</h6>
                    <h6>Valor total licitado: R$</h6>
                    <h6>Valor total pago: R$</h6>
                  </div>
                </div>
              </SmallInfoContainer>
              <SmallInfoContainer className="rounded-xl mt-3 ml-3 mr-3 p-3">
                <h1 className="flex justify-center">Lotes do Projeto</h1>
                <div className="mt-5">
                  <table className="m-auto">
                    <tr className="bg-red-700 shadow p-3">
                      <th className="p-2">
                        <p>Número</p>
                        <Select
                          className="mr-2"
                          closeMenuOnSelect={false}
                          components={animatedComponents}
                          defaultValue={[filters[0], filters[1], filters[2]]}
                          options={filters}
                          onChange={(selectedObject) =>
                            toggleLayers(
                              selectedObject[selectedObject.length - 1]?.id
                            )
                          }
                        />
                      </th>
                      <th className="p-2">
                        <p>Status</p>
                        <Select
                          className="mr-2"
                          closeMenuOnSelect={false}
                          components={animatedComponents}
                          defaultValue={[filters[0], filters[1], filters[2]]}
                          options={filters}
                          onChange={(selectedObject) =>
                            toggleLayers(
                              selectedObject[selectedObject.length - 1]?.id
                            )
                          }
                        />
                      </th>
                      <th className="p-2 m-auto">
                        <p>% EXECUÇÃO</p>
                        <Select
                          className="mr-2"
                          closeMenuOnSelect={false}
                          components={animatedComponents}
                          defaultValue={[filters[0], filters[1], filters[2]]}
                          options={filters}
                          onChange={(selectedObject) =>
                            toggleLayers(
                              selectedObject[selectedObject.length - 1]?.id
                            )
                          }
                        />
                      </th>
                    </tr>
                    <tr>
                      <td>
                        <p>01</p>
                      </td>
                      <td className="flex flex-row">
                        <GreenCircle className="mr-2" />
                        <p className="">CONCLUÍDO</p>
                      </td>
                      <td>
                        <p>100%</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>02</p>
                      </td>
                      <td className="flex flex-row">
                        <GreenCircle className="mr-2" />
                        <p className="">CONCLUÍDO</p>
                      </td>
                      <td>
                        <p>100%</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>02</p>
                      </td>
                      <td className="flex flex-row">
                        <YellowCircle className="mr-2" />
                        <p className="">EM EXECUÇÃO</p>
                      </td>
                      <td>
                        <p>50%</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>02</p>
                      </td>
                      <td className="flex flex-row">
                        <GreyCircle className="mr-2" />
                        <p className="">A EXECUTAR</p>
                      </td>
                      <td>
                        <p>0%</p>
                      </td>
                    </tr>
                  </table>
                </div>
              </SmallInfoContainer>
            </div>
            <div className="flex flex-row mb-3">
              <SmallInfoContainer className="rounded-xl mt-3 mr-3 ml-3 p-3">
                <h1 className="flex justify-center">Indicadores do Projeto</h1>
                <h4>Área total de calçada projetada:_____m²</h4>
                <h4>Quantidade total de árvores:_____</h4>
              </SmallInfoContainer>
              <SmallInfoContainer className="rounded-xl mt-3 mr-3 ml-3 p-3">
                <h1 className="flex justify-center">Arquivos do Projeto</h1>
                <div className="mt-5">
                  <h5 className="ml-4">PRESTAÇÃO DE CONTAS LOTE 2</h5>
                  <hr />
                  <h5 className="ml-4">PRESTAÇÃO DE CONTAS LOTE 2</h5>
                  <hr />
                  <h5 className="ml-4">PRESTAÇÃO DE CONTAS LOTE 2</h5>
                </div>
              </SmallInfoContainer>
            </div>
          </BigInfoContainer>
        </div>
      )}
      {showSidebar && (
        <div className="flex flex-row">
          <div className="w-1/3 h-full bg-white opacity-95 z-10 text-black border-r flex-grow">
            <button
              className="float-right mt-2 mr-2"
              onClick={() => setShowSidebar(false)}
              type="button"
            >
              <VscClose color="#00711F" size="1.5rem" />
            </button>
            <BigInfoContainer className="float-right mt-5 w-4/5">
              <h1 className="ml-5 pt-3">Calçada Legal | Lote 1</h1>
              <div className="flex flex-row ml-5">
                <GreenCircle className="mr-2 mt-1" />
                <h4 className="">CONCLUÍDO</h4>
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
                <div className="flex flex-row flex-wrap justify-center">
                  <h1>Indicadores Totais</h1>
                  <h4>Última atualização: 27/04/2021</h4>
                </div>
                <div className="grid grid-cols-2">
                  <div>
                    <Ring>
                      <Ring2 className="flex justify-center items-center">
                        <h1 className="justify-center">100%</h1>
                      </Ring2>
                    </Ring>
                    <h5 className="flex justify-center">Total executado</h5>
                  </div>
                  <div className="mt-5">
                    <h6>Data de início: DD/MM/AAAA</h6>
                    <h6>Data de fim: DD/MM/AAAA</h6>
                    <h6>Duração:</h6>
                    <h6>Valor total licitado: R$</h6>
                    <h6>Valor total pago: R$</h6>
                  </div>
                </div>
              </SmallInfoContainer>
              <SmallInfoContainer className="rounded-xl mt-3 mr-3 ml-5 p-3">
                <h1 className="flex justify-center">Indicadores do Projeto</h1>
                <h4>Área total de calçada projetada:_____m²</h4>
                <h4>Quantidade total de árvores:_____</h4>
              </SmallInfoContainer>
              <SmallInfoContainer className="rounded-xl mt-3 mr-3 mb-3 ml-5 p-3">
                <h1 className="flex justify-center">Arquivos do Projeto</h1>
                <div className="mt-5">
                  <h5 className="ml-4">PRESTAÇÃO DE CONTAS LOTE 2</h5>
                  <hr />
                  <h5 className="ml-4">PRESTAÇÃO DE CONTAS LOTE 2</h5>
                  <hr />
                  <h5 className="ml-4">PRESTAÇÃO DE CONTAS LOTE 2</h5>
                </div>
              </SmallInfoContainer>
            </BigInfoContainer>
          </div>
          <button
            className="bg-red-700"
            style={{ width: "200px", height: "200px", zIndex: "50" }}
            type="button"
          >
            BOTÃO
          </button>
        </div>
      )}
      {!showSidebar && (
        <div
          className="card card-responsive   p-3"
          style={{
            width: "210px",
            position: "absolute",
            top: "30px",
            right: "30px",
            zIndex: "10",
          }}
        >
          <div className="map-card text-dark">
            <div className="map-card--title">Camadas:</div>
            <div className="map-card--body">
              <Select
                closeMenuOnSelect={false}
                components={animatedComponents}
                defaultValue={[filters[0], filters[1], filters[2]]}
                isMulti
                options={filters}
                onChange={(selectedObject) =>
                  toggleLayers(selectedObject[selectedObject.length - 1]?.id)
                }
              />
              {/* {filters.map((f) => (
                <div className="form-check" key={f.id}>
                  <label className="form-check-label" htmlFor={f.id}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={f.visible}
                      id={f.id}
                      onChange={() => toggleLayers(f.id)}
                    />
                    {f.description}
                  </label>
                </div>
              ))} */}
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

export default injectIntl(Map);

Map.propTypes = {
  show: PropTypes.bool.isRequired,
};
