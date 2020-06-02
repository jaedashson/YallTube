import React from "react";
import ReactDOM from "react-dom";

// testing imports
import { login, signup, logout } from "./util/session_api_util";


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  // window testing
  window.login = login;
  window.signup = signup;
  window.logout = logout;
  
  ReactDOM.render(<h1>Welcome to YallTube</h1>, root);
});