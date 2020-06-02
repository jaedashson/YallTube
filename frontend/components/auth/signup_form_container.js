import SignupForm from "./signup_form";
import { connect } from "react-redux";
import { signup } from "../../actions/session_actions";

const mSTP = ({ errors }) => {
  return {
    errors: errors.session,
  };
};

const mDTP = dispatch => {
  return {
    signup: user => dispatch(signup(user)),
  };
};

export default connect(mSTP, mDTP)(SignupForm)