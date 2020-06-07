import React from "react";
import { Link } from "react-router-dom";
import SignInButton from "./sign_in_button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="nav-bar">
        <div className="nav-bar-start">
          <div className="guide-button-container">
            <FontAwesomeIcon icon="bars" className="guide-button-icon"/>
          </div>
          <div className="yalltube-logo yalltube-logo-nav">
            <FontAwesomeIcon icon={["fab", "youtube"]} className="yalltube-logo-nav-icon" />
            <span className="yalltube-logo-nav-text">YallTube</span>
          </div>
        </div>

        <div className="search-container">
          <div>SearchBar</div>
        </div>

        <div className="nav-bar-buttons">
          <div className="upload-button-container">
            <span>📹</span>
          </div>
          <div className="apps-button-container">
            <span>🖥️</span>
          </div>
          <div className="settings-button-container">
            <span>⚙️</span>
          </div>
          <SignInButton currentUser={this.props.currentUser} />
        </div>
      </div>
    )
  }
};

export default NavBar;