import React, { useState } from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaGithubSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import styled from "styled-components";

import LogoPortoDigitalBranca from "../../assets/LogoPortoDigitalBranca.svg";
import LogoPortoDigitalCinza from "../../assets/LogoPortoDigitalCinza.svg";

const Container = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;
const IconNavLink = styled.a`
  color: ${(props) => props.theme.colors.light};
  padding: 0 0.2rem;
  cursor: pointer;
  &.active {
    color: ${(props) => props.theme.colors.lightGrey};
  }
  :hover {
    color: ${(props) => props.theme.colors.lightGrey};
  }
`;

function IconsPack() {
  const [logoPortoDigital, setLogoPortoDigital] = useState(
    LogoPortoDigitalBranca
  );

  return (
    <Container className="flex flex-row justify-center align-center">
      <IconNavLink
        style={{ padding: "0 1rem" }}
        onMouseOver={() => setLogoPortoDigital(LogoPortoDigitalCinza)}
        onMouseEnter={() => setLogoPortoDigital(LogoPortoDigitalCinza)}
        onMouseOut={() => setLogoPortoDigital(LogoPortoDigitalBranca)}
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
    </Container>
  );
}

export default IconsPack;
