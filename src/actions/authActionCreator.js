import firebase from "./../Config/fbConfig";

export const signIn = (email, password) => {
  return async (dispatch, getState, { getFirebase }) => {
    try {
      const firebase = await getFirebase();
      console.log(firebase.auth());
      const loginAuth = await firebase.auth();
      // .signInWithEmailAndPassword(email, password);
      console.log(loginAuth);
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
