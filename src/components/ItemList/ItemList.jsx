import React from "react";
import { connect } from "react-redux";
import {
  addItem,
  addHour,
  deleteItem
} from "./../../actions/itemActionCreator";

const ItemList = props => {
  const itemLists = props.items.map((item, index) => {
    return (
      <li key={index} className="itemLists-item container">
        <p>
          <span>
            {item.text}
            {item.hour} Hour
          </span>
        </p>
        <button
          onClick={() => {
            props.deleteItem(item.id);
          }}
        >
          del
        </button>
      </li>
    );
  });
  return <ul>{itemLists}</ul>;
};

const mapStateToProps = state => {
  let items;
  items = [];
  return { items };
};

const mapDispatchToProps = dispatch => {
  return {
    addItem: text => {
      const action = addItem(text);
      dispatch(action);
    },
    addHour: hour => {
      const action = addHour(hour);
      dispatch(action);
    },
    deleteItem: id => {
      const action = deleteItem(id);
      dispatch(action);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
