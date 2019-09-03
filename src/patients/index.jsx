import React from 'react';
import { Link } from 'react-router-dom';

import PatientsTable from './patients-table';
import { PATIENT_FORM } from '../constants/routes';
import './style.css';

const Patients = () => (
  <div className="page-wrapper">
    <div className="page-title">
      <div className="row align-items-center">
        <div className="col-sm-6">
          <h2 className="page-title-text" data-test="crash-patients-title">
            Crash Patients
          </h2>
        </div>
        <div className="col-sm-6">
          <span className="h4 float-right add-link ">
            <Link to={PATIENT_FORM}>Add Patient</Link>
          </span>
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
