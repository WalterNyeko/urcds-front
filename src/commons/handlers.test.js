import { onBlurHandler, onChangeHandler } from './handlers';

describe('Handlers module', () => {
  describe('onBlurHandler method', () => {
    it('it should call onBlur method with a true value', () => {
      const onBlur = jest.fn();
      const handleBlur = onBlurHandler(onBlur, 'fieldName');
      handleBlur();

      expect(onBlur).toHaveBeenCalled();
      expect(onBlur).toHaveBeenCalledWith('fieldName', true);
    });
  });

  describe('onChangeHandler method', () => {
    it('it should call onChange method', () => {
      const onChange = jest.fn();
      const handleChange = onChangeHandler(onChange, 'fieldName');
      handleChange('value');

      expect(onChange).toHaveBeenCalled();
      expect(onChange).toHaveBeenCalledWith('fieldName', 'value');
    });
  });
});
