import React, { Component } from "react";

class PatientsForm extends Component {
  render() {
    const { showDashboard, showPatients } = this.props;
    return (
      <div className="page-wrapper">
        {/* <!-- Page Title --> */}
        <div className="page-title">
          <div className="row align-items-center">
            <div className="col-sm-6">
              <h2 className="page-title-text">Patients Form</h2>
            </div>
            <div className="col-sm-6 text-right">
              <div className="breadcrumbs">
                <ul>
                  <li>
                    <a href="#" onClick={showDashboard}>
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={showPatients}>
                      Patients
                    </a>
                  </li>
                  <li>Patients Form</li>
                </ul>
              </div>
            </div>
          </div>
          {/* <!-- Page Body --> */}
          <div className="default-body">{/* Test */}</div>
        </div>
      </div>
    );
  }
}
export default PatientsForm;
