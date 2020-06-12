import VideoDescription from "./video_description";
import { connect } from "react-redux";
import { createVideoVote, destroyVideoVote } from "../../util/video_votes_api_util";
import { refresh } from "../../actions/session_actions";


const mSTP = ({ session }, ownProps) => {
  debugger
  return {
    currentUserId: session.id, // Is this string or integer?
    video: ownProps.video,
    uploader: ownProps.uploader,
    likedVideoIds: session.likedVideoIds,
    dislikedVideoIds: session.dislikedVideoIds
  };
}

const mDTP = dispatch => {
  debugger
  return {
    createVideoVote: vote => createVideoVote(vote),
    destroyVideoVote: vote => destroyVideoVote(vote),
    refresh: () => dispatch(refresh())
  };
}

export default connect(mSTP, mDTP)(VideoDescription);