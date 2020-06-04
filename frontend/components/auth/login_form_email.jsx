import React from "react";
import { Link } from "react-router-dom";

class LoginFormEmail extends React.Component {
  constructor(props) {
    debugger
    super(props);
    this.handleNext = this.handleNext.bind(this);

    this.validateEmail = this.validateEmail.bind(this);
    this.emailNotFoundError = "Couldn't find your YallTube Account";
  }

  // Need to figure out how handleSubmit works
  handleNext(e) {
    debugger
    e.preventDefault();

    debugger

    if (this.props.errors.includes(this.emailNotFoundError)) {
      return;
    }

    this.props._next();
  }

  validateEmail(e) {
    e.preventDefault();
    debugger
    this.props.getUserByEmail(this.props.email);
  }

  componentDidUpdate() {
    debugger
    if (this.props.attemptedUser) {
      debugger
      this.props._next();
    }
  }

  renderEmailError() {
    let error = null;

    if (this.props.errors.includes(this.emailNotFoundError)) {
      error = this.emailNotFoundError;
    }

    return <p className="auth-error">{error}</p>
  }

  // How much of the form do I render?  The page too?
  render() {
    debugger

    return (
      <div className="auth-form-inputs-container">
        <h1>Sign in</h1>
        <h2>to continue to YallTube</h2>

        <div className="email-container">
          <label className="auth-label"> Email
            <input type="text"
              className="auth-input"
              value={this.props.email}
              onChange={this.props.update("email")}
            />
          </label>
          {this.renderEmailError()}
        </div>

        <div className="auth-options">
          <Link to="signup">Create account</Link>
          <button
            className="auth-options-button"
            onClick={this.validateEmail}
          >Next</button>
        </div>
      </div>
    );
  }
};

export default LoginFormEmail;