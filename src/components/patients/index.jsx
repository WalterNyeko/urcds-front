import React from "react";
import PatientsTable from "./PatientsTable";

const Patients = () => (
  <div className="page-wrapper">
    <div className="page-title">
      <div className="row align-items-center">
        <div className="col-sm-6">
          <h2 className="page-title-text"> Crash Patients</h2>
        </div>
        <div className="col-sm-6 text-right">
          <div className="breadcrumbs">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>Dashboard</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="page-body">
      <div class="row">
        <div className="col-md-12">
          <PatientsTable />
        </div>
      </div>
    </div>
  </div>
);

export default Patients;
