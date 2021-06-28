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
import usePreviousPath from "../../contexts/previousPath";

const Container = styled.div`
  height: 100%;
  transition: width 0.15s;
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
  margin-top: 0px;
`;

const Input = styled.input`
  padding: 12px 20px 12px 40px;
  ::placeholder {
    color: white;
    padding-left: 20%;
  }
`;

const Label = styled.label`
  background: url(${searchIcon});
  background-repeat: no-repeat;
  background-position: 10px center;
`;

function Sidebar() {
  const { collapseSideBar, setCollapseSideBar } = useLayout();
  const { previousPath, setPreviousPath } = usePreviousPath();
  const router = useRouter();
  return (
    <Container
      className="p-3"
      onMouseEnter={() => setCollapseSideBar(false)}
      onMouseLeave={() => setCollapseSideBar(true)}
      style={collapseSideBar ? { width: "80px" } : { width: "245px" }}
    >
      {console.log(previousPath)}
      <ul
        className={
          collapseSideBar
            ? "flex flex-column text-white items-center"
            : "flex flex-column text-white"
        }
      >
        <div className="grid grid-cols-2 items-center mt-2 mb-2">
          <IconContainer
            className={collapseSideBar && "hover:bg-secondary-green-darker"}
          >
            <a href={previousPath}>
              <img
                src={backArrowIcon}
                alt="Voltar"
                width="14px"
                height="26px"
              />
            </a>
          </IconContainer>
        </div>
        <Li className="mt-2 mb-2">
          {collapseSideBar ? (
            <IconContainer
              className={collapseSideBar && "hover:bg-secondary-green-darker"}
            >
              <img src={searchIcon} alt="Busca" width="26px" />
            </IconContainer>
          ) : (
            <Label>
              <Input
                type="text"
                className="bg-transparent border rounded-lg"
                style={{ width: "100%" }}
                placeholder="Pesquisar"
              />
            </Label>
          )}
        </Li>
        <Link href="/">
          <Li
            className={
              !collapseSideBar
                ? router.asPath === "/"
                  ? "bg-secondary-green-darker rounded-lg mb-3 mt-3"
                  : "hover:bg-secondary-green-darker rounded-lg mb-3 mt-3"
                : "mt-3 mb-3"
            }
          >
            <IconContainer
              className={
                collapseSideBar &&
                router.asPath === "/" &&
                "bg-secondary-green-darker"
              }
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
              !collapseSideBar
                ? router.asPath === "/planos"
                  ? "bg-secondary-green-darker rounded-lg mb-3 mt-3"
                  : "hover:bg-secondary-green-darker rounded-lg mb-3 mt-3"
                : "mt-3 mb-3"
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
        <Link href="/projetos" onClick={() => setPreviousPath("/")}>
          <Li
            className={
              !collapseSideBar
                ? router.asPath === "/projetos"
                  ? "bg-secondary-green-darker rounded-lg mb-3 mt-3"
                  : "hover:bg-secondary-green-darker rounded-lg mb-3 mt-3"
                : "mt-3 mb-3"
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
              !collapseSideBar
                ? router.asPath === "/economia"
                  ? "bg-secondary-green-darker rounded-lg mb-3 mt-3"
                  : "hover:bg-secondary-green-darker rounded-lg mb-3 mt-3"
                : "mt-3 mb-3"
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
                collapseSideBar ? "hidden" : "text-white mb-2 mt-2 ml-3 text-lg"
              }
            >
              Economia
            </p>
          </Li>
        </Link>
        <Link href="/covid">
          <Li
            className={
              !collapseSideBar
                ? router.asPath === "/covid"
                  ? "bg-secondary-green-darker rounded-lg mb-3 mt-3"
                  : "hover:bg-secondary-green-darker rounded-lg mt-3 mb-3"
                : "mt-3 mb-3"
            }
          >
            <IconContainer
              className={
                collapseSideBar &&
                router.asPath === "/covid" &&
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
