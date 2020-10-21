import LikedVideosPage from "./liked_videos_page";
import { connect } from "react-redux";
import { fetchVideos } from "../../actions/videos_actions";
import { fetchUsers } from "../../actions/users_actions";

const mSTP = ({ entities: { videos, users }, session }) => {
  return {
    likedVideoIds: session.likedVideoIds,
    videos: Object.values(videos),
    uploaders: users
  };
};

const mDTP = dispatch => {
  return {
    fetchVideos: videoIds => dispatch(fetchVideos(videoIds)),
    fetchUsers: userIds => dispatch(fetchUsers(userIds))
  };
};

export default connect(mSTP, mDTP)(LikedVideosPage);