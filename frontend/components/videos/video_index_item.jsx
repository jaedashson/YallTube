import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class VideoIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { uploader: null };
  }

  componentDidMount() {
    // fetch User and *then* update component state
    this.props.fetchUser(this.props.video.uploader_id).then(action => {
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
            width="200"
            height="120"
          />
        </div>
        <div className="video-index-item-info-container">
          <div className="current-user-icon">
            {this.state.uploader.username[0]}
          </div>
          <div className="video-index-item-info">
            <p className="video-index-item-title">{this.props.video.title}</p>
            <Link to={`/users/${this.state.uploader.id}`} className="video-index-item-uploader">{this.state.uploader.username}</Link>
            <p className="video-index-item-views-date">views+date</p>
          </div>
        </div>
      </Link>
    );
  }
};

export default VideoIndexItem;