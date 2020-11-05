import { cloneDeep } from "lodash";
import { removeElementFromArray } from "../util/videos_info_util";

import {
  RECEIVE_EMAIL_ATTEMPT,
  CLEAR_EMAIL_ATTEMPT,
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from "../actions/session_actions";
import {
  RECEIVE_VIEW
} from "../actions/views_actions";
import {
  RECEIVE_VIDEO_VOTE,
  REMOVE_VIDEO_VOTE
} from "../actions/video_votes_actions";
import {
  RECEIVE_COMMENT_VOTE,
  REMOVE_COMMENT_VOTE
} from "../actions/comment_votes_actions";
import {
  RECEIVE_SUBSCRIPTION,
  REMOVE_SUBSCRIPTION
} from "../actions/subscriptions_actions";

const defaultState = {
  id: null,
  attemptedUser: null,
  likedVideoIds: [],
  dislikedVideoIds: [],
  uploadedVideoIds: [],
  viewedVideoIds: [],
  likedCommentIds: [],
  dislikedCommentIds: [],
  subscriberCount: [],
  subscribedChannelIds: []
};

const sessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;
  let videoVote;
  let commentVote;
  let subscription;
  switch(action.type) {
    case RECEIVE_EMAIL_ATTEMPT:
      newState = cloneDeep(state);
      newState["attemptedUser"] = action.attemptedUser;
      return newState;
    case CLEAR_EMAIL_ATTEMPT:
      newState = cloneDeep(state);
      newState["attemptedUser"] = null;
      return newState;
    case RECEIVE_CURRENT_USER:
      newState = cloneDeep(state);
      newState["id"] = action.currentUser.id;
      newState["likedVideoIds"] = action.currentUser.likedVideoIds;
      newState["dislikedVideoIds"] = action.currentUser.dislikedVideoIds;
      newState["uploadedVideoIds"] = action.currentUser.uploadedVideoIds;
      newState["viewedVideoIds"] = action.currentUser.viewedVideoIds;
      newState["likedCommentIds"] = action.currentUser.likedCommentIds;
      newState["dislikedCommentIds"] = action.currentUser.dislikedCommentIds;
      return newState;
    case LOGOUT_CURRENT_USER:
      // newState = cloneDeep(state);
      // newState["id"] = null;
      return defaultState;
    case RECEIVE_VIEW:
      newState = cloneDeep(state);
      if (!newState["viewedVideoIds"].includes(action.view.video_id)) {
        newState["viewedVideoIds"].push(action.view.video_id);
      }
      return newState;
    case RECEIVE_VIDEO_VOTE:
      newState = cloneDeep(state);
      videoVote = action.videoVote;

      if (videoVote.like === true) {
        if (!newState["likedVideoIds"].includes(videoVote.video_id)) {
          newState["likedVideoIds"].push(videoVote.video_id);
        }
      } else if (videoVote.like === false) {
        if (!newState["dislikedVideoIds"].includes(videoVote.video_id)) {
          newState["dislikedVideoIds"].push(videoVote.video_id);
        }
      }

      return newState;
    case REMOVE_VIDEO_VOTE:
      newState = cloneDeep(state);
      videoVote = action.videoVote;

      if (videoVote.like === true) {
        newState["likedVideoIds"] = removeElementFromArray(newState["likedVideoIds"], videoVote.video_id);
      } else if (videoVote.like === false) {
        newState["dislikedVideoIds"] = removeElementFromArray(newState["dislikedVideoIds"], videoVote.video_id);
      }
      
      return newState;
    case RECEIVE_COMMENT_VOTE:
      newState = cloneDeep(state);
      commentVote = action.commentVote;
      
      if (commentVote.like === true) {
        if (!newState["likedCommentIds"].includes(commentVote.comment_id)) {
          newState["likedCommentIds"].push(commentVote.comment_id);
        }
      } else if (commentVote.like === false) {
        if (!newState["dislikedCommentIds"].includes(commentVote.comment_id)) {
          newState["dislikedCommentIds"].push(commentVote.comment_id);
        }
      }

      return newState;
    case REMOVE_COMMENT_VOTE:
      newState = cloneDeep(state);
      commentVote = action.commentVote;
      
      if (commentVote.like === true) {
        newState["likedCommentIds"] = removeElementFromArray(newState["likedCommentIds"], commentVote.comment_id);
      } else if (commentVote.like === false) {
        newState["dislikedCommentIds"] = removeElementFromArray(newState["dislikedVideoIds"], commentVote.comment_id);
      }
      
      return newState;

    case RECEIVE_SUBSCRIPTION:
      newState = cloneDeep(state);
      subscription = action.subscription;
      newState["subscribedChannelIds"].push(subscription.channel_id);
      return newState;
    case REMOVE_SUBSCRIPTION:
      newState = cloneDeep(state);
      subscription = action.subscription;
      newState["subscribedChannelIds"] = removeElementFromArray(newState["subscribedChannelIds"], subscription.channel_id);
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;