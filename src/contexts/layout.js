import React, { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import covidAPI from "../Services/api";

const LayoutContext = createContext(undefined);

export const LayoutProvider = ({ children }) => {
  const [toggledSidebar, setToggledSidebar] = useState(false);
  const [collapseSideBar, setCollapseSideBar] = useState(false);
  const [lastTimeUpdated, setLastTimeUpdated] = useState(new Date());

  const handleToggleSidebar = (value) => {
    setToggledSidebar(value);
  };

  useEffect(() => {
    const getLastTimeUpdated = async () => {
      try {
        const { data } = await covidAPI.get("/painel");
        setLastTimeUpdated(new Date(data[0]["Data.de.atualização"]));
      } catch (error) {
        alert("Ocorreu um erro ao buscar os items");
      }
    };
    getLastTimeUpdated();
  }, []);

  return (
    <LayoutContext.Provider
      value={{
        collapseSideBar,
        setCollapseSideBar,
        lastTimeUpdated,
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
