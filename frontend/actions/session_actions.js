import * as APIUtil from "../util/session_api_util";

export const RECEIVE_EMAIL_ATTEMPT = "RECEIVE_EMAIL_ATTEMPT";
export const CLEAR_EMAIL_ATTEMPT = "CLEAR_EMAIL_ATTEMPT"
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERROR = "RECEIVE_SESSION_ERROR";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";

// POJO action creators

export const receiveEmailAttempt = attemptedUser => {
  return {
    type: RECEIVE_EMAIL_ATTEMPT,
    attemptedUser
}};

export const clearEmailAttempt = () => {
  return {
    type: CLEAR_EMAIL_ATTEMPT,
}};

export const receiveCurrentUser = currentUser => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
}};

export const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
}};

export const receiveError = error => {
  return {
    type: RECEIVE_SESSION_ERROR,
    error
}};

export const receiveErrors = errors => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
}};

export const clearErrors = () => {
  return {
    type: CLEAR_SESSION_ERRORS
}};

// thunk action creators

export const signup = user => dispatch => {
  return APIUtil.signup(user).then(user => {
    debugger
    return dispatch(receiveCurrentUser(user))
  }, error => {
    debugger
    return dispatch(receiveErrors(error.responseJSON))
  })
};

export const getUserByEmail = email => dispatch => {
  return APIUtil.getUserByEmail(email).then(user => {
    debugger
    return dispatch(receiveEmailAttempt(user))
  }, error => {
    debugger
    return dispatch(receiveErrors(error.responseJSON))
  })
};

export const login = user => dispatch => {
  return APIUtil.login(user).then(user => {
    debugger
    return dispatch(receiveCurrentUser(user))
  }, error => {
    debugger
    dispatch(receiveErrors(error.responseJSON))
  })
};

export const logout = () => dispatch => {
  return APIUtil.logout().then(user => {
    return dispatch(logoutCurrentUser())
  })
};