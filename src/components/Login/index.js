import { Component } from "react";
import Cookies from "js-cookie";
import "./index.css";

class Login extends Component {
  state = {
    username: "",
    password: "",
    email: "",
  };

  onChangeUsername = (event) => {
    this.setState({ username: event.target.value });
  };

  onChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  onChangeEmail = (event) => {
    this.setState({ password: event.target.value });
  };

  onSuccess = (jwtToken) => {
    const { history } = this.props;

    Cookies.set("jwt_token", jwtToken, {
      expires: 30,
      path: "/",
    });
    history.replace("/");
  };

  onFailure = (errorMsg) => {
    console.log(errorMsg);
    this.setState({ showSubmitError: true, errorMsg });
  };

  onSubmitForm = async (event) => {
    event.preventDefault();
    const { username, password, email } = this.state;
    const userDetails = { username, password, email };
    const url = "https://localhost:3001/login";
    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
    };
    const response = await fetch(url, options);
    const data = await response.json();
    if (response.ok === true) {
      this.onSuccess(data.jwt_token);
    } else {
      this.onFailure(data.error_msg);
    }
  };

  render() {
    return (
      <div className="app-container">
        <h1>Login Page</h1>
        <form className="form" onSubmit={this.onSubmitForm}>
          <label htmlFor="username" className="label">
            Username
          </label>
          <br />
          <input
            id="username"
            type="text"
            className="input"
            onChange={this.onChangeUsername}
          />
          <br />
          <label htmlFor="password" className="label">
            Password
          </label>
          <br />
          <input
            id="password"
            type="password"
            className="input"
            onChange={this.onChangePassword}
          />
          <br />
          <label htmlFor="email" className="label">
            Email
          </label>
          <br />
          <input
            id="email"
            type="text"
            className="input"
            onChange={this.onChangeEmail}
          />
          <br />
          <button type="submit">Sign in</button>
        </form>
      </div>
    );
  }
}

export default Login;
