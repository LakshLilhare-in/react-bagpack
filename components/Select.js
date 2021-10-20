import React from "react";
import { MenuItem, Select } from "@material-ui/core";
import controllInputs from "../hooks/useInputs";

export default function Selects({ options }) {
  var currentOption = controllInputs();
  return (
    <Select value={currentOption.state} onChange={currentOption.handleChange}>
      {options.map((item, i) => {
        return <MenuItem value={i} key={i}>{item}</MenuItem>;
      })}
    </Select>
  );
}
