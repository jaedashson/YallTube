import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import VideoIndexItem from "./video_index_item";
import SideBar from "./side_bar";

class YourVideosPage extends React.Component {
  constructor(props) {
    debugger
    super(props);
  };

  componentDidMount() {
    debugger
    this.props.fetchVideos(this.props.uploadedVideoIds);
  };

  renderItems() {
    debugger
    if (!this.props.videos) {
      debugger
      return null;
    }
    debugger
    const items = this.props.videos.map(video => {
      return (
        <VideoIndexItem
          key={video.id}
          video={video}
          fetchUser={this.props.fetchUser}
        />
      );
    });

    return items;
  };

  render() {
    debugger
    return (
      <div className="home-page">
        <SideBar />
        <div className="video-index">
          {this.renderItems()}
        </div>
      </div>
    );
  };  
}

export default YourVideosPage