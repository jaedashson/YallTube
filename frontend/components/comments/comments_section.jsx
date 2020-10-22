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
      sortedParentComments: [],
      showDropdown: false
    };

    this.handleDropdownClick = this.handleDropdownClick.bind(this);
    this.handleSortByNewestFirst = this.handleSortByNewestFirst.bind(this);
    this.handleSortByTopFirst = this.handleSortByTopFirst.bind(this);
  }

  componentDidMount() {
    this.props.fetchParentComments(this.props.videoId)
      .then(action => {
        this.sortParentComments(); // Will we have parent comments in props by then?
        this.setState({ loaded: true });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      (this.state.sortBy !== prevState.sortBy) ||
      (this.props.parentComments !== prevProps.parentComments)
    ) {
      this.sortParentComments();
    }
  }

  handleDropdownClick(e) {
    e.preventDefault();
    this.setState({ showDropdown: !this.state.showDropdown });
  }

  handleSortByNewestFirst(e) {
    e.preventDefault();
    this.setState({
      sortBy: "newest-first",
      showDropdown: false
    });
  }

  handleSortByTopFirst(e) {
    e.preventDefault();
    this.setState({
      sortBy: "top-first",
      showDropdown: false
    });
  }

  sortParentComments() {
    const sortedParentComments = this.props.parentComments.slice();

    if (this.state.sortBy === "newest-first") {
      sortedParentComments.sort((a, b) => {
        let dateA = new Date(a.created_at);
        let dateB = new Date(b.created_at);
        return (dateA < dateB) ? 1 : -1;
      });
    }

    if (this.state.sortBy === "top-first") {

    }

    this.setState({ sortedParentComments });
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
          
          {/* ↓↓↓ DROPDOWN ↓↓↓ */}
          <div className="comment-sort-dropdown">
            <button className="comment-sort-button" onClick={this.handleDropdownClick}>
              <FontAwesomeIcon
                icon="sort-amount-down"
                className="comment-sort-button-icon"
              />
              <span >SORT BY</span>
            </button>
            <div id="comment-sort-dropdown-content" className="comment-sort-dropdown-content">
              <button onClick={this.handleSortByTopFirst}>Top comments</button>
              <button onClick={this.handleSortByNewestFirst}>Newest first</button>
            </div>
          </div>
          {/* ↑↑↑ DROPDOWN ↑↑↑ */}
        </div>
        {this.renderCommentForm()}
        <div className="comments-list">{this.renderParentComments()}</div>
      </div>
    );
  }
}

export default CommentsSection;