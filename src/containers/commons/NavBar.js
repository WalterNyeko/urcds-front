import React, { Component, Fragment } from "react";
import NavBarComponent from "../../components/commons/NavBar";

class NavBar extends Component {
  render() {
    const { isLoggedIn, handleLogout, isLoggedOut } = this.props;
    return (
      <Fragment>
        <NavBarComponent
          isLoggedIn={isLoggedIn}
          handleLogout={handleLogout}
          isLoggedOut={isLoggedOut}
        />
      </Fragment>
    );
  }
}
export default NavBar;
