import React from 'react';
import { Field } from 'formik';

import {
  groupClassNames,
  labelClassNames,
  formCheckClassNames,
} from './class-names-constants';
import { transportModes } from '../data';

const ModeOfTransport = () => (
  <div className={groupClassNames}>
    <div className={labelClassNames} data-test="road-user-title">
      Mode of Transport
    </div>
    {transportModes.map(transportMode => (
      <div className={formCheckClassNames} key={transportMode.id}>
        <Field
          className="form-check-input"
          type="radio"
          name="transportMode"
          id={transportMode.id}
          value={transportMode.name}
        />
        <label
          className="form-check-label capitalize"
          htmlFor={transportMode.id}
        >
          {transportMode.name}
        </label>
      </div>
    ))}
  </div>
);

export default ModeOfTransport;
