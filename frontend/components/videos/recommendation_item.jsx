import React from "react";
import { Link } from "react-router-dom";
import { parseDate } from "../../util/videos_info_util";

class RecommendationItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // If the uploader has not been fetched yet
    return (
      <div className="recommendation-item">
        <Link to={`/videos/${this.props.video.id}`}>
          <img
            className="recommendation-thumbnail"
            src={this.props.video.thumbnailUrl}
          />
        </Link>
        <div className="recommendation-info">
          <Link to={`/videos/${this.props.video.id}`} className="recommendation-title">{this.props.video.title}</Link>
          <Link to={`/users/${this.props.uploader.id}`} className="recommendation-uploader">{this.props.uploader.username}</Link>
          <div className="recommendation-stats">
            <span className="recommendation-views">{this.props.video.viewCount} views</span>
            <span className="recommendation-dot">•</span>
            <span className="recommendation-date">{parseDate(this.props.video.created_at)}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default RecommendationItem;