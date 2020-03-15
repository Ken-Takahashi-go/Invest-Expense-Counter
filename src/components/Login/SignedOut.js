import React from "react";
import { NavLink } from "react-router-dom";
import "./SignedOut.css";

const SignedOut = () => {
  return (
    <ul className="SignedOut">
      <li>
        <NavLink to="/Fain">Fain</NavLink>
      </li>
      <li>
        <NavLink to="/signup">Signup</NavLink>
      </li>
      <li>
        <NavLink to="/login">Log In</NavLink>
      </li>
    </ul>
  );
};

export default SignedOut;
