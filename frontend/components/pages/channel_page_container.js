import ChannelPage from "./channel_page";
import { connect } from "react-redux";
import { fetchSubscriptions } from "../../actions/videos_actions";
import { fetchUsers } from "../../actions/users_actions";
import { createSubscription, destroySubscription } from "../../actions/subscriptions_actions";

const mSTP = ({ entities, session }, ownProps) => {
  const channelId = parseInt(ownProps.match.params.channelId);
  const channel = entities.users[channelId];

  return {
    channelId,
    channel,
    videos: Object.values(entities.videos),
    uploaders: entities.users,
    currentUserId: session.id,
    subscribed: session.subscribedChannelIds.includes(channelId)
  };
};

const mDTP = dispatch => {
  return {
    fetchSubscriptions: uploaderIds => dispatch(fetchSubscriptions(uploaderIds)),
    fetchUsers: userIds => dispatch(fetchUsers(userIds)),
    createSubscription: subscription => dispatch(createSubscription(subscription)),
    destroySubscription: subscription => dispatch(destroySubscription(subscription))
  };
};

export default connect(mSTP, mDTP)(ChannelPage);