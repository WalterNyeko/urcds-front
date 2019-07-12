import React, { Component, Fragment } from "react";
import ProfileComponent from "../../components/auth/Profile";
class Profile extends Component {
  state = {
    errors: {},
    username: "",
    passwordHint: "",
    email: "",
    phone: "",
    website: "",
    firstName: "",
    lastName: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleValidations = () => {};
  render() {
    return (
      <Fragment>
        <ProfileComponent
          state={this.state}
          handleInputChange={this.ProfileComponent}
        />
      </Fragment>
    );
  }
}
export default Profile;
