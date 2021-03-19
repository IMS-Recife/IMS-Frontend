import React from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import useLayout from "../../contexts/layout";

const ToggleButton = styled.div`
  cursor: pointer;
  width: 35px;
  height: 35px;
  background: ${(props) => props.theme.colors.darkBlue};
  color: #fff;
  text-align: center;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  margin-left: 50px;
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 15px;
  display: none;
  @media (max-width: 768px) {
    display: flex;
  }
`;

function ToggleSidebarButton() {
  const { handleToggleSidebar } = useLayout();

  return (
    <ToggleButton onClick={() => handleToggleSidebar()}>
      <FaBars />
    </ToggleButton>
  );
}

export default ToggleSidebarButton;
