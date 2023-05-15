import React from "react";
import { NavLink } from "react-router-dom";

const LandingButton = ({ path }) => {
  console.log(typeof path);
  console.log(path);
  return (
    <NavLink className="btn button-fill" to={`/${path.toLowerCase()}`}>
      {path}
    </NavLink>
  );
};

export default LandingButton;
