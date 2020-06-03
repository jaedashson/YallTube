import React from "react";
import { Link } from "react-router-dom";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      passwordConfirm: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);

    this.usernameBlankError = "Enter username";
    this.emailBlankError = "Enter email";
    this.emailInvalidError = "Don't forget to include the '@'."
    this.passwordShortError = "Password is too short (minimum is 6 characters)";
    this.passwordBlankError = "Enter a password";
    this.passwordConfirmMismatchError = "Those passwords didn't match. Try again.";
    this.passwordConfirmBlankError = "Confirm your password";
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.clearErrors();
    let valid = true;

    if (this.state.username === "") {
      valid = false;
      this.props.receiveError(this.usernameBlankError);
    }

    if (this.state.email === "") {
      valid = false;
      this.props.receiveError(this.emailBlankError);
    } else if (!this.state.email.includes("@")) {
      valid = false;
      this.props.receiveError(this.emailInvalidError);
    }

    if (this.state.password === "") {
      valid = false;
      this.props.receiveError(this.passwordBlankError);
    }

    if (this.state.passwordConfirm === "") {
      valid = false;
      this.props.receiveError(this.passwordConfirmBlankError);
    } else if (this.state.password !== this.state.passwordConfirm) {
      valid = false;
      this.props.receiveError(this.passwordConfirmMismatchError);
    }

    if (valid) {
      const user = {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password
      };
      this.props.signup(user);
    }
  }

  renderUsernameError() {
    let error = null;

    if (this.props.errors.includes(this.usernameBlankError)) {
      error = this.usernameBlankError;
    }

    return <p className="auth-error">{error}</p>;
  }

  renderEmailError() {
    let error = null;

    if (this.props.errors.includes(this.emailBlankError)) {
      error = this.emailBlankError;
    } else if (this.props.errors.includes(this.emailInvalidError)) {
      error = this.emailInvalidError;
    }

    return <p className="auth-error">{error}</p>;
  }

  renderPasswordError() {
    let error = null;

    if (this.props.errors.includes(this.passwordBlankError)) {
      error = this.passwordBlankError;
    } else if (this.props.errors.includes(this.passwordShortError)) {
      error = "Use 6 characters or more for your password";
    }

    return <p className="auth-error">{error}</p>;
  }

  renderPasswordConfirmError() {
    let error = null;

    if (this.props.errors.includes(this.passwordConfirmMismatchError)) {
      error = this.passwordConfirmMismatchError;
    } else if (this.props.errors.includes(this.passwordConfirmBlankError)) {
      error = this.passwordConfirmBlankError;
    }

    return (
      <p className="auth-error">{error}</p>
    );
  }

  render() {
    return (
      <div className="signup-page">
        <div className="auth-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <p>[YallTube logo]</p>
            <h1>Create your YallTube Account</h1>
            <h2>to continue to YallTube</h2>

            <div className="username-container">
              <label className="auth-label"> Username
                <input type="text"
                  className="auth-input"
                  value={this.state.username}
                  onChange={this.update("username")}
                />
              </label>
              {this.renderUsernameError()}
            </div>

            <div className="email-container">
              <label className="auth-label"> Your email address
                <input type="text"
                  className="auth-input"
                  value={this.state.email}
                  onChange={this.update("email")}
                />
              </label>
              {this.renderEmailError()}
            </div>

            <div className="password-container">
              <div className="password-input-container">
                <label className="auth-label"> Password
                  <input type="password"
                    className="auth-input"
                    value={this.state.password}
                    onChange={this.update("password")}
                  />
                </label>
                {this.renderPasswordError()}
              </div>
              <div className="password-confirm-container">
                <label className="auth-label"> Confirm
                  <input type="password"
                    className="auth-input"
                    value={this.state.passwordConfirm}
                    onChange={this.update("passwordConfirm")}
                  />
                </label>
                {this.renderPasswordConfirmError()}
              </div>
            </div>

            <div className="auth-options">
              <Link to="/login">Sign in instead</Link>
              <button className="auth-options-button">Next</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
};

export default SignupForm;