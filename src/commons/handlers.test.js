import { formikValueSetter, formikTouchedSetter } from './handlers';

describe('Handlers module', () => {
  describe('formikValueSetter method', () => {
    it('it should call formikSetFieldValue method with a true value', () => {
      const formikSetFieldValue = jest.fn();
      const handleChange = formikValueSetter(formikSetFieldValue, 'fieldName');
      handleChange('value');

      expect(formikSetFieldValue).toHaveBeenCalled();
      expect(formikSetFieldValue).toHaveBeenCalledWith('fieldName', 'value');
    });
  });

  describe('formikTouchedSetter method', () => {
    it('it should call formikSetFieldTouched method', () => {
      const formikSetFieldTouched = jest.fn();
      const handleBlur = formikTouchedSetter(
        formikSetFieldTouched,
        'fieldName',
      );
      handleBlur('fieldName');

      expect(formikSetFieldTouched).toHaveBeenCalled();
      expect(formikSetFieldTouched).toHaveBeenCalledWith('fieldName', true);
    });
  });
});
