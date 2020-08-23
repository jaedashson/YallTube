import React from "react";
import { Link } from "react-router-dom";
import { parseDate } from "../../util/videos_info_util";

class RecommendationsItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { uploader : null };
    // TODO - What about video?
  }

  componentDidMount() {
    this.props.fetchUser(this.props.video.uploader_id).then (action => {
      this.setState({ suploader: action.user });
    });
  }

  render() {
    // If the uploader has not been fetched yet
    if (!this.state.uploader) {
      return null;
    }

    return (
      <Link to={`/videos/${this.props.video.id}`} className="recommendations-item">
        <img
          className="recommendation-thumbnail"
          src={this.props.video.thumbnailurl}

        />

        <div className="recommendation-info">
          <p className="recommendation-title">{this.props.video.title}</p>
          <p className="recommendation-uploader">{this.props.video.uploader.username}</p>
          <div className="recommendation-stats">
            <span className="recommendation-views">{this.props.video.}</span>
            <span className="recommendation-date"></span>
          </div>

        </div>



      </ Link>
    )
  }
}