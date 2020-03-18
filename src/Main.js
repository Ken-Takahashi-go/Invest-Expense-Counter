import React from "react";
import Form from "./components/Form/Form";
import InvestExpense from "./components/InvestExpense/InvestExpense";
import ItemList from "./components/ItemList/ItemList";
import Box from "@material-ui/core/Box";

const Main = () => {
  return (
    <Box>
      {/* <Container maxWidth="sm"> */}
      <InvestExpense />
      <Form />
      <ItemList />
      {/* </Container> */}
    </Box>
  );
};

export default Main;
