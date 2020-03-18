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
      const item = new Item(action.id, action.status, action.text, action.hour);
      console.log(item.id);
      return [...state, item];

    case ADD_ITEM_ERROR:
      return state;
    case DELETE_ITEM:
      // console.log(action.id);

      return state.filter((item, id) => {
        console.log(item.id);
        return action.id !== item.id;
      });

    case DELETE_ITEM_ERROR:
      return state;
    default:
      return state;
  }
};
