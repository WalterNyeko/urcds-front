import React from 'react';
import { shallow } from 'enzyme';

import CustomSelect from './custom-select';

describe('CustomSelect component', () => {
  it('should render CustomSelect component ', () => {
    const options = [
      { value: 'value1', label: 'label1' },
      { value: 'value2', label: 'label2' },
    ];

    const mountCustomSelect = shallow(
      <CustomSelect
        formikSetFieldValue={jest.fn()}
        formikSetFieldTouched={jest.fn()}
        options={options}
        name="hospital"
        id="hospital"
      />,
    );

    const dataTestAttribute = mountCustomSelect.find(
      '[data-test="selector"]',
    );
    expect(mountCustomSelect.length).toBe(1);
    expect(dataTestAttribute.length).toBe(1);
  });
});
