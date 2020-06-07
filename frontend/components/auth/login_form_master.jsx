import React from "react";
import LoginFormEmail from "./login_form_email";
import LoginFormPassword from "./login_form_password";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class LoginFormMaster extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      email: "",
    };

    this._next = this._next.bind(this);
    this._prev = this._prev.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
  }

  _next() {
    if (this.state.currentStep === 1) {
      this.setState({ currentStep: 2 });
    }
  }

  _prev() {
    if (this.state.currentStep === 2) {
      this.setState({ currentStep: 1 });
    }
  }

  updateEmail() {
    return e => this.setState({ email: e.currentTarget.value });
  }

  renderForm() {
    switch (this.state.currentStep) {
      case 1:
        return (
          <LoginFormEmail
            currentStep={this.state.currentStep}
            updateEmail={this.updateEmail}
            email={this.state.email}
            _next={this._next}
            getUserByEmail={this.props.getUserByEmail}
            attemptedUser={this.props.attemptedUser}
            errors={this.props.errors}
            receiveError={this.props.receiveError}
            clearErrors={this.props.clearErrors}
          />
        );
      case 2:
        return (
          <LoginFormPassword
            currentStep={this.state.currentStep}
            attemptedUser={this.props.attemptedUser}
            clearEmailAttempt={this.props.clearEmailAttempt}
            _prev={this._prev}
            login={this.props.login}
            errors={this.props.errors}
            receiveError={this.props.receiveError}
            clearErrors={this.props.clearErrors}
          />
        );
    }
  }

  render() {
    return (
      <div className="auth-page">
        <div className="auth-form-container">
          <div className="yalltube-logo yalltube-logo-auth">
            <FontAwesomeIcon icon={["fab", "youtube"]} className="yalltube-logo-icon" />
            <span>YallTube</span>
          </div>
          <form className="auth-form">
            {this.renderForm()}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginFormMaster;