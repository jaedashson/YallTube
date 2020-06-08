import VideoPage from "./video_page";
import { connect } from "react-redux";
import { fetchVideo, clearVideoErrors } from "../../actions/videos_actions";
import { fetchUser, clearUserErrors } from "../../actions/users_actions";

const mSTP = ({ entities, errors }, ownProps) => {
  debugger
  return {
    video: entities.videos[ownProps.match.params.videoId],
    errors: errors.video,
    // uploader: entities.users[]
  };
};

const mDTP = dispatch => {
  debugger
  return {
    fetchVideo: videoId => dispatch(fetchVideo(videoId)),
    clearVideoErrors: () => dispatch(clearVideoErrors()),
    fetchUser: userId => dispatch(fetchUser(userId)),
    clearUserErrors: () => dispatch(clearUserErrors())
  };
};

export default connect(mSTP, mDTP)(VideoPage);