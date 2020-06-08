import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import VideoDescription from "./video_description";

class VideoPage extends React.Component {
  constructor(props) {
    // debugger
    super(props);

  };

  componentDidMount() {
    debugger

    this.props.fetchVideo(this.props.videoId).then(action => {
      debugger
      this.props.fetchUser(action.video.uploader_id);
    })

    debugger
  };

  componentDidUpdate(prevProps) {
    // debugger

    // If videoId changed AND
    // If the video doesn't exist in Redux state
    if ((this.props.videoId !== prevProps.videoId) && (!this.props.video)) {
      this.props.fetchVideo(this.props.videoId).then(action => {
        // debugger
        this.props.fetchUser(action.video.uploader_id);
      });
    }

    // debugger
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
            >
              {/* <source src={this.props.video.videoUrl} type="video/mp4" /> */}
            </video>
          </div>

          <VideoDescription
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