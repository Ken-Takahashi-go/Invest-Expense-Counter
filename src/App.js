import React from "react";
import "./App.css";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
// import BarChart from "./components/BarGraph/BarGraph";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Login from "./components/Login/LogIn";
import SignUp from "./components/Login/SignUp";
import Main from "./Main";

function App() {
  return (
    <BrowserRouter>
      <Box>
        <Container maxWidth="sm">
          <div className="App">
            <NavBar />
            <Switch>
              <Route path="/main" component={Main} />
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
