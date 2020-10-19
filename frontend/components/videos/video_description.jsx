import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { parseDate, arraysEqual } from "../../util/videos_info_util";

class VideoDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadDate: parseDate(this.props.video.created_at),
      liked: this.props.liked,
      disliked: this.props.disliked,
      likeCount: this.props.video.likeCount,
      dislikeCount: this.props.video.dislikeCount
    }

    this.handleClickLike = this.handleClickLike.bind(this);
    this.handleClickDislike = this.handleClickDislike.bind(this);
    this.handleSubscribe = this.handleSubscribe.bind(this);
  }

  handleClickLike(e) {
    e.preventDefault();

    // If current user has not voted on this video
    // Create a like
    if (!this.props.liked && !this.props.disliked) {
      this.props.createVideoVote({
        voter_id: this.props.currentUserId,
        video_id: this.props.videoId,
        like: true
      });
    }

    // If current user has already liked this video
    // Destroy the like
    else if (this.props.liked) {
      this.props.destroyVideoVote({
        voter_id: this.props.currentUserId,
        video_id: this.props.videoId
      });
    }

    // If current user has disliked this video
    // Destroy the dislike
    // Create a like
    else if (this.props.disliked) {
      this.props.destroyVideoVote({
        voter_id: this.props.currentUserId,
        video_id: this.props.videoId
      }).then(vote => {
        return this.props.createVideoVote({
          voter_id: vote.voter_id,
          video_id: vote.video_id,
          like: true
        });
      });
    }
  }

  handleClickDislike(e) {
    e.preventDefault();

    // If current user has not voted on this video
    // Create a dislike
    if (!this.props.liked && !this.props.disliked) {
      this.props.createVideoVote({
        voter_id: this.props.currentUserId,
        video_id: this.props.videoId,
        like: false
      });
    }

    // If current user has already disliked this video
    // Destroy the dislike
    else if (this.props.disliked) {
      this.props.destroyVideoVote({
        voter_id: this.props.currentUserId,
        video_id: this.props.videoId
      });
    }

    // If current user has liked this video
    // Destroy the like
    // Create a dislike
    else if (this.props.liked) {
      this.props.destroyVideoVote({
        voter_id: this.props.currentUserId,
        video_id: this.props.videoId
      }).then(vote => {
        return this.props.createVideoVote({
          voter_id: vote.voter_id,
          video_id: vote.video_id,
          like: false
        });
      });
    }
  }

  handleSubscribe(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="video-description">
        <div className="video-description-header">
          <p className="video-title">{this.props.video.title}</p>
          <div className="video-stats-container">
            <span className="video-views-date">{this.props.video.viewCount} views • {this.props.uploadDate}</span>
            <div className="video-likes-container">
              <FontAwesomeIcon icon="thumbs-up" className={"video-thumb " + (this.props.liked ? "video-voted" : "")} onClick={this.handleClickLike} />
              <span className={"video-vote-count " + (this.props.liked ? "video-voted" : "")}>{this.props.video.likeCount} likes</span>
              <FontAwesomeIcon icon="thumbs-down" className={"video-thumb " + (this.props.disliked ? "video-voted" : "")} onClick={this.handleClickDislike} />
              <span className={"video-vote-count " + (this.props.disliked ? "video-voted" : "")}>{this.props.video.dislikeCount} dislikes</span>
            </div>
          </div>
          <div className="video-votes-bar-container"></div>
        </div>

        <div className="video-description-body">
          <div className="video-description-col">
            <div className="video-uploader-icon">{this.props.uploader.username[0]}</div>
            <div className="video-description-main">
              <p className="video-uploader">{this.props.uploader.username}</p>
              <p className="video-uploader-subscribers">29.4k subscribers</p>
              <p className="video-description-text">{this.props.video.description}</p>
            </div>
          </div>
          <button className="video-uploader-subscribe">SUBSCRIBE</button>
        </div>
      </div>

    )
  };
}

export default VideoDescription;