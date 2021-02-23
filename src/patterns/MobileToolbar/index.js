import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { useIntl } from "react-intl";
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
  const intl = useIntl();
  return (
    <div>
      <StyledAppBar position="static">
        <Toolbar>
          <IconButton color="inherit" aria-label="menu">
            <StyledFaPlusSquare
              title={intl.formatMessage({ id: "ADD_INDICATOR" })}
            />
          </IconButton>
          <IconButton color="inherit" aria-label="menu">
            <StyledFaBuffer title={intl.formatMessage({ id: "SHOW_ALL" })} />
          </IconButton>
          <IconButton color="inherit" aria-label="menu">
            <StyledFaChartBar title={intl.formatMessage({ id: "ANALYSIS" })} />
          </IconButton>
          <IconButton color="inherit" aria-label="menu">
            <StyledFaChartLine title={intl.formatMessage({ id: "SIRD" })} />
          </IconButton>
          <IconButton color="inherit" aria-label="menu">
            <StyledFaCity title={intl.formatMessage({ id: "NEIGHBORHOODS" })} />
          </IconButton>
          <IconButton color="inherit" aria-label="menu">
            <StyledFaMapMarkedAlt title={intl.formatMessage({ id: "MAP" })} />
          </IconButton>
        </Toolbar>
      </StyledAppBar>
    </div>
  );
}
