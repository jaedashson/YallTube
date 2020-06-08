import LoginFormMaster from "./login_form_master";
import { connect } from "react-redux";
import { login, getUserByEmail, receiveSessionError, receiveSessionErrors, clearSessionErrors, clearEmailAttempt } from "../../actions/session_actions";

const mSTP = ({ errors, session }) => {
  return {
    errors: errors.session,
    attemptedUser: session.attemptedUser
  };
};

const mDTP = dispatch => {
  return {
    getUserByEmail: email => dispatch(getUserByEmail(email)),
    clearEmailAttempt: () => dispatch(clearEmailAttempt()),
    login: user => dispatch(login(user)),
    receiveSessionError: error => dispatch(receiveSessionError(error)),
    receiveSessionErrors: errors => dispatch(receiveSessionErrors(errors)),
    clearSessionErrors: () => dispatch(clearSessionErrors())
  };
};

export default connect(mSTP, mDTP)(LoginFormMaster);