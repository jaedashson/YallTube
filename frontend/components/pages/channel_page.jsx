import React from "react";
import VideoIndexItem from "../videos/video_index_item";
import SideBarContainer from "./side_bar_container";

class ChannelPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };

    this.handleClickSubscribe = this.handleClickSubscribe.bind(this);
  }

  componentDidMount() {
    this.props.fetchSubscriptions([this.props.channelId])
      .then(action => {
        return this.props.fetchUsers([this.props.channelId]);
      })
      .then(action => this.setState({ loaded: true }));
  }

  handleClickSubscribe(e) {
    e.preventDefault();

    if (!this.props.currentUserId) return;

    if (!this.props.subscribed) {
      this.props.createSubscription({
        subscriber_id: this.props.currentUserId,
        channel_id: this.props.uploader.id
      });
    } else {
      this.props.destroySubscription({
        subscriber_id: this.props.currentUserId,
        channel_id: this.props.uploader.id
      });
    }
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
      <div className="channel-page">
        <SideBarContainer />
        <div className="channel-page-content">
          <div className="channel-page-header">
            <div className="channel-page-header-col">
              <div className="channel-page-header-icon">{this.props.channel.username[0]}</div>
              <div className="channel-page-header-main">
                <p className="channel-page-header-uploader">{this.props.channel.username}</p>
                <p className="channel-page-header-subscribers">{this.props.channel.subscriberCount} subscribers</p>
              </div>
            </div>
            <button
              className={"channel-page-header-subscribe " + (this.props.subscribed ? "subscribed" : "")}
              onClick={this.handleClickSubscribe}
            >
              {"SUBSCRIBE" + (this.props.subscribed ? "D" : "")}
            </button>
          </div>
          <div className="video-index">
            {this.renderItems()}
          </div>
        </div>
      </div>
    );
  }
}

export default ChannelPage;