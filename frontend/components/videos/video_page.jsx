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

    // Fetch video then uploader
    this.props.fetchVideo(this.props.videoId).then(action => {
      debugger
      return this.props.fetchUser(action.video.uploader_id);
    })

    debugger
  };

  componentDidUpdate(prevProps) {
    debugger

    // If videoId changed AND
    // If the video doesn't exist in Redux state
    // i.e. When the user clicks on a different video
    if ((this.props.videoId !== prevProps.videoId) && (!this.props.video)) {
      this.props.fetchVideo(this.props.videoId).then(action => {
        debugger
        return this.props.fetchUser(action.video.uploader_id);
      }).then(res => {
        return this.props.refresh(this.props.currentUserId);
      })
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

    // if (!this.props.video.likeCount || !this.props.dislikeCount) {
    //   return null;
    // }

    debugger
    return (
      <div className="video-page-container">
        <div className="video-page">
          <div className="video-page-col-1">
            <div className="video-player-container">
              <ReactPlayer
                className="video-player"
                id="video-player"
                url={this.props.video.videoUrl}
                playing={true}
                width="100%"
                height="67vh"
                controls={true}
              />
            </div>

            <VideoDescriptionContainer
              video={this.props.video}
              uploader={this.props.uploader}
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