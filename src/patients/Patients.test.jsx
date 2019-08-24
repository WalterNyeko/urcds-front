import React from 'react';
import { shallow } from 'enzyme';
import Patients from '.';

describe('Patients component', () => {
  it('should render without crashing', () => {
    const mountPatients = shallow(<Patients />);
    const crashPatientsTitle = mountPatients.find(
      "[data-test='crash-patients-title']",
    );
    expect(crashPatientsTitle.length).toBe(1);
    expect(crashPatientsTitle.text()).toBe('Crash Patients');
  });
});
