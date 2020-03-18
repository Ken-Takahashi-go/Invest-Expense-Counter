import React, { useState } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signIn } from "./../../actions/authActionCreator";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./Login.css";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 400
    }
  }
}));

const LogIn = withRouter(props => {
  console.log(props);
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    props.signIn(email, password);
    props.history.push({ pathname: "/main" });
  };

  const { authError } = props;
  return (
    <div>
      <Box>
        <Container>
          <div className="loginForm">
            <form className={classes.root} noValidate autoComplete="off">
              <h2>Log in</h2>
              <div className="input-field">
                <TextField
                  required
                  label="E-mail"
                  type="email"
                  id="email"
                  value={email}
                  onChange={e => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="input-field">
                <TextField
                  label="Password"
                  type="password"
                  id="password"
                  value={password}
                  onChange={e => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <div className="input-field">
                <Button
                  variant="contained"
                  color="secondary"
                  className="loginbtn"
                  onClick={handleSubmit}
                >
                  Login
                </Button>
                <div className="red-text center">
                  {authError ? <p>{authError}</p> : null}
                </div>
              </div>
            </form>
          </div>
        </Container>
      </Box>
    </div>
  );
});

const mapStateToProps = state => {
  return {
    authError: state.auth.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: (email, password) => dispatch(signIn(email, password))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
