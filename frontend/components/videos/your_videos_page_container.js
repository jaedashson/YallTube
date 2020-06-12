import YourVideosPage from "./your_videos_page";
import { connect } from "react-redux";
import { fetchVideos } from "../../actions/videos_actions";
import { fetchUser } from "../../actions/users_actions";

const mSTP = ({ entities, session }) => {
  // debugger

  const uploadedVideoIds = session.uploadedVideoIds;
  const uploadedVideos = [];

  Object.values(entities.videos).forEach(video => {
    if (uploadedVideoIds.includes(video.id)) {
      uploadedVideos.push(video);
    }
  })

  return {
    videos: uploadedVideos,
    uploadedVideoIds
  };
};

const mDTP = dispatch => {
  // debugger
  return {
    fetchVideos: videoIds => dispatch(fetchVideos(videoIds)),
    fetchUser: userId => dispatch(fetchUser(userId))
  };
};

export default connect(mSTP, mDTP)(YourVideosPage);