import { Typography } from "@material-ui/core";
import React from "react";

function Footer({ name }) {
  return (
    <footer
      className="Helpers/footer"
      style={{
        display: "flex",
        position: "absolute",
        bottom: "0",
        width: "100%",
          backgroundColor: '#454f5e',
          color: 'white',
          textAlign: 'center',
          justifyContent: 'center',
          padding:'8px'
      }}
    >
      <Typography variant="h6">© Copyright {new Date().getFullYear()}-{new Date().getFullYear() + 1} {name}</Typography>
    </footer>
  );
}

export default Footer;
