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
import Button from "@material-ui/core/Button";

const Filter = props => {
  return (
    <Box color="text.primary">
      <Container>
        <div className="container Filter-container">
          <Button
            variant="outlined"
            className="showAll"
            onClick={props.showAll}
          >
            全て
          </Button>
          <Button
            variant="outlined"
            className="showInvest"
            onClick={props.showInvest}
          >
            投資
          </Button>
          <Button
            variant="outlined"
            className="showExpense"
            onClick={props.showExpense}
          >
            浪費
          </Button>
          <Button
            variant="outlined"
            className="showHealing"
            onClick={props.showHealing}
          >
            癒し
          </Button>
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
