import { EVENT_TYPES } from "./constants";

function initModal(emitter) {
  const modal = document.getElementById("modal");
  const openButton = document.getElementById("send-feedback-button");
  const closeButton = document.getElementById("close-modal-button");

  emitter.on(EVENT_TYPES.OPEN_MODAL, () => {
    modal.style.display = "flex";
  });

  emitter.on(EVENT_TYPES.CLOSE_MODAL, () => {
    modal.style.display = "none";
    emitter.emit(EVENT_TYPES.MODAL_IS_CLOSED)
  });

  openButton.addEventListener("click", () => {
    emitter.emit(EVENT_TYPES.OPEN_MODAL);
  });

  closeButton.addEventListener("click", () => {
    emitter.emit(EVENT_TYPES.CLOSE_MODAL);
  });

  window.addEventListener("click", event => {
    if (event.target === modal) {
      emitter.emit(EVENT_TYPES.CLOSE_MODAL);
    }
  });
}

export default initModal;
