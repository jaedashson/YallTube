import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import VideoDescription from "./video_description";

class VideoPage extends React.Component {
  constructor(props) {
    debugger
    super(props);

  };

  componentDidMount() {
    debugger

    this.props.fetchVideo(this.props.match.params.videoId).then(action => {
      debugger
      this.props.fetchUser(action.video.uploader_id);
    })

    // this.props.fetchUser(this.props.video.uploader_id)
    
    debugger

    // this.props.fetchUser(this.props.video.uploader_id); // This will not work because this.props.video is still undefined at this point.
    
  };

  render() {
    debugger

    if (!this.props.video || !this.props.uploader) {
      return null;
    }

    return (
      <div className="video-page">
        <div className="video-page-col-1">
          <div className="video-player-container">
            <video className="video-player"
              width="900" height="auto" controls
            >
              <source src={this.props.video.videoUrl} type="video/mp4" />
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