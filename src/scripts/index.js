import { FORM_NAME } from "./constants";

import initModal from "./modal";
import initValidation from "./validation";

import eventEmitter from "./eventEmitter";
const emitter = eventEmitter();

initModal({ emitter });

Object.values(FORM_NAME).forEach(formName => {
  initValidation({
    formName,
    emitter
  });
});
