import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { parseDate } from "../../util/videos_info_util";


class VideoIndexItem extends React.Component {
  constructor(props) {
    // debugger
    super(props);
    this.state = { uploader: null };
  }

  componentDidMount() {
    // debugger
    this.props.fetchUser(this.props.video.uploader_id).then(action => {
      // debugger
      this.setState({ uploader: action.user });
    });
  }
  
  render() {
    // debugger
    if (!this.state.uploader) {
      return null;
    }
    // debugger
    return (
      <Link to={`/videos/${this.props.video.id}`} className="video-index-item">
        <div className="thumbnail-container">
          <img 
            className="thumbnail"
            src={this.props.video.thumbnailUrl}
            width="269"
            height="151"
          />
        </div>
        <div className="video-index-item-info-container">
          <div className="current-user-icon">
            {this.state.uploader.username[0]}
          </div>
          <div className="video-index-item-info">
            <p className="video-index-item-title">{this.props.video.title}</p>
            <Link to={`/users/${this.state.uploader.id}`} className="video-index-item-uploader">{this.state.uploader.username}</Link>
            <p className="video-index-item-views-date">views • {parseDate(this.props.video.created_at)}</p>
          </div>
        </div>
      </Link>
    );
  }
};

export default VideoIndexItem;