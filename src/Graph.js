import React from "react";
import BarChart from "./components/BarGraph/BarGraph";
import InvestExpense from "./components/InvestExpense/InvestExpense";
import ItemList from "./components/ItemList/ItemList";
import Box from "@material-ui/core/Box";

const Graph = () => {
  return (
    <Box>
      {/* <Container maxWidth="sm"> */}
      <BarChart />
      <ItemList />
      {/* </Container> */}
    </Box>
  );
};

export default Graph;
