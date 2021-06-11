import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

const Container = styled.div`
  width: 245px;
  height: 100%;
`;

const Li = styled.li`
  cursor: pointer;
  padding: 20px;
`;

function Sidebar() {
  const [sidebarColapsed, setSidebarColapsed] = useState(false);
  return (
    <Container className="p-3">
      <ul className="flex flex-column text-white">
        <Li
          className={
            !sidebarColapsed && "hover:bg-secondary-green-darker rounded-lg"
          }
        >
          Arrow
        </Li>
        <Li
          className={
            !sidebarColapsed && "hover:bg-secondary-green-darker rounded-lg"
          }
        >
          Busca
        </Li>
        <Link href="/">
          <Li
            className={
              !sidebarColapsed && "hover:bg-secondary-green-darker rounded-lg"
            }
          >
            Home
          </Li>
        </Link>

        <Link href="/planos">
          <Li
            className={
              !sidebarColapsed && "hover:bg-secondary-green-darker rounded-lg"
            }
          >
            Planos
          </Li>
        </Link>
        <Link href="/projetos">
          <Li
            className={
              !sidebarColapsed && "hover:bg-secondary-green-darker rounded-lg"
            }
          >
            Projetos
          </Li>
        </Link>
        <Link href="/economia">
          <Li
            className={
              !sidebarColapsed && "hover:bg-secondary-green-darker rounded-lg"
            }
          >
            Economia
          </Li>
        </Link>
        <Link href="/covid">
          <Li
            className={
              !sidebarColapsed && "hover:bg-secondary-green-darker rounded-lg"
            }
          >
            Covid-19
          </Li>
        </Link>
      </ul>
    </Container>
  );
}

export default Sidebar;
