import React from 'react';
import { shallow } from 'enzyme';

import { WrappedMap } from './wrapped-map';

describe('WrappedMap component', () => {
  let wrapper;
  const setSelectedPark = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState');
  useStateSpy.mockImplementation(init => [init, setSelectedPark]);

  beforeEach(() => {
    window.google = {
      maps: {
        Size: function returnAMock() {
          return jest.fn();
        },
      },
    };
    wrapper = shallow(
      <WrappedMap
        googleMapURL="http://googlemapsurlhere"
        loadingElement={<div />}
        containerElement={<div />}
        mapElement={<div />}
      />,
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render the WrappedMap without crashing', () => {
    const wrappedMap = wrapper.find('GoogleMap');
    expect(wrappedMap.length).toBe(1);
  });

  describe('onClick', () => {
    it('should call setSelectedPark', () => {
      wrapper
        .find('Marker')
        .at(0)
        .props()
        .onClick();
      expect(setSelectedPark).toHaveBeenCalled();
    });
  });
});
