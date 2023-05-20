import React from "react";
import { NavLink } from "react-router-dom";

const LandingButton = ({ path }) => {
  return (
    <NavLink className="btn button-fill" to={`/${path.toLowerCase()}`}>
      {path}
    </NavLink>
  );
};

export default LandingButton;
