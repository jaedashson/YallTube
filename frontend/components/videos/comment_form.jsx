import React from "react";
import { Link } from "react-router-dom";

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author_id: this.props.currentUser.id,
      video_id: this.props.videoId,
      body: "",
    }

    this.handleCancel = this.handleCancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateBody() {
    return e => this.setState({ body: e.currentTarget.value });
  }

  handleCancel() {

  }

  handleSubmit() {

  }

  render() {
    return (
    <form className="comment-form">
      <div className="comment-form-icon">{this.props.currentUser.username[0]}</div>
      <div className="comment-form-main">
        <textarea
          className="comment-form-body"
          placeholder="Add a public comment..."
          value={this.state.body}
          onChange={this.updateBody()}
        />
        <div className="comment-form-buttons">
          <button className="comment-form-cancel">CANCEL</button>
          <button className="comment-form-submit">COMMENT</button>

        </div>
      </div>
    </form>
    )
  }
}

export default CommentForm;