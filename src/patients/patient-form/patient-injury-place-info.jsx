import React from 'react';
import { Field } from 'formik';

const labelClassNames = 'border blue-header text-white';
const groupClassNames = `
  col-md-6 text-center border border-dark
  border-top-0 border-bottom-0 border-left-0`;

const PatientInjuryPlaceInfo = () => (
  <div className="form-row border border-dark mb-4">
    <div className={groupClassNames}>
      <div className="border gray-header">Patient Information</div>
      <div className="form-row">
        <div className="col-md-6">
          <div className={labelClassNames}>Gender</div>
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
            <label htmlFor="age">Age</label>
          </div>
          <Field
            id="age"
            name="age"
            className="form-control"
            type="text"
            placeHolder="Enter age"
          />
        </div>
      </div>
    </div>
    <div className={groupClassNames}>
      <div className="border gray-header">Injury Place</div>
      <div className="form-row">
        <div className="col-md-6">
          <div className={labelClassNames}>
            <label htmlFor="hospital">District</label>
          </div>

          <Field
            id="district"
            component="select"
            className="form-control"
            name="district"
            defaultValue="Default"
          >
            <option value="Default" disabled>
              -- Select District --
            </option>
            <option value="1">Kampala</option>
            <option value="2">Lugazi</option>
            <option value="3">Mukono</option>
          </Field>
        </div>
        <div className="col-md-6">
          <div className={labelClassNames}>
            <label htmlFor="village">Village</label>
          </div>
          <Field
            id="village"
            name="village"
            className="form-control"
            type="text"
            placeHolder="Enter village name"
          />
        </div>
      </div>
    </div>
  </div>
);

export default PatientInjuryPlaceInfo;
