import React from "react";
import { Link } from "react-router-dom";
import { parseDate, arraysEqual } from "../../util/videos_info_util";
import Comment from "./comment";
import CommentFormContainer from "./comment_form_container";

class CommentsSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: null,
      commentCount: 0,
      submitBody: "",
      displayForm: true
    }
  }

  componentDidMount() {
    this.props.fetchComments(this.props.videoId).then(action => {
      // debugger
      this.setState({
        comments: action.comments,
        commentCount: Object.keys(action.comments).length
      });
    });
  }

  componentDidUpdate(prevProps) {
    // debugger

    // If there are new comments
    if (prevProps.comments !== this.props.comments) {
      debugger

      this.setState({
        comments: this.props.comments,
        commentCount: Object.keys(this.props.comments).length
      });
    }

    // debugger
  }

  renderComments() {
    if (!this.props.comments) {
      return null;
    }

    const comments = Object.values(this.state.comments).map(comment => {
      return (
        <Comment
          key={comment.id}
          comment={comment}
          currentUser={this.props.currentUser}
          videoId={this.props.videoId}
        />
      );
    });

    debugger

    return comments;
  }

  render() {
    if (!this.state.comments) {
      return null;
    }

    return (
      <div className="comments-section">
        <div className="comments-count-sort">
          <span className="comment-count">{this.state.commentCount} Comments</span>
          <button className="comment-sort-by">SORT BY</button>
        </div>

        <CommentFormContainer currentUser={this.props.currentUser} videoId={this.props.videoId} />

        <div className="comments-list">
          {this.renderComments()}
        </div>
      </div>
    )
  }
}

export default CommentsSection;