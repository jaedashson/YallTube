import React from "react";
import { Link } from "react-router-dom";

class LoginFormPassword extends React.Component {
  constructor(props) {
    super(props);
    this.handlePrev = this.handlePrev.bind(this);
  }

  componentWillUnmount() {
    debugger
    this.props.clearEmailAttempt();
  }

  handlePrev(e) {
    debugger
    e.preventDefault();
    this.props._prev();
  }

  renderPasswordError() {
    let error = null;

    // incomplete

    return <p className="auth-error">{error}</p>
  }

  // How much of the form do I render?  The page too?
  render() {
    debugger

    return (
      <div className="auth-form-container">
        <h1>Hi {this.props.attemptedUser.username}</h1>
        <div
          className="attempt-email-container"
          onClick={this.handlePrev}
        >
          <p>{this.props.attemptedUser.email}</p>
        </div>

        <div className="login-password-container">
          <label className="auth-label">
            <input type="password"
              className="auth-input"
              value={this.props.password}
              onChange={this.props.update("password")}
            />
          </label>
          {this.renderPasswordError()}
        </div>

        <div className="auth-options">
          <button
            className="auth-options-button"
            onClick={this.props.handleSubmit}
          >Log in</button>
        </div>
      </div>
    );
  }
};

export default LoginFormPassword;