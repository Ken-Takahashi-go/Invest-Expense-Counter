import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { signUp } from "./../../actions/authActionCreator";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./SignUp.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 400
    }
  }
}));

const SignUp = withRouter(props => {
  console.log(props);
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    props.signUp(email, password);
    props.history.push("/login");
  };

  return (
    <div>
      <Box>
        <Container>
          <div className="signupForm">
            <form className={classes.root} noValidate autoComplete="off">
              <h2 className="grey-text text-darken-3">Sign Up</h2>
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
                  required
                  label="password"
                  type="password"
                  id="password"
                  value={password}
                  onChange={e => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <div className="input-field">
                <TextField
                  required
                  label="First Name"
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={e => {
                    setFirstName(e.target.value);
                  }}
                />
              </div>
              <div className="input-field">
                <TextField
                  required
                  label="Last Name"
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={e => {
                    setLastName(e.target.value);
                  }}
                />
              </div>
              <div className="input-field">
                <Button
                  variant="contained"
                  color="secondary"
                  className="signupbtn"
                  onClick={handleSubmit}
                >
                  SignUp
                </Button>
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
    auth: state.firebase.auth,
    authError: state.auth.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: (email, password) => {
      const action = signUp(email, password);
      dispatch(action);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
