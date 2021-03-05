import { injectIntl } from "react-intl";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { StaticMap } from "react-map-gl";
import { GeoJsonLayer } from "@deck.gl/layers";
import { DeckGL } from "deck.gl";
import lotes from "../../assets/lotes.json";
import ruas from "../../assets/logradouros.json";
import scCal from "../../assets/sc_cal.json";

const Dashboard = ({ bigCardClassName }) => {
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

  const layers = [
    new GeoJsonLayer({
      id: "Siqueira Campos Calçadas",
      data: scCal,
      opacity: 0.8,
      stroked: false,
      filled: true,
      getLineWidth: 4,
      getFillColor: [55, 126, 184],
      visible: true,
    }),
    new GeoJsonLayer({
      id: "Lotes",
      data: lotes,
      opacity: 0.4,
      stroked: false,
      filled: true,
      wireframe: true,
      getFillColor: [255, 127, 0],
      pickable: true,
      visible: true,
    }),
    new GeoJsonLayer({
      id: "Logradouros",
      data: ruas,
      opacity: 0.8,
      stroked: false,
      filled: true,
      getLineWidth: 2,
      getLineColor: [183, 72, 75],
      getFillColor: [183, 72, 75],
      visible: true,
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
        <div
          className="card mt-4 ml-4 text-dark"
          style={{ maxWidth: "18rem", zIndex: "1" }}
        >
          <div className="card-body map-card">
            <h5 className="card-title">Camadas:</h5>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Lotes
              </label>
            </div>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Logradouros
              </label>
            </div>
          </div>
        </div>
        <DeckGL
          controller
          layers={layers}
          viewState={viewport}
          onViewStateChange={(viewState) => setViewport(viewState.viewState)}
        >
          <StaticMap
            reuseMaps
            mapboxApiAccessToken="pk.eyJ1IjoiaWFjYXB1Y2EiLCJhIjoiY2pnem4wMWRtMDJqZzMxbXd2YTkxbzAzdiJ9.fAmljrg3ipHbRWZY2comOA"
          ></StaticMap>
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
