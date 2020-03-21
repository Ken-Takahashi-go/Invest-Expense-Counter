import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "./../../actions/authActionCreator";
import Button from "@material-ui/core/Button";
import "./SignedIn.css";
// import { NavLink } from "react-router-dom";

const SignedIn = withRouter(props => {
  const handleSubmit = e => {
    e.preventDefault();
    props.signOut();
    props.history.push({ pathname: "/login" });
  };

  return (
    <ul className="SignedIn">
      {/* <li>
        <NavLink to="/Graph" style={{ textDecoration: "none" }}>
          <Button variant="outlined">Graph</Button>
        </NavLink>
      </li> */}
      <li>
        <Button variant="outlined">
          <a onClick={handleSubmit}>Log Out</a>
        </Button>
      </li>
    </ul>
  );
});

const mapStateToProps = state => {
  return {
    authError: state.auth.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignedIn);
