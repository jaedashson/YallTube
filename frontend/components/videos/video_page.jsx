import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import VideoDescriptionContainer from "./video_description_container";

class VideoPage extends React.Component {
  constructor(props) {
    debugger
    super(props);
  };

  componentDidMount() {
    debugger

    // Don't fetch anything if we have the right video and uploader
    if (
      this.props.video &&
      this.props.video.id === this.props.videoId &&
      this.props.uploader &&
      this.props.uploader.id === this.props.video.uploader_id
    ) {
      debugger
      // AUTOPLAY VIDEO - 
    }

    // Fetch user if we have the right video
    else if (
      this.props.video &&
      this.props.video.id === this.props.videoId
    ) {
      debugger
      this.props.fetchUser(this.props.video.uploaderId).then(action => {
        debugger
        // AUTOPLAY VIDEO
      });
    }

    // Fetch video and user
    else {
      debugger
      this.props.fetchVideo(this.props.videoId).then(action => {
        debugger

        // Do not fetchUser if we already have uploader
        if (this.props.uploader) {
          return;
        }

        this.props.fetchUser(action.video.uploader_id).then(action => {
          debugger
          // AUTOPLAY VIDEO 
        });
      });
    }
  };

  componentDidUpdate(prevProps) {
    debugger
    // Don't fetch anything if we have the right video and uploader
    if (
      this.props.video &&
      this.props.video.id === this.props.videoId &&
      this.props.uploader &&
      this.props.uploader.id === this.props.video.uploader_id
    ) {
      debugger
      // DON'T AUTOPLAY VIDEO
    }

    // Fetch user if we have the right video
    else if (
      this.props.video &&
      this.props.video.id === this.props.videoId
    ) {
      debugger
      this.props.fetchUser(this.props.video.uploader_id).then(action => {
        debugger
        // AUTOPLAY VIDEO
      });
    }

    // Fetch video and user
    else {
      debugger
      this.props.fetchVideo(this.props.videoId).then(action => {
        debugger
        this.props.fetchUser(action.video.uploader_id).then(action => {
          debugger
          // AUTOPLAY VIDEO 
        });
      });
    }
  }

  render() {
    debugger

    if (!this.props.video || !this.props.uploader) {
      debugger
      return null;
    }
    debugger
    return (
      <div className="video-page">
        <div className="video-page-col-1">
          <div className="video-player-container">
            <p>{this.props.video.videoUrl}</p>
            <video className="video-player"
              src={this.props.video.videoUrl}
              width="900" height="auto" controls
              controlsList="nodownload"
            >
            </video>
          </div>

          <VideoDescriptionContainer
            video={this.props.video}
            uploader={this.props.uploader}
          />
        </div>
        <div className="video-page-col-2"></div>
      </div>
    );
  };
}

export default VideoPage;