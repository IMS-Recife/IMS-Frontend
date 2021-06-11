import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  covidIcon,
  homeIcon,
  searchIcon,
  economyIcon,
  projectsIcon,
  plansIcon,
  backArrowIcon,
} from "../../assets/sidebarIcons";

import useLayout from "../../contexts/layout";

const Container = styled.div`
  height: 100%;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 10px;
`;

const Li = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin: 8px 0px 8px 0px;
`;

const Label = styled.label`
  background: url(${searchIcon});
  background-repeat: no-repeat;
  background-position: 10px center;

  &:active {
    background: transparent;
  }
`;

function Sidebar() {
  const { collapseSideBar, setCollapseSideBar } = useLayout();
  const router = useRouter();
  return (
    <Container
      className="p-3"
      onMouseEnter={() => setCollapseSideBar(false)}
      onMouseLeave={() => setCollapseSideBar(true)}
      style={collapseSideBar ? { width: "80px" } : { width: "245px" }}
    >
      <ul className="flex flex-column text-white">
        <Li>
          <IconContainer
            className={collapseSideBar && "hover:bg-secondary-green-darker"}
          >
            <img src={backArrowIcon} alt="Voltar" width="14px" height="26px" />
          </IconContainer>
        </Li>
        <Li className={!collapseSideBar && "-ml-4"}>
          {collapseSideBar ? (
            <IconContainer
              className={collapseSideBar && "hover:bg-secondary-green-darker"}
            >
              <img src={searchIcon} alt="Busca" width="26px" />
            </IconContainer>
          ) : (
            <Label>
              <input
                type="text"
                className="bg-transparent border rounded-lg p-3 w-48"
              />
            </Label>
          )}
        </Li>
        <Link href="/">
          <Li
            className={
              !collapseSideBar && "hover:bg-secondary-green-darker rounded-lg"
            }
          >
            <IconContainer
              className={collapseSideBar && "hover:bg-secondary-green-darker"}
            >
              <img src={homeIcon} alt="Home" width="26px" />
            </IconContainer>
            <p
              className={
                collapseSideBar ? "hidden" : "text-white mb-0 ml-3 text-lg"
              }
            >
              Home
            </p>
          </Li>
        </Link>

        <Link href="/planos">
          <Li
            className={
              !collapseSideBar && "hover:bg-secondary-green-darker rounded-lg"
            }
          >
            <IconContainer
              className={
                collapseSideBar &&
                router.asPath === "/planos" &&
                "bg-secondary-green-darker"
              }
            >
              <img src={plansIcon} alt="Planos" width="21px" />
            </IconContainer>
            <p
              className={
                collapseSideBar ? "hidden" : "text-white mb-0 ml-3 text-lg"
              }
            >
              Planos
            </p>
          </Li>
        </Link>
        <Link href="/projetos">
          <Li
            className={
              !collapseSideBar && "hover:bg-secondary-green-darker rounded-lg"
            }
          >
            <IconContainer
              className={
                collapseSideBar &&
                router.asPath === "/projetos" &&
                "bg-secondary-green-darker"
              }
            >
              <img src={projectsIcon} alt="Projetos" width="21px" />
            </IconContainer>
            <p
              className={
                collapseSideBar ? "hidden" : "text-white mb-0 ml-3 text-lg"
              }
            >
              Projetos
            </p>
          </Li>
        </Link>
        <Link href="/economia">
          <Li
            className={
              !collapseSideBar && "hover:bg-secondary-green-darker rounded-lg"
            }
          >
            <IconContainer
              className={
                collapseSideBar &&
                router.asPath === "/economia" &&
                "bg-secondary-green-darker"
              }
            >
              <img src={economyIcon} alt="Economia" width="26px" />
            </IconContainer>
            <p
              className={
                collapseSideBar ? "hidden" : "text-white mb-0 ml-3 text-lg"
              }
            >
              Economia
            </p>
          </Li>
        </Link>
        <Link href="/covid">
          <Li
            className={
              !collapseSideBar && "hover:bg-secondary-green-darker rounded-lg"
            }
          >
            <IconContainer
              className={
                collapseSideBar &&
                router.asPath === "/planos" &&
                "bg-secondary-green-darker"
              }
            >
              <img src={covidIcon} alt="Covid-19" width="27px" />
            </IconContainer>
            <p
              className={
                collapseSideBar ? "hidden" : "text-white mb-0 ml-3 text-lg"
              }
            >
              Covid-19
            </p>
          </Li>
        </Link>
      </ul>
    </Container>
  );
}

export default Sidebar;
