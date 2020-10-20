import CommentsSection from "./comments_section";
import { connect } from "react-redux";
import { fetchParentComments } from "../../actions/comments_actions";
import { fetchUsers } from "../../actions/users_actions";

const mSTP = ({ session, entities: { users, comments, videos } }, ownProps) => {
  return {
    video: videos[ownProps.videoId],
    currentUser: users[session.id],
    comments: comments,
    parentCommentIds: videos[ownProps.videoId].parentCommentIds
  };
};

const mDTP = dispatch => {
  return {
    fetchParentComments: videoId => dispatch(fetchParentComments(videoId)),
  };
};

export default connect(mSTP, mDTP)(CommentsSection);