export const ADD_ITEM = "ADD_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
<<<<<<< HEAD
export const ADD_ITEM_ERROR = "ADD_ITEM_ERROR";
export const DELETE_ITEM_ERROR = "DELETE_ITEM_ERROR";

export const addItem = (status, text, hour) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    try {
      const firestore = await getFirestore();
      const querySnapshot = await firestore.collection("activities").get();
      console.log(querySnapshot);
      firestore.collection("activities").add({
        status,
        text,
        hour
      });
      dispatch({
        type: ADD_ITEM,
        status,
        text,
        hour
      });
    } catch (err) {
      dispatch({ type: "ADD_ITEM_ERROR", err });
      alert("NG");
    }
=======
export const HOUR_AMOUNT = "HOUR_AMOUNT";

export const addItem = (status, text, hour) => {
  return {
    type: ADD_ITEM,
    status,
    text,
    hour
>>>>>>> origin/master
  };
};

export const deleteItem = id => {
<<<<<<< HEAD
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    try {
      const firestore = await getFirestore();
      firestore
        .collection("activities")
        .doc()
        .delete();
      console.log(firestore);

      dispatch({ type: DELETE_ITEM, id: id });
    } catch (error) {
      dispatch({ type: "DELETE_ITEM_ERROR", error });
      alert("NG");
    }
=======
  return {
    type: DELETE_ITEM,
    id
  };
};

export const hourAmount = hour => {
  return {
    type: HOUR_AMOUNT,
    hour
>>>>>>> origin/master
  };
};
