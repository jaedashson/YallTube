import * as APIUtil from "../util/session_api_util";
import * as UsersAPIUtil from "../util/users_api_util";

export const RECEIVE_EMAIL_ATTEMPT = "RECEIVE_EMAIL_ATTEMPT";
export const CLEAR_EMAIL_ATTEMPT = "CLEAR_EMAIL_ATTEMPT"
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERROR = "RECEIVE_SESSION_ERROR";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";

// POJO action creators

export const receiveEmailAttempt = attemptedUser => {
  debugger
  return {
    type: RECEIVE_EMAIL_ATTEMPT,
    attemptedUser
}};

export const clearEmailAttempt = () => {
  debugger
  return {
    type: CLEAR_EMAIL_ATTEMPT,
}};

export const receiveCurrentUser = currentUser => {
  debugger
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
}};

export const logoutCurrentUser = () => {
  debugger
  return {
    type: LOGOUT_CURRENT_USER
  }
};

export const receiveSessionError = error => {
  debugger
  return {
    type: RECEIVE_SESSION_ERROR,
    error
  }
};

export const receiveSessionErrors = errors => {
  debugger
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  }
};

export const clearSessionErrors = () => {
  debugger
  return {
    type: CLEAR_SESSION_ERRORS
  }
};

// thunk action creators

export const refresh = userId => dispatch => {
  debugger
  return UsersAPIUtil.fetchUser(userId).then(user => {
    debugger
    return dispatch(receiveCurrentUser(user))
  }, error => {
    debugger
    return dispatch(receiveSessionErrors(error.responseJSON));
  })
};

export const signup = user => dispatch => {
  debugger
  return APIUtil.signup(user).then(user => {
    debugger
    return dispatch(receiveCurrentUser(user))
  }, error => {
    debugger
    return dispatch(receiveSessionErrors(error.responseJSON));
  })
};

export const getUserByEmail = email => dispatch => {
  debugger
  return APIUtil.getUserByEmail(email).then(user => {
    debugger
    return dispatch(receiveEmailAttempt(user))
  }, error => {
    debugger
    return dispatch(receiveSessionErrors(error.responseJSON))
  })
};

export const login = user => dispatch => {
  debugger
  return APIUtil.login(user).then(user => {
    debugger
    return dispatch(receiveCurrentUser(user))
  }, error => {
    debugger
    return dispatch(receiveSessionErrors(error.responseJSON))
  })
};

export const logout = () => dispatch => {
  debugger
  return APIUtil.logout().then(user => {
    debugger
    return dispatch(logoutCurrentUser())
  })
};