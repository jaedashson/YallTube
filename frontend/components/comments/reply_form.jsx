import React from "react";
import { Link } from "react-router-dom";

class ReplyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parent_id: this.props.parentId,
      author_id: this.props.currentUser.id,
      video_id: this.props.videoId,
      body: "",
    };

    this.updateBody = this.updateBody.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateBody(e) {
    this.setState({ body: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("comment[author_id]", this.props.currentUserId);
    formData.append("comment[video_id]", this.props.videoId);
    formData.append("comment[parent_id]", this.props.parentId);
    formData.append("comment[body]", this.state.body);
    this.props.createReply(formData).then(action => {
      this.setState({ body: ""});
      this.props.showReplies();
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
            onChange={this.updateBody}
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