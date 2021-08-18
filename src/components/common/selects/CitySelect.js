import React, { useState } from "react";
import Select from "react-select";
import styled from "styled-components";

const StyledSelect = styled(Select)`
  color: ${(props) => props.theme.colors.light} !important;
  width: 120px !important;
  height: 100px !important;
`;

const customStyles = {
  control: (base, state) => ({
    ...base,
    background: "#004995",

    // Removes weird border around container
    boxShadow: state.isFocused ? null : null,
    marginTop: "0px",

    // Overwrittes the different states of border
    border: "0px",
    borderBottom: "1px solid white",
    borderRadius: "0px",
    "&:hover": {
      cursor: "pointer",
      // Overwrittes the different states of border
      borderColor: "#FEEC47",
    },
  }),
  option: (provided, state) => ({
    ...provided,
    borderBottom: "1px dotted pink",
    color: state.isSelected ? "red" : "blue",
    padding: 20,
    width: "",
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: `${(props) => props.theme.colors.light}`, // Custom colour
    "&:hover": {
      color: "#FEEC47",
      cursor: "pointer",
    },
  }),
  indicatorSeparator: (base) => ({
    ...base,
    display: "none", // Custom colour
  }),
};

function CitySelect() {
  const options = [
    {
      value: "Recife",
      label: "Recife",
    },
    {
      value: "Olinda",
      label: "Olinda",
    },
  ];
  const [selectedCity, setSelectedCity] = useState(options[0]);

  return (
    <div>
      <StyledSelect
        value={selectedCity}
        options={options}
        styles={customStyles}
        onChange={async (option) => {
          setSelectedCity(option);
        }}
      />
    </div>
  );
}

export default CitySelect;
