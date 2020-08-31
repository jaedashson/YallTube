import {
  RECEIVE_COMMENTS
} from "../actions/comments_actions";

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_COMMENTS:
      let newState = {};
      action.comments.forEach(comment => newState[comment.id] = comment);
      return newState;
    default:
      return state;
  }
};

export default commentsReducer;