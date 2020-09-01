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
      submitBody: "",
      displayForm: true
    }
  }

  componentDidMount() {
    this.props.fetchComments(this.props.videoId).then(action => {
      // debugger
      this.setState({ comments: action.comments });
    });
  }

  renderComments() {
    if (!this.state.comments) {
      return null;
    }

    const comments = Object.values(this.state.comments).map(comment => {
      return (
        <Comment
          key={comment.id}
          comment={comment}
        />
      );
    });

    return comments;
  }

  render() {
    return (
      <div className="comments-section">
        <div className="comments-count-sort">
          <span className="comment-count">663 comments</span>
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