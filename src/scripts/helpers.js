export function setButtonAvailability(validate, submitElement) {
  submitElement.disabled = !validate();
}

export function restoreFormValues(formElement) {
  formElement.reset();
}