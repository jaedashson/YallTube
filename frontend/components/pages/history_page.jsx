import React from "react";
import VideoIndexItem from "../videos/video_index_item";
import SideBarContainer from "./side_bar_container";

class HistoryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }

  componentDidMount() {
    this.props.fetchVideos(this.props.viewedVideoIds)
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
        <SideBarContainer />
        <div className="video-index">
          {this.renderItems()}
        </div>
      </div>
    );
  }
}

export default HistoryPage;