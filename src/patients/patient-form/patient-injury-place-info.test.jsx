import React from 'react';
import { shallow } from 'enzyme';

import PatientInjuryPlaceInfo from './patient-injury-place-info';

describe('PatientInjuryPlaceInfo component', () => {
  let mountPatientInjuryPlaceInfo;
  beforeEach(() => {
    mountPatientInjuryPlaceInfo = shallow(
      <PatientInjuryPlaceInfo
        setFieldValue={jest.fn()}
        setFieldTouched={jest.fn()}
      />,
    );
  });

  it('should render PatientInjuryPlaceInfo component', () => {
    const dataTestAttribute = mountPatientInjuryPlaceInfo.find(
      '[data-test="patient-injury-place-info"]',
    );

    expect(mountPatientInjuryPlaceInfo.length).toBe(1);
    expect(dataTestAttribute.length).toBe(1);
  });

  describe('Patient Information', () => {
    it('should contain patient information', () => {
      const patientInfo = mountPatientInjuryPlaceInfo.find(
        '[data-test="patient-info"]',
      );
      const gender = mountPatientInjuryPlaceInfo.find('[data-test="gender"]');
      const age = mountPatientInjuryPlaceInfo.find('[data-test="age"]');
      expect(patientInfo.length).toBe(1);
      expect(gender.length).toBe(1);
      expect(age.length).toBe(1);
      expect(age.text()).toBe('Age');
    });

    it('should contain injury place information', () => {
      const injuryPlace = mountPatientInjuryPlaceInfo.find(
        '[data-test="injury-place"]',
      );
      const district = mountPatientInjuryPlaceInfo.find(
        '[data-test="district"]',
      );
      const village = mountPatientInjuryPlaceInfo.find('[data-test="village"]');
      expect(injuryPlace.length).toBe(1);
      expect(district.length).toBe(1);
      expect(district.text()).toBe('District');
      expect(village.length).toBe(1);
      expect(village.text()).toBe('Village');
    });
  });
});
