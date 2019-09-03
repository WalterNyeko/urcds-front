import React from 'react';
import { Field } from 'formik';

import { formCheckClassNames } from './road-status-information/class-names-constants';
import { patientDispositons, statusesAfter30Days } from './data';

const labelClassNames = 'border blue-header text-white';
const groupClassNames = `
  col-md-6 text-center border border-dark
  border-top-0 border-bottom-0 border-left-0`;

const PatientDisposition = () => (
  <div className="form-row border border-dark mb-4">
    <div className={groupClassNames}>
      <div className={labelClassNames}>
        <label htmlFor="hospital">Patient Disposition</label>
      </div>
      {patientDispositons.map(patientDispositon => (
        <div className={formCheckClassNames} key={patientDispositon.id}>
          <Field
            className="form-check-input"
            type="radio"
            name="patientDispositon"
            id={patientDispositon.id}
            value={patientDispositon.name}
          />
          <label
            className="form-check-label capitalize"
            htmlFor={patientDispositon.id}
          >
            {patientDispositon.name}
          </label>
        </div>
      ))}
    </div>
    <div className={groupClassNames}>
      <div className={labelClassNames}>
        <label htmlFor="hospitalOutpatientNo">Status After 30 Days</label>
      </div>
      {statusesAfter30Days.map(patientStatus => (
        <div className={formCheckClassNames} key={patientStatus.id}>
          <Field
            className="form-check-input"
            type="radio"
            name="patientStatus"
            id={patientStatus.id}
            value={patientStatus.name}
          />
          <label className="form-check-label" htmlFor={patientStatus.id}>
            {patientStatus.name}
          </label>
        </div>
      ))}
    </div>
  </div>
);

export default PatientDisposition;
