import VideoPage from "./video_page";
import { connect } from "react-redux";
import { fetchVideo, clearVideoErrors } from "../../actions/videos_actions";
import { fetchUser, clearUserErrors } from "../../actions/users_actions";

const mSTP = ({ entities, errors }, ownProps) => {
  debugger

  const videoId = ownProps.match.params.videoId

  const video = entities.videos[videoId];
  let uploader;

  if (video) {
    debugger
    uploader = entities.users[video.uploader_id];
  }

  debugger
  return {
    videoId,
    video,
    uploader,
    errors: errors.video,
  };
};

const mDTP = dispatch => {
  // debugger
  return {
    fetchVideo: videoId => dispatch(fetchVideo(videoId)),
    clearVideoErrors: () => dispatch(clearVideoErrors()),
    fetchUser: userId => dispatch(fetchUser(userId)),
    clearUserErrors: () => dispatch(clearUserErrors())
  };
};

export default connect(mSTP, mDTP)(VideoPage);