import Recommendations from "./recommendations";
import { connect } from "react-redux";
import { fetchAllVideos } from "../../actions/videos_actions";
import { fetchUsers } from "../../actions/users_actions";

const mSTP = ({ entities: { videos, users, comments } }, ownProps) => {
  return {
    videos: Object.values(videos),
    uploaders: users
  };
};

const mDTP = dispatch => {
  return {
    fetchAllVideos: () => dispatch(fetchAllVideos()),
    fetchUsers: userIds => dispatch(fetchUsers(userIds))
  };
};

export default connect(mSTP, mDTP)(Recommendations);