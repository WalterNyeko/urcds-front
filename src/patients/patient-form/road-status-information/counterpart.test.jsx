import React from 'react';
import { shallow } from 'enzyme';

import Counterpart from './counterpart';

describe('Counterpart component', () => {
  it('should render Counterpart component', () => {
    const mountCounterpart = shallow(<Counterpart />);
    const title = mountCounterpart.find('[data-test="counterpart-title"]');

    expect(mountCounterpart.length).toBe(1);
    expect(title.length).toBe(1);
    expect(title.text()).toBe('Counterpart');
  });
});
