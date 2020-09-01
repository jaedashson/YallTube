import ReplyForm from "./reply_form";
import { connect } from "react-redux";
import { createComment } from "../../actions/comments_actions";

const mSTP = ({ session, entities: { users, comments } }, ownProps) => {
  return {
    currentUser: ownProps.currentUser,
    videoId: ownProps.videoId,
    handleHideReplyForm: ownProps.handleHideReplyForm
  };
};

const mDTP = dispatch => {
  return {
    createComment: comment => dispatch(createComment(comment))
  };
};

export default connect(mSTP, mDTP)(ReplyForm);