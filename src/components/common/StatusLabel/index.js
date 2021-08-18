import React from "react";
import PropTypes from "prop-types";

function StatusLabel({ status, projectStatus }) {
  const statusDefinitions = [
    {
      status: "inProgress",
      description: "Em execução",
      color: "status-in-progress",
    },
    {
      status: "finished",
      description: "Concluído",
      color: "status-finished",
    },
    {
      status: "paralyzed",
      description: "Paralisado",
      color: "status-paralyzed",
    },
    {
      status: "toRun",
      description: "A executar",
      color: "status-to-run",
    },
  ];

  const provideStatus = (providedStatus) =>
    statusDefinitions.find(
      (statusDefinition) => statusDefinition.status === providedStatus
    );
  return (
    <div className="flex justify-center items-center mb-3">
      <div
        className={`rounded-full h-5 w-5 flex items-center justify-center
        bg-${provideStatus(status).color}`}
      />
      {projectStatus ? (
        <h4 className="ml-2 mt-1 text-lg font-bold">
          {provideStatus(status).description}
        </h4>
      ) : (
        <p className={`mb-0 ml-2 sm:text-md 2xl:text-lg `}>
          {provideStatus(status).description}
        </p>
      )}
    </div>
  );
}

StatusLabel.defaultProps = {
  projectStatus: false,
};

StatusLabel.propTypes = {
  status: PropTypes.string.isRequired,
  projectStatus: PropTypes.bool,
};

export default StatusLabel;
