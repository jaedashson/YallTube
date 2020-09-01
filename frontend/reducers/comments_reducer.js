import {
  RECEIVE_COMMENTS,
  RECEIVE_COMMENT
} from "../actions/comments_actions";

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_COMMENTS:
      let newState = {};
      action.comments.forEach(comment => newState[comment.id] = comment);
      return newState;
    case RECEIVE_COMMENT:
      return Object.assign({}, state, { [action.comment.id]: action.comment });
    default:
      return state;
  }
};

export default commentsReducer;