import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      email: '',
      password: '',
      enableSubmit: false,
    };

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.updateSubmitButton = this.updateSubmitButton.bind(this);
  }

  updateSubmitButton() {
    const { email, password } = this.state;
    if (email && password) {
      this.setState({ enableSubmit: true });
    } else {
      this.setState({ enableSubmit: false });
    }
  }

  componentDidMount() {
    this.updateSubmitButton();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.email !== this.state.email ||
      prevState.password !== this.state.password
    ) {
      this.updateSubmitButton();
    }
  }

  handleLoginSubmit(e) {
    e.preventDefault();
    this.setState({ isLoggedIn: true });
  }

  handleChangeEmail(e) {
    this.setState({ email: e.target.value });
  }

  handleChangePassword(e) {
    this.setState({ password: e.target.value });
  }

  render() {
    const { email, password, enableSubmit } = this.state;

    return (
      <form onSubmit={this.handleLoginSubmit}>
        <p>Login to access the full dashboard</p>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder="Email"
            onChange={this.handleChangeEmail}
            value={email}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            onChange={this.handleChangePassword}
            value={password}
          />
        </div>
        <input type="submit" disabled={!enableSubmit} value="OK" />
      </form>
    );
  }
}

export default Login;
