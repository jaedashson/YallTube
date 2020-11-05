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
import UploadPageContainer from "./upload/upload_page_container";
import HomePageContainer from "./pages/home_page_container";
import LikedVideosPageContainer from "./pages/liked_videos_page_container";
import YourVideosPageContainer from "./pages/your_videos_page_container";
import HistoryPageContainer from "./pages/history_page_container";
import SubscriptionsPageContainer from "./pages/subscriptions_page_container";
import SearchResultsPageContainer from "./search/search_results_page_container";
import ChannelPageContainer from "./pages/channel_page_container";

const App = () => {
  return (
    <div className="content">
      <Route path="/" component={NavBar} />

      <Switch>
        <Route exact path="/" component={HomePageContainer} />
        <ProtectedRoute path="/subscriptions" component={SubscriptionsPageContainer} />
        <ProtectedRoute path="/history" component={HistoryPageContainer} />
        <ProtectedRoute path="/your_videos" component={YourVideosPageContainer} />
        <ProtectedRoute path="/liked_videos" component={LikedVideosPageContainer} />
        <Route path="/videos/:videoId" component={VideoPageContainer} />
        <ProtectedRoute path="/upload" component={UploadPageContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <Route path="/search" component={SearchResultsPageContainer} />
        <Route path="/users/:channelId" component={ChannelPageContainer} />
      </Switch>
    </div>
  )
};

export default App;