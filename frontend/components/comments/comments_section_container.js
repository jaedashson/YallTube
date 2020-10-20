import CommentsSection from "./comments_section";
import { connect } from "react-redux";
import { fetchParentComments } from "../../actions/comments_actions";

const mSTP = ({ session, entities: { users, comments, videos } }, ownProps) => {
  const parentCommentIds = videos[ownProps.videoId].parentCommentIds;
  const parentComments = Object.values(comments).filter(comment => parentCommentIds.includes(comment.id));

  return {
    currentUser: users[session.id],
    commentCount: videos[ownProps.videoId].commentCount,
    parentComments
  };
};

const mDTP = dispatch => {
  return {
    fetchParentComments: videoId => dispatch(fetchParentComments(videoId)),
  };
};

export default connect(mSTP, mDTP)(CommentsSection);