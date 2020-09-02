import {
  RECEIVE_PARENT_COMMENTS,
  RECEIVE_PARENT_COMMENT,
  RECEIVE_REPLIES,
  RECEIVE_REPLY
} from "../actions/comments_actions";

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PARENT_COMMENTS:
      // debugger
      let newState = {};
      // Object.keys(action.comments).forEach(commentId => newState[commentId] = action.comments[commentId]);
      action.comments.forEach(comment => newState[comment.id] = comment);
      return newState;
    case RECEIVE_PARENT_COMMENT:
      return Object.assign({}, state, { [action.comment.id]: action.comment });
    case RECEIVE_REPLIES:
      // Nest within parent comment
    case RECEIVE_REPLY:
      // Nest within parent comment
    default:
      return state;
  }
};

export default commentsReducer;