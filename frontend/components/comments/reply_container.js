import Reply from "./reply";
import { connect } from "react-redux";
import { parseDate } from "../../util/videos_info_util";

const mSTP = ({ session, entities: { users, comments } }, ownProps) => {
  return {
    currentUser: users[session.id],
    liked: false,
    disliked: false,
    uploadDate: parseDate(ownProps.reply.created_at)
  };
};

const mDTP = dispatch => {
  return {

  };
};

export default connect(mSTP, mDTP)(Reply);