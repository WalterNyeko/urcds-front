import React from "react";
import "../../styles/NavBar.css";
import { NavLink, Link } from "react-router-dom";
import { getItemFromLocalStorage } from "../../helpers/index";
import Routes from "../../helpers/Routes";

const NavBar = ({ isLoggedIn, handleLogout, isLoggedOut }) => {
  return (
    <nav className="navbar navbar-expand-md navbar-second pl-0 pr-0">
      <div className="container-fluid">
        <NavLink
          to={Routes.dashboard}
          className="navbar-brand font-weight-bold"
        >
          URCDS
        </NavLink>

        {isLoggedIn && (
          <div className="collapse navbar-collapse" id="navbarsExample04">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <NavLink
                  className="nav-link text-white mr-4"
                  to={Routes.dashboard}
                >
                  Dashboard
                </NavLink>
              </li>
              <li className="nav-item active">
                <NavLink
                  className="nav-link text-white mr-4"
                  to={Routes.crashes}
                >
                  Crashes
                </NavLink>
              </li>
              <li className="nav-item active">
                <NavLink
                  className="nav-link text-white mr-4"
                  to={Routes.patients}
                >
                  Patients
                </NavLink>
              </li>
              <li className="nav-item active">
                <NavLink
                  className="nav-link text-white mr-4"
                  to={Routes.analysis}
                >
                  Analysis
                </NavLink>
              </li>
              <li className="nav-item active">
                <NavLink
                  className="nav-link text-white mr-4"
                  to={Routes.mappings}
                >
                  Mapping
                </NavLink>
              </li>
              <li className="nav-item active">
                <NavLink
                  className="nav-link text-white mr-4"
                  to={Routes.reports}
                >
                  Reports
                </NavLink>
              </li>

              <ul className="navbar-nav mr-3">
                {/* <!-- Dropdown --> */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    id="navbarDropdownMenuLink2"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    href="/"
                  >
                    <span className="text-white">Administration</span>
                  </a>
                  <div
                    className="dropdown-menu dropdown-primary"
                    aria-labelledby="navbarDropdownMenuLink2"
                  >
                    <a className="dropdown-item" href="/">
                      View Users
                    </a>
                    <a className="dropdown-item" href="/">
                      Current Users
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="/">
                      System Settings
                    </a>
                    <a className="dropdown-item" href="/">
                      System Parameters
                    </a>
                  </div>
                </li>
              </ul>
            </ul>
            <ul className="navbar-nav ml-auto">
              <form className="form-inline my-2 my-md-0">
                <input
                  className="form-control search-input bg-lite"
                  type="text"
                  placeholder="Search By TAR No..."
                />
              </form>
            </ul>
            <ul className="navbar-nav ml-5 mr-5">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink1"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  href="/"
                >
                  <span className="text-white">
                    {getItemFromLocalStorage("user")}
                  </span>
                </a>
                <div
                  class="dropdown-menu dropdown-primary"
                  aria-labelledby="navbarDropdownMenuLink1"
                >
                  <Link to={Routes.profile}>
                    <a
                      href={Routes.profile}
                      className="dropdown-item text-white"
                    >
                      <span className="Link">My Profile</span>
                    </a>
                  </Link>

                  <a className="dropdown-item" onClick={handleLogout}  href="/">
                    Logout
                  </a>
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
export default NavBar;
