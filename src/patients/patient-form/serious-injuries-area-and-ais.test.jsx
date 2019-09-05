import React from 'react';
import { shallow } from 'enzyme';

import BodyAreaWithSeriousInjuriesAndAis from './serious-injuries-area-and-ais';

describe('BodyAreaWithSeriousInjuriesAndAis component', () => {
  it('should render BodyAreaWithSeriousInjuriesAndAis component', () => {
    const mountBodyAreaWithSeriousInjuriesAndAis = shallow(
      <BodyAreaWithSeriousInjuriesAndAis />,
    );

    const title = mountBodyAreaWithSeriousInjuriesAndAis.find(
      '[data-test="title"]',
    );
    expect(title.length).toBe(1);
    expect(title.text()).toBe('Body Area with Serious Injuries and AIS');
  });
});
