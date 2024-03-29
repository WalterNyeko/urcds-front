import React from 'react';
import { Field } from 'formik';
import PropTypes from 'prop-types';

import CustomDatePicker from '../../commons/custom-date-picker';

const labelClassNames = 'border blue-header text-white';
const groupClassNames = `
  col-md-6 text-center border border-dark
  border-top-0 border-bottom-0 border-left-0`;

const FormSignature = ({
  filledByError,
  touchedFilledBy,
  checkedByError,
  touchedCheckedBy,
  filledOnError,
  touchedFilledOn,
  checkedOnError,
  touchedCheckedOn,
  setFieldValue,
  formFilledOn,
  formCheckedOn,
  setFieldTouched,
}) => (
  <div className="form-row border border-dark mb-4" data-test="form-signature">
    <div className={groupClassNames}>
      <div className="border gray-header">Form Filled By</div>
      <div className="form-row">
        <div className="col-md-6">
          <div className={labelClassNames}>
            <label htmlFor="formFilledBy" data-test="filled-by">
              Name
            </label>
          </div>
          {touchedFilledBy && filledByError && (
            <p className="error-message" data-test="filled-by-error">
              {filledByError}
            </p>
          )}
          <Field
            id="formFilledBy"
            name="formFilledBy"
            className="form-control"
            type="text"
            placeholder="Enter your name"
          />
        </div>
        <div className="col-md-6">
          <div className={labelClassNames}>
            <label htmlFor="formFilledOn" data-test="filled-on">
              Date
            </label>
          </div>
          {touchedFilledOn && filledOnError && (
            <p className="error-message" data-test="filled-on-error">
              {filledOnError}
            </p>
          )}
          <CustomDatePicker
            id="formFilledOn"
            formikSetFieldValue={setFieldValue}
            selected={formFilledOn}
            name="formFilledOn"
            placeholderText="Click to select a date"
            formikSetFieldTouched={setFieldTouched}
            maxDate={new Date()}
          />
        </div>
      </div>
    </div>
    <div className={groupClassNames}>
      <div className="border gray-header">Form Checked By</div>
      <div className="form-row">
        <div className="col-md-6">
          <div className={labelClassNames}>
            <label htmlFor="formCheckedBy" data-test="checked-by">
              Name
            </label>
          </div>
          {touchedCheckedBy && checkedByError && (
            <p className="error-message" data-test="checked-by-error">
              {checkedByError}
            </p>
          )}
          <Field
            id="formCheckedBy"
            name="formCheckedBy"
            className="form-control"
            type="text"
            placeholder="Enter your name"
          />
        </div>
        <div className="col-md-6">
          <div className={labelClassNames}>
            <label htmlFor="formCheckedOn" data-test="checked-on">
              Date
            </label>
          </div>
          {touchedCheckedOn && checkedOnError && (
            <p className="error-message" data-test="checked-on-error">
              {checkedOnError}
            </p>
          )}
          <CustomDatePicker
            id="formCheckedOn"
            formikSetFieldValue={setFieldValue}
            selected={formCheckedOn}
            name="formCheckedOn"
            placeholderText="Click to select a date"
            formikSetFieldTouched={setFieldTouched}
            maxDate={new Date()}
          />
        </div>
      </div>
    </div>
  </div>
);

FormSignature.defaultProps = {
  filledByError: null,
  touchedFilledBy: false,
  checkedByError: null,
  touchedCheckedBy: false,
  filledOnError: null,
  touchedFilledOn: false,
  checkedOnError: null,
  touchedCheckedOn: false,
  formFilledOn: null,
  formCheckedOn: null,
};

FormSignature.propTypes = {
  filledByError: PropTypes.string,
  touchedFilledBy: PropTypes.bool,
  checkedByError: PropTypes.string,
  touchedCheckedBy: PropTypes.bool,
  filledOnError: PropTypes.string,
  checkedOnError: PropTypes.string,
  setFieldValue: PropTypes.func.isRequired,
  setFieldTouched: PropTypes.func.isRequired,
  touchedFilledOn: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  touchedCheckedOn: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  formFilledOn: PropTypes.oneOfType([
    PropTypes.instanceOf(Date),
    PropTypes.string,
  ]),
  formCheckedOn: PropTypes.oneOfType([
    PropTypes.instanceOf(Date),
    PropTypes.string,
  ]),
};

export default FormSignature;
