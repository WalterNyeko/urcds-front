import React from 'react';
import { shallow } from 'enzyme';

import FormButtons from './form-buttons';

describe('FormButtons component', () => {
  it('should render form buttons', () => {
    const mountFormButtons = shallow(<FormButtons />);
    const dataTestAttribute = mountFormButtons.find(
      '[data-test="form-buttons"]',
    );
    expect(mountFormButtons.length).toBe(1);
    expect(dataTestAttribute.length).toBe(1);
  });
});
