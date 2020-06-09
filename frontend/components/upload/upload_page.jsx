import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class UploadPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoFile: null,
      title: "",
      description: ""
    }

    this.handleFile = this.handleFile.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.handleCancelFile = this.handleCancelFile.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleFile(e) {
    debugger
    e.preventDefault();
    this.setState({ videoFile: e.currentTarget.files[0]});
  }

  handleUpload(e) {
    debugger
    e.preventDefault();
    const formData = new FormData();
    formData.append("video[title]", this.state.title);
    formData.append("video[description]", this.state.description);
    formData.append("video[uploader_id]", this.props.uploaderId)
    formData.append("video[video]", this.state.videoFile);
    debugger
    this.props.createVideo(formData);
  }

  handleCancelFile(e) {
    debugger
    e.preventDefault();
    this.setState({ videoFile: null });
  }

  renderInputs() {
    if (!this.state.videoFile) {
      return (
        <div className="upload-form-file-input-container">
          <input type="file"
            className="upload-form-file-input"
            onChange={this.handleFile}
          />
        </div>
      );
    } else {
      return (
        <div className="upload-inputs-after-upload">
          <div className="upload-form-inputs-container">
            <p className="upload-file-name">filename: {this.state.videoFile.name}</p>
            <p className="upload-file-size">file size: {this.state.videoFile.size} bytes</p>

            <div className="upload-form-title-container">
              <input type="text"
                className="upload-form-title-input"
                placeholder="Title"
                value={this.state.title}
                onChange={this.update("title")}
              />
            </div>
            <div className="upload-form-description-container">
              <textarea
                className="upload-form-description-input"
                placeholder="Description"
                value={this.state.description}
                onChange={this.update("description")}
              />
            </div>
          </div>
          <div className="publish-button-container">
            <button onClick={this.handleUpload}
              className="publish-button"
            >
              Publish
            </button>
          </div>
          <div className="cancel-file-button-container">
            <button onClick={this.handleCancelFile}
              className="cancel-file-button"
            >
              Cancel upload
            </button>
          </div>
        </div>
      );
    }
  }

  render() {
    debugger // check state

    return (
      <div className="upload-page">
        <div className="upload-container">
          <form className="upload-form" >
            {this.renderInputs()}
          </form>
        </div>
      </div>
    );
  }
};

export default UploadPage;