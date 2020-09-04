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
    this.handleShowReplies = this.handleShowReplies.bind(this);
    this.handleHideReplies = this.handleHideReplies.bind(this);
  }

  componentDidUpdate(prevProps) {
    if ((this.props.replies !== prevProps.replies)) {
      this.setState({ replies: this.props.replies });
    }
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
    this.props.fetchReplies(this.props.comment.id).then(action => {
      this.setState({ showReplies: true });
    })
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

    if (this.state.showReplies && this.state.replies) {
      // Put comments into array sorted from oldest to newest
      let repliesArray = Object.values(this.state.replies)
        .sort((a, b) => b.created_at > a.created_at)
        .map(reply => {
          return (
            // ReplyContainer
            <div>
              
            </div>
          )
        })

      return (
        <div className="replies">
          <button onClick={this.handleHideReplies}>Hide {this.state.replyCount} replies</button>
          <div className="replies-list">

          </div>
        </div>
      )
    } else {
      return (
        <div className="replies">
          <button onClick={this.handleShowReplies}>View {this.state.replyCount} replies</button>
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
    );
  }

}

export default Comment;