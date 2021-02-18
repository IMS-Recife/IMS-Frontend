import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

export default function MaterialUISelect() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl style={{ minWidth: "180px", marginTop: "0px" }}>
        <InputLabel
          shrink
          style={{ color: "#87c2ff", font: "400 12px Roboto, sans-serif" }}
        >
          PAINEL
        </InputLabel>
        <Select
          style={{
            color: "#FEEC47",
            font: "400 20px Roboto, sans-serif",
            fontStyle: "normal",
          }}
          value={age}
          onChange={handleChange}
          displayEmpty
        >
          <MenuItem value="">
            <em>Recife</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
