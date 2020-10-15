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
    formData.append("comment[author_id]", this.state.author_id);
    formData.append("comment[video_id]", this.state.video_id);
    formData.append("comment[parent_id]", this.state.parent_id);
    formData.append("comment[body]", this.state.body);
    this.props.createReply(formData).then(action => {
      this.setState({ body: ""});
    });
  }

  render() {
    return (
      <form className="reply-form">
        <div className="reply-form-icon">{this.props.currentUser.username[0]}</div>
        <div className="reply-form-main">
          {/* <span
            className="reply-form-input"
            contentEditable="true"
            value={this.state.body}
            onChange={this.updateBody()}
          ></span> */}
          <textarea
            className="reply-form-input"
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