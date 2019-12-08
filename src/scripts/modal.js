import { EVENT_TYPE, FORM_NAME } from "./constants";
import { restoreFormValues } from "./helpers";

function initModal({ emitter }) {
  const modal = document.getElementById("modal");
  const openButton = document.getElementById("send-feedback-button");
  const closeButton = document.getElementById("close-modal-button");

  emitter.on(EVENT_TYPE.OPEN_MODAL, () => {
    modal.classList.remove("hidden");
    document.body.classList.add("noscroll");
    emitter.emit(EVENT_TYPE.MODAL_IS_OPENED);
  });

  emitter.on(EVENT_TYPE.CLOSE_MODAL, () => {
    modal.classList.add("hidden");
    document.body.classList.remove("noscroll");
    emitter.emit(EVENT_TYPE.MODAL_IS_CLOSED);
  });

  emitter.on(EVENT_TYPE.MODAL_IS_CLOSED, () => {
    restoreFormValues(document.getElementById(`${FORM_NAME.FEEDBACK}-form`));
  });

  openButton.addEventListener("click", () => {
    emitter.emit(EVENT_TYPE.OPEN_MODAL);
  });

  closeButton.addEventListener("click", () => {
    emitter.emit(EVENT_TYPE.CLOSE_MODAL);
  });

  const handleOutsideClick = event => {
    if (event.target === modal) {
      emitter.emit(EVENT_TYPE.CLOSE_MODAL);
    }
  };

  window.addEventListener("click", handleOutsideClick);
  window.addEventListener("touchend", handleOutsideClick);

  window.addEventListener("keydown", event => {
    if (event.key === "Escape") emitter.emit(EVENT_TYPE.CLOSE_MODAL);
  });
}

export default initModal;
