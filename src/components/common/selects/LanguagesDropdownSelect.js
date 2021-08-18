import React, { useState } from "react";
import Select from "react-select";
import styled from "styled-components";
import { useRouter } from "next/router";

import BrasilFlag from "../../../assets/Flags/255-brazil.svg";
import USFlag from "../../../assets/Flags/226-united-states.svg";

const StyledSelect = styled(Select)`
  display: block !important;
  width: 4.4rem !important;
  color: black !important;
  control {
    background: blue;
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
  const [selectedLanguage, setSelectedLanguage] = useState(
    options.map((option) => router.locale === option.value && option)
  );

  const customStyles = {
    control: (base, state) => ({
      ...base,
      background: "#fff",
      // Overwrittes the different states of border
      borderColor: state.isFocused ? "#fff" : "#fff",
      // Removes weird border around container
      boxShadow: state.isFocused ? null : null,
      color: "#000",
      marginTop: "0px",
      "&:hover": {
        cursor: "pointer",
        // Overwrittes the different states of border
        borderColor: state.isFocused ? "#fff" : "#fff",
      },
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: "#00a14b", // Custom colour
      "&:hover": {
        color: "#ddddde",
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
        instanceId="language selector"
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
