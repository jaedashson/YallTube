import React from "react";
import { Link } from "react-router-dom";

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author_id: this.props.currentUser.id,
      video_id: this.props.videoId,
      body: "",
    };

    this.handleCancel = this.handleCancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  updateBody() {
    return e => this.setState({ body: e.currentTarget.value });
  }

  handleCancel(e) {
    e.preventDefault();
    this.setState({ body: "" });
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("comment[author_id]", this.state.author_id);
    formData.append("comment[video_id]", this.state.video_id);
    formData.append("comment[body]", this.state.body);
    this.props.createComment(formData).then(action => {
      this.setState({ body: "" });
    });
  }

  render() {
    return (
      <form className="comment-form">
        <div className="comment-form-icon">{this.props.currentUser.username[0]}</div>
        <div className="comment-form-main">
          <textarea
            className="comment-form-input"
            placeholder="Add a public comment..."
            value={this.state.body}
            onChange={this.updateBody()}
          />
          <div className="comment-form-buttons">
            <button
              className="comment-form-cancel"
              onClick={this.handleCancel}
            >CANCEL</button>
            <button
              className="comment-form-submit"
              onClick={this.handleSubmit}
            >COMMENT</button>
          </div>
        </div>
      </form>
    )
  }
}

export default CommentForm;