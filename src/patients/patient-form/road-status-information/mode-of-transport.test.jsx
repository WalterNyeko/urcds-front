import React from 'react';
import { shallow } from 'enzyme';

import ModeOfTransport from './mode-of-transport';

describe('ModeOfTransport component', () => {
  it('should render ModeOfTransport component', () => {
    const mountModeOfTransport = shallow(<ModeOfTransport />);
    const title = mountModeOfTransport.find('[data-test="road-user-title"]');

    expect(mountModeOfTransport.length).toBe(1);
    expect(title.length).toBe(1);
    expect(title.text()).toBe('Mode of Transport');
  });
});
