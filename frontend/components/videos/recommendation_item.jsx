import React from "react";
import { Link } from "react-router-dom";
import { parseDate } from "../../util/videos_info_util";

class RecommendationItem extends React.Component {
  constructor(props) {
    debugger
    super(props);
    this.state = { uploader : null };
    // TODO - What about video?
  }

  componentDidMount() {
    debugger

    this.props.fetchUser(this.props.video.uploader_id).then(action => {
      debugger
      this.setState({ uploader: action.user });
    });
  }

  render() {
    debugger

    // If the uploader has not been fetched yet
    if (!this.state.uploader) {
      return null;
    }

    debugger

    return (
      <Link to={`/videos/${this.props.video.id}`} className="recommendation-item">
        <img
          className="recommendation-thumbnail"
          src={this.props.video.thumbnailUrl}
        />

        <div className="recommendation-info">
          <p className="recommendation-title">{this.props.video.title}</p>
          <p className="recommendation-uploader">{this.state.uploader.username}</p>
          <div className="recommendation-stats">
            <span className="recommendation-views">9.9m views</span>
            <span>•</span>
            <span className="recommendation-date">{parseDate(this.props.video.created_at)}</span>
          </div>
        </div>
      </ Link>
    )
  }
}

export default RecommendationItem;