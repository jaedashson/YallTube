import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { parseDate, arraysEqual } from "../../util/videos_info_util";

class VideoDescription extends React.Component {
  constructor(props) {
    debugger
    super(props);
    this.state = {
      liked: this.props.likedVideoIds.includes(this.props.video.id),
      disliked: this.props.dislikedVideoIds.includes(this.props.video.id)
    }

    this.handleLike = this.handleLike.bind(this);
    this.handleDislike = this.handleDislike.bind(this);
    this.handleSubscribe = this.handleSubscribe.bind(this);
  };

  componentDidUpdate(prevProps) {
    debugger
    // Don't update this.state if the likedVideoIds and dislikedVideoIds haven't changed
    if (
      arraysEqual(prevProps.likedVideoIds, this.props.likedVideoIds) && arraysEqual(prevProps.dislikedVideoIds, this.props.dislikedVideoIds)
    ) {
      debugger
    }
    
    // Otherwise update this.state
    else {
      debugger
      this.setState({
        liked: this.props.likedVideoIds.includes(this.props.video.id),
        disliked: this.props.dislikedVideoIds.includes(this.props.video.id)
      });
    }
  }

  handleLike(e) {
    debugger
    e.preventDefault();

    // If current user has not voted on this video
    // Create a like
    if (!this.state.liked && !this.state.disliked) {
      debugger
      this.props.createVideoVote({
        voter_id: this.props.currentUserId,
        video_id: this.props.video.id,
        like: true
      }).then(res => {
        debugger // Inspect res
        return this.props.refresh();
      })

    // If current user has already liked this video
    // Destroy the like
    } else if (this.state.liked) {
      debugger
      this.props.destroyVideoVote({
        voter_id: this.props.currentUserId,
        video_id: this.props.video.id
      }).then(res => {
        debugger // Inspect res
        return this.props.refresh();
      })

    // If current user has disliked this video
    // Destroy the dislike
    // Create a like
    } else if (this.state.disliked) {
      debugger
      this.props.destroyVideoVote({
        voter_id: this.props.currentUserId,
        video_id: this.props
      }).then(res => {
        debugger
        return this.props.createVideoVote({
          voter_id: this.props.currentUserId,
          video_id: this.props.video.id,
          like: true
        });
      }).then(res => {
        debugger
        return this.props.refresh();
      })
    }
  }

  handleDislike(e) {
    debugger
    e.preventDefault();

    // If current user has not voted on this video
    // Create a dislike
    if (!this.state.liked && !this.state.disliked) {
      debugger
      this.props.createVideoVote({
        voter_id: this.props.currentUserId,
        video_id: this.props.video.id,
        like: false
      }).then(res => {
        debugger
        return this.props.refresh();
      })
    }

    // If current user has already disliked this video
    // Destroy the dislike
    else if (this.state.disliked) {
      debugger
      this.props.destroyVideoVote({
        voter_id: this.props.currentUserId,
        video_id: this.props.video.id
      }).then(res => {
        debugger
        return this.props.refresh();
      })
    }

    // If current user has liked this video
    // Destroy the like
    // Create a dislike
    else if (this.state.liked) {
      debugger
      this.props.destroyVideoVote({
        voter_id: this.props.currentId,
        video_id: this.props
      }).then(res => {
        debugger
        return this.props.createVideoVote({
          voter_id: this.props.currentUserId,
          video_id: this.props.video.id,
          like: false
        });
      }).then(res => {
        debugger
        return this.props.refresh();
      })
    }
  }

  handleSubscribe(e) {
    e.preventDefault();
  }

  render() {
    debugger
    const uploadDate = parseDate(this.props.video.created_at);
    const likeStatus = this.state.liked ? "voted" : "";
    const dislikeStatus = this.state.disliked ? "voted" : "";
    debugger
    return (
      <div className="video-description-container">
        <div className="video-description-header">
          <div className="video-title">
            <p className="video-title-text">{this.props.video.title}</p>
          </div>
          <div className="video-info">
            <div className="video-views-date-container">
              <p className="video-views">9,999,999 views</p>
              <p className="video-views-date-divider">•</p>
              <p className="video-date">{uploadDate}</p>
            </div>
            <div className="video-likes-container">
              <FontAwesomeIcon icon="thumbs-up" className={`video-likes-item thumb ${likeStatus}`} />
              <p className="video-likes-item video-vote-count">100K</p>
              <FontAwesomeIcon icon="thumbs-down" className={`video-likes-item thumb ${dislikeStatus}`} />
              <p className="video-likes-item video-vote-count">5K</p>
            </div>
          </div>
        </div>

        <div className="video-description-body-container">
          <div className="video-description-body-left">
            <div className="current-user-dropdown-icon">{this.props.uploader.username[0]}</div>
            <div className="video-description-body">
              <p className="uploader-username">{this.props.uploader.username}</p>
              <p className="uploader-subscriber-count">30.4 M subscribers</p>
              <p className="video-description-text">{this.props.video.description}</p>
            </div>
          </div>
          <div className="uploader-subscribe-button-container">
            <button onClick={this.handleSubscribe} className="uploader-subscribe-button">SUBSCRIBE</button>
          </div>
        </div>
      </div>
    )
  };
}

export default VideoDescription;