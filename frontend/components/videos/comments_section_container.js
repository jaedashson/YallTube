import CommentsSection from "./comments_section";
import { connect } from "react-redux";
import { fetchParentComments } from "../../actions/comments_actions";

const mSTP = ({ session, entities: { users, comments } }, ownProps) => {
  // debugger
  return {
    currentUser: users[session.id],
    // videoId: ownProps.videoId,
    comments: comments
  };
};

const mDTP = dispatch => {
  return {
    fetchParentComments: videoId => dispatch(fetchParentComments(videoId)),
  };
};

export default connect(mSTP, mDTP)(CommentsSection);