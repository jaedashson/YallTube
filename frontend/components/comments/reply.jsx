import React from "react";
import { parseDate } from "../../util/videos_info_util";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReplyFormContainer from "./reply_form_container";
import UserIconReply from "../user_icons/user_icon_reply";

class Reply extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadDate: parseDate(this.props.reply.created_at),
      liked: false,
      disliked: false,
      showReplyForm: false,
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

  renderReplyForm() {
    if (this.state.showReplyForm) {
      return (
        <ReplyFormContainer
          parentId={this.props.reply.parent_id}
          currentUser={this.props.currentUser}
          videoId={this.props.videoId}
          handleHideReplyForm={this.handleHideReplyForm}
        />
      )
    }
  }

  render() {
    if (!this.props.reply) {
      return null;
    }

    return (
      <div className="reply">
        <UserIconReply authorUsername={this.props.reply.authorUsername} />
        <div className="comment-main">
          <div className="comment-author-date">
            <span className="comment-author">{this.props.reply.authorUsername}</span>
            <span className="comment-date">{this.state.uploadDate}</span>
          </div>
          <p className="comment-body">{this.props.reply.body}</p>
          <div className="comment-response">
            <button className="thumb-button">
              <FontAwesomeIcon
                icon="thumbs-up"
                className={
                  "comment-thumb " + (this.state.liked ? "comment-voted" : "")
                  }
              />
            </button>
            <span className="comment-score"></span>
            <button className="thumb-button thumbs-down-button">
              <FontAwesomeIcon
                icon="thumbs-down"
                className={
                  "comment-thumb " + 
                  (this.state.disliked ? "comment-voted" : "")
                }
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
        </div>
      </div>
    );
  }

}

export default Reply;