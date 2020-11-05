import ChannelPage from "./channel_page";
import { connect } from "react-redux";
import { fetchSubscriptions } from "../../actions/videos_actions";
import { fetchUsers } from "../../actions/users_actions";

const mSTP = ({ entities, session }, ownProps) => {
  const channelId = parseInt(ownProps.match.params.channelId);
  const channel = entities.users[channelId];

  return {
    channelId,
    channel,
    videos: Object.values(entities.videos),
    uploaders: entities.users,
    currentUserId: session.id,
  };
};

const mDTP = dispatch => {
  return {
    fetchSubscriptions: uploaderIds => dispatch(fetchSubscriptions(uploaderIds)),
    fetchUsers: userIds => dispatch(fetchUsers(userIds))
  };
};

export default connect(mSTP, mDTP)(ChannelPage);