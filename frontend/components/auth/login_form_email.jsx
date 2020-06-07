import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AuthError from "./auth_error";


class LoginFormEmail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isError: false
    }
    
    this.validateEmail = this.validateEmail.bind(this);

    this.emailBlankError = "Enter an email";
    this.emailNotFoundError = "Couldn't find your YallTube Account";
  }

  validateEmail(e) {
    e.preventDefault();

    if (this.props.email == "") {
      this.props.receiveError(this.emailBlankError);
      return;
    }

    this.props.getUserByEmail(this.props.email);
  }

  componentDidUpdate() {
    debugger
    // If input email is associated with a valid user
    if (this.props.attemptedUser) {
      debugger
      this.props.clearErrors();
      this.setState({isError: false});
      this.props._next();
      return;
    }

    // If input caused an error
    if (this.props.errors.length > 0) {
      debugger
      if (this.state.isError === false) {
        this.setState({ isError: true });
      }
      return;
    }
  }

  renderEmailError() {
    let error = null;

    if (this.props.errors.includes(this.emailBlankError)) {
      error = this.emailBlankError;
    } else if (this.props.errors.includes(this.emailNotFoundError)) {
      error = this.emailNotFoundError;
    }

    if (error) {
      return <AuthError error={error} />;
    }

    return null;
  }

  componentDidMount() {
    const emailInput = document.getElementById("email-input");

    emailInput.addEventListener("keyup", function(e) {
      e.preventDefault();
      if (e.keyCode === 13) {
        document.getElementById("login-next-button").click();
      }
    });
  }

  render() {
    const loginInputErrorClass = this.state.isError ? "login-input-error" : "";

    return (
      <div className="auth-form-inputs-container">
        <h1 className="auth-form-header-1">Sign in</h1>
        <h2 className="auth-form-header-2">to continue to YallTube</h2>

        <div className="login-input-container">
          <input type="text"
            className={`login-input ${loginInputErrorClass}`}
            id="email-input"
            placeholder="Email"
            value={this.props.email}
            onChange={this.props.updateEmail()}
          />
          {this.renderEmailError()}
        </div>

        <div className="guest-login-container">
          <p className="auth-link-text">Log in as a guest user</p>
        </div>

        <div className="auth-options">
          <Link to="signup" className="other-auth-link">
            <p className="auth-link-text">Create Account</p>
          </Link>
          <button
            id="login-next-button"
            className="auth-options-button"
            onClick={this.validateEmail}
          >Next</button>
        </div>

      </div>
    );
  }
};

export default LoginFormEmail;