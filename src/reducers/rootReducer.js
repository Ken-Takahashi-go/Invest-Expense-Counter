import { itemReducer } from "./itemReducer";
import { visibleFilterReducer } from "./visibleFilterReducer";
// import { firestoreReducer } from "redux-firestore";
import { combineReducers } from "redux";
// import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  itemInfo: itemReducer,
  visibleFilter: visibleFilterReducer
  // firestore: firestoreReducer,
  // firebase: firebaseReducer
});

export default rootReducer;
