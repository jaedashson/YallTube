import HistoryPage from "./history_page";
import { connect } from "react-redux";
import { fetchVideos } from "../../actions/videos_actions";
import { fetchUsers } from "../../actions/users_actions";

const mSTP = ({ entities, session }) => {
  return {
    viewedVideoIds: session.viewedVideoIds,
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

export default connect(mSTP, mDTP)(HistoryPage);