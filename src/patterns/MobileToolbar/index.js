import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import {
  // FaAngleLeft,
  // FaAngleRight,
  // FaBuffer,
  // FaChartBar,
  // FaChartLine,
  // FaCity,
  // FaMapMarkedAlt,
  FaPlusSquare,
} from "react-icons/fa";
import styled from "styled-components";

const StyledAppBar = styled(AppBar)`
  background: ${(props) => props.theme.colors.background} !important;
  margin-top: 10px;
`;

export default function ButtonAppBar() {
  return (
    <div>
      <StyledAppBar position="static">
        <Toolbar>
          <IconButton color="inherit" aria-label="menu">
            <FaPlusSquare />
          </IconButton>
          <Typography variant="h6">News</Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </StyledAppBar>
    </div>
  );
}
