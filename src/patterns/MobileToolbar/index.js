import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import {
  FaBuffer,
  FaChartBar,
  FaChartLine,
  FaCity,
  FaMapMarkedAlt,
  FaPlusSquare,
} from "react-icons/fa";
import styled from "styled-components";

const StyledAppBar = styled(AppBar)`
  background: ${(props) => props.theme.colors.background} !important;
  margin-top: 50px;
`;

const StyledFaPlusSquare = styled(FaPlusSquare)`
  color: ${(props) => props.theme.colors.warning};

  :hover {
    color: ${(props) => props.theme.colors.light};
  }
`;

const StyledFaBuffer = styled(FaBuffer)`
  color: ${(props) => props.theme.colors.primary};

  :hover {
    color: ${(props) => props.theme.colors.light};
  }
`;

const StyledFaChartBar = styled(FaChartBar)`
  color: ${(props) => props.theme.colors.primary};

  :hover {
    color: ${(props) => props.theme.colors.light};
  }
`;
const StyledFaChartLine = styled(FaChartLine)`
  color: ${(props) => props.theme.colors.primary};

  :hover {
    color: ${(props) => props.theme.colors.light};
  }
`;
const StyledFaCity = styled(FaCity)`
  color: ${(props) => props.theme.colors.primary};

  :hover {
    color: ${(props) => props.theme.colors.light};
  }
`;
const StyledFaMapMarkedAlt = styled(FaMapMarkedAlt)`
  color: ${(props) => props.theme.colors.primary};

  :hover {
    color: ${(props) => props.theme.colors.light};
  }
`;

export default function ButtonAppBar() {
  return (
    <div>
      <StyledAppBar position="static">
        <Toolbar>
          <IconButton color="inherit" aria-label="menu">
            <StyledFaPlusSquare />
          </IconButton>
          <IconButton color="inherit" aria-label="menu">
            <StyledFaBuffer />
          </IconButton>
          <IconButton color="inherit" aria-label="menu">
            <StyledFaChartBar />
          </IconButton>
          <IconButton color="inherit" aria-label="menu">
            <StyledFaChartLine />
          </IconButton>
          <IconButton color="inherit" aria-label="menu">
            <StyledFaCity />
          </IconButton>
          <IconButton color="inherit" aria-label="menu">
            <StyledFaMapMarkedAlt />
          </IconButton>
        </Toolbar>
      </StyledAppBar>
    </div>
  );
}
