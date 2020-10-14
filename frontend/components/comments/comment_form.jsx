import React from "react";
import { Link } from "react-router-dom";

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author_id: this.props.currentUser.id,
      video_id: this.props.videoId,
      body: "",
      showButtons: false
    };

    this.handleShowButtons = this.handleShowButtons.bind(this);
    this.handleHideButtons = this.handleHideButtons.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  updateBody() {
    return e => this.setState({ body: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("comment[author_id]", this.state.author_id);
    formData.append("comment[video_id]", this.state.video_id);
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
          <span
            className="comment-form-input"
            contentEditable="true"
            value={this.state.body}
            onChange={this.updateBody()}
            onClick={this.handleShowButtons}
          ></span>
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