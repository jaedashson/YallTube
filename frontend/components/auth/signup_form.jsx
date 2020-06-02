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
    this.passwordConfirmError = "Those passwords didn't match. Try again.";
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    debugger

    if (this.state.password !== this.state.passwordConfirm) {
      this.props.receiveErrors([this.passwordConfirmError]);
      return;
    }

    const user = {
      username,
      email,
      password
    };
    this.props.signup(user);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  renderPasswordConfirmErrors() {
    let error = null;

    if (this.props.errors.includes(this.passwordConfirmError)) {
      error = this.passwordConfirmError;
    }

    return (
      <p>{error}</p>
    );
  }

  render () {
    return (
      <div className="signup-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <p>YallTube</p>
          <h1>Create your YallTube Account</h1>
          <label className="auth-label"> Username
            <input type="text"
              className="auth-input"
              value={this.state.username}
              onChange={this.update("username")}
            />
          </label>
          <label className="auth-label"> Your email address
            <input type="text"
              className="auth-input"
              value={this.state.email}
              onChange={this.update("email")}
            />
          </label>
          <div className="password-confirm">
            <div>
              <label className="auth-label"> Password
                <input type="password"
                  className="auth-input"
                  value={this.state.password}
                  onChange={this.update("password")}
                />
              </label>
            </div>
            <div>
              <label className="auth-label"> Confirm
                <input type="password"
                  className="auth-input"
                  value={this.state.passwordConfirm}
                  onChange={this.update("passwordConfirm")}
                />
              </label>
              {this.renderPasswordConfirmErrors()}
            </div>
          </div>

          <div className="auth-options">
            <Link to="/login">Sign in instead</Link>
            <button
              className="auth-options-button"
              onClick={this.handleSubmit}  
            >Next</button>
          </div>
        </form>
      </div>
    )
  }
};

export default SignupForm;