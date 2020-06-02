import React from "react";
import { Link } from "react-router-dom";
import SignInButton from "./sign_in_button";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="nav-bar">
        <div className="start">
          <div className="guide-container">
            <span>🍔</span>
          </div>
          <div className="logo-container">
            <span>▶️</span>
            <span>YallTube</span>
          </div>
        </div>

        <div>
          <p>SearchBar component</p>
        </div>

        <div className="buttons">
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