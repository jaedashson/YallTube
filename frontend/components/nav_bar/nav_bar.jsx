import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./search_bar";
import SignInButtonContainer from "./sign_in_button_container";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.location.pathname.startsWith("/login") || (this.props.location.pathname.startsWith("/signup"))) {
      return null;
    }

    return (
      <div className="header nav-bar">
        <div className="nav-bar-start">
          <div className="guide-button-container">
            <FontAwesomeIcon icon="bars" className="guide-button-icon"/>
          </div>
          <Link to="/" className="yalltube-logo-link">
            <div className="yalltube-logo yalltube-logo-nav">
              <FontAwesomeIcon icon={["fab", "youtube"]} className="yalltube-logo-nav-icon" />
              <span className="yalltube-logo-nav-text">YallTube</span>
            </div>
          </Link>
        </div>

        <div className="search-container">
          <SearchBar />
        </div>

        <div className="nav-bar-buttons">
          <Link to="/upload" className="upload-button-link">
            <div className="upload-button-container">
              <FontAwesomeIcon icon="video" className="upload-icon-video" />
              <FontAwesomeIcon icon="plus" className="upload-icon-plus" />
            </div>
          </Link>
          <div className="sign-in-button-container">
            <SignInButtonContainer />
          </div>
        </div>
      </div>
    )
  }
};

export default NavBar;