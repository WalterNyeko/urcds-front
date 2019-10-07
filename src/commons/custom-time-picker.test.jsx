import React from 'react';
import { shallow } from 'enzyme';

import CustomTimePicker from './custom-time-picker';

describe('CustomTimePicker component', () => {
  it('should render CustomTimePicker component ', () => {
    const mountCustomTimePicker = shallow(
      <CustomTimePicker
        name="injuryTime"
        formikSetFieldValue={jest.fn()}
        selected={new Date()}
        id="injuryTime"
      />,
    );
    const dataTestAttribute = mountCustomTimePicker.find(
      '[data-test="time-picker"]',
    );
    expect(mountCustomTimePicker.length).toBe(1);
    expect(dataTestAttribute.length).toBe(1);
  });
});
