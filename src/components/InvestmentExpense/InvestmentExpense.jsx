import React from "react";
import "./InvestmentExpense.css";

const InvenstmentExpense = () => {
  return (
    <div id="displayInevstExpense">
      <div id="investment-field">
        <h4>投資</h4>
        <p id="investment">+ xx Hour</p>
      </div>
      <div id="expense-field">
        <h4>浪費</h4>
        <p id="expense">- xx Hour</p>
      </div>
    </div>
  );
};

export default InvenstmentExpense;
