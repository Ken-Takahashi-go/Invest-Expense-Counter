import React from "react";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import "./SignedOut.css";

const SignedOut = () => {
  return (
    <ul className="SignedOut">
      {/* <li>
        <NavLink to="/main">
          <Button variant="outlined">Main</Button>
        </NavLink>
      </li> */}
      <li>
        <NavLink to="/signup" style={{ textDecoration: "none" }}>
          <Button variant="outlined">Sign Up</Button>
        </NavLink>
      </li>
      <li>
        <NavLink to="/login" style={{ textDecoration: "none" }}>
          <Button variant="outlined">Log In</Button>
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedOut;
