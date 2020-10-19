import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import VideoIndexItem from "../videos/video_index_item";
import SideBar from "./side_bar";

class YourVideosPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }

  componentDidMount() {
    this.props.fetchVideos(this.props.uploadedVideoIds)
      .then(action => {
        const uploaderIds = action.videos.map(video => video.uploader_id);
        return this.props.fetchUsers(uploaderIds);
      })
      .then(action => this.setState({ loaded: true }));
  }

  renderItems() {
    const items = this.props.videos.map(video => {
      return (
        <VideoIndexItem
          key={video.id}
          video={video}
          uploader={this.props.uploaders[video.uploader_id]}
        />
      );
    });

    return items;
  }

  render() {
    if (!this.state.loaded) return null;

    return (
      <div className="home-page">
        <SideBar />
        <div className="video-index">
          {this.renderItems()}
        </div>
      </div>
    );
  }
}

export default YourVideosPage;