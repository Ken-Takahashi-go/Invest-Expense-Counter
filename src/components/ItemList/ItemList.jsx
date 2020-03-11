import React from "react";
import { connect } from "react-redux";
import { addItem, deleteItem } from "./../../actions/itemActionCreator";
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
        <li key={props.items.id} className={classNameForListItem}>
          <span className="item-status">{item.status}</span>
          <span className="item-text">{item.text}</span>
          <span className="item-hour">{item.hour} Hour</span>
          <button
            className="item-button"
            onClick={() => {
              props.deleteItem(item.id);
            }}
          >
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
  return { items: state };
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
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
