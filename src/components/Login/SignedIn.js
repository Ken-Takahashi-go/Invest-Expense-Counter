import React from "react";
import { NavLink } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "./../../actions/authActionCreator";
import "./SignedIn.css";

const SignedIn = props => {
  return (
    <ul className="SignedIn">
      <li>
        <NavLink to="/Fain">Project</NavLink>
      </li>
      <li>
        <a onClick={props.signOut}>Log Out</a>
      </li>
    </ul>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(null, mapDispatchToProps)(SignedIn);
