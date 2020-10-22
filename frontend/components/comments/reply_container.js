import Reply from "./reply";
import { connect } from "react-redux";
import { createCommentVote, destroyCommentVote } from "../../actions/comment_votes_actions";
import { parseDate } from "../../util/videos_info_util";

const mSTP = ({ session, entities: { users, comments } }, ownProps) => {
  return {
    currentUser: users[session.id],
    currentUserId: session.id,
    liked: session.likedCommentIds.includes(ownProps.reply.id),
    disliked: session.dislikedCommentIds.includes(ownProps.reply.id),
    uploadDate: parseDate(ownProps.reply.created_at)
  };
};

const mDTP = dispatch => {
  return {
    createCommentVote: commentVote => dispatch(createCommentVote(commentVote)),
    destroyCommentVote: commentVote => dispatch(destroyCommentVote(commentVote))
  };
};

export default connect(mSTP, mDTP)(Reply);