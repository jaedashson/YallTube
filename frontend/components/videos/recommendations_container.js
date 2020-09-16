import Recommendations from "./recommendations";
import { connect } from "react-redux";
import { fetchAllVideos } from "../../actions/videos_actions";
import { fetchUser } from "../../actions/users_actions";

const mSTP = ({ entities }, ownProps) => {
  return {
    videoId: ownProps.videoId,
    videos: Object.values(entities.videos) // this.props.videos will be an array of videos
  };
};

const mDTP = dispatch => {
  return {
    fetchAllVideos: () => dispatch(fetchAllVideos()),
    fetchUser: userId => dispatch(fetchUser(userId))
  };
};

export default connect(mSTP, mDTP)(Recommendations);