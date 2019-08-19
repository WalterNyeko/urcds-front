export const addItemToLocalStorage = (key, value) => {
  localStorage.setItem(key, value);
};
export const getItemFromLocalStorage = key => {
  return localStorage.getItem(key);
};
