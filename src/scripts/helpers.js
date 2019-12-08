export const setButtonAvailability = ({ validate, submitElement }) => {
  submitElement.disabled = !validate();
};

export const restoreFormValues = formElement => {
  formElement.reset();
};

export const getRequiredFields = elements => {
  const requiredTextareas = elements.filter(isTextarea).filter(isRequired);
  const requiredInputs = elements
    .filter(isInput)
    .filter(isInputText)
    .filter(isRequired);
  return [...requiredInputs, ...requiredTextareas];
};

export const getPlainName = ({ fullName, formName }) =>
  fullName.replace(`${formName}-`, "");

export const isInput = HTMLElement => HTMLElement.tagName === "INPUT";
export const isTextarea = HTMLElement => HTMLElement.tagName === "TEXTAREA";
export const isInputText = HTMLElement => HTMLElement.type === "text";
export const isRequired = HTMLElement => HTMLElement.required;
