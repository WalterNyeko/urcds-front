/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import { shallow } from 'enzyme';

import RoadStatusInfo from '.';

describe('RoadStatusInfo component', () => {
  it('should render RoadStatusInfo component', () => {
    const mountRoadStatusInfo = shallow(
      <RoadStatusInfo
        setFieldValue={jest.fn()}
        injuryDate={new Date()}
        injuryTime={new Date()}
        setFieldTouched={jest.fn()}
        touchedInjuryDate={false}
        injuryDateError={null}
      />,
    );
    const dateTimeTitle = mountRoadStatusInfo.find(
      '[data-test="date-time-title"]',
    );
    const modeOfTransport = mountRoadStatusInfo.find('ModeOfTransport');
    const roadUser = mountRoadStatusInfo.find('RoadUser');
    const counterpart = mountRoadStatusInfo.find('Counterpart');
    const beltOrHelmetUsed = mountRoadStatusInfo.find('BeltOrHelmetUsed');

    expect(mountRoadStatusInfo.length).toBe(1);
    expect(dateTimeTitle.length).toBe(1);
    expect(dateTimeTitle.text()).toBe('Date and Time');
    expect(modeOfTransport.length).toBe(1);
    expect(roadUser.length).toBe(1);
    expect(counterpart.length).toBe(1);
    expect(beltOrHelmetUsed.length).toBe(1);
  });

  it('should display error message when injuryDate is invalid', () => {
    const mountRoadStatusInfo = shallow(
      <RoadStatusInfo
        setFieldValue={jest.fn()}
        injuryDate={new Date()}
        injuryTime={new Date()}
        setFieldTouched={jest.fn()}
        touchedInjuryDate={true}
        injuryDateError="Injury date error"
      />,
    );

    const injuryDateError = mountRoadStatusInfo.find(
      '[data-test="injury-date-error"]',
    );
    expect(injuryDateError.length).toBe(1);
    expect(injuryDateError.text()).toBe('Injury date error');
  });
});
