import VideoDescription from "./video_description";
import { connect } from "react-redux";
import { createVideoVote, destroyVideoVote } from "../../actions/video_votes_actions";
import { createSubscription, destroySubscription } from "../../actions/subscriptions_actions";
import { parseDate } from "../../util/videos_info_util";

const mSTP = ({ entities, session }, ownProps) => {
  const video = entities.videos[ownProps.videoId];
  
  return {
    currentUserId: session.id,
    video,
    uploader: entities.users[ownProps.uploaderId],
    liked: session.likedVideoIds.includes(ownProps.videoId),
    disliked: session.dislikedVideoIds.includes(ownProps.videoId),
    uploadDate: parseDate(video.created_at),
    subscribed: session.subscribedChannelIds.includes(ownProps.uploaderId)
  };
};

const mDTP = dispatch => {
  return {
    createVideoVote: vote => dispatch(createVideoVote(vote)),
    destroyVideoVote: vote => dispatch(destroyVideoVote(vote)),
    createSubscription: subscription => dispatch(createSubscription(subscription)),
    destroySubscription: subscription => dispatch(destroySubscription(subscription))
  };
};

export default connect(mSTP, mDTP)(VideoDescription);