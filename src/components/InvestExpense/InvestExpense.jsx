import React from "react";
import { connect } from "react-redux";
import "./InvestExpense.css";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

const InvenstExpense = props => {
  const investLists = props.items
    .filter(item => item.status === "投資")
    .map(item => {
      return Number(item.hour);
    });

  const expenseLists = props.items
    .filter(item => item.status === "浪費")
    .map(item => {
      return Number(item.hour);
    });

  const invest = investLists.reduce((acc, amount) => acc + amount, 0);
  const expense = expenseLists.reduce((acc, amount) => acc + amount, 0);

  return (
    <Box>
      <Container maxWidth="sm">
        <h2>積み上げカウンター</h2>
        <div id="displayInevstExpense">
          <div id="invest-field">
            <h4>
              投資 : {invest}
              <span> Hour</span>
            </h4>
          </div>
          <div id="expense-field">
            <h4>
              浪費 : {expense}
              <span> Hour</span>
            </h4>
          </div>
        </div>
      </Container>
    </Box>
  );
};

const mapStateToProps = state => {
  return { items: state };
};

export default connect(mapStateToProps, null)(InvenstExpense);
