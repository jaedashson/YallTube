import UploadPage from "./upload_page";
import { connect } from "react-redux";
import { createVideo } from "../../actions/videos_actions";


const mSTP = ({ session }) => {
  return {
    uploaderId: session.id
  };
};

const mDTP = dispatch => {
  return {
    createVideo: video => dispatch(createVideo(video))
  };
};

export default connect(mSTP, mDTP)(UploadPage);