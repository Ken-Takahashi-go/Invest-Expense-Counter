import React from "react";
import "./App.css";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Login from "./components/Login/LogIn";
import SignUp from "./components/Login/SignUp";
import Main from "./Main";
// import Graph from "./Graph";
// import { Redirect } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Box>
        <Container maxWidth="sm">
          <div className="App">
            <NavBar />
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/main" component={Main} />
              {/* <Route path="/Graph" component={Graph} /> */}
              <Route path="/login" exact component={Login} />
              <Route path="/signup" exact component={SignUp} />
            </Switch>
          </div>
        </Container>
      </Box>
    </BrowserRouter>
  );
}

export default App;
