import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AuthError from "./auth_error";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      passwordConfirm: "",
      isError: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);

    this.usernameBlankError = "Enter username";
    this.usernameTakenError = "Username has already been taken";
    this.emailBlankError = "Enter email";
    this.emailInvalidError = "Don't forget to include the '@'."
    this.emailTakenError = "Email has already been taken";
    this.passwordShortError = "Password is too short (minimum is 6 characters)";
    this.passwordBlankError = "Enter a password";
    this.passwordConfirmMismatchError = "Those passwords didn't match. Try again.";
    this.passwordConfirmBlankError = "Confirm your password";
  }

  componentDidUpdate() {
    if (this.props.errors.length > 0) {
      if (this.state.isError === false) {
        this.setState({ isError: true });
      }
    } else if (this.props.errors.length === 0) {
      if (this.state.isError === true) {
        this.setState({ isError: false });
      }
    }
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.clearSessionErrors();
    this.setState({ isError: false });
    let valid = true;

    if (this.state.username === "") {
      valid = false;
      this.props.receiveSessionError(this.usernameBlankError);
    }

    if (this.state.email === "") {
      valid = false;
      this.props.receiveSessionError(this.emailBlankError);
    } else if (!this.state.email.includes("@")) {
      valid = false;
      this.props.receiveSessionError(this.emailInvalidError);
    }

    if (this.state.password === "") {
      valid = false;
      this.props.receiveSessionError(this.passwordBlankError);
    }

    if (this.state.passwordConfirm === "") {
      valid = false;
      this.props.receiveSessionError(this.passwordConfirmBlankError);
    } else if (this.state.password !== this.state.passwordConfirm) {
      valid = false;
      this.props.receiveSessionError(this.passwordConfirmMismatchError);
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
    } else if (this.props.errors.includes(this.usernameTakenError)) {
      error = "That username is taken. Try another.";
    }

    if (error) {
      return <AuthError error={error} />
    }

    return null;
  }

  renderEmailError() {
    let error = null;

    if (this.props.errors.includes(this.emailBlankError)) {
      error = this.emailBlankError;
    } else if (this.props.errors.includes(this.emailInvalidError)) {
      error = this.emailInvalidError;
    } else if (this.props.errors.includes(this.emailTakenError)) {
      error = "That email is taken. Try another.";
    }

    if (error) {
      return <AuthError error={error} />
    }

    return null;
  }

  renderPasswordError() {
    let error = null;

    if (this.props.errors.includes(this.passwordBlankError)) {
      error = this.passwordBlankError;
    } else if (this.props.errors.includes(this.passwordShortError)) {
      error = "Use 6 characters or more for your password";
    }

    if (error) {
      return <AuthError error={error} />
    }

    return null;
  }

  renderPasswordConfirmError() {
    let error = null;

    if (!this.props.errors.includes(this.passwordBlankError)) {
      if (this.props.errors.includes(this.passwordConfirmMismatchError)) {
        error = this.passwordConfirmMismatchError;
      } else if (this.props.errors.includes(this.passwordConfirmBlankError)) {
        error = this.passwordConfirmBlankError;
      }
    }

    if (error) {
      return <AuthError error={error} />
    }

    return null;
  }

  render() {
    const loginInputErrorClass = this.state.isError ? "login-input-error" : "";
    const passwordRequirementsHidden = this.state.isError ? "hidden" : "";

    return (
      <div className="auth-page">
        <div className="auth-form-container">
          <div className="yalltube-logo yalltube-logo-auth yalltube-logo-signup">
            <FontAwesomeIcon icon={["fab", "youtube"]} className="yalltube-logo-icon" />
            <span>YallTube</span>
          </div>
          <form className="auth-form"
            onSubmit={this.handleSubmit}
          >
            <div className="auth-form-inputs-container">
              <h1 className="auth-form-header-1 auth-form-header-1-signup">Create your YallTube Account</h1>
              <h2 className="auth-form-header-2 auth-form-header-2-signup">to continue to YallTube</h2>

              <div className="login-input-container">
                <input type="text"
                  className={`signup-input ${loginInputErrorClass}`}
                  placeholder="Username"
                  value={this.state.username}
                  onChange={this.update("username")}
                />
                {this.renderUsernameError()}
              </div>

              <div className="login-input-container signup-input-not-first">
                <input type="text"
                  className={`signup-input  ${loginInputErrorClass}`}
                  placeholder="Your email address"
                  value={this.state.email}
                  onChange={this.update("email")}
                />
                {this.renderEmailError()}
              </div>

              <div className="password-container signup-input-not-first">
                <div className="password-input-container">
                  <input type="password"
                    className={`signup-input  ${loginInputErrorClass}`}
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.update("password")}
                  />
                  {this.renderPasswordError()}
                </div>
                <div className="password-confirm-container">
                  <input type="password"
                    className={`signup-input  ${loginInputErrorClass}`}
                    placeholder="Confirm"
                    value={this.state.passwordConfirm}
                    onChange={this.update("passwordConfirm")}
                  />
                  {this.renderPasswordConfirmError()}
                </div>
              </div>

              <p className={`password-requirements ${passwordRequirementsHidden}`}>Use 6 or more characters</p>

              <div className="auth-options">
                <Link to="/login" className="other-auth-link">
                  <p className="auth-link-text">Sign in instead</p>
                </Link>
                <button className="auth-options-button">Next</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
};

export default SignupForm;