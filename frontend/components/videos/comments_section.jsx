import React from "react";
import { Link } from "react-router-dom";
import { parseDate, arraysEqual } from "../../util/videos_info_util";

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
      this.setState({ comments: action.comments });
    });
  }

  renderCommentsList() {

  }

  render() {
    return (
      <div className="comments-section">
        <div className="comments-count-sort">
          <span className="comment-count">662 comments</span>
          <button className="comment-sort-by">SORT BY</button>
        </div>

        <div className="comment-submit">
          <div className="comment-submit-icon">{this.props.currentUser.username[0]}</div>
          <form className="comment-submit-form">
          </form>
        </div>

        
      </div>
    )
  }
}

export default CommentsSection;