import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class SignInButton extends React.Component {
  constructor(props) {
    // debugger;
    super(props);

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.handleSignout = this.handleSignout.bind(this);
  }

  toggleDropdown(e) {
    e.preventDefault();
    document.getElementById("current-user-dropdown-menu").classList.toggle("current-user-dropdown-menu-show");
  }

  handleSignout(e) {
    e.preventDefault();
    this.props.logout();
  }

  renderLoggedIn() {
    return (
      <div className="current-user-container">
        <div
          className="current-user-icon"
          onClick={this.toggleDropdown}
          onBlur={this.toggleDropdown}
        >
          {this.props.currentUser.username[0]}
        </div>
        <div id="current-user-dropdown-menu" 
          onMouseDown={e => e.preventDefault()}
          className="current-user-dropdown-menu"
        >
          <div className="current-user-dropdown-heading">
            <div className="current-user-dropdown-icon">{this.props.currentUser.username[0]}</div>
            <p className="current-user-dropdown-username">{this.props.currentUser.username}</p>
          </div>
          
          <Link to={`/users/${this.props.currentUser.id}`}
            className="current-user-dropdown-item"
          ><p>Your channel</p></Link>
          <button onClick={this.handleSignout}
            className="current-user-dropdown-item"
          ><p>Sign out</p></button>
        </div>

      </div>
    )
  }

  renderLoggedOut() {
    return (
      <Link to="/login" className="sign-in-button-link">
        <FontAwesomeIcon icon="user-circle" className="sign-in-button-icon"/>
        <p className="sign-in-button-text">SIGN IN</p>
      </Link>
    );
  }

  render() {
    const authButton = this.props.currentUser ? this.renderLoggedIn() : this.renderLoggedOut();

    return (
      <div className="sign-in-button">
        {authButton}
      </div>
    );
  }
};

export default SignInButton;