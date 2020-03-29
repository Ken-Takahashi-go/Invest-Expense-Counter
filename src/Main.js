import React from "react";
import Form from "./components/Form/Form";
import Counter from "./components/Counter/Counter";
import ItemList from "./components/ItemList/ItemList";
import Box from "@material-ui/core/Box";

const Main = () => {
  return (
    <Box>
      {/* <Container maxWidth="sm"> */}
      <Counter />
      <Form />
      <ItemList />
      {/* </Container> */}
    </Box>
  );
};

export default Main;
