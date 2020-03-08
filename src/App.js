import React from "react";

import Form from "./components/Form/Form";
import "./App.css";
import InvestExpense from "./components/InvestExpense/InvestExpense";
import ItemList from "./components/ItemList/ItemList";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import BarChart from "./components/BarGraph/BarGraph";

function App() {
  return (
    <Box>
      <Container maxWidth="sm">
        <div className="App">
          <InvestExpense />
          <BarChart />
          <Form />
          <ItemList />
        </div>
      </Container>
    </Box>
  );
}

export default App;
