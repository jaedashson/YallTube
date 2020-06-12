import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { parseDate } from "../../util/videos_info_util";

class RecIndexItem extends React.Component {
  constructor(props) {
    // debugger
    super(props);
    this.state = { uploader : null };
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
      <Link to={`/videos/${this.props.video.id}`} className="rec-index-item">
        <div className="rec-thumbnail-container">
          <img
            className="thumbnail"
            src={this.props.video.thumbnailUrl}
            width="168"
            height="94"
          />
        </div>
        <div className="video-index-item-info rec-index-item-info">
          <p className="video-index-item-title">{this.props.video.title}</p>
          <Link to={`/users/${this.state.uploader.id}`} className="video-index-item-uploader">{this.state.uploader.username}</Link>
          <p className="video-index-item-views-date">views • {parseDate(this.props.video.created_at)}</p>
        </div>
      </Link>
    );
  }
}

export default RecIndexItem;