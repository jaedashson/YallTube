import React from "react";
import { Link } from "react-router-dom";

class LoginFormEmail extends React.Component {
  constructor(props) {
    super(props);
    this.validateEmail = this.validateEmail.bind(this);
    // this.handleNext = this.handleNext.bind(this);

    this.emailBlankError = "Enter an email";
    this.emailNotFoundError = "Couldn't find your YallTube Account";
  }

  // handleNext(e) {
  //   debugger
  //   e.preventDefault();
  //   debugger

  //   if (this.props.errors.includes(this.emailNotFoundError)) {
  //     return;
  //   }

  //   this.props._next();
  // }

  validateEmail(e) {
    e.preventDefault();

    if (this.props.email == "") {
      this.props.receiveError(this.emailBlankError);
      return;
    }

    this.props.getUserByEmail(this.props.email);
  }

  componentDidUpdate() {
    if (this.props.attemptedUser) {
      this.props.clearErrors();
      this.props._next();
    }
  }

  renderEmailError() {
    let error = null;

    if (this.props.errors.includes(this.emailBlankError)) {
      error = this.emailBlankError;
    } else if (this.props.errors.includes(this.emailNotFoundError)) {
      error = this.emailNotFoundError;
    }

    return <p className="auth-error">{error}</p>
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

    return (
      <div className="auth-form-inputs-container">
        <h1 className="auth-form-header-1">Sign in</h1>
        <h2 className="auth-form-header-2">to continue to YallTube</h2>

        <div className="login-input-container">
          <input type="text"
            className="login-input"
            id="email-input"
            placeholder="Email"
            value={this.props.email}
            onChange={this.props.updateEmail()}
          />
          {this.renderEmailError()}
        </div>

        <div className="guest-login-container">
          <p className="guest-login">Log in as a guest user</p>
        </div>

        <div className="auth-options">
          <Link to="signup">Create account</Link>
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