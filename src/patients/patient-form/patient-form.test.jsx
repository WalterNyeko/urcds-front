import React from 'react';
import { mount } from 'enzyme';

import PatientForm from '.';

describe('PatientForm component', () => {
  it('should render PatientForm component', () => {
    const mountPatientForm = mount(
      <PatientForm
        errors={{}}
        touched={{}}
        setFieldValue={jest.fn()}
        setFieldTouched={jest.fn()}
      />,
    );

    const formTitle = mountPatientForm.find('[data-test="form-title"]');

    expect(formTitle.length).toBe(1);
    expect(formTitle.text()).toBe('Patient Form');
  });
});
