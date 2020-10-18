import React from "react";
import ReactPlayer from "react-player";

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  componentDidUpdate() {
    
  }

  render() {

    return (
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
    )
  }
}

export default VideoPlayer;