import {
  ADD_ITEM,
  ADD_ITEM_ERROR,
  DELETE_ITEM,
  DELETE_ITEM_ERROR
} from "../actions/itemActionCreator.js";
import { Item } from "../models/Item";

export const itemReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM:
      const item = new Item(action.status, action.text, action.hour);
      return [...state, item];
    case ADD_ITEM_ERROR:
      return state;
    case DELETE_ITEM:
      return state.filter((item, id) => {
        return action.id !== item.id;
      });
    case DELETE_ITEM_ERROR:
      return state;
    default:
      return state;
  }
};
