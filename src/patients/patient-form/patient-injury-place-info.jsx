import React from 'react';
import { Field } from 'formik';
import PropTypes from 'prop-types';

import CustomSelect from '../../commons/custom-select';

const labelClassNames = 'border blue-header text-white';
const groupClassNames = `
  col-md-6 text-center border border-dark
  border-top-0 border-bottom-0 border-left-0`;

const options = [
  { value: '1', label: 'Kampala' },
  { value: '2', label: 'Lugazi' },
  { value: '3', label: 'Mukono' },
];

const PatientInjuryPlaceInfo = ({ setFieldValue, setFieldTouched }) => (
  <div
    className="form-row border border-dark mb-4"
    data-test="patient-injury-place-info"
  >
    <div className={groupClassNames} data-test="patient-info">
      <div className="border gray-header">Patient Information</div>
      <div className="form-row">
        <div className="col-md-6">
          <div className={labelClassNames} data-test="gender">Gender</div>
          <div className="form-check form-check-inline">
            <Field
              className="form-check-input"
              type="radio"
              name="gender"
              id="gender1"
              value="M"
            />
            <label className="form-check-label" htmlFor="gender1">
              Male
            </label>
          </div>
          <div className="form-check form-check-inline">
            <Field
              className="form-check-input"
              type="radio"
              name="gender"
              id="gender2"
              value="F"
            />
            <label className="form-check-label" htmlFor="gender2">
              Female
            </label>
          </div>
        </div>
        <div className="col-md-6">
          <div className={labelClassNames}>
            <label htmlFor="age" data-test="age">Age</label>
          </div>
          <Field
            id="age"
            name="age"
            className="form-control"
            type="text"
            placeholder="Enter age"
          />
        </div>
      </div>
    </div>
    <div className={groupClassNames} data-test="injury-place">
      <div className="border gray-header">Injury Place</div>
      <div className="form-row">
        <div className="col-md-6">
          <div className={labelClassNames}>
            <label htmlFor="district" data-test="district">District</label>
          </div>
          <CustomSelect
            onChange={setFieldValue}
            onBlur={setFieldTouched}
            options={options}
            name="district"
            id="district"
          />
        </div>
        <div className="col-md-6">
          <div className={labelClassNames}>
            <label htmlFor="village" data-test="village">Village</label>
          </div>
          <Field
            id="village"
            name="village"
            className="form-control"
            type="text"
            placeholder="Enter village name"
          />
        </div>
      </div>
    </div>
  </div>
);

PatientInjuryPlaceInfo.propTypes = {
  setFieldValue: PropTypes.func.isRequired,
  setFieldTouched: PropTypes.func.isRequired,
};

export default PatientInjuryPlaceInfo;
