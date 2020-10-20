import ReplyForm from "./reply_form";
import { connect } from "react-redux";
import { createReply } from "../../actions/comments_actions";

const mSTP = ({ session, entities: { users, comments } }, ownProps) => {
  return {
    currentUserId: session.id,
    currentUser: users[session.id],
  };
};

const mDTP = dispatch => {
  return {
    createReply: comment => dispatch(createReply(comment))
  };
};

export default connect(mSTP, mDTP)(ReplyForm);