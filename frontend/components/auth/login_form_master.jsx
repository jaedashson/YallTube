import React from "react";

class LoginFormMaster extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      email: "",
      username: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
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
    
  }
}