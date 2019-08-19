import React, { Component } from "react";

class Charts extends Component {
  render() {
    return (
      <div className="page-body">
        <div className="row">
          <div className="col-12">
            <div className="alert alert-icon alert-primary alert-dismissible fade show">
              <div className="alert--icon">
                <i className="icon-exclamation" />
              </div>
              <div className="alert-text">
                Simple charts that give you a general overview of the most
                common cause of crashes, and the severity levels of these
                crashes
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="panel panel-default">
              <div className="panel-head">
                <div className="panel-title">
                  <span className="panel-title-text">Main Causes of Crash</span>
                </div>
              </div>
              <div className="panel-body">
                <div className="panel-wrapper">
                  <canvas id="chart10" width="400" height="350" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="panel panel-default">
              <div className="panel-head">
                <div className="panel-title">
                  <span className="panel-title-text">Crash Severity</span>
                </div>
              </div>
              <div className="panel-body">
                <div className="panel-wrapper">
                  <canvas id="chart11" width="400" height="350" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Charts;
