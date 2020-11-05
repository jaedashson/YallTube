import React from "react";
import { Link } from "react-router-dom";
import { parseDate } from "../../util/videos_info_util";

class SearchResultVideo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="search-result-video">
        <Link to={`/videos/${this.props.video.id}`} className="search-thumbnail-container">
          <img
            className="search-thumbnail"
            src={this.props.video.thumbnailUrl}
            width="360"
            height="202"
          />
        </Link>
        <div className="search-result-video-info">
          <Link to={`/videos/${this.props.video.id}`} className="search-result-video-title">{this.props.video.title}</Link>
          <p className="search-result-video-views-date">{this.props.video.viewCount} views • {parseDate(this.props.video.created_at)}</p>

          <Link to={`/users/${this.props.uploader.id}`} className="search-result-video-uploader-container">
            <div className="user-icon-reply">{this.props.uploader.username[0]}</div>
            <p className="search-result-video-uploader">{this.props.uploader.username}</p>
          </Link>

          {/* <Link to={`/users/${this.props.uploader.id}`} className="search-result-video-uploader">{this.props.uploader.username}</Link> */}




          <p className="search-result-video-description">{`${this.props.video.description.substring(0, 120)}` + (this.props.video.description.length > 120 ? "..." : "")}</p>
        </div>
      </div>
    );
  }
}

export default SearchResultVideo;