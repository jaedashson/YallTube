import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import VideoPlayerContainer from "./video_player_container";
import VideoDescriptionContainer from "./video_description_container";
import RecommendationsContainer from "./recommendations_container";
import CommentsSectionContainer from "../comments/comments_section_container";

import ReactPlayer from "react-player";

class VideoPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // Fetch video then uploader then add view
    this.props.fetchVideo(this.props.videoId)
      .then(action => this.props.fetchUser(action.video.uploader_id))
  }

  componentDidUpdate(prevProps) {
    // If videoId changed AND
    // If the video doesn't exist in Redux state
    // i.e. When the user clicks on a different video
    if ((this.props.videoId !== prevProps.videoId) && (!this.props.video)) {
      this.props.fetchVideo(this.props.videoId)
        .then(action => this.props.fetchUser(action.video.uploader_id))
        .then(res => this.props.refresh(this.props.currentUserId));
    }
  }

  render() {
    // Don't render if we don't have either video or uploader
    if (!this.props.video || !this.props.uploader) {
      return null;
    }

    // Don't render if video doesn't match videoId
    if (this.props.videoId !== this.props.video.id) {
      return null;
    }

    return (
      <div className="video-page-container">
        <div className="video-page">
          <div className="video-page-col-1">
            <VideoPlayerContainer
              videoId={this.props.videoId}
            />
            <VideoDescriptionContainer
              videoId={this.props.videoId}
              uploaderId={this.props.uploader.id}
            />
            <CommentsSectionContainer
              video={this.props.video}
            />
          </div>
          <div className="video-page-col-2">
            {/* <RecommendationsContainer
              videoId={this.props.videoId}
              fetchAllVideos={this.props.fetchVideo}
              fetchUser={this.props.fetchUser}
            /> */}
          </div>
        </div>
      </div>
    );
  };
}

export default VideoPage;