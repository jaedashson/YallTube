import React from "react";
import {
  Route,
  Redirect,
  Switch,
  Link,
} from "react-router-dom";

import NavBarContainer from "./nav_bar/nav_bar_container";
import SignupFormContainer from "./auth/signup_form_container";
import LoginFormContainer from "./auth/login_form_container";

const App = () => {
  return (
    <div>
      <header>
        <NavBarContainer />
      </header>

      <Switch>
        <Route path="/signup" component={SignupFormContainer} />
        <Route path="/login" component={LoginFormContainer} />
      </Switch>
    </div>
  )
};

export default App;