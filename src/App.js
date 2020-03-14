import React from "react";
import { Router } from "react-router-dom";
import Form from "./components/Form/Form";
import "./App.css";
import InvestExpense from "./components/InvestExpense/InvestExpense";
import ItemList from "./components/ItemList/ItemList";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import BarChart from "./components/BarGraph/BarGraph";
import ButtonAppBar from "./components/ButtonAppBar/ButtonAppBar";

function App() {
  return (
    <Box>
      <Container maxWidth="sm">
        <div className="App">
          <ButtonAppBar />
          <InvestExpense />
          {/* <BarChart /> */}
          <Form />
          <ItemList />
        </div>
      </Container>
    </Box>
  );
}

export default App;
