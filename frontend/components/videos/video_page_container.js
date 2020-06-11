import VideoPage from "./video_page";
import { connect } from "react-redux";
import { fetchVideo, clearVideoErrors } from "../../actions/videos_actions";
import { fetchUser, clearUserErrors } from "../../actions/users_actions";
import { createVideoVote, destroyVideoVote } from "../../util/video_votes_api_util";
import { refresh } from "../../actions/session_actions";

const mSTP = ({ entities, errors, session }, ownProps) => {
  // debugger
  const videoId = ownProps.match.params.videoId;
  const video = entities.videos[videoId];
  let uploader;

  if (video) {
    // debugger
    uploader = entities.users[video.uploader_id];
  }

  // debugger
  return {
    videoId,
    video,
    uploader,
    errors: errors.video,
    likedVideoIds: session.likedVideoIds,
    dislikedVideoIds: session.dislikedVideoIds
  };
};

const mDTP = dispatch => {
  // debugger
  return {
    fetchVideo: videoId => dispatch(fetchVideo(videoId)),
    clearVideoErrors: () => dispatch(clearVideoErrors()),
    fetchUser: userId => dispatch(fetchUser(userId)),
    clearUserErrors: () => dispatch(clearUserErrors()),
    createVideoVote: vote => dispatch(createVideoVote(vote)),
    destroyVideoVote: voteId => dispatch(destroyVideoVote(voteId)),
    refresh: (userId) => dispatch(refresh(userId))
  };
};

export default connect(mSTP, mDTP)(VideoPage);