import React from "react";
import { connect } from "react-redux";
import { addItem, deleteItem } from "./../../actions/itemActionCreator";
import {
  showAll,
  showInvest,
  showExpense,
  showHealing
} from "./../../actions/visibleFilterCreator";
import "./ItemList.css";
import Container from "@material-ui/core/Container";
import ClassNames from "classnames";
import Filter from "./../Filter/Filter";

const ItemList = props => {
  const itemLists = props.items.map((item, index) => {
    const classNameForListItem = ClassNames(
      {
        invested: item.status === "投資"
      },
      {
        expensed: item.status === "浪費"
      },
      {
        rested: item.status === "癒し"
      }
    );
    return (
      <Container key={index} maxWidth="sm">
        <li key={item.id} className={classNameForListItem}>
          <span className="item-status">{item.status}</span>
          <span className="item-text">{item.text}</span>
          <span className="item-hour">{item.hour} Hour</span>
          <button className="item-button" onClick={props.deleteItem(item.id)}>
            X
          </button>
        </li>
      </Container>
    );
  });
  return (
    <Container maxWidth="sm">
      <div className="item-box">
        <h4>積み上げ履歴</h4>
        <Filter />
        <ul className="itemContainer">{itemLists}</ul>
      </div>
    </Container>
  );
};

const mapStateToProps = state => {
  console.log(state);
  const items = state.visibleFilter;
  return { items };
};

const mapDispatchToProps = dispatch => {
  return {
    addItem: text => {
      const action = addItem(text);
      dispatch(action);
    },
    deleteItem: id => {
      const action = deleteItem(id);
      dispatch(action);
    },
    showAll: () => {
      const action = showAll();
      dispatch(action);
    },
    showInvest: () => {
      const action = showInvest();
      dispatch(action);
    },
    showExpense: () => {
      const action = showExpense();
      dispatch(action);
    },
    showHealing: () => {
      const action = showHealing();
      dispatch(action);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
