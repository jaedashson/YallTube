import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class UploadPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoFile: null,
      thumbnail: null,
      title: "",
      description: ""
    }

    this.handleVideoInputClick = this.handleVideoInputClick.bind(this);
    this.handleThumbnailInputClick = this.handleThumbnailInputClick.bind(this);
    this.handleVideo = this.handleVideo.bind(this);
    this.handleThumbnail = this.handleThumbnail.bind(this);
    this.handleVideoInputCancel = this.handleVideoInputCancel.bind(this);
    this.handleThumbnailInputCancel = this.handleThumbnailInputCancel.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.handleUploadCancel = this.handleUploadCancel.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleVideoInputClick(e) {
    // debugger
    e.preventDefault();
    const videoInput = document.getElementById("video-input");
    videoInput.classList.remove("upload-input-hidden");
    videoInput.focus();
    videoInput.click();
    videoInput.classList.add("upload-input-hidden");
  }

  handleThumbnailInputClick(e) {
    // debugger
    e.preventDefault();
    const thumbnailInput = document.getElementById("thumbnail-input")
    thumbnailInput.classList.remove("upload-input-hidden");
    thumbnailInput.focus();
    thumbnailInput.click();
    thumbnailInput.classList.add("upload-input-hidden");
  }

  handleVideo(e) {
    // debugger
    e.preventDefault();
    this.setState({ videoFile: e.currentTarget.files[0] });
  }

  handleThumbnail(e) {
    // debugger
    e.preventDefault();
    this.setState({ thumbnail: e.currentTarget.files[0] });
  }

  handleVideoInputCancel(e) {
    // debugger
    e.preventDefault();
    this.setState({ videoFile: null });
  }

  handleThumbnailInputCancel(e) {
    // debugger
    e.preventDefault();
    this.setState({ thumbnail: null });
  }

  handleUpload(e) {
    // debugger
    e.preventDefault();
    const formData = new FormData();
    formData.append("video[title]", this.state.title);
    formData.append("video[description]", this.state.description);
    formData.append("video[uploader_id]", this.props.uploaderId)
    formData.append("video[video]", this.state.videoFile);
    formData.append("video[thumbnail]", this.state.thumbnail);
    // debugger
    this.props.createVideo(formData);
  }

  handleUploadCancel(e) {
    // debugger
    e.preventDefault();
    this.setState({
      videoFile: null,
      thumbnail: null
    })
  }

  renderVideoInfo() {
    // debugger
    if (this.state.videoFile) {
      // debugger

      return (
        <div className="upload-file-info">
          <p className="upload-filename">
            Video filename: {this.state.videoFile.name}
          </p>
          <p className="upload-filesize">
            Video filesize: {this.state.videoFile.size} bytes
          </p>
        </div>
      );
    } else {
      // debugger
      return (
        <div className="upload-file-prompt">
          <p className="upload-file-prompt-text">
            Select video to upload
          </p>
        </div>
      );
    }
  }

  renderThumbnailInfo() {
    // debugger
    if (this.state.thumbnail) {
      // debugger

      return (
        <div className="upload-file-info">
          <p className="upload-filename">
            Thumbnail filename: {this.state.thumbnail.name}
          </p>
          <p className="upload-filesize">
            Thumbnail filesize: {this.state.thumbnail.size} bytes
          </p>
        </div>
      );
    } else {
      // debugger
      return (
        <div className="upload-file-prompt">
          <p className="upload-file-prompt-text">
            Select thumbnail
          </p>
        </div>
      )
    }

  }

  renderInputs() {
    // debugger
    if (!this.state.videoFile || !this.state.thumbnail) {
      // debugger
      return (
        <div className="upload-input-files-container">
          <button onClick={this.handleVideoInputClick} className="upload-input-button">
            <input type="file"
              id="video-input"
              className="upload-input-hidden"
              accept="video/*"
              onChange={this.handleVideo}
              onClick={e => e.stopPropagation()}
            />
            <FontAwesomeIcon icon="upload" className="upload-icon" />
            {this.renderVideoInfo()}
          </button>
          <button onClick={this.handleThumbnailInputClick} className="upload-input-button">
            <input type="file"
              id="thumbnail-input"
              className="upload-input-hidden"
              accept="image/*"
              onChange={this.handleThumbnail}
              onClick={e => e.stopPropagation()}
            />
            <FontAwesomeIcon icon="image" className="upload-icon" />
            {this.renderThumbnailInfo()}
          </button>
        </div>
      );
    } else {
      // debugger
      return (
        <div className="upload-inputs-after-upload">
          <div className="upload-form-inputs-container">
            <p className="upload-file-name">filename: {this.state.videoFile.name}</p>
            <p className="upload-file-size">file size: {this.state.videoFile.size} bytes</p>

            <div className="upload-form-file-info">
              <p>Video filename: {this.state.videoFile.name}</p>
              <p>Video filesize: {this.state.videoFile.size} bytes</p>
              <p>Thumbnail filename: {this.state.thumbnail.name}</p>
              <p>Thumbnail filesize: {this.state.thumbnail.size} bytes</p>
            </div>

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
            <button onClick={this.handleUploadCancel}
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
    // debugger // check state

    return (
      <div className="upload-page">
        <form className="upload-form" >
          {this.renderInputs()}
        </form>
      </div>
    );
  }
};

export default UploadPage;