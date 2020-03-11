<<<<<<< HEAD
import { createStore, applyMiddleware, compose } from "redux";
import { itemReducer } from "../reducers/itemReducer";
import thunk from "redux-thunk";
import { reduxFirestore, getFirestore } from "redux-firestore";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import fbConfig from "../Config/fbConfig";

const store = createStore(
  itemReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig)
  )
=======
import { createStore } from "redux";
import { itemReducer } from "../reducers/itemReducer";

const store = createStore(
  itemReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
>>>>>>> origin/master
);

export default store;
