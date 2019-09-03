import React from 'react';
import { Field } from 'formik';

import {
  groupClassNames,
  labelClassNames,
  formCheckClassNames,
} from './class-names-constants';
import { beltOrHelmetOptions } from '../data';

const BeltOrHelmetUsed = () => (
  <div className={groupClassNames}>
    <div className={labelClassNames}>Belt or Helmet Used</div>
    {beltOrHelmetOptions.map(beltOrHelmetOption => (
      <div className={formCheckClassNames} key={beltOrHelmetOption.id}>
        <Field
          className="form-check-input"
          type="radio"
          name="beltUsed"
          id={beltOrHelmetOption.id}
          value={beltOrHelmetOption.name}
        />
        <label className="form-check-label" htmlFor={beltOrHelmetOption.id}>
          {beltOrHelmetOption.name}
        </label>
      </div>
    ))}
  </div>
);

export default BeltOrHelmetUsed;
