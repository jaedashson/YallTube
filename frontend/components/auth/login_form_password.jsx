import React from "react";
import { Link } from "react-router-dom";

class LoginFormPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: "" }
    this.handlePrev = this.handlePrev.bind(this);
  }

  // update() {
  //   return e => this.setState({ password: e.currentTarget.value });
  // }

  // Need to figure out how this works
  handleSubmit(e) {
    e.preventDefault();
  }

  // Incomplete
  renderPasswordError() {
    let error = null;

    return <p className="auth-error">{error}</p>
  }

  // How much of the form do I render?  The page too?
  render() {
    return (
      <div className="auth-form-container">
        <h1>Hi {this.props.attemptedUser.username}</h1>
        <div className="attempt-email-container">
          <p>{this.props.attemptedUser.email}</p>
        </div>

        <div className="login-password-container">
          <label className="auth-label">
            <input type="password"
              className="auth-input"
              value={this.state.password}
              onChange={this.props.handleChange("password")}
            />
          </label>
          {this.renderPasswordError()}
        </div>

        <div className="auth-options">
          <button
            className="auth-options-button"
            onClick={this.handleSubmit}
          >Next</button>
        </div>
      </div>
    );
  }
};

export default LoginFormPassword;