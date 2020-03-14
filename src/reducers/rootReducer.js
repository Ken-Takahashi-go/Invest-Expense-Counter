import { itemReducer } from "./itemReducer";
import { visibleFilterReducer } from "./visibleFilterReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  item: itemReducer,
  visibleFilter: visibleFilterReducer
});

export default rootReducer;
