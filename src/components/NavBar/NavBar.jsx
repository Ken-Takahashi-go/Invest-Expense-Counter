import React from "react";
import { connect } from "react-redux";
// import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import SignedIn from "../Login/SignedIn";
import SignedOut from "../Login/SignedOut";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  title: {
    flexGrow: 1
  }
}));

const NavBar = props => {
  const { auth } = props;
  const links = auth.uid ? <SignedIn /> : <SignedOut />;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <div className="container">
              <Link to="/" className="brand-logo"></Link>
              {links}
            </div>
          </Typography>
          {/* <SignedIn />
          <SignedOut /> */}
        </Toolbar>
      </AppBar>
    </div>
  );
};
const mapStateToProps = state => {
  console.log(state);
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(NavBar);
