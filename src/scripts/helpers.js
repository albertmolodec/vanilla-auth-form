export function setButtonAvailability({ validate, submitElement }) {
  submitElement.disabled = !validate();
}

export function restoreFormValues(formElement) {
  formElement.reset();
}

export const isInput = HTMLElement => HTMLElement.tagName === "INPUT";
export const isTextarea = HTMLElement => HTMLElement.tagName === "TEXTAREA";
export const isInputText = HTMLElement => HTMLElement.type === "text";
export const isRequired = HTMLElement => HTMLElement.required;
