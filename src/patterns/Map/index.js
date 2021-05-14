import { injectIntl } from "react-intl";
import React, { useState } from "react";
import { StaticMap } from "react-map-gl";
import { GeoJsonLayer, ScatterplotLayer } from "@deck.gl/layers";
import { DeckGL } from "deck.gl";
import PropTypes from "prop-types";
import trees from "../../assets/Geojsons/passeiospublicos_arvores.json";
import streetPoles from "../../assets/Geojsons/passeiospublicos_postes.json";

const Map = ({ show }) => {
  const [filters, setFilters] = useState([
    // { id: 1, visible: true, description: "Lotes" },
    // { id: 2, visible: true, description: "Logradouros" },
    { id: 1, visible: true, description: "Calçadas" },
    { id: 2, visible: true, description: "Postes" },
    { id: 3, visible: true, description: "Vegetação" },
    { id: 4, visible: false, description: "Calçadas Acessíveis" },
  ]);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: -8.062591572045848,
    longitude: -34.87830963351148,
    zoom: 16,
  });

  const [showSidebar, setShowSidebar] = useState(false);

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

  return (
    <div
      className="card card-responsive m-0 p-0 border-0"
      style={show ? { minHeight: "100vh" } : { display: "none" }}
    >
      {showSidebar && (
        <div className="w-96 h-screen bg-white z-10 text-black border-r flex-grow">
          <div className="border-b p-4">
            <span className="text-gray-400">Logradouro</span>
            <p className="mt-2 font-black">Rua Siqueira Campos</p>
          </div>
          <div className="border-b p-4">
            <span className="text-gray-400">Lote</span>
            <p className="mt-2 font-black">8</p>
          </div>
          <div className="border-b p-4">
            <span className="text-gray-400">Tipo</span>
            <p className="mt-2 font-black">Rua</p>
          </div>
          <div className="border-b p-4">
            <span className="text-gray-400">Extensão</span>
            <p className="mt-2 font-black">418,57m</p>
          </div>
          <div className="border-b p-4">
            <span className="text-gray-400">Extensão executada</span>
            <p className="mt-2 font-black">0m</p>
          </div>
          <div className="border-b p-4">
            <span className="text-gray-400">Status da Obra</span>
            <p className="mt-2 font-black">A LICITAR</p>
          </div>
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
              {filters.map((f) => (
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
              ))}
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
