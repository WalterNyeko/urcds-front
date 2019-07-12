import React, { Component, Fragment } from "react";
import LoginPageComponent from "../../components/auth/LoginPage";
import { addItemToLocalStorage } from "../../helpers/index";
import history from "../../helpers/history";

export default class LoginPage extends Component {
  state = {
    username: "",
    password: "",
    isLoading: false,
    errors: {}
  };

  handleInputChange = event => {
    const {
      target: { name, value }
    } = event;
    this.setState({ [name]: value });
  };

  handleLogin = async event => {
    event.preventDefault();
    const { username, password } = this.state;
    if (!username) {
      const error = { username: "Please provide your username" };
      await this.setState({ errors: error });
    } else if (!password) {
      const error = { password: "Please provide your password" };
      await this.setState({ errors: error });
    } else {
      await this.setState({ isLoading: true });
      await addItemToLocalStorage("user", username);
      history.push("/home");
    }
  };

  render() {
    const { username, password, errors, isLoading } = this.state;
    return (
      <Fragment>
        <LoginPageComponent
          handleLogin={this.handleLogin}
          username={username}
          password={password}
          isLoading={isLoading}
          errors={errors}
          handleInputChange={this.handleInputChange}
        />
      </Fragment>
    );
  }
}
