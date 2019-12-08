import { getPlainName, getRequiredFields } from "./helpers";
import { validate } from "./validate";
import { EVENT_TYPE } from "./constants";

const initForm = ({ formName, emitter }) => {
  const formElement = document.getElementById(`${formName}-form`);
  const submitElement = formElement.querySelector('button[type="submit"]');
  const elements = Array.from(formElement.elements);
  const requiredFields = getRequiredFields(elements);

  const EVENT_CHANGED = `${EVENT_TYPE.FORM.CHANGED}_${formName.toUpperCase()}`
  const EVENT_WARN = `${EVENT_TYPE.FORM.WARN}_${formName.toUpperCase()}`
  const EVENT_CONFIRM = `${EVENT_TYPE.FORM.CONFIRM}_${formName.toUpperCase()}`
  const EVENT_HIDE = `${EVENT_TYPE.FORM.HIDE}`
  const EVENT_CHECK_BUTTON = `${EVENT_TYPE.FORM.CHECK_BUTTON}_${formName.toUpperCase()}`

  const handleInputChanged = ({ inputElement, isValid, errorMessage }) => {
    if (isValid) {
      emitter.emit(EVENT_HIDE, { inputElement });
      emitter.emit(EVENT_CONFIRM, { inputElement });
    } else {
      emitter.emit(EVENT_HIDE, { inputElement });
      emitter.emit(EVENT_WARN, { inputElement, errorMessage });
    }

    emitter.emit(EVENT_CHECK_BUTTON);
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
      const isValid = validate({ inputElement, name })
        .isValid;
      if (!isValid) {
        isAllValid = false;
      }
      debugger
    });
    submitElement.disabled = !isAllValid;
  };

  emitter.on(EVENT_CHANGED, handleInputChanged);
  emitter.on(EVENT_WARN, handleInputWarn);
  emitter.on(EVENT_CONFIRM, handleInputConfirm);
  emitter.on(EVENT_HIDE, handleInputHide);
  emitter.on(EVENT_CHECK_BUTTON, handleCheckButton);

  const handleBlur = event => {
    const name = getPlainName({ fullName: event.target.name, formName });
    const inputElement = event.target;

    const { isValid, errorMessage } = validate({
      inputElement,
      name
    });

    emitter.emit(EVENT_CHANGED, {
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
