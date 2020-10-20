import React from "react";
import { Link } from "react-router-dom";
// import { parseDate, arraysEqual } from "../../util/videos_info_util";
import CommentContainer from "./comment_container";
import CommentFormContainer from "./comment_form_container";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class CommentsSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      sortBy: "newest-first",
      sortedParentComments: []
    };
  }

  componentDidMount() {
    this.props.fetchParentComments(this.props.videoId)
      .then(action => {
        this.sortByNewestFirst(); // Will we have parent comments in props by then?
        this.setState({ loaded: true });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.sortBy === "newest-first" && prevState.sortBy !== "newest-first") {
      this.sortByNewestFirst();
    } else if (this.state.sortBy === "top-first" && prevState.sortBy !== "top-first") {
      this.sortByTopFirst();
    }
  }

  sortByNewestFirst() {
    const sortedParentComments = this.props.parentComments.slice().sort((a, b) => {
      let dateA = new Date(a.created_at);
      let dateB = new Date(b.created_at);
      return (dateA < dateB) ? 1 : -1;
    });

    this.setState({ sortedParentComments });
  }

  sortByTopFirst() {

  }

  renderParentComments() {
    return this.state.sortedParentComments.map(comment => {
      return (
        <CommentContainer
          key={comment.id}
          comment={comment}
          videoId={this.props.videoId}
        />
      );
    });
  }

  renderCommentForm() {
    if (this.props.currentUser) {
      return (
        <CommentFormContainer
          videoId={this.props.videoId}
        />
      );
    } else {
      return null;
    }
  }

  render() {
    if (!this.state.loaded) return null;

    return (
      <div className="comments-section">
        <div className="comments-count-sort">
          <span className="comment-count">
            {this.props.commentCount} Comments
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