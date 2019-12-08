import {
  setButtonAvailability,
  getPlainName,
  getRequiredFields
} from "./helpers";
import { validate } from "./validate";
import { EVENT_TYPE } from "./constants";

const initForm = ({ formName, emitter }) => {
  emitter.on(
    EVENT_TYPE.FORM.CHANGED,
    ({ inputElement, isValid, errorMessage }) => {
      if (isValid) {
        emitter.emit(EVENT_TYPE.FORM.HIDE, { inputElement });
        emitter.emit(EVENT_TYPE.FORM.CONFIRM, { inputElement });
      } else {
        emitter.emit(EVENT_TYPE.FORM.HIDE, { inputElement });
        emitter.emit(EVENT_TYPE.FORM.WARN, { inputElement, errorMessage });
      }
    }
  );

  emitter.on(EVENT_TYPE.FORM.WARN, ({ inputElement, errorMessage }) => {
    const fieldElement = inputElement.parentElement;
    fieldElement.classList.add("field--invalid");
    fieldElement.querySelector(".field__message").textContent = errorMessage;
  });

  emitter.on(EVENT_TYPE.FORM.CONFIRM, ({ inputElement }) => {
    const fieldElement = inputElement.parentElement;
    fieldElement.classList.add("field--valid");
  });

  emitter.on(EVENT_TYPE.FORM.HIDE, ({ inputElement }) => {
    const fieldElement = inputElement.parentElement;
    fieldElement.classList.remove("field--valid");
    fieldElement.classList.remove("field--invalid");
    fieldElement.querySelector(".field__message").textContent = "";
  });

  const formElement = document.getElementById(`${formName}-form`);
  const elements = Array.from(formElement.elements);

  const requiredFields = getRequiredFields(elements);

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
