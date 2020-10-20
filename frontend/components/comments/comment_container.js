import Comment from "./comment";
import { connect } from "react-redux";
import { fetchReplies, fetchComments } from "../../actions/comments_actions";
import { parseDate } from "../../util/videos_info_util";

const mSTP = ({ session, entities: { users, comments } }, ownProps) => {
  const replyIds = ownProps.comment.replyIds;
  const replies = Object.values(comments).filter(comment => replyIds.includes(comment.id));

  return {
    currentUser: users[session.id],
    replyIds,
    replies,
    liked: false,
    disliked: false,
    uploadDate: parseDate(ownProps.comment.created_at)
  };
};

const mDTP = dispatch => {
  return {
    fetchReplies: commentId => dispatch(fetchReplies(commentId)),
    fetchComments: commentIds => dispatch(fetchComments(commentIds))
  };
};

export default connect(mSTP, mDTP)(Comment);