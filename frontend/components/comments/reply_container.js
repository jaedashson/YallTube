import Reply from "./reply";
import { connect } from "react-redux";

const mSTP = ({ session, entities: { users, comments } }, ownProps) => {
  return {
    currentUser: users[session.id],
  };
};

const mDTP = dispatch => {
  return {

  };
};

export default connect(mSTP, mDTP)(Reply);