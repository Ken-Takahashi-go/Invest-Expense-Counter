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
import SignedIn from "./components/Login/SignedIn";
import SignedOut from "./components/Login/SignedOut";
import SignUp from "./components/Login/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Box>
        <Container maxWidth="sm">
          <div className="App">
            <NavBar />
            <Switch>
              <Route path="/signin" exact component={SignedIn} />
              <Route path="/signup" exact component={SignUp} />
            </Switch>
            <InvestExpense />
            {/* <BarChart /> */}
            <Form />
            <ItemList />
          </div>
        </Container>
      </Box>
    </BrowserRouter>
  );
}

export default App;
