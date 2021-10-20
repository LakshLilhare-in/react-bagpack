import { Input, Typography } from "@material-ui/core";
import React from "react";
import controllInputs from "../hooks/useInputs";

export default function Inputs(props) {
    var track = controllInputs()
    var handleSubmit = (evt) => {
        evt.preventDefault()
        props.next(track.state, document.getElementById('form-input'))
        track.reset()
    }
  return (
    <form onSubmit={handleSubmit}>
          <Typography variant="h3">State: { track.state }</Typography>
          <Input id="form-input" onChange={ track.handleChange } />
      </form>
  );
}
