import React from "react";
import { NavLink } from "react-router-dom";
import "./SignedIn.css";

const SignedIn = () => {
  return (
    <ul className="SignedIn">
      <li>
        <NavLink to="/">Project</NavLink>
      </li>
      <li>
        <NavLink to="/">Log Out</NavLink>
      </li>
    </ul>
  );
};

export default SignedIn;
