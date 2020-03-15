import React from "react";
import { NavLink } from "react-router-dom";
import "./SignedOut.css";

const SignedOut = () => {
  return (
    <ul className="SignedOut">
      <li>
        <NavLink to="/">Signup</NavLink>
      </li>
      <li>
        <NavLink to="/">Log In</NavLink>
      </li>
    </ul>
  );
};

export default SignedOut;
