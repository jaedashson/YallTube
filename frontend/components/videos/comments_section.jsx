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
      sortBy: "newest-first"
    };
  }

  componentDidMount() {
    this.props.fetchParentComments(this.props.videoId).then(action => {
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
      // debugger

      this.setState({
        comments: this.props.comments,
        commentCount: Object.keys(this.props.comments).length
      });
    }

    // debugger
  }

  // Sort comments
  renderParentComments() {
    if (!this.props.comments) {
      return null;
    }

    // THIS WORKS!
    // const comments = Object.values(this.state.comments).map(comment => {
    //   return (
    //     <Comment
    //       key={comment.id}
    //       comment={comment}
    //       currentUser={this.props.currentUser}
    //       videoId={this.props.videoId}
    //     />
    //   );
    // });
    // return comments

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
        <Comment
          key={comment.id}
          comment={comment}
          currentUser={this.props.currentUser}
          videoId={this.props.videoId}
        />
      )
    })
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
          {this.renderParentComments()}
        </div>
      </div>
    )
  }
}

export default CommentsSection;


/*

comments: {
  1: {
    id: 1,
    children: [{...},{...}]
  }
  2:
  3:
}


*/