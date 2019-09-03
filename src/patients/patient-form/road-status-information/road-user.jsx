import React from 'react';
import { Field } from 'formik';

import {
  groupClassNames,
  labelClassNames,
  formCheckClassNames,
} from './class-names-constants';
import { roadUsers } from '../data';

const RoadUser = () => (
  <div className={groupClassNames}>
    <div className={labelClassNames}>Road User</div>
    {roadUsers.map(roadUser => (
      <div className={formCheckClassNames} key={roadUser.id}>
        <Field
          className="form-check-input"
          type="radio"
          name="roadUser"
          id={roadUser.id}
          value={roadUser.name}
        />
        <label className="form-check-label capitalize" htmlFor={roadUser.id}>
          {roadUser.name}
        </label>
      </div>
    ))}
  </div>
);

export default RoadUser;
