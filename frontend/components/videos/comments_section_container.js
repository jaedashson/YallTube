import CommentsSection from "./comments_section";
import { connect } from "react-redux";
import { fetchComments } from "../../actions/comments_actions";

const mSTP = ({ session, entities: { users } }, ownProps) => {
  return {
    currentUser: users[session.id],
    videoId: ownProps.videoId
  };
};

const mDTP = dispatch => {
  return {
    fetchComments: videoId => dispatch(fetchComments(videoId))
  };
};

export default connect(mSTP, mDTP)(CommentsSection);