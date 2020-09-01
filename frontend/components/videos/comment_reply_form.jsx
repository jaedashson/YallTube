import React from "react";
import { Link } from "react-router-dom";

class CommentReplyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author_id: this.props.currentUser.id,
      video_id: this.props.videoId,
      parent_id: this.props.commentId,
      body: "",
    };

    this.handleCancel = this.handleCancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    formData.append("comment[parent_id]", this.state.parent_id);
    formData.append("comment[body]", this.state.body);
    this.props.createComment(formData).then(action => {
      this.setState({ body: ""});
    });
  }

  render() {
    return (
      
    )
  }


}

export default CommentReplyForm;