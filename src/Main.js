import React from "react";
import Form from "./components/Form/Form";
import InvestExpense from "./components/InvestExpense/InvestExpense";
import ItemList from "./components/ItemList/ItemList";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import NavBar from "./components/NavBar/NavBar";

const Fain = () => {
  return (
    <Box>
      <Container maxWidth="sm">
        <NavBar />
        <InvestExpense />
        <Form />
        <ItemList />
      </Container>
    </Box>
  );
};

export default Fain;
