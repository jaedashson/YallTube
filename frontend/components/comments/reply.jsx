import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReplyFormContainer from "./reply_form_container";
import UserIconReply from "../user_icons/user_icon_reply";

class Reply extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showReplyForm: false,
    };

    this.handleShowReplyForm = this.handleShowReplyForm.bind(this);
    this.handleHideReplyForm = this.handleHideReplyForm.bind(this);
    this.handleClickLike = this.handleClickLike.bind(this);
    this.handleClickDislike = this.handleClickDislike.bind(this);
  }

  handleShowReplyForm(e) {
    e.preventDefault();
    this.setState({ showReplyForm: true });
  }

  handleHideReplyForm(e) {
    e.preventDefault();
    this.setState({ showReplyForm: false });
  }

  handleClickLike(e) {
    e.preventDefault();

    // If current user has not voted on this reply
    // Create a like
    if (!this.props.liked && !this.props.disliked) {
      this.props.createCommentVote({
        voter_id: this.props.currentUserId,
        comment_id: this.props.reply.id,
        like: true
      });
    }

    // If current user has already liked this reply
    // Destroy the like
    else if (this.props.liked) {
      this.props.destroyCommentVote({
        voter_id: this.props.currentUserId,
        comment_id: this.props.reply.id
      });
    }

    // If current user has disliked this reply
    // Destroy the dislike
    // Create a like
    else if (this.props.disliked) {
      this.props.destroyCommentVote({
        voter_id: this.props.currentUserId,
        comment_id: this.props.reply.id
      }).then(action => {
        return this.props.createCommentVote({
          voter_id: action.commentVote.voter_id,
          comment_id: action.commentVote.comment_id,
          like: true
        });
      });
    }
  }

  handleClickDislike(e) {
    e.preventDefault();

    // If current user has not voted on this reply
    // Create a dislike
    if (!this.props.liked && !this.props.disliked) {
      this.props.createCommentVote({
        voter_id: this.props.currentUserId,
        comment_id: this.props.reply.id,
        like: false
      });
    }

    // If current user has already disliked this reply
    // Destroy the dislike
    else if (this.props.disliked) {
      this.props.destroyCommentVote({
        voter_id: this.props.currentUserId,
        comment_id: this.props.reply.id
      });
    }

    // If current user has liked this reply
    // Destroy the like
    // Create a like
    else if (this.props.liked) {
      this.props.destroyCommentVote({
        voter_id: this.props.currentUserId,
        comment_id: this.props.reply.id
      }).then(action => {
        return this.props.createCommentVote({
          voter_id: action.commentVote.voter_id,
          comment_id: action.commentVote.comment_id,
          like: false
        });
      });
    }
  }

  renderReplyForm() {
    if (this.state.showReplyForm && this.props.currentUser) {
      return (
        <ReplyFormContainer
          videoId={this.props.videoId}
          parentId={this.props.reply.parent_id}
          currentUser={this.props.currentUser}
          handleHideReplyForm={this.handleHideReplyForm}
        />
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <div className="reply">
        <UserIconReply authorUsername={this.props.reply.authorUsername} />
        <div className="comment-main">
          <div className="comment-author-date">
            <span className="comment-author">{this.props.reply.authorUsername}</span>
            <span className="comment-date">{this.props.uploadDate}</span>
          </div>
          <p className="comment-body">{this.props.reply.body}</p>
          <div className="comment-response">
            <FontAwesomeIcon
              icon="thumbs-up"
              className={"comment-thumb " + (this.props.liked ? "comment-voted" : "")}
              onClick={this.handleClickLike}
            />
            <span className={"comment-score " + (this.props.liked ? "comment-voted" : "")}>{this.props.reply.likeCount - this.props.reply.dislikeCount}</span>
            <FontAwesomeIcon
              icon="thumbs-down"
              className={"comment-thumb " + (this.props.disliked ? "comment-voted" : "")}
              onClick={this.handleClickDislike}
            />
            <button
              className="comment-reply-button"
              onClick={this.handleShowReplyForm}
            >
              REPLY
            </button>
          </div>
          {this.renderReplyForm()}
        </div>
      </div>
    );
  }

}

export default Reply;