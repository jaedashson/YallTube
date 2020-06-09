import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class UploadPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isUploaded: false
    }

    this.handleUpload = this.handleUpload.bind(this);
  }

  handleUpload(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="upload-page">
        <div className="upload-container">
          <form className="upload-form" >
            <div className="upload-form-file-input-container">
              <input type="file"
                className="upload-form-file-input"
              />
            </div>
            <div className="upload-form-inputs-container">
              <div className="upload-form-title-container">
                <input type="text"
                  className="upload-form-title-input"
                />
              </div>
              <div className="upload-form-description-container">
                <textarea
                  className="upload-form-description-input"
                />
              </div>
            </div>
            <div className="publish-button-container">
              <button onClick={(e) => e.preventDefault()}
                className="publish-button"
              >Publish</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
};

export default UploadPage;