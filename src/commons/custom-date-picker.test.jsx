import React from 'react';
import { shallow } from 'enzyme';

import CustomDatePicker from './custom-date-picker';

describe('CustomDatePicker component', () => {
  let mountCustomDatePicker;

  const setFieldValue = jest.fn();
  const formCheckedOn = new Date();
  const setFieldTouched = jest.fn();
  beforeEach(() => {
    mountCustomDatePicker = shallow(
      <CustomDatePicker
        id="formCheckedOn"
        onChange={setFieldValue}
        selected={formCheckedOn}
        name="formCheckedOn"
        placeholderText="Click to select a date"
        onBlur={setFieldTouched}
        maxDate={new Date()}
      />,
    );
  });

  it('should render date component ', () => {
    expect(mountCustomDatePicker.length).toBe(1);
  });
});
