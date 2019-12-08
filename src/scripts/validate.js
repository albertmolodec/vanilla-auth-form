import { VALIDATION_RULE } from "./constants";

export const validate = ({ inputElement, name }) => {
  const { value } = inputElement;
  if (value === "") return false;
  if (VALIDATION_RULE[name]) {
    return VALIDATION_RULE[name].regex.test(value);
  }
  return true;
};

export const getErrorMessage = ({ id }) => {
  if (VALIDATION_RULE[id]) {
    return VALIDATION_RULE[name].errorMessage;
  }
};
