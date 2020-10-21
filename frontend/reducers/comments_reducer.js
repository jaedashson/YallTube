import { cloneDeep } from "lodash";

import {
  RECEIVE_PARENT_COMMENTS,
  RECEIVE_PARENT_COMMENT,
  RECEIVE_REPLY,
  RECEIVE_COMMENTS
} from "../actions/comments_actions";
import {
  RECEIVE_COMMENT_VOTE,
  REMOVE_COMMENT_VOTE
} from "../actions/comment_votes_actions";

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = null;
  switch (action.type) {
    case RECEIVE_PARENT_COMMENTS:
      newState = {};
      action.comments.forEach(comment => newState[comment.id] = comment);
      return newState;
    case RECEIVE_PARENT_COMMENT:
      return Object.assign({}, state, { [action.comment.id]: action.comment });
    case RECEIVE_REPLY:
      newState = cloneDeep(state);
      newState[action.comment.id] = action.comment;
      newState[action.comment.parent_id].replyIds.push(action.comment.id);
      return newState;
    case RECEIVE_COMMENTS:
      newState = cloneDeep(state);
      action.comments.forEach(comment => newState[comment.id] = comment);
      return newState;
    case RECEIVE_COMMENT_VOTE:
      newState = cloneDeep(state);
      commentVote = action.commentVote;

      if (commentVote.like === true) {
        newState[commentVote.comment_id].likeCount++;
      } else if (commentVote.like === false) {
        newState[commentVote.comment_id].dislikeCount++;
      }

      return newState;
    case REMOVE_COMMENT_VOTE:
      newState = cloneDeep(state);
      commentVote = action.commentVote;

      if (commentVote.like === true) {
        newState[commentVote.comment_id].likeCount--;
      } else if (commentVote.like === false) {
        newState[commentVote.comment_id].dislikeCount--;
      }

      return newState;
    default:
      return state;
  }
};

export default commentsReducer;