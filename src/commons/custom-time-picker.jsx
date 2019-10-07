import React from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';

import { formikValueSetter } from './handlers';
import 'react-datepicker/dist/react-datepicker.css';

const CustomTimePicker = ({
  name, formikSetFieldValue, selected, id,
}) => {
  const handleChange = formikValueSetter(formikSetFieldValue, name);

  return (
    <>
      <DatePicker
        id={id}
        onChange={handleChange}
        selected={selected}
        showTimeSelect
        showTimeSelectOnly
        name={name}
        timeCaption="Time"
        timeIntervals={15}
        className="form-control"
        placeholderText="HH:MM"
        dateFormat="h:mm aa"
        data-test="time-picker"
      />
    </>
  );
};

CustomTimePicker.defaultProps = {
  selected: null,
};

CustomTimePicker.propTypes = {
  formikSetFieldValue: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  selected: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
};

export default CustomTimePicker;
