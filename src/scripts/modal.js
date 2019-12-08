import { EVENT_TYPE, FORM_NAME } from "./constants";
import { restoreFormValues, getRequiredFields } from "./helpers";

const initModal = ({ emitter }) => {
  const modal = document.getElementById("modal");
  const openButton = document.getElementById("send-feedback-button");
  const closeButton = document.getElementById("close-modal-button");

  const handleModalClose = () => {
    modal.classList.add("hidden");
    document.body.classList.remove("noscroll");
    emitter.emit(EVENT_TYPE.MODAL.IS_CLOSED);
  }
  ;
  const handleModalOpen = () => {
    modal.classList.remove("hidden");
    document.body.classList.add("noscroll");
    emitter.emit(EVENT_TYPE.MODAL.IS_OPENED);
  }

  const handleModalClosed = () => {
    const formElement = document.getElementById(`${FORM_NAME.FEEDBACK}-form`)
    restoreFormValues(formElement);

    const elements = Array.from(formElement.elements);
    const requiredFields = getRequiredFields(elements);
    requiredFields.forEach(inputElement => {
      emitter.emit(EVENT_TYPE.FORM.HIDE, { inputElement });
    })
  }

  emitter.on(EVENT_TYPE.MODAL.OPEN, handleModalOpen);
  emitter.on(EVENT_TYPE.MODAL.CLOSE, handleModalClose);
  emitter.on(EVENT_TYPE.MODAL.IS_CLOSED, handleModalClosed);

  openButton.addEventListener("click", () => {
    emitter.emit(EVENT_TYPE.MODAL.OPEN);
  });

  closeButton.addEventListener("click", () => {
    emitter.emit(EVENT_TYPE.MODAL.CLOSE);
  });

  const handleOutsideClick = event => {
    if (event.target === modal) {
      emitter.emit(EVENT_TYPE.MODAL.CLOSE);
    }
  };

  window.addEventListener("click", handleOutsideClick);
  window.addEventListener("touchend", handleOutsideClick);

  window.addEventListener("keydown", event => {
    if (event.key === "Escape") emitter.emit(EVENT_TYPE.MODAL.CLOSE);
  });
}

export default initModal;
