import React, { useState } from "react";
import Select from "react-select";
import styled from "styled-components";
import { useRouter } from "next/router";

import BrasilFlag from "../../assets/Flags/255-brazil.svg";
import USFlag from "../../assets/Flags/226-united-states.svg";

const StyledSelect = styled(Select)`
  display: block !important;
  position: absolute !important;
  margin-top: 10px !important;
  right: 300px !important;
  width: 4.4rem !important;
  background-color: #0000 !important;
  color: black !important;
  control {
    background: blue;
  }
  @media screen and (max-width: 860px) {
    right: 60px !important;
  }
`;

function LanguagesDropdownSelect() {
  const router = useRouter();
  const options = [
    {
      value: "pt-br",
      label: (
        <img src={BrasilFlag} alt="Brasil Flag" style={{ width: "20px" }} />
      ),
    },
    {
      value: "en",
      label: <img src={USFlag} alt="US Flag" style={{ width: "20px" }} />,
    },
  ];
  const [selectedLanguage, setSelectedLanguage] = useState(options[0]);

  const customStyles = {
    control: (base, state) => ({
      ...base,
      background: "#262f51",
      // Overwrittes the different states of border
      borderColor: state.isFocused ? "#262f51" : "#262f51",
      // Removes weird border around container
      boxShadow: state.isFocused ? null : null,
      color: "#000",
      marginTop: "0px",
      "&:hover": {
        cursor: "pointer",
        // Overwrittes the different states of border
        borderColor: state.isFocused ? "#262f51" : "#262f51",
      },
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: "#1f81e8", // Custom colour
      "&:hover": {
        color: "#fff",
        cursor: "pointer",
      },
    }),
    indicatorSeparator: (base) => ({
      ...base,
      display: "none", // Custom colour
    }),
  };

  return (
    <div>
      <StyledSelect
        value={selectedLanguage}
        options={options}
        styles={customStyles}
        onChange={async (option) => {
          await router.push("/", "/", { locale: option.value });
          setSelectedLanguage(option);
        }}
      />
    </div>
  );
}

export default LanguagesDropdownSelect;
