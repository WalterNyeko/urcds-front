import React, { Component } from "react";

class Charts extends Component {
  render() {
    return (
      <div class="page-body">
        <div class="row">
          <div class="col-12">
            <div class="alert alert-icon alert-primary alert-dismissible fade show">
              <div class="alert--icon">
                <i class="icon-exclamation" />
              </div>
              <div class="alert-text">
                Simple charts that give you a general overview of the most
                common cause of crashes, and the severity levels of these
                crashes
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="panel panel-default">
              <div class="panel-head">
                <div class="panel-title">
                  <span class="panel-title-text">Main Causes of Crash</span>
                </div>
              </div>
              <div class="panel-body">
                <div class="panel-wrapper">
                  <canvas id="chart10" width="400" height="350" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="panel panel-default">
              <div class="panel-head">
                <div class="panel-title">
                  <span class="panel-title-text">Crash Severity</span>
                </div>
              </div>
              <div class="panel-body">
                <div class="panel-wrapper">
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
