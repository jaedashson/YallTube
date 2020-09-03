import Comment from "./comment";
import { connect } from "react-redux";
import { fetchReplies } from "../../actions/comments_actions";

const mSTP = ({ session, entities: { users, comments } }, ownProps) => {
  return {
    currentUser: users[session.id],
    replies: comments[ownProps.comment.id]["replies"]
  };
};

const mDTP = dispatch => {
  return {
    fetchReplies: commentId => dispatch(fetchReplies(commentId))
  };
};

export default connect(mSTP, mDTP)(Comment);