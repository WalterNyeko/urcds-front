import React from 'react';
import PropTypes from 'prop-types';

import ModeOfTransport from './mode-of-transport';
import RoadUser from './road-user';
import Counterpart from './counterpart';
import BeltOrHelmetUsed from './belt-or-helmet-used';
import { labelClassNames } from './class-names-constants';
import CustomDatePicker from '../../../commons/custom-date-picker';
import CustomTimePicker from '../../../commons/custom-time-picker';

const dateTimeClassNames = `
  col-md-6 text-center border border-dark
  border-bottom-0`;

const RoadStatusInfo = ({
  setFieldValue,
  injuryDate,
  injuryTime,
  setFieldTouched,
  touchedInjuryDate,
  injuryDateError,
}) => (
  <>
    <div className="form-row">
      <div className={dateTimeClassNames}>
        <div className={`${labelClassNames}`} data-test="date-time-title">
          Date and Time
        </div>
        <div className="form-row">
          <div className="col-md-6">
            {touchedInjuryDate && injuryDateError && (
              <p className="error-message" data-test="injury-date-error">
                {injuryDateError}
              </p>
            )}
            <CustomDatePicker
              id="injuryDate"
              formikSetFieldValue={setFieldValue}
              selected={injuryDate}
              name="injuryDate"
              placeholderText="Click to select a date"
              formikSetFieldTouched={setFieldTouched}
              maxDate={new Date()}
            />
          </div>
          <div className="col-md-6">
            <CustomTimePicker
              name="injuryTime"
              formikSetFieldValue={setFieldValue}
              selected={injuryTime}
              id="injuryTime"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="form-row border border-dark mb-4">
      <ModeOfTransport />
      <RoadUser />
      <Counterpart />
      <BeltOrHelmetUsed />
    </div>
  </>
);

RoadStatusInfo.defaultProps = {
  injuryDate: null,
  injuryDateError: null,
  touchedInjuryDate: false,
};

RoadStatusInfo.propTypes = {
  setFieldValue: PropTypes.func.isRequired,
  setFieldTouched: PropTypes.func.isRequired,
  injuryDateError: PropTypes.string,
  touchedInjuryDate: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  injuryDate: PropTypes.oneOfType([
    PropTypes.instanceOf(Date),
    PropTypes.string,
  ]),
  injuryTime: PropTypes.oneOfType([
    PropTypes.instanceOf(Date),
    PropTypes.string,
  ]).isRequired,
};

export default RoadStatusInfo;
