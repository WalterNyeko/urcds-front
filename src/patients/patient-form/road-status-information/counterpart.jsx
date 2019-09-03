import React from 'react';
import { Field } from 'formik';

import {
  groupClassNames,
  labelClassNames,
  formCheckClassNames,
} from './class-names-constants';
import { transportModes } from '../data';

const counterpartTransportModes = [
  { name: 'no collision', id: 'ido' },
  ...transportModes,
];

const Counterpart = () => (
  <div className={groupClassNames}>
    <div className={labelClassNames}>Counterpart</div>
    {counterpartTransportModes.map(counterpartTransportMode => (
      <div className={formCheckClassNames} key={counterpartTransportMode.id}>
        <Field
          className="form-check-input"
          type="radio"
          name="counterpartTransportMode"
          id={counterpartTransportMode.id}
          value={counterpartTransportMode.name}
        />
        <label
          className="form-check-label capitalize"
          htmlFor={counterpartTransportMode.id}
        >
          {counterpartTransportMode.name}
        </label>
      </div>
    ))}
  </div>
);

export default Counterpart;
