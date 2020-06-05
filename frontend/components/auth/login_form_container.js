import LoginFormMaster from "./login_form_master";
import { connect } from "react-redux";
import { login, getUserByEmail, receiveError, receiveErrors, clearErrors, clearEmailAttempt } from "../../actions/session_actions";

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
    receiveError: error => dispatch(receiveError(error)),
    receiveErrors: errors => dispatch(receiveErrors(errors)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mSTP, mDTP)(LoginFormMaster);