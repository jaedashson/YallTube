import HomePage from "./home_page";
import { connect } from "react-redux";
import { fetchAllVideos } from "../../actions/videos_actions";
import { fetchUsers } from "../../actions/users_actions";

const mSTP = ({ entities }) => {
  return {
    videos: Object.values(entities.videos),
    uploaders: entities.users
  };
};

const mDTP = dispatch => {
  return {
    fetchAllVideos: () => dispatch(fetchAllVideos()),
    fetchUsers: userIds => dispatch(fetchUsers(userIds))
  };
};

export default connect(mSTP, mDTP)(HomePage);