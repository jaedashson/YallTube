import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class VideoDescription extends React.Component {
  constructor(props) {
    debugger
    super(props);
  };

  parseDate(dateStr) {
    debugger
    let date = new Date(dateStr);
    return date.toDateString().slice(4);
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
              <p className="video-date">{uploadDate}</p>
            </div>
            <div className="video-likes-container">
              <FontAwesomeIcon icon="thumbs-up" className="thumbs-up" />
              <p>100K</p>
              <FontAwesomeIcon icon="thumbs-down" className="thumbs-down" />
              <p>5K</p>
            </div>
          </div>
        </div>
        <div className="video-description-body"></div>
      </div>
    )
  };
}

export default VideoDescription;