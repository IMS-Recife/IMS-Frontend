import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage, injectIntl } from "react-intl";
import MobileToolbar from "../MobileToolbar";
import { MaterialUISelect } from "../../components/Selects";

function MobileDashboard({ show }) {
  return (
    <div>
      {show ? (
        <div>
          <a
            href="http://www.recife.pe.gov.br/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/prefeiturarecife.png"
              alt="prefeitura do recife"
              width="70px"
              height="70px"
              className="rounded"
              style={{
                marginTop: "20px",
                marginLeft: "40px",
                display: "inline-block",
              }}
            />
          </a>
          <div
            style={{
              position: "absolute",
              marginTop: "25px",
              marginLeft: "20px",
              display: "inline-block",
            }}
          >
            <MaterialUISelect />
          </div>

          <div
            style={{
              display: "inline-block",
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              marginTop: "25px",
            }}
            className="mt-5 mt-sm-3"
          >
            <span
              style={{
                font: "700 10px Roboto, sans-serif",
                color: "#87c2ff",
                display: "block",
                textAlign: "center",
              }}
              className="mt-5 mt-sm-3"
            >
              <FormattedMessage id="LAST_UPDATE" />
            </span>
            <span
              style={{
                marginTop: "5px",
                font: "500 18px Roboto, sans-serif",
                display: "block",
                textAlign: "center",
              }}
            >
              03/01/2020 23h59
            </span>
          </div>
          <MobileToolbar />
          <div className="col-12 mt-3">
            <div
              className="card card-responsive p-5 pt-5 mr-sm-0 ml-md-4 m-lg-0"
              style={{
                marginBottom: "40px",
                marginLeft: "0px",
              }}
            >
              <div className="row">
                <div
                  className="card card-custom bg-secondary col-12 m-0 mb-3 col-lg-5 mr-md-2 m-xl-2 ml-xl-5 "
                  style={{ height: "250px" }}
                />
                <div
                  className="card card-custom bg-primary col-12 m-0 mb-3 col-lg-6  m-lg-0 ml-xl-2 mt-xl-2"
                  style={{ height: "250px" }}
                />
                <div
                  className="card card-custom bg-info col-12 m-0 mb-3 col-lg-4 mr-md-2 m-xl-2 ml-xl-5 "
                  style={{ height: "300px" }}
                />
                <div
                  className="card card-custom bg-success col-12 m-0 mb-3 col-lg-7  m-xl-2"
                  style={{ height: "300px" }}
                />
                <div
                  className="card card-custom bg-warning col-12 m-0 mb-3 col-lg-4 mr-md-2 m-xl-2 ml-xl-5 mb-xl-4 "
                  style={{ height: "300px" }}
                />
                <div
                  className="card card-custom bg-danger col-12 m-0 mb-3 col-lg-7  m-xl-2 mb-4"
                  style={{ height: "300px" }}
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default injectIntl(MobileDashboard);

MobileDashboard.defaultProps = {
  show: true,
};
MobileDashboard.propTypes = {
  show: PropTypes.bool,
};
