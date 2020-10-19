import YourVideosPage from "./your_videos_page";
import { connect } from "react-redux";
import { fetchVideos } from "../../actions/videos_actions";
import { fetchUsers } from "../../actions/users_actions";

const mSTP = ({ entities, session }) => {
  return {
    uploadedVideoIds: session.uploadedVideoIds,
    videos: Object.values(entities.videos),
    uploaders: entities.users
  };
};

const mDTP = dispatch => {
  return {
    fetchVideos: videoIds => dispatch(fetchVideos(videoIds)),
    fetchUsers: userIds => dispatch(fetchUsers(userIds))
  };
};

export default connect(mSTP, mDTP)(YourVideosPage);