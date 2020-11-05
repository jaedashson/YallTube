import React from "react";
import { Link } from "react-router-dom";
import { cloneDeep } from "lodash";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReplyFormContainer from "./reply_form_container";
import ReplyContainer from "./reply_container";
import UserIconComment from "../user_icons/user_icon_comment";

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showReplyForm: false,
      showReplies: false,
      fetchedReplies: false,
    };

    this.handleShowReplyForm = this.handleShowReplyForm.bind(this);
    this.handleHideReplyForm = this.handleHideReplyForm.bind(this);
    this.handleShowReplies = this.handleShowReplies.bind(this);
    this.handleHideReplies = this.handleHideReplies.bind(this);
    this.showReplies = this.showReplies.bind(this);
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

  handleFetchReplies() {
    this.props.fetchComments(this.props.replyIds)
      .then(action => this.setState({ fetchedReplies: true }));
  }

  showReplies() {
    if (!this.state.fetchedReplies) this.handleFetchReplies();
    this.setState({ showReplies: true });
  }

  handleShowReplies(e) {
    e.preventDefault();
    if (!this.state.fetchedReplies) this.handleFetchReplies();
    this.setState({ showReplies: true });
  }

  handleHideReplies(e) {
    e.preventDefault();
    this.setState({ showReplies: false });
  }

  handleClickLike(e) {
    e.preventDefault();

    // If current user has not voted on this comment
    // Create a like
    if (!this.props.liked && !this.props.disliked) {
      this.props.createCommentVote({
        voter_id: this.props.currentUserId,
        comment_id: this.props.comment.id,
        like: true
      });
    }

    // If current user has already liked this comment
    // Destroy the like
    else if (this.props.liked) {
      this.props.destroyCommentVote({
        voter_id: this.props.currentUserId,
        comment_id: this.props.comment.id
      });
    }

    // If current user has disliked this comment
    // Destroy the dislike
    // Create a like
    else if (this.props.disliked) {
      this.props.destroyCommentVote({
        voter_id: this.props.currentUserId,
        comment_id: this.props.comment.id
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

    // If current user has not voted on this comment
    // Create a dislike
    if (!this.props.liked && !this.props.disliked) {
      this.props.createCommentVote({
        voter_id: this.props.currentUserId,
        comment_id: this.props.comment.id,
        like: false
      });
    }

    // If current user has already disliked this comment
    // Destroy the dislike
    else if (this.props.disliked) {
      this.props.destroyCommentVote({
        voter_id: this.props.currentUserId,
        comment_id: this.props.comment.id,
      });
    }

    // If current user has liked this comment
    // Destroy the like
    // Create a dislike
    else if (this.props.liked) {
      this.props.destroyCommentVote({
        voter_id: this.props.currentUserId,
        comment_id: this.props.comment.id
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
          parentId={this.props.comment.id}
          handleHideReplyForm={this.handleHideReplyForm}
          showReplies={this.showReplies}
        />
      );
    } else {
      return null;
    }
  }

  renderReplies() {
    // If this comment has no replies
    if (this.props.replyIds.length === 0) {
      return null;
    }

    // If showReplies is true and this comment has replies
    if (this.state.showReplies && this.props.replyIds.length > 0) {
      // Put comments into array sorted from oldest to newest
      let repliesArray = this.props.replies.slice()
        .sort((a, b) => b.created_at > a.created_at)
        .map(reply => {
          return (
            <ReplyContainer
              key={reply.id}
              reply={reply}
              videoId={this.props.videoId}
            />
          );
        });

      return (
        <div className="replies">
          <button
            className="view-replies-button"
            onClick={this.handleHideReplies}
          >
            <FontAwesomeIcon
              icon="caret-up"
              className="caret"
            />
            <span className="view-replies-button-text">Hide {this.props.replyIds.length} replies</span>
          </button>
          <div className="replies-list">{repliesArray}</div>
        </div>
      );
    } else {
      return (
        <div className="replies">
          <button
            className="view-replies-button"
            onClick={this.handleShowReplies}
          >
            <FontAwesomeIcon
              icon="caret-down"
              className="caret"
            />
            <span className="view-replies-button-text">View {this.props.replyIds.length} replies</span>
          </button>
        </div>
      );
    }
  }

  render() {
    if (!this.props.comment) {
      return null;
    }
    
    return (
      <div className="comment">
        <UserIconComment authorUsername={this.props.comment.authorUsername} />
        <div className="comment-main">
          <div className="comment-author-date">
            <span className="comment-author">{this.props.comment.authorUsername}</span>
            <span className="comment-date">{this.props.uploadDate}</span>
          </div>
          <p className="comment-body">{this.props.comment.body}</p>
          <div className="comment-response">
            <FontAwesomeIcon
              icon="thumbs-up"
              className={"comment-thumb " + (this.props.liked ? "comment-voted" : "")}
              onClick={this.handleClickLike}
            />
            <span className={"comment-score " + (this.props.liked ? "comment-voted" : "")}>{this.props.comment.likeCount - this.props.comment.dislikeCount}</span>
            <FontAwesomeIcon
              icon="thumbs-down"
              className={"comment-thumb comment-thumb-down " + (this.props.disliked ? "comment-voted" : "")}
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
          {this.renderReplies()}
        </div>
      </div>
    );
  }

}

export default Comment;