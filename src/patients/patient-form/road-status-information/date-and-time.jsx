import React from 'react';
import { Field } from 'formik';

import { labelClassNames } from './class-names-constants';

const dateTimeClassNames = `
  col-md-6 text-center border border-dark
  border-bottom-0`;

const DateAndTime = () => (
  <div className={dateTimeClassNames}>
    <div className={`${labelClassNames}`}>Date and Time</div>
    <div className="form-row">
      <div className="col-md-6">
        <Field
          type="date"
          name="injuryDate"
          id="injuryDate"
        />
      </div>
      <div className="col-md-6">
        <Field
          id="injuryTime"
          name="injuryTimne"
          className="form-control"
          type="time"
          placeholder="HH:MM"
        />
      </div>
    </div>
  </div>
);

export default DateAndTime;
