import React, { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const LayoutContext = createContext(undefined);

export const LayoutProvider = ({ children }) => {
  const [toggledSidebar, setToggledSidebar] = useState(false);
  const [collapseSideBar, setCollapseSideBar] = useState(true);

  const handleToggleSidebar = (value) => {
    setToggledSidebar(value);
  };

  return (
    <LayoutContext.Provider
      value={{
        collapseSideBar,
        setCollapseSideBar,
        toggledSidebar,
        setToggledSidebar,
        handleToggleSidebar,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

export default function useLayout() {
  const context = useContext(LayoutContext);
  if (context === undefined) {
    throw new Error("useLayout must be used within a LayoutProvider");
  }
  return context;
}

LayoutProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.func,
  ]).isRequired,
};
