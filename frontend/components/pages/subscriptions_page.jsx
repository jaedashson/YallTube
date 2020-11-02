import React from "react";
import VideoIndexItem from "../videos/video_index_item";
import SideBarContainer from "./side_bar_container";

class SubscriptionsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }

  componentDidMount() {
    this.props.fetchSubscriptions(this.props.subscribedChannelIds)
      .then(action => {
        return this.props.fetchUsers(this.props.subscribedChannelIds);
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

export default SubscriptionsPage;