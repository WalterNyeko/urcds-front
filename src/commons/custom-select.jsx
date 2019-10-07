import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

import { formikValueSetter, formikTouchedSetter } from './handlers';

const CustomSelect = ({
  name,
  formikSetFieldValue,
  formikSetFieldTouched,
  id,
  options,
  onBlurHandler,
  onChangeHandler,
  defaultValue,
}) => {
  const handleChange = onChangeHandler || formikValueSetter(formikSetFieldValue, name);

  const handleBlur = onBlurHandler || (
    formikSetFieldTouched && formikTouchedSetter(formikSetFieldTouched, name)
  );

  return (
    <Select
      id={id}
      options={options}
      onChange={handleChange}
      onBlur={handleBlur}
      data-test="selector"
      defaultValue={defaultValue}
    />
  );
};

CustomSelect.defaultProps = {
  onBlurHandler: undefined,
  onChangeHandler: undefined,
  formikSetFieldValue: undefined,
  formikSetFieldTouched: undefined,
  defaultValue: undefined,
};

CustomSelect.propTypes = {
  formikSetFieldValue: PropTypes.func,
  name: PropTypes.string.isRequired,
  formikSetFieldTouched: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onBlurHandler: PropTypes.func,
  onChangeHandler: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  defaultValue: PropTypes.object,
};

export default CustomSelect;
