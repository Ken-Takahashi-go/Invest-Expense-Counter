// import firebase from "./../Config/fbConfig";

export const signIn = (email, password) => {
  return async (dispatch, getState, { getFirebase }) => {
    try {
      const firebase = await getFirebase();
      firebase.auth().signInWithEmailAndPassword(email, password);

      dispatch({ type: "LOGIN_SUCCESS" }, email, password);
    } catch (err) {
      dispatch({ type: "LOGIN_ERROR" }, err);
    }
  };
};

export const signOut = () => {
  return async (dispatch, getState, { getFirebase }) => {
    try {
      const firebase = await getFirebase();
      await firebase.auth().signOut();

      dispatch({ type: "SIGNOUT_SUCCESS" });
    } catch (err) {
      dispatch({ type: "SIGNOUT_ERROR" }, err);
    }
  };
};

export const signUp = (email, password, firstName, lastName) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    try {
      const firebase = await getFirebase();
      // const firestore = await getFirestore();

      firebase.auth().createUserWithEmailAndPassword(email, password);
      //   ((resp) => {
      //   return firestore
      //     .collection("users")
      //     .doc(resp.user.uid)
      //     .set({
      //       firstName: firstName,
      //       lastName: lastName
      //     });
      // }));

      dispatch({ type: "SIGNUP_SUCCESS" });
    } catch (err) {
      dispatch({ type: "SIGNUP_ERROR", err });
    }
  };
};
