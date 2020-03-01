import { ADD_ITEM, DELETE_ITEM } from "../actions/itemActionCreator.js";
import Item from "../models/Item";

export const itemReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM:
      const item = new Item(action.text);
      return [...state, item];
    case DELETE_ITEM:
      return state.filter((item, index) => {
        return action.id !== item.id;
      });
    default:
      return state;
  }
};
