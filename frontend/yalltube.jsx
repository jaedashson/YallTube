import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";

// FontAwesome imports
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
  faExclamationCircle,
  faChevronDown,
  faBars,
  faSearch,
  faVideo,
  faPlus,
  faTh,
  faEllipsisV,
  faBell,
  faUserCircle,
  faThumbsUp,
  faThumbsDown,
  faUpload,
  faImage,
  faCheckSquare,
  faHome,
  faNewspaper,
  faHistory,
  faFilm,
  faSortAmountDown,
  faHeart,
  faCaretDown,
  faCaretUp
} from '@fortawesome/free-solid-svg-icons';
library.add(
  fab,
  faExclamationCircle,
  faChevronDown,
  faBars,
  faSearch,
  faVideo,
  faPlus,
  faTh,
  faEllipsisV,
  faBell,
  faUserCircle,
  faThumbsUp,
  faThumbsDown,
  faUpload,
  faImage,
  faCheckSquare,
  faHome,
  faNewspaper,
  faHistory,
  faFilm,
  faSortAmountDown,
  faHeart,
  faCaretDown,
  faCaretUp
);


// // Testing imports
// import { fetchVideo } from "./actions/videos_actions";
import { fetchUser } from "./actions/users_actions";
import { fetchParentComments } from "./actions/comments_actions";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: {
        id: window.currentUser.id,
        likedVideoIds: window.currentUser.likedVideoIds,
        dislikedVideoIds: window.currentUser.dislikedVideoIds,
        uploadedVideoIds: window.currentUser.uploadedVideoIds,
        viewedVideoIds: window.currentUser.viewedVideoIds
      },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // // window testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // window.fetchVideo = fetchVideo;
  window.fetchUser = fetchUser;
  window.fetchParentComments = fetchParentComments;


  ReactDOM.render(<Root store={store} />, root);
});