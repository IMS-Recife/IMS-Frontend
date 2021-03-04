import { injectIntl } from "react-intl";
import React from "react";
import PropTypes from "prop-types";

function Dashboard({ bigCardClassName }) {
  return (
    <div className={bigCardClassName}>
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
  );
}

export default injectIntl(Dashboard);

Dashboard.defaultProps = {
  bigCardClassName: "col-12 col-sm-10 col-md-10 col-lg-8 col-xl-10 ml-0",
};
Dashboard.propTypes = {
  bigCardClassName: PropTypes.string,
};
