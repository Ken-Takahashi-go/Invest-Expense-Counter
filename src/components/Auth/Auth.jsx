import React, { Component, useState } from "react";
import firebase from "firebase";

const Auth = props => {
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");

  const login = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  };
  //signInWithRedirectでGoogleのログインページに接続して、Google プロバイダ オブジェクトのインスタンスを作成する。
  const logout = () => {
    firebase.auth().signOut();
  };

  return (
    <div className="Auth">
      {userName ? (
        <h1 className="UserName">{userName && passWord}の家計簿</h1>
      ) : (
        // displayNameでログインした人のGoogleアカウントに登録されている名前を表示する
        <h1 className="Name">あなたの家計簿</h1>
        //ログインしていない人用の表示
      )}
      {userName ? (
        <button onClick={logout}>Google Logout</button>
      ) : (
        //ユーザーがログインしている時はlogoutボタンを表示する
        <button onClick={login}>Google Login</button>
        //ユーザーがいない時はloginボタンを表示する
      )}
    </div>
  );
};

export default Auth;
