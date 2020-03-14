import firebase from "./../Config/fbConfig";

export const SHOW_ALL = "SHOW_ALL";
export const SHOW_INVEST = "SHOW_INVEST";
export const SHOW_EXPENSE = "SHOW_EXPENSE";
export const SHOW_HEALING = "SHOW_HEALING";
export const SHOW_ALL_ERROR = "SHOW_ALL_ERROR";
export const SHOW_INVEST_ERROR = "SHOW_INVEST_ERROR";
export const SHOW_EXPENSE_ERROR = "SHOW_EXPENSE_ERROR";
export const SHOW_HEALING_ERROR = "SHOW_HEALING_ERROR";

export const showAll = (status, text, hour) => {
  return async dispatch => {
    try {
      const db = await firebase.firestore();
      const refActivities = await db.collection("activities").get();
      const refArray = refActivities.docs.map(doc => doc.data());
      console.log(refArray);
      dispatch({
        type: SHOW_ALL,
        status,
        text,
        hour
      });
    } catch (error) {
      dispatch({ type: "SHOW_ALL_ERROR", error });
      alert("NG");
    }
  };
};
export const showInvest = () => {
  return async dispatch => {
    try {
      const db = await firebase.firestore();
      const refActivities = await db.collection("activities").get();
      const refArray = refActivities.docs.map(doc => doc.data());
      console.log(refArray);
      dispatch({
        type: SHOW_INVEST
      });
      console.log(dispatch);
    } catch (error) {
      dispatch({ type: SHOW_INVEST_ERROR, error });
      alert("NG");
    }
  };
};
export const showExpense = () => {
  return async dispatch => {
    try {
      const db = await firebase.firestore();
      const refActivities = await db.collection("activities").get();
      const refArray = refActivities.docs.map(doc => doc.data());
      console.log(refArray);
      dispatch({
        type: SHOW_EXPENSE
      });
    } catch (error) {
      dispatch({ type: SHOW_EXPENSE_ERROR, error });
      alert("NG");
    }
  };
};
export const showHealing = () => {
  return async dispatch => {
    try {
      const db = await firebase.firestore();
      const refActivities = await db.collection("activities").get();
      const refArray = refActivities.docs.map(doc => doc.data());
      console.log(refArray);
      dispatch({
        type: SHOW_HEALING
      });
    } catch (error) {
      dispatch({ type: SHOW_HEALING_ERROR, error });
      alert("NG");
    }
  };
};
