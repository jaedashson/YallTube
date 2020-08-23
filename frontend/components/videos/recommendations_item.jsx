import React from "react";
import { Link } from "react-router-dom";
import { praseDate } from "../../util/videos_info_util";

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
      <Link to={`/videos/${this.props.video.id}`} className="rec-index-item">
      </ Link>
    )
  }
}