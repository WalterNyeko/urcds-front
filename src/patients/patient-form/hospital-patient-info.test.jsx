import React from 'react';
import { shallow } from 'enzyme';

import HospitalPatientInfo from './hospital-patient-info';

describe('HospitalPatientInfo component', () => {
  it('should render HospitalPatientInfo component', () => {
    const mountHospitalPatientInfo = shallow(
      <HospitalPatientInfo
        setFieldValue={jest.fn()}
        setFieldTouched={jest.fn()}
      />,
    );
    const dataTestAttribute = mountHospitalPatientInfo.find(
      '[data-test="hospital-patient-info"]',
    );
    const hospital = mountHospitalPatientInfo.find('[data-test="hospital"]');
    const outpatientNo = mountHospitalPatientInfo.find(
      '[data-test="outpatient-no"]',
    );
    const inpatientNo = mountHospitalPatientInfo.find(
      '[data-test="inpatient-no"]',
    );

    expect(mountHospitalPatientInfo.length).toBe(1);
    expect(dataTestAttribute.length).toBe(1);
    expect(hospital.length).toBe(1);
    expect(hospital.text()).toBe('Hospital');
    expect(outpatientNo.length).toBe(1);
    expect(outpatientNo.text()).toBe('Outpatient No.');
    expect(inpatientNo.length).toBe(1);
    expect(inpatientNo.text()).toBe('Inpatient No.');
  });
});
