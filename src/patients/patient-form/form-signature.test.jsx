/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import { shallow } from 'enzyme';

import FormSignature from './form-signature';

describe('FormSignature component', () => {
  it('should render FormSignature  component ', () => {
    const mountCustomSelect = shallow(
      <FormSignature
        filledByError={null}
        touchedFilledBy={false}
        checkedByError={null}
        touchedCheckedBy={false}
        filledOnError={null}
        touchedFilledOn={false}
        checkedOnError={null}
        touchedCheckedOn={false}
        setFieldValue={jest.fn()}
        formFilledOn={new Date()}
        formCheckedOn={new Date()}
        setFieldTouched={jest.fn()}
      />,
    );

    const dataTestAttribute = mountCustomSelect.find(
      '[data-test="form-signature"]',
    );
    const filledBy = mountCustomSelect.find('[data-test="filled-by"]');
    const filledOn = mountCustomSelect.find('[data-test="filled-on"]');
    const checkedBy = mountCustomSelect.find('[data-test="checked-by"]');
    const checkedOn = mountCustomSelect.find('[data-test="checked-on"]');

    expect(mountCustomSelect.length).toBe(1);
    expect(dataTestAttribute.length).toBe(1);
    expect(filledBy.length).toBe(1);
    expect(filledBy.text()).toBe('Name');
    expect(filledOn.length).toBe(1);
    expect(filledOn.text()).toBe('Date');
    expect(checkedBy.length).toBe(1);
    expect(checkedBy.text()).toBe('Name');
    expect(checkedOn.length).toBe(1);
    expect(checkedOn.text()).toBe('Date');
  });

  it('should display error messages when the fields are invalid', () => {
    const mountCustomSelect = shallow(
      <FormSignature
        filledByError="filled by error"
        touchedFilledBy={true}
        checkedByError="checked by error"
        touchedCheckedBy={true}
        filledOnError="filled on error"
        touchedFilledOn={true}
        checkedOnError="checked on error"
        touchedCheckedOn={true}
        setFieldValue={jest.fn()}
        formFilledOn={new Date()}
        formCheckedOn={new Date()}
        setFieldTouched={jest.fn()}
      />,
    );

    const filledByError = mountCustomSelect.find(
      '[data-test="filled-by-error"]',
    );
    const filledOnError = mountCustomSelect.find(
      '[data-test="filled-on-error"]',
    );
    const checkedOnError = mountCustomSelect.find(
      '[data-test="checked-on-error"]',
    );
    const checkedByError = mountCustomSelect.find(
      '[data-test="checked-by-error"]',
    );

    expect(filledByError.length).toBe(1);
    expect(filledByError.text()).toBe('filled by error');
    expect(filledOnError.length).toBe(1);
    expect(filledOnError.text()).toBe('filled on error');
    expect(checkedOnError.length).toBe(1);
    expect(checkedOnError.text()).toBe('checked on error');
    expect(checkedByError.length).toBe(1);
    expect(checkedByError.text()).toBe('checked by error');
  });
});
