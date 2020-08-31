import React from "react";
import { Link } from "react-router-dom";

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author_id: this.props.currentUser.id,
      video_id: this.props.videoId,
      body: "",
      show: true,
    }
  }

  renderMain() {

    return (
      <div className="comment-form-main">

      </div>
    );
  }

  render() {
    return (
    <form className="comment-form">
      <div className="comment-form-icon">{this.props.currentUser.username[0]}</div>
      {this.renderMain()}
    </form>
    )
  }
}

export default CommentForm;