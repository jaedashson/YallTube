import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import VideoIndexItem from "./video_index_item";
import { shuffleVideos } from "../../util/videos_info_util";

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
        <div className="side-bar">
          <NavLink to="/" className="side-bar-link">
            <FontAwesomeIcon className="side-bar-icon" icon="home" />
            <span className="side-bar-link-text">Home</span>
          </NavLink>
          <NavLink to="/subscriptions" className="side-bar-link side-bar-bottom-border">
            <FontAwesomeIcon className="side-bar-icon" icon="newspaper" />
            <span className="side-bar-link-text">Subscriptions</span>
          </NavLink>
          <NavLink to="/history" className="side-bar-link" >
            <FontAwesomeIcon className="side-bar-icon" icon="history"
            />

          </NavLink>
        </div>
        <div className="video-index">
          {this.renderItems()}
        </div>
      </div>
    );
  };
};

export default HomePage;