import React from 'react';
import { shallow } from 'enzyme';

import Map from '.';

describe('Map component', () => {
  it('should render the Map without crashing', () => {
    const mountMap = shallow(<Map />);
    const map = mountMap.find("[data-test='map']");
    expect(map.length).toBe(1);
  });
});
