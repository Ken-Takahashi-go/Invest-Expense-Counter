import React from "react";
import { connect } from "react-redux";
import { addItem, deleteItem } from "./../../actions/itemActionCreator";
import "./ItemList.css";

const ItemList = props => {
  const itemLists = props.items.map((item, index) => {
    return (
      <li key={index} className="itemLists-item container">
        {item.status}
        {item.text}
        {item.hour} Hour
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
  return <dl className="itemContainer">{itemLists}</dl>;
};

const mapStateToProps = state => {
  console.log(state);
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
