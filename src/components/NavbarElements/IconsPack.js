import React from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaGithubSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import styled from "styled-components";

import RightNavMenu from "./RightNavMenu";
import LogoPortoDigital from "../../assets/LogoPortoDigital.svg";

const IconNavLink = styled.a`
  color: #1f81e8;
  display: flex;
  align-items: center;
  padding: 0 0.2rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #fff;
  }
  :hover {
    color: #fff;
  }
`;

function IconsPack() {
  return (
    <div>
      <RightNavMenu>
        <IconNavLink>
          <img src={LogoPortoDigital} alt="Logo Porto Digital" />
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
