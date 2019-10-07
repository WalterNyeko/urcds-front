import React from 'react';
import { shallow } from 'enzyme';

import Mapping from '.';

describe('Mappings component', () => {
  describe('Map', () => {
    it('should render the map without crashing', () => {
      const mountMappings = shallow(<Mapping />);
      const map = mountMappings.find("[data-test='map-component']");
      expect(map.length).toBe(1);
    });
  });
});
