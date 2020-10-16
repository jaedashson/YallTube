import VideoDescription from "./video_description";
import { connect } from "react-redux";
import { createVideoVote, destroyVideoVote } from "../../util/video_votes_api_util";
import { refresh } from "../../actions/session_actions";

const mSTP = ({ session }, ownProps) => {
  return {
    currentUserId: session.id,

    // The below is added so that it can be determined whether the current user has voted on this video
    likedVideoIds: session.likedVideoIds,
    dislikedVideoIds: session.dislikedVideoIds,
    liked: session.likedVideoIds.includes(ownProps.video.id),
    disliked: session.dislikedVideoIds.includes(ownProps.video.id)
  };
}

const mDTP = dispatch => {
  return {
    createVideoVote: vote => createVideoVote(vote), // util function, not dispatch
    destroyVideoVote: vote => destroyVideoVote(vote), // util function, not dispatch
    refresh: userId => dispatch(refresh(userId))
  };
}

export default connect(mSTP, mDTP)(VideoDescription);