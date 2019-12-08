import { getPlainName, getRequiredFields } from "./helpers";
import { validate } from "./validate";
import { EVENT_TYPE } from "./constants";

const initForm = ({ formName, emitter }) => {
  const formElement = document.getElementById(`${formName}-form`);
  const submitElement = formElement.querySelector('button[type="submit"]');
  const elements = Array.from(formElement.elements);
  const requiredFields = getRequiredFields(elements);

  const handleInputChanged = ({ inputElement, isValid, errorMessage }) => {
    if (isValid) {
      emitter.emit(EVENT_TYPE.FORM.HIDE, { inputElement });
      emitter.emit(EVENT_TYPE.FORM.CONFIRM, { inputElement });
    } else {
      emitter.emit(EVENT_TYPE.FORM.HIDE, { inputElement });
      emitter.emit(EVENT_TYPE.FORM.WARN, { inputElement, errorMessage });
    }

    emitter.emit(EVENT_TYPE.FORM.CHECK_BUTTON);
  };

  const handleInputWarn = ({ inputElement, errorMessage }) => {
    const fieldElement = inputElement.parentElement;
    fieldElement.classList.add("field--invalid");
    fieldElement.querySelector(".field__message").textContent = errorMessage;
  };

  const handleInputConfirm = ({ inputElement }) => {
    const fieldElement = inputElement.parentElement;
    fieldElement.classList.add("field--valid");
  };

  const handleInputHide = ({ inputElement }) => {
    const fieldElement = inputElement.parentElement;
    fieldElement.classList.remove("field--valid");
    fieldElement.classList.remove("field--invalid");
    fieldElement.querySelector(".field__message").textContent = "";
  };

  const handleCheckButton = () => {
    let isAllValid = true;
    requiredFields.forEach(inputElement => {
      const name = getPlainName({ fullName: inputElement.name, formName });
      const isValid = validate({ inputElement, name }).isValid;
      if (!isValid) {
        isAllValid = false;
      }
    });
    submitElement.disabled = !isAllValid;
  };

  emitter.on(EVENT_TYPE.FORM.CHANGED, handleInputChanged);
  emitter.on(EVENT_TYPE.FORM.WARN, handleInputWarn);
  emitter.on(EVENT_TYPE.FORM.CONFIRM, handleInputConfirm);
  emitter.on(EVENT_TYPE.FORM.HIDE, handleInputHide);
  emitter.on(EVENT_TYPE.FORM.CHECK_BUTTON, handleCheckButton);

  const handleBlur = event => {
    const name = getPlainName({ fullName: event.target.name, formName });
    const inputElement = event.target;

    const { isValid, errorMessage } = validate({
      inputElement,
      name
    });

    emitter.emit(EVENT_TYPE.FORM.CHANGED, {
      inputElement,
      isValid,
      errorMessage
    });
  };

  requiredFields.forEach(field => {
    field.addEventListener("blur", handleBlur);
  });
};

export default initForm;
