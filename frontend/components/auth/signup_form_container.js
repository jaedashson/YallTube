import SignupForm from "./signup_form";
import { connect } from "react-redux";
import { signup, receiveSessionError, receiveSessionErrors, clearSessionErrors } from "../../actions/session_actions";

const mSTP = ({ errors }) => {
  return {
    errors: errors.session,
  };
};

const mDTP = dispatch => {
  return {
    signup: user => dispatch(signup(user)),
    receiveSessionError: error => dispatch(receiveSessionError(error)),
    receiveSessionErrors: errors => dispatch(receiveSessionErrors(errors)),
    clearSessionErrors: () => dispatch(clearSessionErrors())
  };
};

export default connect(mSTP, mDTP)(SignupForm);