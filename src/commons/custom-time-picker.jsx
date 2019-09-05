import React from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';

import { onChangeHandler } from './handlers';
import 'react-datepicker/dist/react-datepicker.css';

const CustomTimePicker = ({
  name, onChange, selected, id,
}) => {
  const handleChange1 = onChangeHandler(onChange, name);

  return (
    <>
      <DatePicker
        id={id}
        onChange={handleChange1}
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
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  selected: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
};

export default CustomTimePicker;
