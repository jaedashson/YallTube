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
      password: ""
    };

    this._next = this._next.bind(this);
    this._prev = this._prev.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
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

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    debugger
    e.preventDefault();
    this.props.clearErrors(); // This triggers state change and mSTP.  Then rest of #handleSubmit continues
    let valid = true;

    // validations here

    if (valid) {
      debugger
      const user = {
        username: this.props.attemptedUser.username,
        password: this.state.password
      };
      this.props.login(user);
    }
  }

  renderForm() {
    debugger
    switch (this.state.currentStep) {
      case 1:
        debugger
        return (
          <LoginFormEmail
            currentStep={this.state.currentStep}
            update={this.update}
            email={this.state.email}
            _next={this._next}
            getUserByEmail={this.props.getUserByEmail}
            attemptedUser={this.props.attemptedUser}
            errors={this.props.errors}
          />
        );
      case 2:
        debugger
        return (
          <LoginFormPassword
            currentStep={this.state.currentStep}
            update={this.update}
            attemptedUser={this.props.attemptedUser}
            clearEmailAttempt={this.props.clearEmailAttempt}
            _prev={this._prev}
            handleSubmit={this.handleSubmit}
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