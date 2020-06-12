import {
  RECEIVE_VIDEO,
  RECEIVE_ALL_VIDEOS
} from "../actions/videos_actions";

const videosReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_VIDEO:
      debugger
      return Object.assign({}, state, { [action.video.id]: action.video });
    case RECEIVE_ALL_VIDEOS:
      debugger
      let newState = {};
      action.videos.forEach(video => newState[video.id] = video);
      debugger
      return newState;
    default:
      return state;
  }
};

export default videosReducer;