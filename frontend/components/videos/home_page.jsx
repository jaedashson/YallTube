import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import VideoIndexItem from "./video_index_item";
import { shuffleVideos } from "../../util/videos_info_util";
import SideBar from "./side_bar"


class HomePage extends React.Component {
  constructor(props) {
    // debugger
    super(props);
  };

  componentDidMount() {
    // debugger
    this.props.fetchAllVideos();
  };

  renderItems() {
    // debugger
    if (!this.props.videos) {
      // debugger
      return null;
    }
    // debugger
    const items = shuffleVideos(this.props.videos).map(video => {
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
    // debugger
    return (
      <div className="home-page">
        <SideBar />
        <div className="video-index">
          {this.renderItems()}
        </div>
      </div>
    );
  };
};

export default HomePage;