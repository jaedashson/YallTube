import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class VideoDescription extends React.Component {
  constructor(props) {
    // debugger
    super(props);

    this.handleSubscribe = this.handleSubscribe.bind(this);
  };

  parseDate(dateStr) {
    // debugger
    let date = new Date(dateStr);
    return date.toDateString().slice(4);
  }

  handleSubscribe(e) {
    e.preventDefault();
  }

  render() {
    const uploadDate = this.parseDate(this.props.video.created_at);

    return (
      <div className="video-description-container">
        <div className="video-description-header">
          <div className="video-title">
            <p className="video-title-text">{this.props.video.title}</p>
          </div>
          <div className="video-info">
            <div className="video-views-date-container">
              <p className="video-views">9,999,999 views</p>
              <p className="video-views-date-divider">•</p>
              <p className="video-date">{uploadDate}</p>
            </div>
            <div className="video-likes-container">
              <FontAwesomeIcon icon="thumbs-up" className="video-likes-item thumb" />
              <p className="video-likes-item video-vote-count">100K</p>
              <FontAwesomeIcon icon="thumbs-down" className="video-likes-item thumb" />
              <p className="video-likes-item video-vote-count">5K</p>
            </div>
          </div>
        </div>

        <div className="video-description-body-container">
          <div className="video-description-body-left">
            <div className="uploader-icon-container">Icon</div>
            <div className="video-description-body">
              <p className="uploader-username">{this.props.uploader.username}</p>
              <p className="uploader-subscriber-count">30.4 M subscribers</p>
              <p className="video-description-text">{this.props.video.description}</p>
            </div>
          </div>
          <div className="uploader-subscribe-button-container">
            <button onClick={this.handleSubscribe}>SUBSCRIBE</button>
          </div>
        </div>
      </div>
    )
  };
}

export default VideoDescription;