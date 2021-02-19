import React, { useState } from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaGithubSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import styled from "styled-components";

import RightNavMenu from "./RightNavMenu";
import LogoPortoDigitalAzul from "../../assets/LogoPortoDigitalAzul.svg";
import LogoPortoDigitalBranca from "../../assets/LogoPortoDigitalBranca.svg";

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

function IconsPack() {
  const [logoPortoDigital, setLogoPortoDigital] = useState(
    LogoPortoDigitalAzul
  );
  return (
    <div>
      <RightNavMenu>
        <IconNavLink
          style={{ padding: "0 1rem" }}
          onMouseOver={() => setLogoPortoDigital(LogoPortoDigitalBranca)}
          onMouseEnter={() => setLogoPortoDigital(LogoPortoDigitalBranca)}
          onMouseOut={() => setLogoPortoDigital(LogoPortoDigitalAzul)}
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
