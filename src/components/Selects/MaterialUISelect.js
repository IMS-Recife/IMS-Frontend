import React, { useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";

import Select from "@material-ui/core/Select";
import { injectIntl, FormattedMessage } from "react-intl";

const useStyles = makeStyles(() => ({
  select: {
    "&:before": {
      borderColor: "#fff",
    },
    "&:hover:not(.Mui-disabled):before": {
      borderColor: "#FEEC47",
    },
    "&:after": {
      borderColor: "#FEEC47",
    },
  },
  icon: {
    fill: "#fff",
  },
}));
function MaterialUISelect() {
  const classes = useStyles();
  const [city, setCity] = useState("");

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <div>
      <FormControl
        style={{ minWidth: "180px", marginTop: "0px", border: "2px" }}
      >
        <InputLabel
          shrink
          style={{ color: "#87c2ff", font: "400 12px Roboto, sans-serif" }}
        >
          <FormattedMessage id="PANEL" />
        </InputLabel>
        <Select
          className={classes.select}
          inputProps={{
            classes: {
              icon: classes.icon,
            },
          }}
          style={{
            color: "#FEEC47",
            font: "400 20px Roboto, sans-serif",
            fontStyle: "normal",
          }}
          value={city}
          onChange={handleChange}
          displayEmpty
        >
          <MenuItem value="">
            <FormattedMessage id="RECIFE" />
          </MenuItem>
          <MenuItem value="Olinda">Olinda</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default injectIntl(MaterialUISelect);
