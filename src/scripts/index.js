import { FORM_NAME } from "./constants";

import initModal from "./modal";
import initForm from "./form";

import eventEmitter from "./eventEmitter";
const emitter = eventEmitter();

initModal({ emitter });

Object.values(FORM_NAME).forEach(formName => {
  initForm({
    formName,
    emitter
  });
});
