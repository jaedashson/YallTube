import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import VideoDescriptionContainer from "./video_description_container";
import RecommendationsContainer from "./recommendations_container";
import ReactPlayer from "react-player";

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
          debugger
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
    // // Update thumbs hotfix (Rich)
    // if (
    //   this.props.videoId !== prevProps.videoId &&
    //   !this.props.video
    // ) {
    //   debugger
    //   this.props.fetchVideo(this.props.videoId).then(action => {
    //     debugger
    //     this.props.fetchUser(action.video.uploader_id);
    //     return;
    //   });
    // }

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

    debugger
  }

  render() {
    debugger

    // Don't render if we don't have either video or uploader
    if (!this.props.video || !this.props.uploader) {
      debugger
      return null;
    }

    // Don't render if video doesn't match videoId
    if (this.props.videoId !== this.props.video.id) {
      debugger
      return null;
    }

    debugger
    return (
      <div className="video-page">
        <div className="video-page-col-1">
          <div className="video-player-container">
            {/* <video className="video-player"
              src={this.props.video.videoUrl}
              width="900" height="auto" controls autoplay
              controlsList="nodownload"
            > 
            </video> */}

            <ReactPlayer
              className="video-player"
              id="video-player"
              url={this.props.video.videoUrl}
              playing={true}
              width={900}
              controls={true}
              // height={auto}
            />

          </div>

          <VideoDescriptionContainer
            video={this.props.video}
            uploader={this.props.uploader}
          />
        </div>
        <RecommendationsContainer
          videoId={this.props.videoId}
          fetchAllVideos={this.props.fetchVideo}
          fetchUser={this.props.fetchUser}
          className="video-page-col-2"
        />
      </div>
    );
  };
}

export default VideoPage;