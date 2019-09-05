import React from 'react';
import { shallow } from 'enzyme';

import BeltOrHelmetUsed from './belt-or-helmet-used';

describe('BeltOrHelmetUsed component', () => {
  it('should render BeltOrHelmetUsed component', () => {
    const mountBeltOrHelmetUsed = shallow(<BeltOrHelmetUsed />);
    const title = mountBeltOrHelmetUsed.find(
      '[data-test="belt-or-helmet-used-title"]',
    );

    expect(title.length).toBe(1);
    expect(title.text()).toBe('Belt or Helmet Used');
  });
});
