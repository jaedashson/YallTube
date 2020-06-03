import React from "react";
import { Link } from "react-router-dom";

class LoginFormPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: "" }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  update() {
    return e => this.setState({ password: e.currentTarget.value });
  }

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
        <form onSubmit={this.handleSubmit}>
          <p>[YallTube logo]</p>
          <h1>Hi [username]</h1>
          <div className="attempt-email-container">
            [email (click takes you back to email input)]
          </div>

          <div className="login-password-container">
            <label className="auth-label">
              <input type="password"
                className="auth-input"
                value={this.state.password}
                onChange={this.update("password")}
              />
            </label>
            {this.renderPasswordError()}
          </div>

          <div className="auth-options">
            <button className="auth-options-button">Next</button>
          </div>
        </form>
      </div>
    );
  }
};

export default LoginFormPassword;