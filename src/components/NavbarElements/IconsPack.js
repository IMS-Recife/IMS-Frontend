import React, { useState } from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaGithubSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import styled from "styled-components";

import Select from "react-select";
import RightNavMenu from "./RightNavMenu";
import LogoPortoDigitalAzul from "../../assets/LogoPortoDigitalAzul.svg";
import LogoPortoDigitalBranca from "../../assets/LogoPortoDigitalBranca.svg";
import BrasilFlag from "../../assets/Flags/255-brazil.svg";
import USFlag from "../../assets/Flags/226-united-states.svg";

const IconNavLink = styled.a`
  color: ${(props) => props.theme.colors.primary};
  display: flex;
  align-items: center;
  padding: 0 0.2rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: ${(props) => props.theme.colors.light};
  }
  :hover {
    color: ${(props) => props.theme.colors.light};
  }
`;

const StyledSelect = styled(Select)`
  display: inline-block !important;
  width: 5rem !important;
  background-color: #0000 !important;
  color: black !important;
  control {
    background: blue;
  }
`;

function IconsPack() {
  const [logoPortoDigital, setLogoPortoDigital] = useState(
    LogoPortoDigitalAzul
  );
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
  const options = [
    {
      value: "BR",
      label: <img src={BrasilFlag} style={{ width: "20px" }} />,
    },
    { value: "US", label: <img src={USFlag} style={{ width: "20px" }} /> },
  ];
  return (
    <div>
      <RightNavMenu>
        <StyledSelect options={options} styles={customStyles} />
        <IconNavLink
          style={{ padding: "0 1rem" }}
          onMouseOver={() => setLogoPortoDigital(LogoPortoDigitalBranca)}
          onMouseEnter={() => setLogoPortoDigital(LogoPortoDigitalBranca)}
          onMouseOut={() => setLogoPortoDigital(LogoPortoDigitalAzul)}
          href="https://www.portodigital.org/home"
          target="_blank"
        >
          <img src={logoPortoDigital} alt="Logo Porto Digital" />
        </IconNavLink>
        <IconNavLink>
          <FaFacebookSquare size="1.9em" title="Facebook" />
        </IconNavLink>
        <IconNavLink>
          <FaTwitterSquare size="1.9em" title="Twitter" />
        </IconNavLink>
        <IconNavLink>
          <FaGithubSquare size="1.9em" title="Github" />
        </IconNavLink>
        <IconNavLink>
          <FaYoutubeSquare size="1.9em" title="Youtube" />
        </IconNavLink>
      </RightNavMenu>
    </div>
  );
}

export default IconsPack;
