import React from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';

import { formikValueSetter, formikTouchedSetter } from './handlers';
import 'react-datepicker/dist/react-datepicker.css';

const CustomDatePicker = ({
  name,
  selected,
  id,
  formikSetFieldValue,
  formikSetFieldTouched,
  maxDate,
}) => {
  const handleChange = formikValueSetter(formikSetFieldValue, name);
  const handleBlur = formikTouchedSetter(formikSetFieldTouched, name);

  return (
    <>
      <DatePicker
        id={id}
        onChange={handleChange}
        selected={selected}
        dateFormat="yyyy-MM-dd"
        name={name}
        className="form-control"
        placeholderText="YYYY-MM-DD e.g 2019-08-02"
        onBlur={handleBlur}
        strictParsing
        peekNextMonth
        showMonthDropdown
        showYearDropdown
        maxDate={maxDate}
        data-test="date-picker"
      />
    </>
  );
};

CustomDatePicker.defaultProps = {
  selected: null,
  maxDate: null,
};

CustomDatePicker.propTypes = {
  formikSetFieldTouched: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  formikSetFieldValue: PropTypes.func.isRequired,
  maxDate: PropTypes.instanceOf(Date),
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  selected: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
};

export default CustomDatePicker;
