import Comment from "./comment";
import { connect } from "react-redux";
import { fetchComments } from "../../actions/comments_actions";
import { createCommentVote, destroyCommentVote } from "../../actions/comment_votes_actions";
import { parseDate } from "../../util/videos_info_util";

const mSTP = ({ session, entities: { users, comments } }, ownProps) => {
  const replyIds = ownProps.comment.replyIds;
  const replies = Object.values(comments).filter(comment => replyIds.includes(comment.id));

  return {
    currentUser: users[session.id], // TODO - phase out?
    currentUserId: session.id,
    replyIds,
    replies,
    liked: session.likedCommentIds.includes(ownProps.comment.id),
    disliked: session.dislikedCommentIds.includes(ownProps.comment.id),
    uploadDate: parseDate(ownProps.comment.created_at)
  };
};

const mDTP = dispatch => {
  return {
    fetchComments: commentIds => dispatch(fetchComments(commentIds)),
    createCommentVote: commentVote => dispatch(createCommentVote(commentVote)),
    destroyComment: commentVote => dispatch(destroyCommentVote(commentVote))
  };
};

export default connect(mSTP, mDTP)(Comment);