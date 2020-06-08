import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class UploadPage extends React.Component {
  constructor(props) {
    super(props);

    this.handleUpload = this.handleUpload.bind(this);
  }

  handleUpload(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="upload-page">
        <div className="upload-container">
          <button
            onClick={(e) => e.preventDefault()} // placeholder click handler
            className="upload-select-button"
          >
            <FontAwesomeIcon icon="upload" className="upload-icon"/>
            <p>Select files to upload</p>
          </button>
        </div>
      </div>
    );
  }
};

export default UploadPage;