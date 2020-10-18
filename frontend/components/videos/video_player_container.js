import VideoPlayer from "./video_player";
import { connect } from "react-redux";
import { createView } from "../../util/views_api_util"; // Replace with actions

const mSTP = ({ session }, ownProps) => {
  return {
    currentUserId: session.id,
  };
};

const mDTP = dispatch => {
  return {
    createView: view => createView(view)
  };
};

export default connect(mSTP, mDTP)(VideoPlayer);