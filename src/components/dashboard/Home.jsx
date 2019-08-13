import React, { Component } from "react";
import Footer from "../commons/Footer";
import Dashboard from "./Dashboard";
import Crashes from "../crashes/Crashes";

class Home extends Component {
  state = {
    showDashboard: true,
    showCrashes: false
  };

  setStateValues = stateValue => {
    Object.keys(this.state).forEach(stateVariable => {
      stateVariable === `${stateValue.toString()}`
        ? this.setState({ [stateVariable]: true })
        : this.setState({ [stateVariable]: false });
    });
  };

  makeCrashesVisible = stateValue => {
    this.setStateValues(stateValue);
  };

  makeDashboardVisible = stateValue => {
    this.setStateValues(stateValue);
  };

  showCrashes = () => {
    this.makeCrashesVisible("showCrashes");
  };

  showDashboard = () => {
    this.makeDashboardVisible("showDashboard");
  };

  render() {
    return (
      <div>
        <div className="wrapper">
          {/* <!-- Main Container --> */}
          <div id="main-wrapper" className="menu-fixed page-hdr-fixed">
            {/* <!-- Menu Wrapper --> */}
            <div className="menu-wrapper">
              <div className="menu">
                {/* <!-- Menu Container --> */}
                <ul className="side-bar-items">
                  <li className="menu-title">RCDS</li>
                  <li className="active" onClick={this.showDashboard}>
                    <a>
                      <i className="fa fa-home" />
                      <span>Dashboard</span>
                    </a>
                  </li>
                  <li className="" onClick={this.showCrashes}>
                    <a>
                      <i className="fa fa-motorcycle" />
                      <span>Crashes</span>
                    </a>
                  </li>
                  <li className="has-sub">
                    <a>
                      <i className="fa fa-users" />
                      <span>Patients</span>
                    </a>
                  </li>
                  <li className="has-sub">
                    <a>
                      <i className="fa fa-chart-bar" />
                      <span>Analysis</span>
                    </a>
                  </li>
                  <li className="has-sub">
                    <a>
                      <i className="fa fa-map-marker" />
                      <span>Mapping</span>
                    </a>
                  </li>
                  <li className="has-sub">
                    <a>
                      <i className="fa fa-file" />
                      <span>Report</span>
                    </a>
                  </li>
                  <li className="has-sub">
                    <a>
                      <i className="icon-screen-desktop" />
                      <span>Administration</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- Page header --> */}
            <div className="page-hdr">
              <div className="row align-items-center">
                <div className="col-4 col-md-7 page-hdr-left">
                  {/* <!-- Logo Container --> */}
                  <div id="logo">
                    <div className="tbl-cell logo-icon">
                      <a href="#">
                        <img src="urcds-logo-single.png" alt="" />
                      </a>
                    </div>
                    <div className="tbl-cell logo">
                      <a href="#">
                        <img src="urcds-logo.png" />
                      </a>
                    </div>
                  </div>
                  <div className="page-menu menu-icon">
                    <a className="animated menu-close">
                      <i className="far fa-hand-point-left text-white" />
                    </a>
                  </div>
                  <div className="page-menu page-fullscreen">
                    <a>
                      <i className="fas fa-expand text-white" />
                    </a>
                  </div>
                  <div className="page-search">
                    <input type="text" placeholder="Search By TAR...." />
                  </div>
                </div>
                <div className="col-8 col-md-5 page-hdr-right">
                  <div className="page-hdr-desktop">
                    <div className="page-menu menu-dropdown-wrapper menu-user">
                      <a className="user-link">
                        <span className="tbl-cell user-name pr-3">
                          <span className="pl-2 text-white">Walter Nyeko</span>
                        </span>
                        <span className="tbl-cell avatar">
                          <img src="uploads/author-4.jpg" alt="" />
                        </span>
                      </a>
                      <div className="menu-dropdown menu-dropdown-right menu-dropdown-push-right">
                        <div className="arrow arrow-right" />
                        <div className="menu-dropdown-inner">
                          <div className="menu-dropdown-head pb-3">
                            <div className="tbl-cell">
                              <img src="uploads/author-1.jpg" alt="" />
                              {/* <!-- <i className="fa fa-user-circle"></i> --> */}
                            </div>
                            <div className="tbl-cell pl-2 text-left">
                              <p className="m-0 font-18">Walter Nyeko</p>
                              <p className="m-0 font-14">Demonstration</p>
                            </div>
                          </div>
                          <div className="menu-dropdown-body">
                            <ul className="menu-nav">
                              <li>
                                <a href="#">
                                  <i className="icon-user" />
                                  <span>My Profile</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="menu-dropdown-footer text-left">
                            <ul className="menu-nav">
                              <li>
                                <a href="#">
                                  <i className="fa fa-forward" />
                                  <span>Logout</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="page-hdr-mobile">
                    <div className="page-menu open-mobile-search">
                      <a href="#">
                        <i className="icon-magnifier" />
                      </a>
                    </div>
                    <div className="page-menu open-left-menu">
                      <a href="#">
                        <i className="icon-menu" />
                      </a>
                    </div>
                    <div className="page-menu oepn-page-menu-desktop">
                      <a href="#">
                        <i className="icon-options-vertical" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {this.state.showDashboard && <Dashboard />}
            {this.state.showCrashes && <Crashes />}

            {/* <!-- Page Footer --> */}

            <div className="page-ftr">
              <div>
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
