import React from 'react';
import { withFormik, Form } from 'formik';

import HospitalPatientInfo from './hospital-patient-info';
import PatientInjuryPlaceInfo from './patient-injury-place-info';
import './patient-form.css';
import RoadStatusInfo from './road-status-information';
import BodyAreaWithSeriousInjuriesAndAis from './serious-injuries-area-and-ais';
import FormSignature from './form-signature';
import PatientDisposition from './patient-disposition';
import FormButtons from './form-buttons';

const PatientForm = () => (
  <div className="page-wrapper">
    <div className="row">
      <div className="col-md-12">
        <Form>
          <div className="page-title">
            <div className="row align-items-center">
              <div className="col-sm-6">
                <h2 className="page-title-text">Patient Form</h2>
              </div>
            </div>
          </div>
          <div className="page-body">
            <HospitalPatientInfo />
            <PatientInjuryPlaceInfo />
            <RoadStatusInfo />
            <BodyAreaWithSeriousInjuriesAndAis />
            <PatientDisposition />
            <FormSignature />
            <FormButtons />
          </div>
        </Form>
      </div>
    </div>
  </div>
);

export default withFormik({
  mapPropsToValues({
    hospitalOutpatientNo,
    hospitalInpatientNo,
    village,
    age,
    injuryDate,
    formFilledBy,
    formCheckedBy,
  }) {
    return {
      hospitalOutpatientNo: hospitalOutpatientNo || '',
      hospitalInpatientNo: hospitalInpatientNo || '',
      village: village || '',
      age: age || '',
      injuryDate: injuryDate || '',
      formFilledBy: formFilledBy || '',
      formCheckedBy: formCheckedBy || '',
    };
  },
  handleSubmit(values) {
    console.log(values);
  },
})(PatientForm);
