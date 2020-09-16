import React from "react";
import { Link } from "react-router-dom";
import { parseDate, arraysEqual } from "../../util/videos_info_util";
import CommentContainer from "./comment_container";
import CommentFormContainer from "./comment_form_container";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class CommentsSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: null,
      sortBy: "newest-first",
      commentCount: this.props.video.commentCount
    };
    console.log(this.props.video.commentCount)
    console.log(this.state.commentCount)
  }

  componentDidMount() {
    this.props.fetchParentComments(this.props.video.id).then(action => {
      this.setState({
        comments: action.comments,
      });
    });
  }

  componentDidUpdate(prevProps) {
    // If there are new comments
    if (prevProps.comments !== this.props.comments) {
      this.setState({
        comments: this.props.comments,
      });
    }
  }

  renderParentComments() {
    if (!this.props.comments) {
      return null;
    }

    let parentComments = null;

    // Sort parent comments by number of votes
    if (this.state.sortBy === "top-first") {
      
    }
    
    // Sort parent comments by newest first
    else if (this.state.sortBy === "newest-first") {
      parentComments = Object.values(this.state.comments)
        .sort((a, b) => {
          let dateA = new Date(a.created_at);
          let dateB = new Date(b.created_at);
          return (dateA < dateB) ? 1 : -1;
        });
    }
    return parentComments.map(comment => {
      return (
        <CommentContainer
          key={comment.id}
          comment={comment}
          videoId={this.props.video.id}
        />
      )
    })
  }

  renderCommentForm() {
    if (this.props.currentUser) {
      return (
        <CommentFormContainer
          currentUser={this.props.currentUser}
          videoId={this.props.video.id}
        />
      );
    }
  }

  render() {
    if (!this.state.comments) {
      return null;
    }

    return (
      <div className="comments-section">
        <div className="comments-count-sort">
          <span className="comment-count">
            {this.state.commentCount} Comments
          </span>
          <button className="comment-sort-button">
            <FontAwesomeIcon
              icon="sort-amount-down"
              className="comment-sort-button-icon"
            />
            <span className="comment-sort-button-text">SORT BY</span>
          </button>
        </div>
        {this.renderCommentForm()}
        <div className="comments-list">{this.renderParentComments()}</div>
      </div>
    );
  }
}

export default CommentsSection;