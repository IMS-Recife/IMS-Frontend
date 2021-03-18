import React, { useState } from "react";
import styled from "styled-components";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaGithubSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import LogoPortoDigitalAzul from "../../assets/LogoPortoDigitalAzul.svg";
import LogoPortoDigitalBranca from "../../assets/LogoPortoDigitalBranca.svg";

export const Container = styled.div`
  background: ${(props) => props.theme.colors.darkBlue};
  height: 50px;
  width: 100%;
  align-items: center;
  justify-content: center;
  @media (min-width: 850px) {
    display: none;
  }
`;
const IconLink = styled.a`
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;

  &.active {
    color: ${(props) => props.theme.colors.light};
  }
  :hover {
    color: ${(props) => props.theme.colors.light};
  }
`;

function Footer() {
  const [logoPortoDigital, setLogoPortoDigital] = useState(
    LogoPortoDigitalAzul
  );
  return (
    <Container className="flex flex-row">
      <IconLink
        style={{ padding: "1rem" }}
        onMouseOver={() => setLogoPortoDigital(LogoPortoDigitalBranca)}
        onMouseEnter={() => setLogoPortoDigital(LogoPortoDigitalBranca)}
        onMouseOut={() => setLogoPortoDigital(LogoPortoDigitalAzul)}
        href="https://www.portodigital.org/home"
        target="_blank"
      >
        <img src={logoPortoDigital} alt="Logo Porto Digital" />
      </IconLink>
      <IconLink>
        <FaFacebookSquare size="1.9em" title="Facebook" />
      </IconLink>
      <IconLink>
        <FaTwitterSquare size="1.9em" title="Twitter" />
      </IconLink>
      <IconLink>
        <FaGithubSquare size="1.9em" title="Github" />
      </IconLink>
      <IconLink>
        <FaYoutubeSquare size="1.9em" title="Youtube" />
      </IconLink>
    </Container>
  );
}

export default Footer;
