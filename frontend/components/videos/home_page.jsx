import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import VideoIndexItem from "./video_index_item";

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
    // debugger
    return (
      <div className="home-page">
        {this.renderItems()}
      </div>
    );
  };
};

export default HomePage;