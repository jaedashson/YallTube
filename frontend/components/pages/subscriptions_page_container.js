import SubscriptionsPage from "./subscriptions_page";
import { connect } from "react-redux";
import { fetchSubscriptions } from "../../actions/videos_actions";
import { fetchUsers } from "../../actions/users_actions";

const mSTP = ({ entities: { videos, users }, session }) => {
  return {
    subscribedChannelIds: session.subscribedChannelIds,
    videos: Object.values(videos),
    uploaders: users
  };
};

const mDTP = dispatch => {
  return {
    fetchSubscriptions: uploaderIds => dispatch(fetchSubscriptions(uploaderIds)),
    fetchUsers: userIds => dispatch(fetchUsers(userIds))
  };
};

export default connect(mSTP, mDTP)(SubscriptionsPage);