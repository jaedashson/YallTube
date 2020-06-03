import React from "react";
import { Link } from "react-router-dom";

class LoginFormEmail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update() {
    return e => this.setState({ email: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.prop
  }

  render() {
    return (
      <div className="auth-form-container">
        <form>
          <p>[YallTube logo]</p>
          <h1>Sign in</h1>
          <h2>to continue to YallTube</h2>

          <div className="email-container">
            <label className="auth-label"> Email
              <input type="text"
                className="auth-input"
                value={this.state.email}
                onChange={this.update()}
              />
            </label>
            {this.renderEmailError()}
          </div>

        </form>

      </div>
    );
  }
}

export default LoginFormEmail;