import React from 'react';

const FormButtons = () => (
  <div className="form-row mb-4">
    <div className="col-md-6 text-left">
      <button type="button" className="btn btn-primary cancel">
        Cancel
      </button>
    </div>
    <div className="col-md-6 text-right">
      <button type="submit" className="btn btn-primary submit">
        Submit
      </button>
    </div>
  </div>
);

export default FormButtons;
