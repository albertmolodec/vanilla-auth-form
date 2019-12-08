import {
  setButtonAvailability,
  isInput,
  isTextarea,
  isInputText,
  isRequired
} from "./helpers";
import { validate } from "./validate";

function initValidation({ formName, emitter }) {
  const formElement = document.getElementById(`${formName}-form`)
  const elements = Array.from(formElement.elements);
  const requiredTextareas = elements.filter(isTextarea).filter(isRequired);
  const requiredInputs = elements
    .filter(isInput)
    .filter(isInputText)
    .filter(isRequired);

  [...requiredInputs, ...requiredTextareas].forEach(element => {
    element.addEventListener("input", () => {
      // validateInputs({
      //   inputElement: element,
      //   getShortName({
      //     nameWithFormName: FORM,
      //     formName: ,
      //   })
      // })
    });
  });
}

export default initValidation;
