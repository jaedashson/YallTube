import React from "react";
import { Link } from "react-router-dom";

class LoginFormPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: "" };

    this.handlePrev = this.handlePrev.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.passwordBlankError = "Enter a password";
    this.passwordWrongError = "Wrong password";
  }

  componentWillUnmount() {
    debugger
    this.props.clearEmailAttempt();
    this.props.clearErrors();
  }

  updatePassword() {
    return e => this.setState({ password: e.currentTarget.value });
  }

  handleSubmit(e) {
    debugger
    e.preventDefault();
    this.props.clearErrors();
    let valid = true;

    if (this.state.password === "") {
      valid = false;
      this.props.receiveError(this.passwordBlankError);
    }

    if (valid) {
      debugger
      const user = {
        username: this.props.attemptedUser.username,
        password: this.state.password
      };
      this.props.login(user);
    }
  }

  handlePrev(e) {
    debugger
    e.preventDefault();
    this.props._prev();
  }

  renderPasswordError() {
    let error = null;

    if (this.props.errors.includes(this.passwordBlankError)) {
      error = this.passwordBlankError;
    } else if (this.props.errors.includes(this.passwordWrongError)) {
      error = this.passwordWrongError;
    }

    return <p className="auth-error">{error}</p>
  }

  componentDidMount() {
    const passwordInput = document.getElementById("password-input");

    passwordInput.addEventListener("keyup", function(e) {
      e.preventDefault();
      if (e.keyCode === 13) {
        document.getElementById("login-button").click();
      }
    });
  }

  render() {
    debugger

    return (
      <div className="auth-form-inputs container">
        <h1 className="auth-form-header-1">Hi {this.props.attemptedUser.username}</h1>
        <div
          className="email-attempt-container"
          onClick={this.handlePrev}
        >
          <p>{this.props.attemptedUser.email}</p>
        </div>

        <div className="login-input-container">
          <input type="password"
            className="auth-input"
            id="password-input"
            placeholder="Password"
            value={this.props.password}
            onChange={this.updatePassword()}
          />
          {this.renderPasswordError()}
        </div>

        <div className="auth-options">
          <button
            id="login-button"
            className="auth-options-button"
            onClick={this.handleSubmit}
          >Log in</button>
        </div>
      </div>
    );
  }
};

export default LoginFormPassword;