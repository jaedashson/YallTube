import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import VideoIndexItem from "./video_index_item";
import SideBar from "./side_bar";

class LikedVideosPage extends React.Component {
  constructor(props) {
    super(props);
  };

  componentDidMount() {
    this.props.fetchVideos(this.props.likedVideoIds);
  };

  renderItems() {
    if (!this.props.videos) {
      return null;
    }
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

export default LikedVideosPage;