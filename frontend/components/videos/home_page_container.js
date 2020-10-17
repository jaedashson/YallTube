import HomePage from "./home_page";
import { connect } from "react-redux";
import { fetchAllVideos } from "../../actions/videos_actions";
import { fetchUser, fetchUsers } from "../../actions/users_actions";

const mSTP = ({ entities }) => {
  return {
    videos: Object.values(entities.videos), // this.props.videos will be an array of videos
    uploaders: entities.users // this.props.uploaders will be an object
  };
};

const mDTP = dispatch => {
  return {
    fetchAllVideos: () => dispatch(fetchAllVideos()),
    // fetchUser: userId => dispatch(fetchUser(userId)),
    fetchUsers: userIds => dispatch(fetchUsers(userIds))
  };
};

export default connect(mSTP, mDTP)(HomePage);