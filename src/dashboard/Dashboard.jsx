import React, { Component } from "react";
import Chart from "./Charts";

class Dashboard extends Component {
  render() {
    return (
      <div>
        {/* <!-- Main Page Wrapper --> */}
        <div className="page-wrapper">
          {/* <!-- Page Title --> */}
          <div className="page-title">
            <div className="row align-items-center">
              <div className="col-sm-6">
                <h2 className="page-title-text"> Crash Statistics</h2>
              </div>
              <div className="col-sm-6 text-right">
                <div className="breadcrumbs">
                  <ul>
                    <li>Dashboard</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Page Body --> */}
          <div className="">
            <Chart />
          </div>
        </div>
      </div>
    );
  }
}
export default Dashboard;
