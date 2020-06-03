import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";

// testing imports
import { login, signup, logout, getUserByEmail } from "./actions/session_actions";


document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  const root = document.getElementById("root");

  // window testing
  window.login = login;
  window.signup = signup;
  window.logout = logout;
  window.getUserByEmail = getUserByEmail;
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  ReactDOM.render(<Root store={store} />, root);
});