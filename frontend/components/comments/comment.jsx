import React from "react";
import { Link } from "react-router-dom";
import { parseDate } from "../../util/videos_info_util";
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
      // replies: null,
      newReplies: {},
      fetchedReplies: false,
    };

    this.handleShowReplyForm = this.handleShowReplyForm.bind(this);
    this.handleHideReplyForm = this.handleHideReplyForm.bind(this);
    this.appendNewReply = this.appendNewReply.bind(this);
    this.handleFetchReplies = this.handleFetchReplies(this);
    this.handleShowReplies = this.handleShowReplies.bind(this);
    this.handleHideReplies = this.handleHideReplies.bind(this);
  }

  handleShowReplyForm(e) {
    e.preventDefault();
    this.setState({ showReplyForm: true });
  }

  handleHideReplyForm(e) {
    e.preventDefault();
    this.setState({ showReplyForm: false });
  }
  
  appendNewReply(reply) {
    const newReplies = cloneDeep(this.state.newReplies);
    newReplies[reply.id] = reply;
    this.setState({ newReplies });
  }

  handleFetchReplies() {
    this.props.fetchComments(this.props.replyIds)
      .then(action => setState({ fetchedReplies: true }));
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

  renderReplyForm() {
    if (this.state.showReplyForm && this.props.currentUser) {
      return (
        <ReplyFormContainer
          parentId={this.props.comment.id}
          currentUser={this.props.currentUser}
          videoId={this.props.videoId}
          appendNewReply={this.appendNewReply}
          handleHideReplyForm={this.handleHideReplyForm}
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

  renderNewReplies() {
    // If newReplies is empty
    if (Object.keys(this.state.newReplies).length === 0) {
      return null;
    }

    let repliesArray = Object.values(this.state.newReplies).map(reply => {
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
        <div className="replies-list">{repliesArray}</div>
      </div>
    );
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
            <button className="thumb-button">
              <FontAwesomeIcon
                icon="thumbs-up"
                className={"comment-thumb " + (this.props.liked ? "comment-voted" : "")}
              />
            </button>
            <span className="comment-score"></span>
            <button className="thumb-button thumbs-down-button">
              <FontAwesomeIcon
                icon="thumbs-down"
                className={"comment-thumb " + (this.props.disliked ? "comment-voted" : "")}
              />
            </button>
            <button
              className="comment-reply-button"
              onClick={this.handleShowReplyForm}
            >
              REPLY
            </button>
          </div>
          {this.renderReplyForm()}
          {this.renderReplies()}
          {this.renderNewReplies()}
        </div>
      </div>
    );
  }

}

export default Comment;