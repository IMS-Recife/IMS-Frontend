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
const BigInfoContainer = styled.div`
  background: ${(props) => props.theme.colors.primary};
  opacity: 1;
`;
const SmallInfoContainer = styled.div`
  background: ${(props) => props.theme.colors.primaryDark};
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
  const [calçadas, setCalçadas] = useState(true);
  // const [lotes, setLotes] = useState(false);
  // const [logradouros, setLogradouros] = useState(false);
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
  return (
    <div
      className="card card-responsive m-0 p-0 border-0"
      style={show ? { minHeight: "100vh" } : { display: "none" }}
    >
      {showProjectSidebar && !showSidebar && (
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
                <table className="m-auto">
                  <tr className="bg-primary-dark shadow p-3">
                    <th className="p-2">
                      <p>Número</p>
                      <Select
                        className="mr-2"
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        defaultValue={[filters[0], filters[1], filters[2]]}
                        options={filters}
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
                      />
                    </th>
                    <th className="p-2 m-auto">
                      <p>% Execução</p>
                      <Select
                        className="mr-2"
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        defaultValue={[filters[0], filters[1], filters[2]]}
                        options={filters}
                      />
                    </th>
                  </tr>
                  <tr className="border-b border-gray-400">
                    <td className="p-2">
                      <p>01</p>
                    </td>
                    <td className="flex flex-row p-2">
                      <GreenCircle className="mr-2" />
                      <p className="">CONCLUÍDO</p>
                    </td>
                    <td className="p-2">
                      <p>100%</p>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-400">
                    <td className="p-2">
                      <p>02</p>
                    </td>
                    <td className="flex flex-row p-2">
                      <GreenCircle className="mr-2" />
                      <p className="">CONCLUÍDO</p>
                    </td>
                    <td className="p-2">
                      <p>100%</p>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-400">
                    <td className="p-2">
                      <p>02</p>
                    </td>
                    <td className="flex flex-row p-2">
                      <YellowCircle className="mr-2" />
                      <p className="">EM EXECUÇÃO</p>
                    </td>
                    <td className="p-2">
                      <p>50%</p>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-400">
                    <td className="p-2">
                      <p>02</p>
                    </td>
                    <td className="flex flex-row p-2">
                      <GreyCircle className="mr-2" />
                      <p className="">A EXECUTAR</p>
                    </td>
                    <td className="p-2">
                      <p>0%</p>
                    </td>
                  </tr>
                </table>
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
        <div className="w-2/5 h-full bg-white opacity-95 z-10 text-black border-r flex-grow">
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
