import React from 'react';
import { shallow } from 'enzyme';

import CustomDatePicker from './custom-date-picker';

describe('CustomDatePicker component', () => {
  it('should render CustomDatePicker component ', () => {
    const mountCustomDatePicker = shallow(
      <CustomDatePicker
        id="formCheckedOn"
        onChange={jest.fn()}
        selected={new Date()}
        name="formCheckedOn"
        placeholderText="Click to select a date"
        onBlur={jest.fn()}
        maxDate={new Date()}
      />,
    );

    const dataTestAttribute = mountCustomDatePicker.find(
      '[data-test="date-picker"]',
    );
    expect(mountCustomDatePicker.length).toBe(1);
    expect(dataTestAttribute.length).toBe(1);
  });
});
