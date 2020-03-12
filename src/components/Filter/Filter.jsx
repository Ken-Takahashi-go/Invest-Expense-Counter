import React from "react";
import { connect } from "react-redux";
import {
  showAll,
  showInvest,
  showExpense,
  showHealing
} from "../../actions/visibleFilterCreator.js";
import "./Filter.css";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

const Filter = props => {
  return (
    <Box color="text.primary">
      <Container>
        <div className="container Filter-container">
          <button className="showAll" onClick={props.showAll}>
            すべて表示
          </button>
          <button className="showInvest" onClick={props.showInvest}>
            投資
          </button>
          <button className="showExpense" onClick={props.showExpense}>
            浪費
          </button>
          <button className="showHealing" onClick={props.showHealing}>
            癒し
          </button>
        </div>
      </Container>
    </Box>
  );
};

const mapDispatchToProps = {
  showAll,
  showInvest,
  showExpense,
  showHealing
};

export default connect(null, mapDispatchToProps)(Filter);
