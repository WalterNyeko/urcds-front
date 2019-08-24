import React from 'react';

const Footer = () => (
  <footer className="text-white-50 sticky-bottom">
    <div className="row">
      <div className="col-md-4 version">
        <label className="text-dark pt-3">
          Version 2.0-SNAPSHOT | Logged in as : Admin
        </label>
      </div>
      <div className="col-md-4" />
      <div className="col-md-4 pr-2">
        <div className="row">
          <div className="col-md-8" />
          <div className="col-md-4 p-2">
            <img
              src={require('../images/ugandan.png')}
              alt="ug"
              style={{ width: '40px', height: '40px' }}
              className="uganda-flag images-uganda"
            />
            <img
              src={require('../images/proudly_ugandan.png')}
              alt="ug"
              style={{ width: '70px', height: '20px' }}
              className="proudly-ugandan images-uganda  pr-2"
            />
          </div>
        </div>
      </div>
    </div>
  </footer>
);
export default Footer;
