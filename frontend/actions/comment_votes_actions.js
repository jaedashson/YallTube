import * as APIUtil from "../util/comment_votes_api_util";

export const RECEIVE_COMMENT_VOTE = "RECEIVE_COMMENT_VOTE";
export const REMOVE_COMMENT_VOTE = "REMOVE_COMMENT_VOTE";

// POJO action creators

export const receiveCommentVote = commentVote => {
  return {
    type: RECEIVE_COMMENT_VOTE,
    commentVote
  };
};

export const removeCommentVote = commentVote => {
  return {
    type: REMOVE_COMMENT_VOTE,
    commentVote
  };
};

// Thunk action creator

export const createCommentVote = commentVote => dispatch => {
  // debugger
  return APIUtil.createCommentVote(commentVote).then(commentVote => {
    // debugger
    return dispatch(receiveCommentVote(commentVote));
  });
};

export const destroyCommentVote = commentVote => dispatch => {
  // debugger
  return APIUtil.destroyCommentVote(commentVote).then(commentVote => {
    // debugger
    return dispatch(removeCommentVote(commentVote));
  });
};