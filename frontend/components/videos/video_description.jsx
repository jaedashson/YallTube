import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { parseDate, arraysEqual } from "../../util/videos_info_util";

class VideoDescription extends React.Component {
  constructor(props) {
    debugger

    super(props);
    this.state = {
      uploadDate: parseDate(this.props.video.created_at),
      liked: this.props.likedVideoIds.includes(this.props.video.id),
      disliked: this.props.dislikedVideoIds.includes(this.props.video.id),
      likeCount: this.props.video.likeCount,
      dislikeCount: this.props.video.dislikeCount
    }

    this.handleClickLike = this.handleClickLike.bind(this);
    this.handleClickDislike = this.handleClickDislike.bind(this);
    this.handleSubscribe = this.handleSubscribe.bind(this);

    debugger
  };

  componentDidMount() {
    debugger

    // TODO - What does this mean?
    if (
      !this.state.likeCount &&
      !this.state.dislikeCount &&
      this.props.video.likeCount &&
      this.props.video.dislikeCount
    ) {
      this.setState({
        likeCount: this.props.video.likeCount,
        dislikeCount: this.props.video.dislikeCount
      })
    }
  }

  componentDidUpdate(prevProps) {
    debugger

    // Don't update this.state if the likedVideoIds and dislikedVideoIds haven't changed
    if (
      arraysEqual(prevProps.likedVideoIds, this.props.likedVideoIds) && arraysEqual(prevProps.dislikedVideoIds, this.props.dislikedVideoIds)
    ) {
      debugger
      return;
    }
    
    // Otherwise update this.state
    else {
      debugger
      this.setState({
        liked: this.props.likedVideoIds.includes(this.props.video.id),
        disliked: this.props.dislikedVideoIds.includes(this.props.video.id),

        // remove the two lines below if it doesn't work
        likeCount: this.props.video.likeCount,
        dislikeCount: this.props.video.dislikeCount
      });
    }
    debugger
  }

  handleClickLike(e) {
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
      }).then(vote => {
        debugger // Inspect res
        return this.props.refresh(vote.voter_id);
      })

    // If current user has already liked this video
    // Destroy the like
    } else if (this.state.liked) {
      debugger
      this.props.destroyVideoVote({
        voter_id: this.props.currentUserId,
        video_id: this.props.video.id
      }).then(vote => {
        debugger // Inspect res
        return this.props.refresh(vote.voter_id);
      })

    // If current user has disliked this video
    // Destroy the dislike
    // Create a like
    } else if (this.state.disliked) {
      debugger
      this.props.destroyVideoVote({
        voter_id: this.props.currentUserId,
        video_id: this.props.video.id
      }).then(vote => {
        debugger
        return this.props.createVideoVote({
          voter_id: vote.voter_id,
          video_id: vote.video_id,
          like: true
        });
      }).then(vote => {
        debugger
        return this.props.refresh(vote.voter_id);
      })
    }
  }

  handleClickDislike(e) {
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
      }).then(vote => {
        debugger
        return this.props.refresh(vote.voter_id);
      })
    }

    // If current user has already disliked this video
    // Destroy the dislike
    else if (this.state.disliked) {
      debugger
      this.props.destroyVideoVote({
        voter_id: this.props.currentUserId,
        video_id: this.props.video.id
      }).then(vote => {
        debugger
        return this.props.refresh(vote.voter_id);
      })
    }

    // If current user has liked this video
    // Destroy the like
    // Create a dislike
    else if (this.state.liked) {
      debugger
      this.props.destroyVideoVote({
        voter_id: this.props.currentUserId,
        video_id: this.props.video.id
      }).then(vote => {
        debugger
        return this.props.createVideoVote({
          voter_id: vote.voter_id,
          video_id: vote.video_id,
          like: false
        });
      }).then(vote => {
        debugger
        return this.props.refresh(vote.voter_id);
      })
    }
  }

  handleSubscribe(e) {
    e.preventDefault();
  }

  render() {
    debugger

    return (
      <div className="video-description">
        <div className="video-description-header">
          <div className="video-title">
            <p className="video-title-text">{this.props.video.title}</p>
          </div>
          <div className="video-info">
            <div className="video-views-date-container">
              <p className="video-views">9,999,999 views</p>
              <p className="video-views-date-divider">•</p>
              <p className="video-date">{this.state.uploadDate}</p>
            </div>
            <div className="video-likes-container">
              <FontAwesomeIcon icon="thumbs-up" className={"video-likes-item thumb " + (this.state.liked ? "voted" : "")} onClick={this.handleClickLike} />
              <p className="video-likes-item video-vote-count">LIKE {this.state.likeCount}</p>
              <FontAwesomeIcon icon="thumbs-down" className={"video-likes-item thumb " + (this.state.disliked ? "voted" : "")} onClick={this.handleClickDislike} />
              <p className="video-likes-item video-vote-count">DISLIKE {this.state.dislikeCount}</p>
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