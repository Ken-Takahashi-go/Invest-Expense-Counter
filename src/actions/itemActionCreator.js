import firebase from "./../Config/fbConfig";

export const ADD_ITEM = "ADD_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export const ADD_ITEM_ERROR = "ADD_ITEM_ERROR";
export const DELETE_ITEM_ERROR = "DELETE_ITEM_ERROR";

export const addItem = (status, text, hour) => {
  return async dispatch => {
    try {
      const db = await firebase.firestore();
      const addData = await db.collection("activities").add({
        status,
        text,
        hour
      });
      console.log(addData.id);
      dispatch({
        type: ADD_ITEM,
        status,
        text,
        hour
      });
    } catch (err) {
      dispatch({ type: ADD_ITEM_ERROR, err });
      alert("NG");
    }
  };
};
export const deleteItem = id => {
  return async dispatch => {
    try {
      const db = await firebase.firestore();
      const refActivities = await db.collection("activities").get();

      const refArray = refActivities.docs.map(doc => doc.id);
      //暫定措置(消したいやつを消せていない)
      const refID = refArray.pop();
      console.log(refID);
      await db
        .collection("activities")
        .doc(refID)
        .delete();

      dispatch({ type: DELETE_ITEM, id });
    } catch (error) {
      dispatch({ type: DELETE_ITEM_ERROR, error });
      alert("NG");
    }
  };
};
