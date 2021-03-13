import { injectIntl } from "react-intl";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { StaticMap } from "react-map-gl";
import { GeoJsonLayer, ScatterplotLayer } from "@deck.gl/layers";
import { DeckGL } from "deck.gl";
import scPoints from "../../assets/sc_arv_pos.json";

const Dashboard = ({ bigCardClassName }) => {
  const [filters, setFilters] = useState([
    { id: 1, visible: true, description: "Lotes" },
    { id: 2, visible: true, description: "Logradouros" },
    { id: 3, visible: true, description: "Calçada - Siqueira Campos" },
    { id: 4, visible: true, description: "Vegetação/Postes - Siqueira Campos" },
  ]);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: -8.0702703,
    longitude: -34.910261,
    zoom: 10,
  });

  // useEffect(() => {
  //   const map = new mapboxgl.Map({
  //     container: "map",
  //     style: "mapbox://styles/mapbox/dark-v10",
  //     center: [-34.910261, -8.0702703],
  //     zoom: 12,
  //   });
  //   map.on("load", () => {
  //     map.addSource("lotes", { type: "geojson", data: lotes });
  //     map.addLayer({
  //       id: "lotes",
  //       type: "fill",
  //       source: "lotes",
  //       layout: {},
  //       paint: {
  //         "fill-color": "#088",
  //         "fill-opacity": 0.8,
  //       },
  //     });
  //   });
  // }, []);

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
    new GeoJsonLayer({
      id: "Siqueira Campos Calçadas",
      data:
        "https://raw.githubusercontent.com/Filipegbessaa/IMS-Frontend/dev_map/src/assets/sc_cal.json",
      opacity: 0.8,
      lineWidthScale: 0.03,
      stroked: true,
      filled: true,
      autoHighlight: true,
      highlightColor: [0, 0, 128, 128],
      pickable: true,
      onClick: ({ object }) => {
        console.log(object);
      },
      getLineWidth: 4,
      getFillColor: [55, 126, 184],
      visible: filters[2].visible,
    }),
    new GeoJsonLayer({
      id: "Lotes",
      data:
        "https://raw.githubusercontent.com/Filipegbessaa/IMS-Frontend/dev_map/src/assets/lotes.json",
      stroked: true,
      filled: false,
      lineWidthScale: 0.2,
      wireframe: true,
      visible: filters[0].visible,
    }),
    new GeoJsonLayer({
      id: "Logradouros",
      data:
        "https://raw.githubusercontent.com/Filipegbessaa/IMS-Frontend/dev_map/src/assets/logradouros.json",
      opacity: 0.8,
      stroked: false,
      filled: true,
      getLineWidth: 0.5,
      getLineColor: [183, 72, 75],
      getFillColor: [183, 72, 75],
      visible: filters[1].visible,
    }),
    new ScatterplotLayer({
      id: "Scatterplot Points",
      data: scPoints.features,
      opacity: 0.8,
      filled: true,
      onClick: (e) => {
        console.log(e.object.properties.RefName);
      },
      autoHighlight: true,
      highlightColor: [0, 0, 128, 128],
      radiusMinPixels: 1,
      pickable: true,
      getPosition: (d) => d.geometry.coordinates,
      getFillColor: [91, 222, 126],
      visible: filters[3].visible,
    }),
  ];

  return (
    <div className={bigCardClassName} style={{ minHeight: "85vh" }}>
      <div
        className="card card-responsive mr-sm-0 ml-md-4 m-lg-0 h-100"
        style={{
          marginBottom: "40px",
          marginLeft: "0px",
        }}
      >
        <div className="map-card text-dark">
          <div className="map-card--title">Camadas:</div>
          <div className="map-card--body">
            {filters.map((f, i) => (
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
    </div>
  );
};

export default injectIntl(Dashboard);

Dashboard.defaultProps = {
  bigCardClassName: "col-12 col-sm-10 col-md-10 col-lg-8 col-xl-10 ml-0",
};
Dashboard.propTypes = {
  bigCardClassName: PropTypes.string,
};
