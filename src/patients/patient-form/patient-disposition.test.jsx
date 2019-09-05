import React from 'react';
import { shallow } from 'enzyme';
import PatientDisposition from './patient-disposition';

describe('PatientDisposition component', () => {
  it('should render PatientDisposition component', () => {
    const mountPatientDisposition = shallow(<PatientDisposition />);

    const patientDisposition = mountPatientDisposition.find(
      '[data-test="patient-disposition"]',
    );
    const patientStatus = mountPatientDisposition.find(
      '[data-test="patient-status"]',
    );

    expect(patientDisposition.length).toBe(1);
    expect(patientDisposition.text()).toBe('Patient Disposition');
    expect(patientStatus.length).toBe(1);
    expect(patientStatus.text()).toBe('Status After 30 Days');
  });
});
