import * as APIUtil from "../util/views_api_util";

export const RECEIVE_VIEW = "RECEIVE_VIEW";

// POJO action creators

export const receiveView = view => {
  return {
    type: RECEIVE_VIEW,
    view
  };
};

// Thunk action creators

export const createView = view => dispatch => {
  return APIUtil.createView(view).then(view => {
    return dispatch(receiveView(view));
  });
};