import React from "react";
import LoginFormEmail from "./login_form_email";

class LoginFormMaster extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      email: "",
      username: this.props.attemptedUser.username,
      password: ""
    };

    this._next = this._next.bind(this);
    this._prev = this._prev.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  _next() {
    debugger
    if (this.state.currentStep === 1) {
      this.setState({ currentStep: 2 });
    }
  }

  _prev() {
    debugger
    if (this.state.currentStep === 2) {
      this.setState({ currentStep: 1 });
    }
  }

  renderNextButton() {
    if (this.state.currentStep === 1) {
      return (
        <button
          className="auth-options-button"
          onClick={this._next}
        >
          Next
        </button>
      );
    }

    return null;
  }

  // renderPrevButton() {
  //   if (this.state.currentStep === 2) {
  //     return (
  //       <button
  //         className="auth-options-button"
  //         onClick={this._prev}
  //       >
  //         Back
  //       </button>
  //     )
  //   }
  // }

  handleChange(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    debugger
    e.preventDefault();
    this.props.clearErrors();
    let valid = true;

    if (valid) {
      const user = {
        username: this.state.username,
        password: this.state.password
      };
      this.props.login(user);
    }
  }

  render() {
    return (
      <div className="auth-form-container">
        <form onSubmit={this.handleSubmit}>
          <p>[YallTube logo]</p>

          <LoginFormEmail
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            email={this.state.email}
            _next={this._next}
            getUserByEmail={this.props.getUserByEmail}
            errors={this.props.errors}
          />

          <LoginFormPassword
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            user={this.props.attemptedUser}
            _prev={this._prev}
          />
        </form>
      </div>
    )
  }
}