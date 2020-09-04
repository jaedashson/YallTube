import React from "react";
import { Link } from "react-router-dom";
import { parseDate } from "../../util/videos_info_util";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReplyFormContainer from "./reply_form_container";

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadDate: parseDate(this.props.comment.created_at),
      liked: false,
      disliked: false,
      showReplyForm: false,
      replyCount: this.props.comment.replyCount,
      showReplies: false,
      replies: null,
    };

    this.handleShowReplyForm = this.handleShowReplyForm.bind(this);
    this.handleHideReplyForm = this.handleHideReplyForm.bind(this);
  }

  handleShowReplyForm(e) {
    e.preventDefault();
    this.setState({ showReplyForm: true });
  }

  handleHideReplyForm(e) {
    e.preventDefault();
    this.setState({ showReplyForm: false });
  }

  handleShowReplies(e) {
    e.preventDefault();
    this.setState({ showReplies: true });
  }

  handleHideReplies(e) {
    e.preventDefault();
    this.setState({ showReplies: false });
  }

  renderReplyForm() {
    if (this.state.showReplyForm) {
      return (
        <ReplyFormContainer
          parentId={this.props.comment.id}
          currentUser={this.props.currentUser}
          videoId={this.props.videoId}
          handleHideReplyForm={this.handleHideReplyForm}
        />
      )
    }
  }

  renderReplies() {
    if (!this.state.replyCount) {
      return null;
    }

    if (this.state.showReplies) {
      return (
        <div className="replies">

        </div>
      )
    } else {
      return (
        <div className="replies">
          <span>View {this.state.replyCount} replies</span>
        </div>
      )
    }
  }

  render() {
    if (!this.props.comment) {
      return null;
    }

    return (
      <div className="comment">
        <div className="comment-author-icon">{this.props.comment.authorUsername[0]}</div>
        <div className="comment-main">
          <div className="comment-author-date">
            <span className="comment-author">{this.props.comment.authorUsername}</span>
            <span className="comment-date">{this.state.uploadDate}</span>
          </div>
          <p className="comment-body">{this.props.comment.body}</p>
          <div className="comment-response">
            <FontAwesomeIcon icon="thumbs-up" className={"comment-thumb " + (this.state.liked ? "comment-voted" : "")}/>
            <span className="comment-score">68</span>
            <FontAwesomeIcon icon="thumbs-down" className={"comment-thumb comment-thumb-down " + (this.state.disliked ? "comment-voted" : "")} />
            <button
              className="comment-reply-button"
              onClick={this.handleShowReplyForm}
            >REPLY</button>
          </div>
          {this.renderReplyForm()}
          {this.renderReplies()}
        </div>
      </div>
    )
  }

}

export default Comment