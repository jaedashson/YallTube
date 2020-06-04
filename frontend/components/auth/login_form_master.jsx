import React from "react";
import LoginFormEmail from "./login_form_email";
import LoginFormPassword from "./login_form_password";

class LoginFormMaster extends React.Component {
  constructor(props) {
    debugger
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
    debugger
    if (this.state.currentStep === 1) {
      debugger
      this.setState({ currentStep: 2 });
    }
  }

  _prev() {
    debugger
    if (this.state.currentStep === 2) {
      debugger
      this.setState({ currentStep: 1 });
    }
  }

  updateEmail() {
    return e => this.setState({ email: e.currentTarget.value });
  }

  renderForm() {
    debugger
    switch (this.state.currentStep) {
      case 1:
        debugger
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
        debugger
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
    debugger
    return (
      <div className="auth-form-container">
        <form>
          <p>[YallTube logo]</p>

          {this.renderForm()}
          
        </form>
      </div>
    )
  }
}

export default LoginFormMaster;