import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AuthError from "./auth_error";


class LoginFormPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      isError: false
    };

    this.handlePrev = this.handlePrev.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.passwordBlankError = "Enter a password";
    this.passwordWrongError = "Wrong password";
  }

  componentDidUpdate() {
    // If input caused an error
    if (this.props.errors.length > 0) {
      // debugger
      if (this.state.isError === false) {
        this.setState({ isError: true });
      }
    }
  }

  componentWillUnmount() {
    this.props.clearEmailAttempt();
    this.props.clearErrors();
  }

  updatePassword() {
    return e => this.setState({ password: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.clearErrors();
    let valid = true;

    if (this.state.password === "") {
      valid = false;
      this.props.receiveError(this.passwordBlankError);
    }

    if (valid) {
      const user = {
        username: this.props.attemptedUser.username,
        password: this.state.password
      };
      this.props.login(user);
    }
  }

  handlePrev(e) {
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

    if (error) {
      return <AuthError error={error} />;
    }

    return null;
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
    const loginInputErrorClass = this.state.isError ? "login-input-error" : "";

    return (
      <div className="auth-form-inputs container">
        <h1 className="auth-form-header-1">Hi {this.props.attemptedUser.username}</h1>

        <div className="email-attempt-container">
          <div
            className="email-attempt-button"
            onClick={this.handlePrev}
          >
            <div className="email-attempt-icon">{this.props.attemptedUser.username[0]}</div>
            <p className="email-attempt-text">{this.props.attemptedUser.email}</p>
            <FontAwesomeIcon icon="chevron-down" className="email-attempt-chevron" />
          </div>
        </div>

        <div className="login-input-container">
          <input type="password"
            className={`login-input ${loginInputErrorClass}`}
            id="password-input"
            placeholder="Password"
            value={this.props.password}
            onChange={this.updatePassword()}
          />
          {this.renderPasswordError()}
        </div>

        <div className="auth-options auth-options-password">
          <div></div>
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