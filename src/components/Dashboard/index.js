import React from "react";
import PropTypes from "prop-types";

const Dashboard = ({ children }) => (
  <div className="bg-white w-100 mx-4 p-4 rounded">{children}</div>
);

export default Dashboard;

Dashboard.propTypes = {
  children: PropTypes.node.isRequired,
};
