import React from 'react';
import { shallow } from 'enzyme';

import RoadUser from './road-user';

describe('RoadUser component', () => {
  it('should render RoadUser component', () => {
    const mountRoadUser = shallow(<RoadUser />);
    const title = mountRoadUser.find('[data-test="road-user-title"]');

    expect(mountRoadUser.length).toBe(1);
    expect(title.length).toBe(1);
    expect(title.text()).toBe('Road User');
  });
});
