export const ADD_ITEM = "ADD_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export const HOUR_AMOUNT = "HOUR_AMOUNT";
export const ADD_ITEM_ERROR = "ADD_ITEM_ERROR";

export const addItem = (status, text, hour) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore.collection("activities").add({
      status,
      text,
      hour
    });
    await dispatch({
      type: ADD_ITEM,
      status,
      text,
      hour
    }).catch(error => dispatch({ type: ADD_ITEM_ERROR, error }));
  };
};

export const deleteItem = id => {
  return {
    type: DELETE_ITEM,
    id
  };
};

export const hourAmount = hour => {
  return {
    type: HOUR_AMOUNT,
    hour
  };
};
