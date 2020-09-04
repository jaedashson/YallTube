import React from "react";
import { Link } from "react-router-dom";
import { parseDate, arraysEqual } from "../../util/videos_info_util";
import CommentContainer from "./comment_container";
import CommentFormContainer from "./comment_form_container";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class CommentsSection extends React.Component {
  constructor(props) {
    debugger
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
        .filter(comment => !comment.parent_id)
        .sort((a, b) => b.created_at > a.created_at);
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

  render() {
    if (!this.state.comments) {
      return null;
    }

    debugger
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
        <CommentFormContainer
          currentUser={this.props.currentUser}
          videoId={this.props.video.id}
        />
        <div className="comments-list">{this.renderParentComments()}</div>
      </div>
    );
  }
}

export default CommentsSection;