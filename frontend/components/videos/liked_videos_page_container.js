import LikedVideosPage from "./liked_videos_page";
import { connect } from "react-redux";
import { fetchVideos } from "../../actions/videos_actions";
import { fetchUser } from "../../actions/users_actions";

const mSTP = ({ entities, session }) => {
  debugger

  const likedVideoIds = session.likedVideoIds;
  const likedVideos = [];

  Object.values(entities.videos).forEach(video => {
    if (likedVideoIds.includes(video.id)) {
      likedVideos.push(video);
    }
  })

  return {
    videos: likedVideos,
    likedVideoIds
  };
};

const mDTP = dispatch => {
  debugger
  return {
    fetchVideos: videoIds => dispatch(fetchVideos(videoIds)),
    fetchUser: userId => dispatch(fetchUser(userId))
  };
};

export default connect(mSTP, mDTP)(LikedVideosPage);