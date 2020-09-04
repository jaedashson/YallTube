import CommentForm from "./comment_form";
import { connect } from "react-redux";
import { createParentComment } from "../../actions/comments_actions";

const mSTP = ({ session, entities: { users, comments, videos } }, ownProps) => {
  return {
    // currentUser: ownProps.currentUser,
    // videoId: ownProps.videoId,
  };
};

const mDTP = dispatch => {
  return {
    createParentComment: comment => dispatch(createParentComment(comment))
  };
};

export default connect(mSTP, mDTP)(CommentForm);