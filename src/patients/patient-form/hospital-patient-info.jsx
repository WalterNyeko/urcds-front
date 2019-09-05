import React from 'react';
import { Field } from 'formik';
import PropTypes from 'prop-types';

import CustomSelect from '../../commons/custom-select';

const labelClassNames = 'border blue-header text-white';
const groupClassNames = `
  col-md-4 text-center border border-dark
  border-top-0 border-bottom-0 border-left-0`;

const options = [
  { value: '1', label: 'Masaka referral Hospital' },
  { value: '2', label: 'Mulago Hospital' },
  { value: '3', label: 'St. Marys Hospital Lacor' },
];

const HospitalPatientInfo = ({ setFieldValue, setFieldTouched }) => (
  <div
    className="form-row border border-dark mb-4"
    data-test="hospital-patient-info"
  >
    <div className={groupClassNames}>
      <div className={labelClassNames}>
        <label htmlFor="hospital" data-test="hospital">
          Hospital
        </label>
      </div>
      <CustomSelect
        onChange={setFieldValue}
        onBlur={setFieldTouched}
        options={options}
        name="hospital"
        id="hospital"
      />
    </div>
    <div className={groupClassNames}>
      <div className={labelClassNames}>
        <label htmlFor="hospitalOutpatientNo" data-test="outpatient-no">
          Outpatient No.
        </label>
      </div>
      <Field
        id="hospitalOutpatientNo"
        name="hospitalOutpatientNo"
        className="form-control"
        type="text"
        placeholder="Enter outpatient number. e.g 2536b"
      />
    </div>
    <div className="col-md-4 text-center">
      <div className={labelClassNames}>
        <label htmlFor="hospitalInpatientNo" data-test="inpatient-no">
          Inpatient No.
        </label>
      </div>
      <Field
        id="hospitalInpatientNo"
        name="hospitalInpatientNo"
        className="form-control"
        type="text"
        placeholder="Enter inpatient number. e.g 2536b"
      />
    </div>
  </div>
);

HospitalPatientInfo.propTypes = {
  setFieldValue: PropTypes.func.isRequired,
  setFieldTouched: PropTypes.func.isRequired,
};

export default HospitalPatientInfo;
