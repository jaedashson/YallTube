import React from "react";
import { Link } from "react-router-dom";
import { parseDate } from "../../util/videos_info_util";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadDate: parseDate(this.props.comment.created_at),
      liked: false,
      disliked: false
    }
  }

  render() {
    return (
      <div className="comment">
        <div className="comment-author-icon">{this.props.comment.author_id}</div>
        <div className="comment-main">
          <div className="comment-author-date">
            <span className="comment-author">Author</span>
            <span className="comment-date">{this.state.uploadDate}</span>
          </div>
          <p className="comment-body">{this.props.comment.body}</p>
          <div className="comment-response">
            <FontAwesomeIcon icon="thumbs-up" className={"comment-thumb " + (this.state.liked ? "comment-voted" : "")}/>
            <span className="comment-score">68</span>
            <FontAwesomeIcon icon="thumbs-down" className={"comment-thumb comment-thumb-down " + (this.state.disliked ? "comment-voted" : "")} />
            <span className="comment-reply-button">REPLY</span>
          </div>
        </div>
      </div>
    )
  }

}

export default Comment