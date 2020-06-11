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
          <NavLink to="/" className="side-bar-link" activeClassName="side-bar-link-active">
            <FontAwesomeIcon className="side-bar-icon" icon="home" />
            <span className="side-bar-link-text">Home</span>
          </NavLink>
          <NavLink to="/subscriptions" className="side-bar-link" activeClassName="side-bar-link-active">
            <FontAwesomeIcon className="side-bar-icon" icon="newspaper" />
            <span className="side-bar-link-text">Subscriptions</span>
          </NavLink>
          <div className="side-bar-spacer"></div>
          <NavLink to="/history" className="side-bar-link" activeClassName="side-bar-link-active">
            <FontAwesomeIcon className="side-bar-icon" icon="history" />
            <span className="side-bar-link-text">History</span>
          </NavLink>
          <NavLink to="/my_videos" className="side-bar-link" >
            <FontAwesomeIcon className="side-bar-icon" icon="film" />
            <span className="side-bar-link-text">Your videos</span>
          </NavLink>
          <NavLink to="/liked_videos" className="side-bar-link">
            <FontAwesomeIcon className="side-bar-icon" icon="thumbs-up" />
            <span className="side-bar-link-text">Liked videos</span>
          </NavLink>
          <div className="side-bar-spacer"></div>
          <div className="side-bar-subscriptions" >
            <span className="side-bar-link-text">SUBSCRIPTIONS</span>
          </div>
        </div>
        <div className="video-index">
          {this.renderItems()}
        </div>
      </div>
    );
  };
};

export default HomePage;