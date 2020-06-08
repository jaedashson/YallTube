import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import SignInButton from "./sign_in_button";

const mSTP = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mDTP = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mSTP, mDTP)(SignInButton);