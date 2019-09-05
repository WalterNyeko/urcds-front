import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

import { onChangeHandler, onBlurHandler } from './handlers';

const CustomSelect = ({
  name, onChange, onBlur, id, options,
}) => {
  const handleChange = onChangeHandler(onChange, name);

  const handleBlur = onBlurHandler(onBlur, name);

  return (
    <Select
      id={id}
      options={options}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  );
};

CustomSelect.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default CustomSelect;
