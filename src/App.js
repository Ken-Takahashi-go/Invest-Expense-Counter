import React from "react";

import Form from "./components/Form/Form";
import "./App.css";
import InvestmentExpense from "./components/InvestmentExpense/InvestmentExpense";
import ItemList from "./components/ItemList/ItemList";

function App() {
  return (
    <div className="App">
      <InvestmentExpense />
      <Form />
      <ItemList />
    </div>
  );
}

export default App;
