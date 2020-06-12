import HomePage from "./home_page";
import { connect } from "react-redux";
import { fetchAllVideos } from "../../actions/videos_actions";
import { fetchUser } from "../../actions/users_actions";

const mSTP = ({ entities }) => {
  // debugger
  return {
    videos: Object.values(entities.videos) // this.props.videos will be an array of videos
  };
};

const mDTP = dispatch => {
  // debugger
  return {
    fetchAllVideos: () => dispatch(fetchAllVideos()),
    fetchUser: userId => dispatch(fetchUser(userId))
  };
};

export default connect(mSTP, mDTP)(HomePage);