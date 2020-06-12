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
  faFilm
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
  faFilm
);


// Testing imports
import { fetchVideo } from "./actions/videos_actions";
import { fetchUser } from "./actions/users_actions";



document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  
  let store;
  if (window.currentUser) {
    debugger
    const preloadedState = {
      session: {
        id: window.currentUser.id,
        likedVideoIds: window.currentUser.likedVideoIds,
        dislikedVideoIds: window.currentUser.dislikedVideoIds
      },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    debugger
    store = configureStore();
  }

  // window testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchVideo = fetchVideo;
  window.fetchUser = fetchUser;


  ReactDOM.render(<Root store={store} />, root);
});