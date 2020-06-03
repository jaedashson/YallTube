import React from "react";
import { Link } from "react-router-dom";

class LoginFormEmail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: this.props.email }
    this.handleNext = this.handleNext.bind(this);

    this.emailNotFoundError = "Couldn't find your YallTube Account";
  }

  // update() {
  //   return e => this.setState({ email: e.currentTarget.value });
  // }

  // Need to figure out how handleSubmit works
  handleNext(e) {
    debugger
    e.preventDefault();

    this.validateEmail();

    if (this.props.errors.includes(this.emailNotFoundError)) {
      return;
    }

    this.props._next
  }

  validateEmail() {
    debugger
    this.props.getUserByEmail(this.state.email);
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
    return (
      <div className="auth-form-inputs-container">
        <h1>Sign in</h1>
        <h2>to continue to YallTube</h2>

        <div className="email-container">
          <label className="auth-label"> Email
            <input type="text"
              className="auth-input"
              value={this.state.email}
              onChange={this.props.handleChange("email")}
            />
          </label>
          {this.renderEmailError()}
        </div>

        <div className="auth-options">
          <Link to="signup">Create account</Link>
          <button
            className="auth-options-button"
            onClick={this.handleNext}
          >Next</button>
        </div>
      </div>
    );
  }
};

export default LoginFormEmail;