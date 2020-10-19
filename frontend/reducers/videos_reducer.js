import { cloneDeep } from "lodash";

import {
  RECEIVE_VIDEO,
  RECEIVE_ALL_VIDEOS,
  RECEIVE_VIDEOS
} from "../actions/videos_actions";
import {
  RECEIVE_PARENT_COMMENT,
  RECEIVE_REPLY
} from "../actions/comments_actions";
import {
  RECEIVE_VIEW
} from "../actions/views_actions";
import {
  RECEIVE_VIDEO_VOTE,
  REMOVE_VIDEO_VOTE
} from "../actions/video_votes_actions";

const videosReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  let videoVote;
  switch (action.type) {
    case RECEIVE_VIDEO:
      return Object.assign({}, state, { [action.video.id]: action.video });
    case RECEIVE_ALL_VIDEOS:
      newState = {};
      action.videos.forEach(video => newState[video.id] = video);
      return newState;
    case RECEIVE_VIDEOS:
      newState = Object.assign({}, state);
      action.videos.forEach(video => newState[video.id] = video);
      return newState;
    case RECEIVE_PARENT_COMMENT:
      newState = cloneDeep(state);
      newState[action.comment.video_id].commentCount++;
      return newState;
    case RECEIVE_REPLY:
      newState = cloneDeep(state);
      newState[action.comment.video_id].commentCount++;
      return newState;
    case RECEIVE_VIEW:
      newState = cloneDeep(state);
      newState[action.view.video_id].viewCount++;
      return newState;
    case RECEIVE_VIDEO_VOTE:
      newState = cloneDeep(state);
      videoVote = action.videoVote;
      debugger
      if (videoVote.like === true) {
        debugger
        newState[videoVote.video_id].likeCount++;
      } else if (videoVote.like === false) {
        newState[videoVote.video_id].dislikeCount++;
      }
      debugger
      return newState;
    case REMOVE_VIDEO_VOTE:
      newState = cloneDeep(state);
      videoVote = action.videoVote;
      if (videoVote.like === true) {
        newState[videoVote.video_id].likeCount--;
      } else if (videoVote.like === false) {
        newState[videoVote.video_id].dislikeCount--;
      }
      return newState;
    default:
      return state;
  }
};

export default videosReducer;