import LikedVideosPage from "./liked_videos_page";
import { connect } from "react-redux";
import { fetchVideos } from "../../actions/videos_actions";
import { fetchUsers } from "../../actions/users_actions";

const mSTP = ({ entities, session }) => {
  return {
    likedVideoIds: session.likedVideoIds,
    videos: Object.values(entities.videos),
    uploaders: entities.users
  };

  // const likedVideoIds = session.likedVideoIds;
  // const likedVideos = [];

  // Object.values(entities.videos).forEach(video => {
  //   if (likedVideoIds.includes(video.id)) {
  //     likedVideos.push(video);
  //   }
  // })

  // return {
  //   videos: likedVideos,
  //   likedVideoIds
  // };
};

const mDTP = dispatch => {
  return {
    fetchVideos: videoIds => dispatch(fetchVideos(videoIds)),
    fetchUsers: userIds => dispatch(fetchUsers(userIds))
  };
};

export default connect(mSTP, mDTP)(LikedVideosPage);