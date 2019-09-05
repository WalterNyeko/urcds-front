export const onChangeHandler = (onChange, name) => value => onChange(name, value);
export const onBlurHandler = (onBlur, name) => () => onBlur(name, true);
