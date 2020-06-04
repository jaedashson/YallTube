import React from "react";
import { Link } from "react-router-dom";

class LoginFormEmail extends React.Component {
  constructor(props) {
    debugger
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
    debugger

    if (this.props.email == "") {
      this.props.receiveError(this.emailBlankError);
      return;
    }

    this.props.getUserByEmail(this.props.email);
  }

  componentDidUpdate() {
    debugger
    if (this.props.attemptedUser) {
      debugger
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
    debugger

    return (
      <div className="auth-form-inputs-container">
        <h1>Sign in</h1>
        <h2>to continue to YallTube</h2>

        <div className="email-container">
          <label className="auth-label"> Email
            <input type="text"
              id="email-input"
              className="auth-input"
              value={this.props.email}
              onChange={this.props.updateEmail()}
            />
          </label>
          {this.renderEmailError()}
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