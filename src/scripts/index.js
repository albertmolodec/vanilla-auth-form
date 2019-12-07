import { FORMS, EVENT_TYPES } from "./constants";
import { restoreFormValues } from "./helpers";

import initModal from "./modal";
import initValidation from "./validation";

import eventEmitter from "./eventEmitter";
const emitter = eventEmitter();

initModal(emitter);

Object.values(FORMS).forEach(id => {
  initValidation(document.getElementById(id));
});

emitter.on(EVENT_TYPES.MODAL_IS_CLOSED, () => {
  restoreFormValues(document.getElementById(FORMS.FEEDBACK));
});
