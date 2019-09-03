import React from 'react';
import { Field } from 'formik';
import PropTypes from 'prop-types';

const labelClassNames = 'border blue-header text-white';
const groupClassNames = `
  col-md-6 text-center border border-dark
  border-top-0 border-bottom-0 border-left-0`;

const SignatureFields = ({ name }) => (
  <div className="form-row">
    <div className="col-md-6">
      <div className={labelClassNames}>
        <label htmlFor={`${name}By`}>Name</label>
      </div>
      <Field
        id={`${name}By`}
        name={`${name}By`}
        className="form-control"
        type="text"
        placeHolder="Enter your name"
      />
    </div>
    <div className="col-md-6">
      <div className={labelClassNames}>
        <label htmlFor={`${name}On`}>Date</label>
      </div>
      <Field type="date" name={`${name}On`} id={`${name}On`} />
    </div>
  </div>
);

const FormSignature = () => (
  <div className="form-row border border-dark mb-4">
    <div className={groupClassNames}>
      <div className="border gray-header">Form Filled By</div>
      <SignatureFields name="formFilled" />
    </div>
    <div className={groupClassNames}>
      <div className="border gray-header">Form Checked By</div>
      <SignatureFields name="formChecked" />
    </div>
  </div>
);

SignatureFields.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FormSignature;
