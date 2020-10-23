import SideBar from "./side_bar";
import { connect } from "react-redux";
import { fetchUsers } from "../../actions/users_actions";

const mSTP = ({ entities: { videos, users }, session }) => {
  return {
    subscribedChannelIds: session.subscribedChannelIds,
    users
  };
};

const mDTP = dispatch => {
  return {
    fetchUsers: userIds => dispatch(fetchUsers(userIds))
  };
};

export default connect(mSTP, mDTP)(SideBar);