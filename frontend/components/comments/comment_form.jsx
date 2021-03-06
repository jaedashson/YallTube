import React from "react";
import { Link } from "react-router-dom";

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      showButtons: false
    };

    this.handleShowButtons = this.handleShowButtons.bind(this);
    this.handleHideButtons = this.handleHideButtons.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  updateBody(e) {
    this.setState({ body: e.currentTarget.value });
  }

  handleShowButtons(e) {
    e.preventDefault();
    this.setState({ showButtons: true });
  }

  handleHideButtons(e) {
    e.preventDefault();
    this.setState({
      showButtons: false,
      body: ""
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("comment[author_id]", this.props.currentUserId);
    formData.append("comment[video_id]", this.props.videoId);
    formData.append("comment[body]", this.state.body);
    this.props.createParentComment(formData).then(action => {
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
            onChange={this.updateBody}
            onClick={this.handleShowButtons}
          />
          <div className={"comment-form-buttons " + (this.state.showButtons ? "comment-form-buttons-show" : "")}>
            <button
              className="comment-form-cancel"
              onClick={this.handleHideButtons}
            >CANCEL</button>
            <button
              className="comment-form-submit"
              onClick={this.handleSubmit}
            >COMMENT</button>
          </div>
        </div>
      </form>
    );
  }
}

export default CommentForm;