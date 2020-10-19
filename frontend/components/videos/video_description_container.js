import VideoDescription from "./video_description";
import { connect } from "react-redux";
import { createVideoVote, destroyVideoVote } from "../../actions/video_votes_actions"; // Replace with actions
import { refresh } from "../../actions/session_actions";
import { parseDate } from "../../util/videos_info_util";

const mSTP = ({ entities, session }, ownProps) => {
  const video = entities.videos[ownProps.videoId];

  return {
    currentUserId: session.id,
    video,
    uploader: entities.users[ownProps.uploaderId],
    liked: session.likedVideoIds.includes(ownProps.videoId),
    disliked: session.dislikedVideoIds.includes(ownProps.videoId),
    uploadDate: parseDate(video.created_at)

    // The below is added so that it can be determined whether the current user has voted on this video
    // likedVideoIds: session.likedVideoIds,
    // dislikedVideoIds: session.dislikedVideoIds,
    // liked: session.likedVideoIds.includes(ownProps.video.id),
    // disliked: session.dislikedVideoIds.includes(ownProps.video.id)
  };
}

const mDTP = dispatch => {
  return {
    createVideoVote: vote => dispatch(createVideoVote(vote)),
    destroyVideoVote: vote => dispatch(destroyVideoVote(vote)),
    // refresh: userId => dispatch(refresh(userId))
  };
}

export default connect(mSTP, mDTP)(VideoDescription);