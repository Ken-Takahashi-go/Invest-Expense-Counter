import {
  SHOW_ALL,
  SHOW_INVEST,
  SHOW_EXPENSE,
  SHOW_HEALING
} from "../actions/visibleFilterCreator.js";

export const visibleFilterReducer = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SHOW_ALL:
      return SHOW_ALL;
    case SHOW_INVEST:
      return SHOW_INVEST;
    case SHOW_EXPENSE:
      return SHOW_EXPENSE;
    case SHOW_HEALING:
      return SHOW_HEALING;
    default:
      return state;
  }
};
