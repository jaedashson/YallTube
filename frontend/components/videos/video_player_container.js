import VideoPlayer from "./video_player";
import { connect } from "react-redux";
import { createView } from "../../actions/views_actions"; // Replace with actions

const mSTP = ({ session }, ownProps) => {
  return {
    currentUserId: session.id,
  };
};

const mDTP = dispatch => {
  return {
    createView: view => dispatch(createView(view))
  };
};

export default connect(mSTP, mDTP)(VideoPlayer);