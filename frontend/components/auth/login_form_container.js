import LoginFormMaster from "./login_form_master";
import { connect } from "react-redux";
import { login, getUserByEmail, receiveError, receiveErrors, clearErrors } from "../../actions/session_actions";

const mSTP = ({ errors }) => {
  return {
    errors: errors.session
  };
};

const mDTP = dispatch => {
  return {
    getUserByEmail: email => dispatch(getUserByEmail(email)),
    login: user => dispatch(login(user)),
    receiveError: error => dispatch(receiveError(error)),
    receiveErrors: errors => dispatch(receiveErrors(errors)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mSTP, mDTP)(LoginFormMaster);