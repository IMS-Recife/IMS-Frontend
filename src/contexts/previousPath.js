import React, { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const PreviousPathContext = createContext(undefined);

export const PreviousPathProvider = ({ children }) => {
  const [previousPath, setPreviousPath] = useState("/");

  const handleChangePreviousPath = (currentPath) => {
    const pathArray = currentPath.split("/");
    let previousPathString = "";
    for (let i = 0; i < pathArray.length; i++) {
      previousPathString += pathArray[i];
    }
    setPreviousPath(`/${previousPathString}`);
  };

  return (
    <PreviousPathContext.Provider
      value={{
        previousPath,
        handleChangePreviousPath,
      }}
    >
      {children}
    </PreviousPathContext.Provider>
  );
};

export default function usePreviousPath() {
  const context = useContext(PreviousPathContext);
  if (context === undefined) {
    throw new Error(
      "usePreviousPath must be used within a previousPathProvider"
    );
  }
  return context;
}

PreviousPathProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.func,
  ]).isRequired,
};
