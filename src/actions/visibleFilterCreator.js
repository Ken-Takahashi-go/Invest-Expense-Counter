import firebase from "./../Config/fbConfig";
import { getFirestore } from "redux-firestore";

export const SHOW_ALL = "SHOW_ALL";
export const SHOW_INVEST = "SHOW_INVEST";
export const SHOW_EXPENSE = "SHOW_EXPENSE";
export const SHOW_HEALING = "SHOW_HEALING";
export const SHOW_ALL_ERROR = "SHOW_ALL_ERROR";
export const SHOW_INVEST_ERROR = "SHOW_INVEST_ERROR";
export const SHOW_EXPENSE_ERROR = "SHOW_EXPENSE_ERROR";
export const SHOW_HEALING_ERROR = "SHOW_HEALING_ERROR";

export const showAll = payload => {
  return async dispatch => {
    try {
      const firestore = await firebase.firestore();
      const refActivities = await firestore
        .collection("activities")
        .onSnapshot(querySnapshot => {
          const refAll = querySnapshot.docs.map(doc => {
            return {
              ...doc.data(),
              id: doc.id
            };
          });
          dispatch({
            type: SHOW_ALL,
            payload: refAll
          });
        });
    } catch (error) {
      dispatch({ type: "SHOW_ALL_ERROR", error });
      alert("NG");
    }
  };
};
export const showInvest = payload => {
  return async (dispatch, getState, { getFirebase }) => {
    try {
      const firestore = getFirestore();
      const refActivities = await firestore
        .collection("activities")
        .onSnapshot(querySnapshot => {
          const investArray = querySnapshot.docs
            .map(doc => {
              return {
                ...doc.data(),
                id: doc.id
              };
            })
            .filter(item => item.status === "投資");
          dispatch({
            type: SHOW_INVEST,
            payload: investArray
          });
        });
    } catch (error) {
      dispatch({ type: SHOW_INVEST_ERROR, error });
      alert("NG");
    }
  };
};
export const showExpense = payload => {
  return async dispatch => {
    try {
      const firestore = await firebase.firestore();
      const refActivities = await firestore
        .collection("activities")
        .onSnapshot(querySnapshot => {
          const expenseArray = querySnapshot.docs
            .map(doc => {
              return {
                ...doc.data(),
                id: doc.id
              };
            })
            .filter(item => item.status === "浪費");
          dispatch({
            type: SHOW_EXPENSE,
            payload: expenseArray
          });
        });
    } catch (error) {
      dispatch({ type: SHOW_EXPENSE_ERROR, error });
      alert("NG");
    }
  };
};
export const showHealing = payload => {
  return async dispatch => {
    try {
      const firestore = await firebase.firestore();
      const refActivities = await firestore
        .collection("activities")
        .onSnapshot(querySnapshot => {
          const healingArray = querySnapshot.docs
            .map(doc => {
              return {
                ...doc.data(),
                id: doc.id
              };
            })
            .filter(item => item.status === "癒し");
          dispatch({
            type: SHOW_HEALING,
            payload: healingArray
          });
        });
    } catch (error) {
      dispatch({ type: SHOW_HEALING_ERROR, error });
      alert("NG");
    }
  };
};
