import { cloneDeep } from "lodash";

import {
  RECEIVE_PARENT_COMMENTS,
  RECEIVE_PARENT_COMMENT,
  RECEIVE_REPLIES,
  RECEIVE_REPLY
} from "../actions/comments_actions";

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = null;
  let parentCommentId = null;
  switch (action.type) {
    case RECEIVE_PARENT_COMMENTS:
      newState = {};
      action.comments.forEach(comment => newState[comment.id] = comment);
      return newState;
    case RECEIVE_REPLIES:
      newState = cloneDeep(state);
      parentCommentId = action.comments[0].parent_id;
      action.comments.forEach(comment => newState[parentCommentId]["replies"][comment.id] = comment);
      return newState;
    case RECEIVE_PARENT_COMMENT:
      return Object.assign({}, state, { [action.comment.id]: action.comment });
    case RECEIVE_REPLY:
      newState = cloneDeep(state);
      newState[action.comment.parent_id]["replies"][action.comment.id] = action.comment;
      return newState;
    default:
      return state;
  }
};

export default commentsReducer;