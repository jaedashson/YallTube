import ReplyForm from "./reply_form";
import { connect } from "react-redux";
import { createComment } from "../../actions/comments_actions";

const mSTP = ({ session, entities: { users, comments } }, ownProps) => {
  return {
    parentId: ownProps.parentId,
    currentUser: ownProps.currentUser,
    videoId: ownProps.videoId,
  };
};

const mDTP = dispatch => {
  return {
    createComment: comment => dispatch(createComment(comment))
  };
};

export default connect(mSTP, mDTP)(ReplyForm);