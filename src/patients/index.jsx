import React from 'react';
import PatientsTable from './patients-table';

const Patients = () => (
  <div className="page-wrapper">
    <div className="page-title">
      <div className="row align-items-center">
        <div className="col-sm-6">
          <h2 className="page-title-text" data-test="crash-patients-title">
            Crash Patients
          </h2>
        </div>
        <div className="col-sm-6 text-right">
          <div className="breadcrumbs">
            <ul>
              <li>
                <p>Home</p>
              </li>
              <li>Dashboard</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="page-body">
      <div className="row">
        <div className="col-md-12">
          <PatientsTable />
        </div>
      </div>
    </div>
  </div>
);

export default Patients;
