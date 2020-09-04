import VideoPage from "./video_page";
import { connect } from "react-redux";
import { fetchVideo, clearVideoErrors, fetchAllVideos, receiveVideoErrors } from "../../actions/videos_actions"; // TESTING
import { fetchUser, clearUserErrors, usersActionsTest } from "../../actions/users_actions";
import { refresh } from "../../actions/session_actions";

const mSTP = ({ entities, errors, session }, ownProps) => {
  const videoId = parseInt(ownProps.match.params.videoId);
  const video = entities.videos[videoId];
  let uploader;

  if (video && entities.users[video.uploader_id]) {
    uploader = entities.users[video.uploader_id];
  }

  return {
    currentUserId: session.id,
    videoId,
    video,
    uploader,
    errors: errors.video,
  };
};

const mDTP = dispatch => {
  return {
    fetchVideo: videoId => dispatch(fetchVideo(videoId)),
    fetchAllVideos: () => dispatch(fetchAllVideos(videoId)),
    clearVideoErrors: () => dispatch(clearVideoErrors()),
    fetchUser: userId => dispatch(fetchUser(userId)),
    clearUserErrors: () => dispatch(clearUserErrors()),
    refresh: userId => dispatch(refresh(userId))
  };
};

export default connect(mSTP, mDTP)(VideoPage);