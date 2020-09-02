import * as APIUtil from "../util/comments_api_util";

export const RECEIVE_PARENT_COMMENTS = "RECEIVE_PARENT_COMMENTS";
export const RECEIVE_PARENT_COMMENT = "RECEIVE_PARENT_COMMENT";


// POJO action creators

export const receiveParentComments = comments => {
  return {
    type: RECEIVE_PARENT_COMMENTS,
    comments
  };
};

export const receiveParentComment = comment => {
  return {
    type: RECEIVE_PARENT_COMMENT,
    comment
  };
};

// Thunk action creators

// TODO - Write error action creators
export const fetchParentComments = videoId => dispatch => {
  return APIUtil.fetchParentComments(videoId).then(comments => {
    return dispatch(receiveParentComments(comments));
  });
};

// TODO - Write error action creators
export const createComment = comment => dispatch => {
  return APIUtil.createComment(comment).then(comment => {
    return dispatch(receiveParentComment(comment));
  });
};