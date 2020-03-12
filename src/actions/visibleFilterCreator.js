export const SHOW_ALL = "SHOW_ALL";
export const SHOW_INVEST = "SHOW_INVEST";
export const SHOW_EXPENSE = "SHOW_EXPENSE";
export const SHOW_HEALING = "SHOW_HEALING";
export const SHOW_ALL_ERROR = "SHOW_ALL_ERROR";
export const SHOW_INVEST_ERROR = "SHOW_INVEST_ERROR";
export const SHOW_EXPENSE_ERROR = "SHOW_EXPENSE_ERROR";
export const SHOW_HEALING_ERROR = "SHOW_HEALING_ERROR";

export const showAll = () => {
  return {
    type: SHOW_ALL
  };
  // return async (dispatch, getState, { getFirebase, getFirestore }) => {
  //   try {
  //     const firestore = await getFirestore();
  //     const data = firestore.collection("activities").get();
  //     console.log(data);
  //     data.dispatch({
  //       type: SHOW_ALL,
  //       payload
  //     });
  //   } catch (error) {
  //     dispatch({ type: "SHOW_ALL_ERROR", error });
  //     alert("NG");
  //   }
  // };
};
export const showInvest = () => {
  return {
    type: SHOW_INVEST
  };
  // return async (dispatch, getState, { getFirebase, getFirestore }) => {
  //   try {
  //     const firestore = await getFirestore();
  //     firestore.collection("activities").get();
  //     dispatch({
  //       type: SHOW_INVEST,
  //       payload
  //     });
  //   } catch (error) {
  //     dispatch({ type: "SHOW_INVEST_ERROR", error });
  //     alert("NG");
  //   }
  // };
};
export const showExpense = () => {
  return {
    type: SHOW_EXPENSE
  };
  // return async (dispatch, getState, { getFirebase, getFirestore }) => {
  //   try {
  //     const firestore = await getFirestore();
  //     firestore.collection("activities").get();
  //     dispatch({
  //       type: SHOW_EXPENSE,
  //       payload
  //     });
  //   } catch (error) {
  //     dispatch({ type: "SHOW_EXPENSE_ERROR", error });
  //     alert("NG");
  //   }
  // };
};
export const showHealing = () => {
  return {
    type: SHOW_HEALING
  };
  // return async (dispatch, getState, { getFirebase, getFirestore }) => {
  //   try {
  //     const firestore = await getFirestore();
  //     firestore.collection("activities").get();
  //     dispatch({
  //       type: SHOW_HEALING,
  //       payload
  //     });
  //   } catch (error) {
  //     dispatch({ type: "SHOW_HEALING_ERROR", error });
  //     alert("NG");
  //   }
  // };
};
