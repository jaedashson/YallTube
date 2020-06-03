import SignupForm from "./signup_form";
import { connect } from "react-redux";
import { signup, receiveError, receiveErrors, clearErrors } from "../../actions/session_actions";

const mSTP = ({ errors }) => {
  return {
    errors: errors.session,
  };
};

const mDTP = dispatch => {
  return {
    signup: user => dispatch(signup(user)),
    receiveError: error => dispatch(receiveError(error)),
    receiveErrors: errors => dispatch(receiveErrors(errors)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mSTP, mDTP)(SignupForm);