import { VALIDATION_RULE } from "./constants";

export const validate = ({ inputElement, name }) => {
  const { value } = inputElement;
  let result = {
    isValid: true
  };

  if (VALIDATION_RULE[name]) {
    const isValid = VALIDATION_RULE[name].regex.test(value);
    result.isValid = isValid;
    if (!isValid) {
      result.errorMessage = VALIDATION_RULE[name].errorMessage;
    }
  }

  if (value === "") {
    result = {
      isValid: false,
      errorMessage: "Please fill the field"
    };
  }

  return result;
};
