import React from "react";
import Form from "./components/Form/Form";
import "./App.css";
import InvestExpense from "./components/InvestExpense/InvestExpense";
import ItemList from "./components/ItemList/ItemList";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
// import BarChart from "./components/BarGraph/BarGraph";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Login from "./components/Login/LogIn";
import SignedIn from "./components/Login/SignedIn";
import SignedOut from "./components/Login/SignedOut";
import SignUp from "./components/Login/SignUp";
import Fain from "./Main";

function App() {
  return (
    <BrowserRouter>
      <Box>
        <Container maxWidth="sm">
          <div className="App">
            <NavBar />
            <Switch>
              <Route path="/Fain" component={Fain} />
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
