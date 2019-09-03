import React from 'react';
import { Field } from 'formik';

const labelClassNames = 'border blue-header text-white';
const groupClassNames = `
  col-md-4 text-center border border-dark
  border-top-0 border-bottom-0 border-left-0`;

const HospitalPatientInfo = () => (
  <div className="form-row border border-dark mb-4">
    <div className={groupClassNames}>
      <div className={labelClassNames}>
        <label htmlFor="hospital">Hospital</label>
      </div>

      <Field
        id="hospital"
        component="select"
        className="form-control"
        name="hospital"
        defaultValue="Default"
      >
        <option value="Default" disabled>
          -- Select Hospital --
        </option>
        <option value="1">Masaka referral Hospital</option>
        <option value="2">Mulago Hospital</option>
        <option value="3">St. Mary&apos;s Hospital Lacor</option>
      </Field>
    </div>
    <div className={groupClassNames}>
      <div className={labelClassNames}>
        <label htmlFor="hospitalOutpatientNo">Outpatient No.</label>
      </div>
      <Field
        id="hospitalOutpatientNo"
        name="hospitalOutpatientNo"
        className="form-control"
        type="text"
        placeHolder="Enter outpatient number. e.g 2536b"
      />
    </div>
    <div className="col-md-4 text-center">
      <div className={labelClassNames}>
        <label htmlFor="hospitalInpatientNo">Inpatient No.</label>
      </div>
      <Field
        id="hospitalInpatientNo"
        name="hospitalInpatientNo"
        className="form-control"
        type="text"
        placeHolder="Enter inpatient number. e.g 2536b"
      />
    </div>
  </div>
);

export default HospitalPatientInfo;
