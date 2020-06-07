import React from "react";
import { Link } from "react-router-dom";

class SignInButton extends React.Component {
  constructor(props) {
    super(props);
  }

  loggedIn() {
    return (
      <div className="current-user-container">
        <span>{this.props.currentUser.username[0]}</span>
      </div>
    )
  }

  notLoggedIn() {
    return (
      <Link to="/login">
        <span className="login-button-link">
          <div className="login-button-container">
            <span>👤</span>
            <span>SIGN IN</span>
          </div>
        </span>
      </Link>
    );
  }

  render() {
    const authButton = this.props.currentUser ? this.loggedIn() : this.notLoggedIn();

    return (
      <div>
        {authButton}
      </div>
    );
  }
};

export default SignInButton;