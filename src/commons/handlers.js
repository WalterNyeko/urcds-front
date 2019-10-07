export const formikValueSetter = (
  formikSetFieldValue, name,
) => value => formikSetFieldValue(name, value);

export const formikTouchedSetter = (
  formikSetFieldTouched, name,
) => () => formikSetFieldTouched(name, true);
