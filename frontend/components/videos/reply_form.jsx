import React from "react";
import { Link } from "react-router-dom";

class ReplyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author_id: this.props.currentUser.id,
      video_id: this.props.videoId,
      parent_id: this.props.commentId,
      body: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateBody() {
    return e => this.setState({ body: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("comment[author_id]", this.state.author_id);
    formData.append("comment[video_id]", this.state.video_id);
    formData.append("comment[parent_id]", this.state.parent_id);
    formData.append("comment[body]", this.state.body);
    this.props.createComment(formData).then(action => {
      this.setState({ body: ""});
    });
  }

  render() {
    return (
      <form className="reply-form">
        <div className="reply-form-icon">{this.props.currentUser.username[0]}</div>
        <div className="reply-form-main">
          <textarea
            className="reply-form-input"
            placeholder="Add a public reply..."
            value={this.state.body}
            onChange={this.updateBody()}
          />
          <div className="reply-form-buttons">
            <button
              className="reply-form-cancel"
              onClick={this.props.handleHideReplyForm}
            >CANCEL</button>
            <button
              className="reply-form-submit"
              onClick={this.handleSubmit}
            >REPLY</button>
          </div>
        </div>
      </form>
    )
  }


}

export default ReplyForm;