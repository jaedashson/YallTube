import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { parseDate } from "../../util/videos_info_util";


class VideoIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    // debugger // Do we have the uploader every time?
    return (
      <div className="video-index-item">
        <Link to={`/videos/${this.props.video.id}`} className="thumbnail-container">
          <img 
            className="thumbnail"
            src={this.props.video.thumbnailUrl}
            width="269"
            height="151"
          />
        </Link>
        <div className="video-index-item-info-container">
          <Link to={`/users/${this.props.uploader.id}`} className="current-user-icon">
            {this.props.uploader.username[0]}
          </Link>
          <div className="video-index-item-info">
            <Link to={`/videos/${this.props.video.id}`} className="video-index-item-title">{this.props.video.title}</Link>
            <Link to={`/users/${this.props.uploader.id}`} className="video-index-item-uploader">{this.props.uploader.username}</Link>
            <p className="video-index-item-views-date">{this.props.video.viewCount} views • {parseDate(this.props.video.created_at)}</p>
          </div>
        </div>
      </div>
    );
  }
};

export default VideoIndexItem;