import React from "react";
import {
  Route,
  Redirect,
  Switch,
  Link,
} from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

import NavBar from "./nav_bar/nav_bar";
import SignupFormContainer from "./auth/signup_form_container";
import LoginFormContainer from "./auth/login_form_container";
import VideoPageContainer from "./videos/video_page_container";

const App = () => {
  return (
    <div>
      <Route path="/" component={NavBar} />

      <Switch>
        <Route path="/videos/:videoId" component={VideoPageContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
      </Switch>
    </div>
  )
};

export default App;