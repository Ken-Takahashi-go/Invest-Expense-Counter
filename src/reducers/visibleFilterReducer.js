import {
  SHOW_ALL,
  SHOW_INVEST,
  SHOW_EXPENSE,
  SHOW_HEALING
} from "../actions/visibleFilterCreator.js";
import { Item } from "../models/Item";

export const visibleFilterReducer = (state = [], action) => {
  const item = new Item(action.payload);

  switch (action.type) {
    case SHOW_ALL:
      const itemLists = item.status;
      return itemLists;
    case SHOW_INVEST:
      const investLists = item.status.filter(item => item.status === "投資");
      return investLists;
    case SHOW_EXPENSE:
      const expenseLists = item.status.filter(item => item.status === "浪費");
      return expenseLists;
    case SHOW_HEALING:
      const healingLists = item.status.filter(item => item.status === "癒し");
      return healingLists;
    default:
      return state;
  }
};
