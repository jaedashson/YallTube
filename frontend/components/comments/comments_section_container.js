import CommentsSection from "./comments_section";
import { connect } from "react-redux";
import { fetchParentComments } from "../../actions/comments_actions";
import { fetchUsers } from "../../actions/users_actions";

const mSTP = ({ session, entities: { users, comments, videos } }, ownProps) => {
  return {
    currentUser: users[session.id],
    comments: comments,
    authors: users,
    parentCommentIds: videos[ownProps.videoId].parentCommentIds
  };
};

const mDTP = dispatch => {
  return {
    fetchParentComments: videoId => dispatch(fetchParentComments(videoId)),
    fetchUsers: userIds => dispatch(fetchUsers(userIds))
  };
};

export default connect(mSTP, mDTP)(CommentsSection);