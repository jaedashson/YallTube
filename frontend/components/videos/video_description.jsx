import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { parseDate, arraysEqual } from "../../util/videos_info_util";

class VideoDescription extends React.Component {
  constructor(props) {
    // debugger

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

    // debugger
  }

  componentDidMount() {
    // debugger

    // TODO - What does this conditional even do?
    // if (
    //   !this.state.likeCount &&
    //   !this.state.dislikeCount &&
    //   this.props.video.likeCount &&
    //   this.props.video.dislikeCount
    // ) {
    //   debugger

    //   this.setState({
    //     likeCount: this.props.video.likeCount,
    //     dislikeCount: this.props.video.dislikeCount
    //   })
    // }
  }

  componentDidUpdate(prevProps) {
    // debugger

    // Don't update this.state if the likedVideoIds and dislikedVideoIds haven't changed
    // if (
    //   arraysEqual(prevProps.likedVideoIds, this.props.likedVideoIds) && arraysEqual(prevProps.dislikedVideoIds, this.props.dislikedVideoIds)
    // ) {
    //   debugger
    //   return;
    // }
    
    // Otherwise update this.state
    // else {
    //   debugger
    //   this.setState({
    //     liked: this.props.likedVideoIds.includes(this.props.video.id),
    //     disliked: this.props.dislikedVideoIds.includes(this.props.video.id),

    //     // remove the two lines below if it doesn't work
    //     likeCount: this.props.video.likeCount,
    //     dislikeCount: this.props.video.dislikeCount
    //   });
    // }

    // debugger
  }

  // TODO - Make this update the state
  // Increment this.state.likeCount
  // Update this.state.like
  // Behavior is consistent with styling
  handleClickLike(e) {
    // debugger
    e.preventDefault();

    // return // DEBUGGER

    // If current user has not voted on this video
    // Create a like
    if (!this.state.liked && !this.state.disliked) {
      // debugger
      this.props.createVideoVote({
        voter_id: this.props.currentUserId,
        video_id: this.props.video.id,
        like: true
      }).then(vote => {
        // debugger // Inspect res
        return this.props.refresh(vote.voter_id);
      }).then(user => {
        // debugger
        this.setState({
          liked: !this.state.liked,
          likeCount: this.state.likeCount + 1
        })
      })

    // If current user has already liked this video
    // Destroy the like
    } else if (this.state.liked) {
      // debugger
      this.props.destroyVideoVote({
        voter_id: this.props.currentUserId,
        video_id: this.props.video.id
      }).then(vote => {
        // debugger // Inspect res
        return this.props.refresh(vote.voter_id);
      }).then(user => {
        // debugger
        this.setState({
          liked: !this.state.liked,
          likeCount: this.state.likeCount - 1
        })
      })

    // If current user has disliked this video
    // Destroy the dislike
    // Create a like
    } else if (this.state.disliked) {
      // debugger
      this.props.destroyVideoVote({
        voter_id: this.props.currentUserId,
        video_id: this.props.video.id
      }).then(vote => {
        // debugger
        return this.props.createVideoVote({
          voter_id: vote.voter_id,
          video_id: vote.video_id,
          like: true
        });
      }).then(vote => {
        // debugger
        return this.props.refresh(vote.voter_id);
      }).then(user => {
        // debugger
        this.setState({
          liked: !this.state.liked,
          disliked: !this.state.disliked,
          likeCount: this.state.likeCount + 1,
          dislikeCount: this.state.dislikeCount - 1
        })
      })
    }
  }

  handleClickDislike(e) {
    // debugger
    e.preventDefault();

    // return // DEBUG

    // If current user has not voted on this video
    // Create a dislike
    if (!this.state.liked && !this.state.disliked) {
      // debugger
      this.props.createVideoVote({
        voter_id: this.props.currentUserId,
        video_id: this.props.video.id,
        like: false
      }).then(vote => {
        // debugger
        return this.props.refresh(vote.voter_id);
      }).then(user => {
        // debugger
        this.setState({
          disliked: !this.state.disliked,
          dislikeCount: this.state.dislikeCount + 1
        })
      })
    }

    // If current user has already disliked this video
    // Destroy the dislike
    else if (this.state.disliked) {
      // debugger
      this.props.destroyVideoVote({
        voter_id: this.props.currentUserId,
        video_id: this.props.video.id
      }).then(vote => {
        // debugger
        return this.props.refresh(vote.voter_id);
      }).then(user => {
        // debugger
        this.setState({
          disliked: !this.state.disliked,
          dislikeCount: this.state.dislikeCount - 1
        })
      })
    }

    // If current user has liked this video
    // Destroy the like
    // Create a dislike
    else if (this.state.liked) {
      // debugger
      this.props.destroyVideoVote({
        voter_id: this.props.currentUserId,
        video_id: this.props.video.id
      }).then(vote => {
        // debugger
        return this.props.createVideoVote({
          voter_id: vote.voter_id,
          video_id: vote.video_id,
          like: false
        });
      }).then(vote => {
        // debugger
        return this.props.refresh(vote.voter_id);
      }).then(user => {
        // debugger
        this.setState({
          liked: !this.state.liked,
          disliked: !this.state.disliked,
          likeCount: this.state.likeCount - 1,
          dislikeCount: this.state.dislikeCount + 1
        })
      })
    }
  }

  handleSubscribe(e) {
    e.preventDefault();
  }

  render() {
    // debugger

    return (
      <div className="video-description">
        <div className="video-description-header">
          <p className="video-title">{this.props.video.title}</p>
          <div className="video-stats-container">
            <span className="video-views-date">10m views • {this.state.uploadDate}</span>
            <div className="video-likes-container">
              <FontAwesomeIcon icon="thumbs-up" className={"video-thumb " + (this.state.liked ? "video-voted" : "")} onClick={this.handleClickLike} />
              <span className={"video-vote-count " + (this.state.liked ? "video-voted" : "")}>{this.state.likeCount} likes</span>
              <FontAwesomeIcon icon="thumbs-down" className={"video-thumb " + (this.state.disliked ? "video-voted" : "")} onClick={this.handleClickDislike} />
              <span className={"video-vote-count " + (this.state.disliked ? "video-voted" : "")}>{this.state.dislikeCount} dislikes</span>
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