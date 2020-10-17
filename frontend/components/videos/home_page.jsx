import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import VideoIndexItem from "./video_index_item";
import { shuffleVideos } from "../../util/videos_info_util";
import SideBar from "./side_bar"


class HomePage extends React.Component {
  constructor(props) {
    super(props);
  };

  componentDidMount() {
    this.props.fetchAllVideos()
      .then(action => {
        const uploaderIds = action.videos.map(video => video.uploader_id);
      });
  };

  renderItems() {
    if (!this.props.videos) {
      return null;
    }
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